import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useAudio } from "@/hooks/useAudio";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  project: z.string().trim().min(1, "Project type required").max(50, "Too long"),
  message: z.string().trim().min(10, "Message too short").max(2000, "Message too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

const formFields = [
  { name: "name", label: "IDENTIFY_YOURSELF", placeholder: "Your name", type: "text" },
  { name: "email", label: "COMM_CHANNEL", placeholder: "your@email.com", type: "email" },
  { name: "project", label: "HUNT_TYPE", placeholder: "landing-page | full-app | other", type: "text" },
  { name: "message", label: "MISSION_BRIEF", placeholder: "Describe your prey...", type: "textarea" },
] as const;

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const { playKeystroke } = useAudio();

  const handleChange = (field: keyof ContactForm, value: string) => {
    playKeystroke();
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactForm] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    toast({
      title: "TRANSMISSION RECEIVED",
      description: "We'll initiate contact within 24 hours.",
    });
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="terminal-window p-8 text-center"
      >
        <div className="font-mono text-primary text-lg mb-4">
          ✓ TRANSMISSION_COMPLETE
        </div>
        <pre className="text-sm text-muted-foreground">
{`{
  "status": "received",
  "response_eta": "< 24h",
  "prey": "your_competition"
}`}
        </pre>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", project: "", message: "" });
          }}
          className="mt-6 text-xs text-primary hover:underline font-mono"
        >
          $ send_another_transmission
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="terminal-window"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-background-matte">
        <div className="w-3 h-3 rounded-full bg-destructive/80" />
        <div className="w-3 h-3 rounded-full bg-accent/80" />
        <div className="w-3 h-3 rounded-full bg-primary/80" />
        <span className="ml-4 text-xs text-muted-foreground font-mono">init_contact.sh</span>
      </div>

      {/* Form Content */}
      <div className="p-6 md:p-8 space-y-6">
        <div className="font-mono text-xs text-muted-foreground mb-6">
          <span className="text-primary">$</span> ./initiate_hunt --interactive
        </div>

        {formFields.map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <label className="block font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> {field.label}:
            </label>
            {field.type === "textarea" ? (
              <textarea
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                rows={4}
                className="w-full bg-terminal border border-border-subtle focus:border-primary/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 outline-none resize-none transition-colors"
              />
            ) : (
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-primary text-sm">
                  {">"}_
                </span>
                <input
                  type={field.type}
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full bg-terminal border border-border-subtle focus:border-primary/50 pl-12 pr-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
                />
              </div>
            )}
            {errors[field.name] && (
              <p className="font-mono text-xs text-destructive">
                ERROR: {errors[field.name]}
              </p>
            )}
          </motion.div>
        ))}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-primary text-primary-foreground font-mono font-semibold glow-pulse disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              TRANSMITTING...
            </span>
          ) : (
            "$ EXECUTE_TRANSMISSION →"
          )}
        </motion.button>

        <p className="text-xs text-muted-foreground font-mono text-center">
          // Response time: &lt; 24h | Encryption: ACTIVE
        </p>
      </div>
    </motion.form>
  );
};
