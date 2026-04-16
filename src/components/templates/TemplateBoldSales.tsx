import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const TemplateBoldSales = ({ data, text }: Props) => {
  const typeLabel = data.propertyType === "sale" ? "SATILIK" : "KİRALIK";

  return (
    <div
      style={{ width: 1080, height: 1080, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={data.images[0]}
          alt=""
          className="h-full w-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Big badge */}
      <div className="absolute left-0 right-0 top-0 flex justify-center pt-14">
        <div
          style={{
            fontSize: 64,
            letterSpacing: 12,
            fontFamily: "'Inter', sans-serif",
            background: "linear-gradient(135deg, #D4A843, #F0D78C)",
          }}
          className="px-12 py-4 font-black text-black"
        >
          {typeLabel}
        </div>
      </div>

      {/* Center price */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 72,
            lineHeight: 1,
          }}
          className="mb-4 font-black text-white"
        >
          {data.price}
        </p>
        <h2
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 36 }}
          className="mb-2 font-semibold text-white"
        >
          {text.titles[1]}
        </h2>
        <p style={{ fontSize: 20 }} className="text-white/70">
          📍 {data.location}
        </p>
      </div>

      {/* Bottom features */}
      <div className="absolute bottom-0 left-0 right-0 p-10">
        <div className="flex justify-center gap-6">
          {data.features.slice(0, 4).map((f, i) => (
            <span
              key={i}
              style={{ fontSize: 16 }}
              className="rounded border border-white/20 bg-white/10 px-4 py-2 text-white/90 backdrop-blur-sm"
            >
              {f}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          {data.agentLogo && (
            <img src={data.agentLogo} alt="" className="h-10 w-10 rounded-full object-contain" crossOrigin="anonymous" />
          )}
          <div className="text-center">
            {data.agentName && <p style={{ fontSize: 16 }} className="font-semibold text-white">{data.agentName}</p>}
            {data.agentPhone && <p style={{ fontSize: 14 }} className="text-amber-300">{data.agentPhone}</p>}
            {!data.agentName && !data.agentPhone && (
              <p style={{ fontSize: 18 }} className="font-medium text-amber-300">{text.cta}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateBoldSales;
