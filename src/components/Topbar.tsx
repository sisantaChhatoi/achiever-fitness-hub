
import { useEffect, useState } from "react";
import { Trophy, Weight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProfile } from "@/utils/demo-data";

export default function Topbar() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    setProfile(getProfile());
  }, []);

  return (
    <header className="flex items-center justify-between py-4 px-6 border-b border-border bg-card rounded-t-xl">
      <div className="flex items-center gap-4">
        <Weight className="text-primary" size={28} />
        <span className="text-xl font-semibold">Welcome{profile?.name ? `, ${profile.name}` : ""}!</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-green-600 font-bold">
          <Trophy size={20} />
          <span className="text-xl">{profile?.points ?? 0} pts</span>
        </div>
        <div className="flex items-center gap-2 text-blue-600 font-bold">
          <Calendar size={20} />
          <span className="text-md">{profile?.streak ?? 0} day streak</span>
        </div>
        {profile?.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-accent"
          />
        ) : (
          <div className="w-10 h-10 grid place-items-center rounded-full bg-accent text-xl font-bold">
            {profile?.name?.charAt(0) ?? "U"}
          </div>
        )}
      </div>
    </header>
  );
}
