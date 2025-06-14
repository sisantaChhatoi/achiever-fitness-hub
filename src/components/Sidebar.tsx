
import { Dumbbell, Calendar, Heart, Users, BarChart } from "lucide-react";

const NAV_ITEMS = [
  { label: "Dashboard", icon: BarChart, id: "dashboard" },
  { label: "Workout Plan", icon: Dumbbell, id: "workout" },
  { label: "Diet Plan", icon: Heart, id: "diet" },
  { label: "Progress", icon: Calendar, id: "progress" },
  { label: "Rewards", icon: Users, id: "rewards" },
  { label: "Trainer Portal (Soon)", icon: Users, id: "trainer", disabled: true },
];

interface SidebarProps {
  selected: string;
  onSelect: (v: string) => void;
}

export default function Sidebar({ selected, onSelect }: SidebarProps) {
  return (
    <aside className="h-[90vh] rounded-xl w-60 py-6 px-4 bg-sidebar-primary text-sidebar-primary-foreground flex flex-col gap-2 shadow-lg">
      <div className="text-2xl mb-8 font-extrabold tracking-tight text-center">🏋️‍♂️ FitHero</div>
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ id, label, icon: Icon, disabled }) => (
          <button
            key={id}
            onClick={() => !disabled && onSelect(id)}
            className={`
              group flex items-center gap-3 px-4 py-2 rounded-lg transition
              ${selected === id ? "bg-primary text-primary-foreground shadow" : ""}
              ${disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-accent"}
              text-base font-medium
            `}
            disabled={!!disabled}
          >
            <Icon size={20} className="shrink-0 opacity-80" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="flex-1" />
      <div className="text-xs text-sidebar-foreground/60 mt-8 text-center select-none">
        © {new Date().getFullYear()} FitHero
      </div>
    </aside>
  );
}
