
interface Props {
  badge: {
    id: string;
    title: string;
    unlocked: boolean;
    icon: string;
  };
}
export default function AchievementBadge({ badge }: Props) {
  return (
    <div
      className={`
        flex items-center gap-1 px-2 py-1 text-sm rounded-full border 
        ${badge.unlocked ? "bg-green-100 border-green-300 text-green-800" : "bg-muted border-muted-foreground/30 text-muted-foreground opacity-40"}
        shadow-sm`}
    >
      <span className="text-lg">{badge.icon}</span>
      <span className="font-semibold">{badge.title}</span>
      {badge.unlocked && <span className="ml-1 text-green-500">✓</span>}
    </div>
  );
}
