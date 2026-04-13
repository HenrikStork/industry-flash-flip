import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SwipeButtonsProps {
  onLeft: () => void;
  onRight: () => void;
  disabled?: boolean;
}

export function SwipeButtons({ onLeft, onRight, disabled }: SwipeButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-8 mt-8">
      <Button
        variant="outline"
        size="icon"
        className="h-16 w-16 rounded-full border-2 border-destructive/40 text-destructive hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all"
        onClick={onLeft}
        disabled={disabled}
      >
        <X className="h-7 w-7" />
      </Button>
      <Button
        size="icon"
        className="h-16 w-16 rounded-full border-2 border-green-500/40 bg-transparent text-green-500 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"
        onClick={onRight}
        disabled={disabled}
      >
        <Check className="h-7 w-7" />
      </Button>
    </div>
  );
}
