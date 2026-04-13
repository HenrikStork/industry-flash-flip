import { useState, useRef } from "react";
import type { Term } from "@/data/terms";
import { RotateCcw } from "lucide-react";

interface FlashCardProps {
  term: Term;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export function FlashCard({ term, onSwipeLeft, onSwipeRight }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [exiting, setExiting] = useState<"left" | "right" | null>(null);
  const startX = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };

  const handlePointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragX > 100) {
      triggerExit("right");
    } else if (dragX < -100) {
      triggerExit("left");
    } else {
      setDragX(0);
    }
  };

  const triggerExit = (dir: "left" | "right") => {
    setExiting(dir);
    setTimeout(() => {
      if (dir === "right") onSwipeRight();
      else onSwipeLeft();
      setFlipped(false);
      setDragX(0);
      setExiting(null);
    }, 300);
  };

  const getTransform = () => {
    if (exiting === "left") return "translateX(-120%) rotate(-15deg)";
    if (exiting === "right") return "translateX(120%) rotate(15deg)";
    if (dragX !== 0) {
      const rotate = dragX * 0.05;
      return `translateX(${dragX}px) rotate(${rotate}deg)`;
    }
    return "translateX(0)";
  };

  const getBorderColor = () => {
    if (dragX > 50 || exiting === "right") return "border-green-500/60";
    if (dragX < -50 || exiting === "left") return "border-red-500/60";
    return "border-border";
  };

  return (
    <div
      className="perspective w-full max-w-sm mx-auto select-none touch-none"
      style={{ minHeight: 340 }}
    >
      <div
        className={`relative w-full transition-transform ${exiting ? "duration-300" : dragging ? "duration-0" : "duration-300"} cursor-grab active:cursor-grabbing`}
        style={{ transform: getTransform(), minHeight: 340 }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div
          className={`preserve-3d w-full transition-transform duration-500 ${flipped ? "rotate-y-180" : ""}`}
          style={{ minHeight: 340 }}
          onClick={(e) => {
            if (Math.abs(dragX) < 5 && !exiting) {
              e.stopPropagation();
              setFlipped(!flipped);
            }
          }}
        >
          {/* Front */}
          <div
            className={`backface-hidden absolute inset-0 rounded-2xl border-2 ${getBorderColor()} bg-card p-8 flex flex-col items-center justify-center gap-4 shadow-xl`}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {term.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center leading-tight">
              {term.term}
            </h2>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-4">
              <RotateCcw className="w-4 h-4" />
              <span>Tippen zum Umdrehen</span>
            </div>
          </div>

          {/* Back */}
          <div
            className={`backface-hidden rotate-y-180 absolute inset-0 rounded-2xl border-2 ${getBorderColor()} bg-card p-8 flex flex-col items-center justify-center gap-4 shadow-xl`}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Erklärung
            </span>
            <p className="text-base md:text-lg text-foreground/90 text-center leading-relaxed">
              {term.definition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
