
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { getProfile, saveProfile } from "@/utils/demo-data";

const GENDER_OPTIONS = ["Male", "Female", "Other"];
const GOALS = [
  "Lose Weight",
  "Build Muscle",
  "Improve Endurance",
  "Rehab / Recovery",
];

export default function OnboardingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<any>({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
    goal: "",
    restrictions: "",
  });
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [open, step]);

  const steps = [
    {
      title: "👋 Welcome! Let's setup your health profile",
      content: (
        <Input
          ref={firstInputRef}
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((f: any) => ({ ...f, name: e.target.value }))}
        />
      ),
      required: !!form.name,
    },
    {
      title: "🎯 What's your main fitness goal?",
      content: (
        <div className="grid gap-3">
          {GOALS.map((g) => (
            <button
              key={g}
              className={cn(
                "px-4 py-2 rounded-lg border text-left",
                form.goal === g
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-accent"
              )}
              onClick={() => setForm((f: any) => ({ ...f, goal: g }))}
              type="button"
            >
              {g}
            </button>
          ))}
        </div>
      ),
      required: !!form.goal,
    },
    {
      title: "⏳ Personal details",
      content: (
        <div className="grid gap-2">
          <Input
            placeholder="Age"
            type="number"
            value={form.age}
            onChange={(e) => setForm((f: any) => ({ ...f, age: e.target.value }))}
          />
          <Input
            placeholder="Weight (kg)"
            type="number"
            value={form.weight}
            onChange={(e) => setForm((f: any) => ({ ...f, weight: e.target.value }))}
          />
          <Input
            placeholder="Height (cm)"
            type="number"
            value={form.height}
            onChange={(e) => setForm((f: any) => ({ ...f, height: e.target.value }))}
          />
          <div className="flex gap-2 mt-2">
            {GENDER_OPTIONS.map((gender) => (
              <button
                key={gender}
                className={cn(
                  "px-4 py-1.5 text-xs rounded-lg border",
                  form.gender === gender
                    ? "bg-primary text-primary-foreground border-primary"
                    : "hover:bg-accent"
                )}
                onClick={() => setForm((f: any) => ({ ...f, gender }))}
                type="button"
              >
                {gender}
              </button>
            ))}
          </div>
        </div>
      ),
      required:
        !!form.age &&
        !!form.weight &&
        !!form.height &&
        !!form.gender,
    },
    {
      title: "⚠️ Any health restrictions or preferences?",
      content: (
        <Input
          placeholder="E.g.: Lactose intolerant, knee injury, vegan"
          value={form.restrictions}
          onChange={(e) =>
            setForm((f: any) => ({ ...f, restrictions: e.target.value }))
          }
        />
      ),
      required: true,
    },
  ];

  const handleContinue = () => {
    if (step < steps.length - 1) setStep((s) => s + 1);
    else {
      saveProfile(form);
      toast({
        title: "Profile saved!",
        description: "Let's crush those goals 🏆",
      });
      onClose();
    }
  };

  useEffect(() => {
    // Reset form if modal reopens
    if (open && step === 0) {
      const data = getProfile();
      if (!data) setForm({
        name: "",
        age: "",
        weight: "",
        height: "",
        gender: "",
        goal: "",
        restrictions: "",
      });
    }
  }, [open, step]);

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-md w-full p-6">
        <DialogHeader>
          <DialogTitle className="text-xl mb-2">{steps[step].title}</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!steps[step].required) return;
            handleContinue();
          }}
          className="grid gap-6"
        >
          <div>{steps[step].content}</div>
          <button
            className={cn(
              "mt-4 px-4 py-2 rounded-lg font-medium transition bg-primary text-primary-foreground hover:bg-primary/90",
              !steps[step].required && "opacity-40 pointer-events-none"
            )}
            type="submit"
          >
            {step < steps.length - 1 ? "Continue" : "Finish"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
