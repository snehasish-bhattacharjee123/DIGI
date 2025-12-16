import { Quote as QuoteIcon } from "lucide-react";
import type { Quote } from "./types";

function richTextToPlainText(blocks: Quote["quoteRichText"]): string {
  if (!Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      const children = Array.isArray(block.children) ? block.children : [];
      return children.map((c) => c.text).join("");
    })
    .join("\n\n")
    .trim();
}

export function Slide({ quote }: { quote: Quote }) {
  const quoteText = richTextToPlainText(quote.quoteRichText);

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-border bg-background p-6 lg:p-8 shadow-sm">
        <div className="flex items-start gap-3">
          <QuoteIcon className="h-6 w-6 text-brand-green flex-shrink-0 mt-1" />
          <p className="text-base lg:text-lg leading-relaxed text-foreground">
            {quoteText}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="font-semibold text-foreground truncate">
              {quote.author?.name}
            </div>
            <div className="text-sm text-muted-foreground truncate">
              {quote.author?.position}
              {quote.author?.company?.name ? `, ${quote.author.company.name}` : ""}
            </div>
          </div>

          {quote.documentLink?.link && (
            <a
              href={quote.documentLink.link}
              className="text-sm font-semibold text-brand-blue-600 hover:underline flex-shrink-0"
            >
              Read story
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
