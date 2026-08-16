import { ComponentType } from "react";
import { PropertyData, GeneratedText } from "@/types/property";
import TemplateCarousel from "@/components/templates/TemplateCarousel";
import TemplateLuxuryDark from "@/components/templates/TemplateLuxuryDark";
import TemplateClassicBlue from "@/components/templates/TemplateClassicBlue";
import TemplateMultiImage from "@/components/templates/TemplateMultiImage";
import TemplateGeoBold from "@/components/templates/TemplateGeoBold";
import TemplateNavyGold from "@/components/templates/TemplateNavyGold";
import TemplateAgentShowcase from "@/components/templates/TemplateAgentShowcase";
import BusinessCardRedCurve from "@/components/templates/BusinessCardRedCurve";
import BusinessCardBluePhoto from "@/components/templates/BusinessCardBluePhoto";
import BusinessCardDarkDiamond from "@/components/templates/BusinessCardDarkDiamond";
import BusinessCardBlueDiagonal from "@/components/templates/BusinessCardBlueDiagonal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyTemplate = ComponentType<any>;

export const templateRegistry: Record<string, AnyTemplate> = {
  t1: TemplateCarousel,
  t2: TemplateLuxuryDark,
  t3: TemplateClassicBlue,
  t4: TemplateMultiImage,
  t5: TemplateGeoBold,
  t6: TemplateNavyGold,
  t7: TemplateAgentShowcase,
  t8: BusinessCardRedCurve,
  t9: BusinessCardBluePhoto,
  t10: BusinessCardDarkDiamond,
  t11: BusinessCardBlueDiagonal,
};

const SAMPLE_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#9aa5b1"/><stop offset="100%" stop-color="#4b5563"/></linearGradient></defs><rect width="800" height="800" fill="url(#g)"/><g fill="none" stroke="#ffffff" stroke-opacity="0.55" stroke-width="18"><path d="M250 420 L400 300 L550 420"/><rect x="300" y="420" width="200" height="150"/></g></svg>`,
  );

export const sampleProperty: PropertyData = {
  title: "Deniz Manzaralı 3+1 Daire",
  price: "8.500.000 ₺",
  location: "Kadıköy, İstanbul",
  propertyType: "sale",
  features: ["3+1", "145 m²", "Otopark", "Asansör", "Site İçi"],
  images: [SAMPLE_IMAGE, SAMPLE_IMAGE, SAMPLE_IMAGE],
  agentName: "Ayşe Yılmaz",
  agentPhone: "0532 123 45 67",
  agentLogo: "",
};

export const sampleText: GeneratedText = {
  titles: [
    "Deniz Manzaralı 3+1 Daire",
    "Kadıköy'de Fırsat Daire",
    "Manzaralı Yaşam Başlıyor",
  ],
  cta: "Detaylı bilgi için hemen arayın!",
};

interface Props {
  templateId: string;
  width: number;
  height: number;
  /** rendered preview width in CSS px */
  previewWidth?: number;
  className?: string;
}

const TemplateThumb = ({ templateId, width, height, previewWidth = 180, className }: Props) => {
  const Component = templateRegistry[templateId];
  const scale = previewWidth / width;

  if (!Component) {
    return (
      <div
        className="flex items-center justify-center rounded-md border border-border bg-muted text-xs text-muted-foreground"
        style={{ width: previewWidth, height: (previewWidth * height) / width }}
      >
        Önizleme yok
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-border bg-card shadow-sm ${className ?? ""}`}
      style={{ width: previewWidth, height: (previewWidth * height) / width }}
    >
      <div
        className="pointer-events-none absolute left-0 top-0 origin-top-left"
        style={{ width, height, transform: `scale(${scale})` }}
      >
        <Component data={sampleProperty} text={sampleText} />
      </div>
    </div>
  );
};

export default TemplateThumb;
