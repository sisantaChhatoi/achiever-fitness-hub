
import { Trophy, Check } from "lucide-react";
import AchievementBadge from "./AchievementBadge";
import { useEffect, useState } from "react";
import { getProfile, getAchievements, redeemReward } from "@/utils/demo-data";
import { toast } from "@/hooks/use-toast";

export default function RewardsCard() {
  const [profile, setProfile] = useState<any>(null);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [canRedeem, setCanRedeem] = useState(false);

  useEffect(() => {
    setProfile(getProfile());
    setAchievements(getAchievements());
    setCanRedeem(getProfile()?.points >= 100);
  }, []);

  const handleRedeem = () => {
    if (canRedeem) {
      redeemReward();
      setProfile(getProfile());
      toast({
        title: "Reward redeemed!",
        description: "A new badge/discount unlocked 🎉",
      });
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-md">
      <div className="flex items-center gap-3">
        <Trophy size={28} className="text-amber-500" />
        <h2 className="text-lg font-semibold">Points & Achievements</h2>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {achievements.map((a) => (
          <AchievementBadge key={a.id} badge={a} />
        ))}
      </div>
      <div className="mt-5">
        <button
          className={`px-4 py-2 rounded-md bg-amber-500 text-white font-bold flex items-center gap-2 transition 
            ${canRedeem ? "hover:bg-amber-600" : "opacity-50 pointer-events-none"}`}
          onClick={handleRedeem}
          disabled={!canRedeem}
        >
          <Check className="w-5 h-5" />
          Redeem 100 pts for Reward
        </button>
      </div>
    </div>
  );
}
