import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { PROJECTS } from "@/data/projects";

const Dashboard = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    // Form State
    const [title, setTitle] = useState("");
    const [client, setClient] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [files, setFiles] = useState<FileList | null>(null);

    // Data State
    const [dbProjects, setDbProjects] = useState<any[]>([]);

    const fetchProjects = async () => {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setDbProjects(data);
        }
    };

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate("/admin");
            }
            setLoading(false);
        };
        checkSession();
        fetchProjects();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/admin");
    };

    const handleDeploy = async (e: React.FormEvent) => {
        e.preventDefault();
        setUploading(true);

        try {
            const uploadedImageUrls: string[] = [];

            // 1. Upload Images
            if (files && files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const fileExt = file.name.split('.').pop();
                    const fileName = `${Math.random()}.${fileExt}`;
                    const filePath = `${fileName}`;

                    const { error: uploadError } = await supabase.storage
                        .from('safelab-evidence')
                        .upload(filePath, file);

                    if (uploadError) throw uploadError;

                    const { data: { publicUrl } } = supabase.storage
                        .from('safelab-evidence')
                        .getPublicUrl(filePath);

                    uploadedImageUrls.push(publicUrl);
                }
            }

            // 2. Insert Project Record
            const { error: insertError } = await supabase
                .from('projects')
                .insert({
                    title,
                    client,
                    video_url: videoUrl,
                    images: uploadedImageUrls,
                    // Defaults
                    category: 'OTHER',
                    stack: 'Manual Entry',
                    kill_shot: '$ deployed via god-mode',
                    color: 'primary'
                });

            if (insertError) throw insertError;

            toast({
                title: "TARGET DEPLOYED",
                description: "The project has been added to the database.",
            });

            // Reset Form & Refetch
            setTitle("");
            setClient("");
            setVideoUrl("");
            setFiles(null);
            fetchProjects();

        } catch (error: any) {
            console.error(error);
            toast({
                title: "DEPLOYMENT FAILED",
                description: error.message || "Unknown error occurred",
                variant: "destructive",
            });
        } finally {
            setUploading(false);
        }
    };

    if (loading) return null;

    return (
        <div className="min-h-screen bg-background font-mono p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-12 border-b border-primary/20 pb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-primary">// GOD_MODE</h1>
                        <p className="text-muted-foreground">Portfolio Control Center</p>
                    </div>
                    <Button variant="outline" onClick={handleLogout} className="border-primary/50 hover:bg-primary/10">
                        LOGOUT
                    </Button>
                </header>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* UPLOAD INTERFACE */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-card border border-primary/20 p-6 rounded-lg">
                            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                NEW_TARGET
                            </h2>

                            <form onSubmit={handleDeploy} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs text-muted-foreground">PROJECT TITLE</label>
                                    <Input
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="e.g. AI TRADING BOT"
                                        className="bg-background/50"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-muted-foreground">CLIENT / ALIAS</label>
                                    <Input
                                        value={client}
                                        onChange={(e) => setClient(e.target.value)}
                                        placeholder="e.g. HEDGE FUND X"
                                        className="bg-background/50"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-muted-foreground">VIDEO URL (YOUTUBE/LOOM)</label>
                                    <Input
                                        value={videoUrl}
                                        onChange={(e) => setVideoUrl(e.target.value)}
                                        placeholder="https://..."
                                        className="bg-background/50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-muted-foreground">EVIDENCE (IMAGES)</label>
                                    <Input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={(e) => setFiles(e.target.files)}
                                        className="bg-background/50 cursor-pointer"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                    disabled={uploading}
                                >
                                    {uploading ? "DEPLOYING..." : "DEPLOY TARGET"}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* ACTIVE TARGETS */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-bold text-foreground mb-6">ACTIVE_TARGETS [{PROJECTS.length}]</h2>
                        <div className="space-y-4">
                            {/* DB PROJECTS */}
                            {dbProjects.map((project) => (
                                <div key={project.id} className="flex items-center justify-between bg-card border border-border-subtle p-4 rounded hover:border-primary/50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <div>
                                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                            <p className="text-xs text-muted-foreground font-mono">{project.id}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">LIVE</span>
                                    </div>
                                </div>
                            ))}

                            {/* STATIC PROJECTS (Fallback) */}
                            {dbProjects.length === 0 && PROJECTS.map((project) => (
                                <div key={project.id} className="flex items-center justify-between bg-card border border-border-subtle p-4 rounded hover:border-primary/50 transition-colors group opacity-60">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-2 rounded-full bg-gray-500`} />
                                        <div>
                                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                            <p className="text-xs text-muted-foreground font-mono">STATIC_FILE</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
