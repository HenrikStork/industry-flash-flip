import { Progress } from "@/components/ui/progress";

interface ProgressHeaderProps {
  learned: number;
  total: number;
}

export function ProgressHeader({ learned, total }: ProgressHeaderProps) {
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <div className="w-full max-w-sm mx-auto space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{learned} / {total} gelernt</span>
        <span>{pct}%</span>
      </div>
      <Progress value={pct} className="h-2 bg-muted" />
    </div>
  );
}
