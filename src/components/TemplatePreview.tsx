import { useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyData, GeneratedText } from "@/types/property";
import TemplateMinimalModern from "./templates/TemplateMinimalModern";
import TemplateBoldSales from "./templates/TemplateBoldSales";
import TemplateCarousel from "./templates/TemplateCarousel";
import TemplateLuxuryDark from "./templates/TemplateLuxuryDark";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const templates = [
  { name: "Minimal Modern", Component: TemplateMinimalModern },
  { name: "Satış Odaklı", Component: TemplateBoldSales },
  { name: "Karousel", Component: TemplateCarousel },
  { name: "Lüks Koyu", Component: TemplateLuxuryDark },
];

const TemplatePreview = ({ data, text }: Props) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const downloadTemplate = useCallback(async (index: number) => {
    const el = refs.current[index];
    if (!el) return;
    const canvas = await html2canvas(el, {
      scale: 1,
      useCORS: true,
      width: 1080,
      height: 1080,
    });
    const link = document.createElement("a");
    link.download = `emlak-tasarim-${index + 1}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, []);

  const shareWhatsApp = useCallback(() => {
    const message = `${data.title} - ${data.price}\n📍 ${data.location}\n${text.cta}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }, [data, text]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Tasarımlarınız Hazır!
        </h2>
        <Button
          variant="outline"
          size="sm"
          onClick={shareWhatsApp}
          className="gap-2"
        >
          <Share2 className="h-4 w-4" />
          WhatsApp
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {templates.map(({ name, Component }, i) => (
          <div key={i} className="group space-y-3">
            <div className="overflow-hidden rounded-lg border border-border shadow-sm">
              <div style={{ transform: "scale(0.3)", transformOrigin: "top left", width: 1080, height: 1080 }}>
                <div className="relative" style={{ width: 1080, height: 1080 }}>
                  <div ref={(el) => { refs.current[i] = el; }}>
                    <Component data={data} text={text} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden rounded-lg"
              style={{ height: `calc(1080px * 0.3)`, marginTop: `-${1080 * 0.7}px`, position: "relative", pointerEvents: "none" }}
            />
            <div className="flex items-center justify-between">
              <span className="font-body text-sm font-medium text-muted-foreground">
                {name}
              </span>
              <Button
                size="sm"
                onClick={() => downloadTemplate(i)}
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Download className="h-3.5 w-3.5" />
                PNG İndir
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatePreview;
