
export function getProfile() {
  const data = localStorage.getItem("fithero_profile");
  if (!data) return null;
  return JSON.parse(data);
}
export function saveProfile(p: any) {
  const prev = getProfile() ?? {};
  localStorage.setItem(
    "fithero_profile",
    JSON.stringify({ ...prev, ...p, points: prev.points ?? 0, streak: prev.streak ?? 1, workoutDoneToday: false })
  );
}
export function getWorkoutPlan() {
  // Customizable!
  const prof = getProfile() || {};
  const difficulty = prof.streak && prof.streak > 14 ? "intermediate" : "beginner";
  return {
    exercises: [
      { name: difficulty === "beginner" ? "Bodyweight Squats" : "Barbell Squats", sets: 3, reps: 12, rest: 60 },
      { name: "Push-ups", sets: 3, reps: 10, rest: 45 },
      { name: "Lunges", sets: 2, reps: 12, rest: 60 },
      { name: difficulty === "beginner" ? "Plank" : "Weighted Plank", sets: 2, reps: 30, rest: 90 },
    ],
  };
}
export function getDietPlan() {
  // For demo, basic static plan
  return {
    totalCalories: 1950,
    meals: [
      {
        name: "Breakfast",
        calories: 400,
        description: "High protein oatmeal",
        recipes: ["Rolled oats", "Whey protein", "Blueberries", "Honey"],
      },
      {
        name: "Lunch",
        calories: 600,
        description: "Chicken salad bowl",
        recipes: ["Grilled chicken", "Mixed greens", "Avocado", "Quinoa"],
      },
      {
        name: "Dinner",
        calories: 650,
        description: "Salmon, rice & veggies",
        recipes: ["Grilled salmon", "Brown rice", "Steamed broccoli"],
      },
      {
        name: "Snack",
        calories: 300,
        description: "Protein bar",
        recipes: ["Protein bar", "Banana"],
      },
    ],
  };
}
export function getAchievements() {
  const prof = getProfile() || { streak: 1, points: 0 };
  return [
    { id: "day1", title: "Started Journey", unlocked: true, icon: "🚀" },
    { id: "5kg", title: "First 5kg Lost", unlocked: prof.weightLost >= 5, icon: "🏅" },
    { id: "streak7", title: "7 Day Streak", unlocked: prof.streak >= 7, icon: "🔥" },
    { id: "points100", title: "100 Points", unlocked: (prof.points ?? 0) >= 100, icon: "💯" },
  ];
}
export function redeemReward() {
  const prof = getProfile() || {};
  if (prof.points >= 100) {
    prof.points -= 100;
    prof.lastReward = Date.now();
    saveProfile(prof);
  }
}

export function completeWorkout() {
  let prof = getProfile() || {};
  if (!prof.workoutDoneToday) {
    prof.points = (prof.points ?? 0) + 10;
    prof.streak = (prof.streak ?? 0) + 1;
    prof.workoutDoneToday = true;
    saveProfile(prof);
  }
}

export function getAnalytics() {
  // Demo: fake data
  const today = new Date();
  const arr = [];
  let base = 84;
  for (let i = 8; i >= 0; i--) {
    arr.push({
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - i).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      kg: base + Math.random(),
    });
    base -= Math.random() * 0.5; // Slowly trending down
  }
  return {
    weight: arr,
    workouts: [
      { week: "Wk1", workouts: 4, points: 40 },
      { week: "Wk2", workouts: 5, points: 58 },
      { week: "Wk3", workouts: 6, points: 72 },
      { week: "Wk4", workouts: 7, points: 84 },
    ],
  };
}
