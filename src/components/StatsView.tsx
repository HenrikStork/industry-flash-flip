import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle2, RotateCcw, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface StatsViewProps {
  learned: number;
  review: number;
  total: number;
}

export function StatsView({ learned, review, total }: StatsViewProps) {
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

  const cards = [
    { label: "Heute gelernt", value: learned, icon: CheckCircle2, color: "text-green-400" },
    { label: "Zum Wiederholen", value: review, icon: RotateCcw, color: "text-yellow-400" },
    { label: "Noch offen", value: total - learned, icon: BookOpen, color: "text-primary" },
    { label: "Gesamt", value: total, icon: Target, color: "text-muted-foreground" },
  ];

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Gesamtfortschritt</span>
          <span>{pct}%</span>
        </div>
        <Progress value={pct} className="h-3 bg-muted" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {cards.map((c) => (
          <Card key={c.label} className="bg-card border-border">
            <CardHeader className="pb-2 pt-4 px-4">
              <div className="flex items-center gap-2">
                <c.icon className={`h-4 w-4 ${c.color}`} />
                <CardTitle className="text-xs font-medium text-muted-foreground">
                  {c.label}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <span className="text-3xl font-bold text-foreground">{c.value}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
