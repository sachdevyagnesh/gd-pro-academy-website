import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SESSION_KEY = "gdpro_growth_journey_modal_shown";

export function ExitIntentModal() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    lookingFor: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const trigger = () => {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    };

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    let timeoutId: number | undefined;
    let scrollHandler: (() => void) | undefined;
    let leaveHandler: ((e: MouseEvent) => void) | undefined;

    if (isMobile) {
      timeoutId = window.setTimeout(trigger, 30_000);
      scrollHandler = () => {
        const scrolled = window.scrollY + window.innerHeight;
        const total = document.documentElement.scrollHeight;
        if (total > 0 && scrolled / total >= 0.5) trigger();
      };
      window.addEventListener("scroll", scrollHandler, { passive: true });
    } else {
      leaveHandler = (e: MouseEvent) => {
        if (e.clientY <= 0) trigger();
      };
      document.addEventListener("mouseleave", leaveHandler);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
      if (leaveHandler) document.removeEventListener("mouseleave", leaveHandler);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const isEmail = form.contact.includes("@");
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-lead`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: isEmail ? form.contact : "",
            phone: isEmail ? "" : form.contact,
            trainingType: form.lookingFor,
            message: `Growth Journey popup — Looking for training for: ${form.lookingFor}`,
          }),
        }
      );
      let result: { success?: boolean; error?: string } = {};
      try { result = await res.json(); } catch { /* ignore */ }
      if (!res.ok || !result.success) throw new Error(result.error || `Request failed (${res.status})`);
      toast({ title: "Thanks!", description: "We'll reach out shortly to plan your growth journey." });
      setOpen(false);
    } catch (err) {
      toast({
        title: "Couldn't submit",
        description: err instanceof Error ? err.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Start Your Sales Growth Journey</DialogTitle>
          <DialogDescription>
            Share a few details and we'll help you find the right program.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <Input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email or Phone *</label>
            <Input
              required
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              placeholder="you@email.com or +91..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">I'm looking for training for *</label>
            <select
              required
              value={form.lookingFor}
              onChange={(e) => setForm({ ...form, lookingFor: e.target.value })}
              className="w-full h-11 px-4 rounded-lg border border-input bg-card text-foreground"
            >
              <option value="">Select an option</option>
              <option value="myself">Myself</option>
              <option value="my-team">My Team</option>
              <option value="my-institution">My Institution</option>
            </select>
          </div>
          <Button type="submit" variant="navy" className="w-full" disabled={submitting}>
            {submitting ? "Sending..." : "Get Started"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
