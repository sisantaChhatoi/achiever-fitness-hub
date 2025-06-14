
// FitHero Dashboard

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import OnboardingModal from "@/components/OnboardingModal";
import WorkoutCard from "@/components/WorkoutCard";
import DietCard from "@/components/DietCard";
import RewardsCard from "@/components/RewardsCard";
import ProgressAnalytics from "@/components/ProgressAnalytics";
import { getProfile } from "@/utils/demo-data";

const VIEWS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "workout", label: "Workout Plan" },
  { key: "diet", label: "Diet Plan" },
  { key: "progress", label: "Progress" },
  { key: "rewards", label: "Rewards" },
];

const Index = () => {
  const [view, setView] = useState("dashboard");
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    if (!getProfile()) setShowOnboarding(true);
  }, []);

  function renderView() {
    switch (view) {
      case "dashboard":
        return (
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="col-span-2 flex flex-col gap-8">
              <WorkoutCard />
              <DietCard />
            </div>
            <div className="flex flex-col gap-8">
              <RewardsCard />
              <ProgressAnalytics />
            </div>
          </div>
        );
      case "workout":
        return (
          <div className="flex justify-center pt-8">
            <WorkoutCard />
          </div>
        );
      case "diet":
        return (
          <div className="flex justify-center pt-8">
            <DietCard />
          </div>
        );
      case "progress":
        return (
          <div className="flex justify-center pt-8 w-full">
            <ProgressAnalytics />
          </div>
        );
      case "rewards":
        return (
          <div className="flex justify-center pt-8">
            <RewardsCard />
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex flex-1">
        <Sidebar selected={view} onSelect={setView} />
        <main className="flex-1 flex flex-col bg-background">
          <Topbar />
          <div className="flex-1 px-8 pb-8">{renderView()}</div>
        </main>
      </div>
      <OnboardingModal open={showOnboarding} onClose={() => setShowOnboarding(false)} />
    </div>
  );
};

export default Index;
