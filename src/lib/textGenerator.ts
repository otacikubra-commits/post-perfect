import { PropertyData, GeneratedText } from "@/types/property";

export function generateTexts(data: PropertyData): GeneratedText {
  const typeLabel = data.propertyType === "sale" ? "Satılık" : "Kiralık";
  const titles = [
    `${typeLabel} ${data.title} — ${data.location}`,
    `${data.location}'da ${data.title} ${typeLabel}!`,
    `${data.title} | ${data.price} | ${data.location}`,
  ];
  const ctas =
    data.propertyType === "sale"
      ? [
          "Detaylı bilgi ve randevu için hemen arayın!",
          "Bu fırsatı kaçırmayın, hemen iletişime geçin!",
          "Hayalinizdeki eve bir adım kaldı!",
        ]
      : [
          "Hemen arayın, bu fırsatı kaçırmayın!",
          "Detaylı bilgi için iletişime geçin!",
          "Yeni eviniz sizi bekliyor!",
        ];

  return {
    titles,
    cta: ctas[Math.floor(Math.random() * ctas.length)],
  };
}
