import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const TemplateLuxuryDark = ({ data, text }: Props) => {
  const typeLabel = data.propertyType === "sale" ? "SATILIK" : "KİRALIK";

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)",
      }}
      className="relative overflow-hidden"
    >
      {/* Decorative gold line */}
      <div
        className="absolute left-12 right-12 top-12"
        style={{ height: 2, background: "linear-gradient(90deg, transparent, #D4A843, transparent)" }}
      />

      {/* Type label */}
      <div className="absolute left-0 right-0 top-8 text-center">
        <span
          style={{
            fontSize: 14,
            letterSpacing: 8,
            color: "#D4A843",
          }}
          className="font-semibold"
        >
          {typeLabel}
        </span>
      </div>

      {/* Center image with frame */}
      <div className="absolute left-12 right-12 top-[80px] h-[520px]">
        <div
          className="h-full w-full overflow-hidden rounded"
          style={{ border: "1px solid rgba(212, 168, 67, 0.3)" }}
        >
          <img
            src={data.images[0]}
            alt=""
            className="h-full w-full object-cover"
            crossOrigin="anonymous"
          />
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-12 left-12 right-12">
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 38,
            lineHeight: 1.2,
            color: "#FFFFFF",
          }}
          className="mb-4 font-bold"
        >
          {text.titles[2]}
        </h2>

        <div className="mb-5 flex flex-wrap gap-2">
          {data.features.slice(0, 4).map((f, i) => (
            <span
              key={i}
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(212, 168, 67, 0.25)",
              }}
              className="rounded-full px-4 py-1.5"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p style={{ fontSize: 12, letterSpacing: 3, color: "#D4A843" }} className="mb-1 uppercase">
              Fiyat
            </p>
            <p
              style={{
                fontSize: 42,
                background: "linear-gradient(135deg, #D4A843, #F0D78C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-black"
            >
              {data.price}
            </p>
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
            📍 {data.location}
          </p>
        </div>

        {/* Bottom gold line */}
        <div
          className="mt-5"
          style={{ height: 1, background: "linear-gradient(90deg, transparent, #D4A843, transparent)" }}
        />
        <p style={{ fontSize: 14, color: "#D4A843" }} className="mt-3 text-center">
          {text.cta}
        </p>
      </div>
    </div>
  );
};

export default TemplateLuxuryDark;
