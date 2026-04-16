import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const TemplateMinimalModern = ({ data, text }: Props) => {
  const typeLabel = data.propertyType === "sale" ? "SATILIK" : "KİRALIK";

  return (
    <div
      style={{ width: 1080, height: 1080, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden bg-white"
    >
      {/* Main image */}
      <div className="absolute inset-0">
        <img
          src={data.images[0]}
          alt=""
          className="h-full w-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Badge */}
      <div className="absolute left-10 top-10">
        <span
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, letterSpacing: 3 }}
          className="rounded bg-white px-5 py-2.5 font-bold tracking-widest text-black"
        >
          {typeLabel}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-12">
        <h2
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, lineHeight: 1.15 }}
          className="mb-4 font-bold text-white"
        >
          {text.titles[0]}
        </h2>

        <div className="mb-6 flex flex-wrap gap-3">
          {data.features.slice(0, 4).map((f, i) => (
            <span
              key={i}
              style={{ fontSize: 16 }}
              className="rounded-full border border-white/30 px-4 py-1.5 text-white/90"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p style={{ fontSize: 14, letterSpacing: 2 }} className="mb-1 uppercase text-white/60">
              Fiyat
            </p>
            <p
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 38 }}
              className="font-bold text-white"
            >
              {data.price}
            </p>
          </div>
          <p style={{ fontSize: 16 }} className="text-white/60">
            📍 {data.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateMinimalModern;
