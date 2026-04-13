import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FlashCard } from "@/components/FlashCard";
import { SwipeButtons } from "@/components/SwipeButtons";
import { ProgressHeader } from "@/components/ProgressHeader";
import { StatsView } from "@/components/StatsView";
import { useFlashcards } from "@/hooks/useFlashcards";
import { Layers, BarChart3, RefreshCcw, Zap } from "lucide-react";

const Index = () => {
  const {
    currentCard,
    isFinished,
    total,
    learnedCount,
    reviewCount,
    markLearned,
    markReview,
    resetToday,
  } = useFlashcards();

  const [tab, setTab] = useState("learn");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-4 py-4">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold tracking-tight text-foreground">
              Manufacturing X
            </h1>
          </div>
          <span className="text-xs text-muted-foreground">Lernkarten</span>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-lg mx-auto w-full px-4 pt-4">
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 bg-muted">
            <TabsTrigger value="learn" className="gap-1.5">
              <Layers className="h-4 w-4" /> Lernen
            </TabsTrigger>
            <TabsTrigger value="stats" className="gap-1.5">
              <BarChart3 className="h-4 w-4" /> Statistik
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learn" className="mt-6 space-y-6">
            <ProgressHeader learned={learnedCount} total={total} />

            {isFinished ? (
              <div className="flex flex-col items-center gap-4 py-12">
                <div className="text-5xl">🎉</div>
                <h2 className="text-xl font-bold text-foreground">Alle Begriffe gelernt!</h2>
                <p className="text-muted-foreground text-center text-sm">
                  Du hast heute alle {total} Begriffe durchgearbeitet. Gut gemacht!
                </p>
                <Button variant="outline" onClick={resetToday} className="gap-2 mt-2">
                  <RefreshCcw className="h-4 w-4" /> Von vorne starten
                </Button>
              </div>
            ) : currentCard ? (
              <>
                <FlashCard
                  key={currentCard.id}
                  term={currentCard}
                  onSwipeLeft={markReview}
                  onSwipeRight={markLearned}
                />
                <SwipeButtons onLeft={markReview} onRight={markLearned} />
                <div className="flex justify-center gap-6 text-xs text-muted-foreground">
                  <span>← Nochmal</span>
                  <span>Gelernt →</span>
                </div>
              </>
            ) : null}
          </TabsContent>

          <TabsContent value="stats" className="mt-6">
            <StatsView learned={learnedCount} review={reviewCount} total={total} />
            {learnedCount > 0 && (
              <div className="flex justify-center mt-6">
                <Button variant="outline" size="sm" onClick={resetToday} className="gap-2">
                  <RefreshCcw className="h-3.5 w-3.5" /> Fortschritt zurücksetzen
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
