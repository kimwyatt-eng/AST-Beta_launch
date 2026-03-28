import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface ContactFormProps {
  inquiryType: "partner" | "investor";
}

const ContactForm = ({ inquiryType }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast({ title: "Please fill out all fields", variant: "destructive" });
      return;
    }

    if (trimmedName.length > 100 || trimmedEmail.length > 255 || trimmedMessage.length > 2000) {
      toast({ title: "One or more fields exceed the maximum length", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const id = crypto.randomUUID();

      const { error: insertError } = await supabase
        .from("contact_submissions")
        .insert({ id, name: trimmedName, email: trimmedEmail, message: trimmedMessage, inquiry_type: inquiryType });

      if (insertError) throw insertError;

      const templateName = inquiryType === "partner"
        ? "partner-inquiry-confirmation"
        : "investor-inquiry-confirmation";

      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName,
          recipientEmail: trimmedEmail,
          idempotencyKey: `${templateName}-${id}`,
          templateData: { name: trimmedName },
        },
      });

      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "inquiry-owner-notification",
          recipientEmail: "Kim.wyatt@artsupplytracker.com",
          idempotencyKey: `inquiry-owner-notification-${id}`,
          templateData: {
            inquiryType,
            senderName: trimmedName,
            senderEmail: trimmedEmail,
            senderMessage: trimmedMessage,
          },
        },
      });

      setIsSubmitted(true);
      toast({ title: "Message sent!", description: "We'll be in touch soon." });
    } catch (err) {
      console.error("Contact form error:", err);
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Received! ✉️</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. We've sent a confirmation to your email and will follow up soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)] space-y-4">
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {inquiryType === "partner" ? "Get in Touch" : "Contact Us"}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {inquiryType === "partner"
          ? "Interested in partnering? Send us a message and we'll follow up."
          : "Interested in investing? Tell us about yourself and we'll be in touch."}
      </p>
      <Input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={100}
        required
        className="bg-background/50 border-border"
      />
      <Input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={255}
        required
        className="bg-background/50 border-border"
      />
      <Textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={2000}
        required
        rows={4}
        className="bg-background/50 border-border"
      />
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
