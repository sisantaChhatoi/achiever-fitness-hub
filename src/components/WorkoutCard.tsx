
import { Dumbbell } from "lucide-react";
import { useEffect, useState } from "react";
import { getWorkoutPlan, getProfile, completeWorkout } from "@/utils/demo-data";
import { toast } from "@/hooks/use-toast";

export default function WorkoutCard() {
  const [workout, setWorkout] = useState<any>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setWorkout(getWorkoutPlan());
    setDone(getProfile()?.workoutDoneToday ?? false);
  }, []);

  const handleComplete = () => {
    completeWorkout();
    setDone(true);
    toast({
      title: "Workout marked complete!",
      description: "+10 points earned 💪",
    });
  };

  if (!workout) return null;

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-lg">
      <div className="flex items-center gap-3">
        <Dumbbell size={28} className="text-primary" />
        <h2 className="text-lg font-semibold">Today's Workout</h2>
        {done && (
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">Complete</span>
        )}
      </div>
      <ul className="pl-3 space-y-2">
        {workout.exercises.map((ex: any, idx: number) => (
          <li key={idx} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span className="font-medium">{ex.name}</span>
            <span className="text-muted-foreground text-sm">
              {ex.sets} sets &bull; {ex.reps} reps &bull; {ex.rest} sec rest
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          className={`px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold ${
            done ? "opacity-50 pointer-events-none" : "hover:bg-primary/90"
          } transition`}
          onClick={handleComplete}
          disabled={done}
        >
          {done ? "Workout Complete" : "Mark as Done"}
        </button>
      </div>
    </div>
  );
}
