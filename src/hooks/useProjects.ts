import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PROJECTS, Project } from "@/data/projects";

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>(PROJECTS);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            // Fetch from Supabase
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });

            if (!error && data) {
                // Map database structure to Project interface if needed
                // (Our schema matches closely, but we need to ensure types match)
                const dbProjects: Project[] = data.map((p: any) => ({
                    id: p.id,
                    title: p.title,
                    category: p.category,
                    size: p.size,
                    huntTime: p.hunt_time || "LIVE",
                    stack: p.stack,
                    client: p.client,
                    killShot: p.kill_shot,
                    color: p.color,
                    description: p.description,
                    videoUrl: p.video_url,
                    images: p.images,
                    metrics: p.metrics,
                    challenge: p.challenge,
                    approach: p.approach,
                    testimonial: p.testimonial_quote ? {
                        quote: p.testimonial_quote,
                        author: p.testimonial_author || "Anonymous"
                    } : undefined
                }));

                // Merge: DB projects first, then Static
                setProjects([...dbProjects, ...PROJECTS]);
            }
            setLoading(false);
        };

        fetchProjects();
    }, []);

    return { projects, loading };
};
