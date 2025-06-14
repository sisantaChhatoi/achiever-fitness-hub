
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { getDietPlan, getProfile } from "@/utils/demo-data";

export default function DietCard() {
  const [diet, setDiet] = useState<any>(null);

  useEffect(() => {
    setDiet(getDietPlan());
  }, []);

  if (!diet) return null;

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-lg">
      <div className="flex items-center gap-3">
        <Heart size={28} className="text-rose-600" />
        <h2 className="text-lg font-semibold">Today's Meals</h2>
        <span className="ml-auto text-md text-muted-foreground">{diet.totalCalories} kcal</span>
      </div>
      <ul className="pl-0 list-none space-y-2">
        {diet.meals.map((meal: any) => (
          <li key={meal.name} className="pb-2 border-b last:border-none">
            <div className="font-medium">{meal.name}</div>
            <div className="text-xs text-muted-foreground mb-1">
              {meal.calories} kcal • {meal.description}
            </div>
            <ul className="pl-4 text-xs space-y-1">
              {meal.recipes.map((r: string, i: number) => (
                <li key={i}>- {r}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <a
          className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          href="/grocery-list.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Grocery List
        </a>
      </div>
    </div>
  );
}
