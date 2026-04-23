import { useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropertyData, GeneratedText } from "@/types/property";
import TemplateCarousel from "./templates/TemplateCarousel";
import TemplateLuxuryDark from "./templates/TemplateLuxuryDark";
import TemplateClassicBlue from "./templates/TemplateClassicBlue";
import TemplateMultiImage from "./templates/TemplateMultiImage";
import TemplateGeoBold from "./templates/TemplateGeoBold";
import TemplateNavyGold from "./templates/TemplateNavyGold";
import TemplateAgentShowcase from "./templates/TemplateAgentShowcase";
import BusinessCardModern from "./templates/BusinessCardModern";
import BusinessCardElegant from "./templates/BusinessCardElegant";
import BusinessCardBold from "./templates/BusinessCardBold";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const socialTemplates = [
  { name: "Karousel", Component: TemplateCarousel, width: 1080, height: 1080 },
  { name: "Lüks Koyu", Component: TemplateLuxuryDark, width: 1080, height: 1080 },
  { name: "Klasik Mavi", Component: TemplateClassicBlue, width: 1080, height: 1080 },
  { name: "Çoklu Görsel", Component: TemplateMultiImage, width: 1080, height: 1080 },
  { name: "Geometrik", Component: TemplateGeoBold, width: 1080, height: 1080 },
  { name: "Navy Gold", Component: TemplateNavyGold, width: 1080, height: 1350 },
  { name: "Emlakçı Vitrin", Component: TemplateAgentShowcase, width: 1080, height: 1350 },
];

const businessCardTemplates = [
  { name: "Modern", Component: BusinessCardModern, width: 1080, height: 640 },
  { name: "Elegant", Component: BusinessCardElegant, width: 1080, height: 640 },
  { name: "Cesur", Component: BusinessCardBold, width: 1080, height: 640 },
];

const SOCIAL_SCALE = 0.3;
const CARD_SCALE = 0.3;

const TemplatePreview = ({ data, text }: Props) => {
  const socialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const downloadTemplate = useCallback(async (
    ref: HTMLDivElement | null,
    name: string,
    width: number,
    height: number
  ) => {
    if (!ref) return;

    // Find the scaled parent and temporarily remove transform
    const scaledParent = ref.parentElement;
    const originalTransform = scaledParent?.style.transform || "";
    const originalPosition = scaledParent?.style.position || "";
    if (scaledParent) {
      scaledParent.style.transform = "none";
      scaledParent.style.position = "static";
    }

    const canvas = await html2canvas(ref, {
      scale: 2,
      useCORS: true,
      width,
      height,
      windowWidth: width,
      windowHeight: height,
    });

    // Restore transform
    if (scaledParent) {
      scaledParent.style.transform = originalTransform;
      scaledParent.style.position = originalPosition;
    }

    const link = document.createElement("a");
    link.download = `emlak-${name}.png`;
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

      <Tabs defaultValue="social" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="social" className="flex-1">Sosyal Medya Postları</TabsTrigger>
          <TabsTrigger value="cards" className="flex-1">Kartvizit Tasarımları</TabsTrigger>
        </TabsList>

        <TabsContent value="social">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-4">
            {socialTemplates.map(({ name, Component, width, height }, i) => (
              <div key={i} className="space-y-3">
                <div
                  className="overflow-hidden rounded-lg border border-border shadow-sm"
                  style={{
                    width: "100%",
                    aspectRatio: `${width}/${height}`,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      transform: `scale(${SOCIAL_SCALE})`,
                      transformOrigin: "top left",
                      width,
                      height,
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  >
                    <div ref={(el) => { socialRefs.current[i] = el; }}>
                      <Component data={data} text={text} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm font-medium text-muted-foreground">
                    {name}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => downloadTemplate(socialRefs.current[i], `sosyal-${i + 1}`, width, height)}
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Download className="h-3.5 w-3.5" />
                    PNG İndir
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cards">
          <div className="grid grid-cols-1 gap-6 mt-4">
            {businessCardTemplates.map(({ name, Component, width, height }, i) => (
              <div key={i} className="space-y-3">
                <div
                  className="overflow-hidden rounded-lg border border-border shadow-sm"
                  style={{
                    width: "100%",
                    aspectRatio: `${width}/${height}`,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      transform: `scale(${CARD_SCALE})`,
                      transformOrigin: "top left",
                      width,
                      height,
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  >
                    <div ref={(el) => { cardRefs.current[i] = el; }}>
                      <Component data={data} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm font-medium text-muted-foreground">
                    {name}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => downloadTemplate(cardRefs.current[i], `kartvizit-${i + 1}`, width, height)}
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Download className="h-3.5 w-3.5" />
                    PNG İndir
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TemplatePreview;
