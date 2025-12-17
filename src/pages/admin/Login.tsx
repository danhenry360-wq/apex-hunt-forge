import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            navigate("/admin/dashboard");
        } catch (error: any) {
            toast({
                title: "Access Denied",
                description: error.message,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
            <div className="w-full max-w-md space-y-8 bg-card border border-primary/20 p-8 rounded-lg">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-primary mb-2">
            // SYSTEM_ACCESS
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Enter credentials to access God Mode.
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <Input
                            type="email"
                            placeholder="admin@apex.hunt"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-background border-primary/20 text-foreground"
                            required
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-background border-primary/20 text-foreground"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        disabled={loading}
                    >
                        {loading ? "AUTHENTICATING..." : "ENTER_SYSTEM"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
