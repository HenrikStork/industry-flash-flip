import { terms } from "@/data/terms";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export function OverviewList() {
  // Group by category
  const categories = [...new Set(terms.map((t) => t.category))];

  return (
    <ScrollArea className="h-[60vh] w-full max-w-md mx-auto pr-2">
      <div className="space-y-4">
        {categories.map((cat) => (
          <div key={cat}>
            <Badge variant="secondary" className="mb-2 text-xs">{cat}</Badge>
            <Accordion type="multiple" className="space-y-1">
              {terms.filter((t) => t.category === cat).map((t) => (
                <AccordionItem key={t.id} value={`term-${t.id}`} className="border border-border rounded-lg px-3">
                  <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3">
                    {t.term}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-3">
                    {t.definition}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
