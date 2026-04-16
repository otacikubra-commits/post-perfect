import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const TemplateCarousel = ({ data, text }: Props) => {
  const typeLabel = data.propertyType === "sale" ? "Satılık" : "Kiralık";

  return (
    <div
      style={{ width: 1080, height: 1080, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden bg-neutral-100"
    >
      {/* Top image half */}
      <div className="absolute left-0 right-0 top-0 h-[540px]">
        <img
          src={data.images[0]}
          alt=""
          className="h-full w-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute left-8 top-8">
          <span
            style={{ fontSize: 14, letterSpacing: 2 }}
            className="rounded-full bg-black px-5 py-2 font-bold uppercase text-white"
          >
            {typeLabel}
          </span>
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 h-[540px] bg-white p-12">
        <h2
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, lineHeight: 1.2 }}
          className="mb-3 font-bold text-black"
        >
          {data.title}
        </h2>
        <p style={{ fontSize: 16 }} className="mb-6 text-neutral-500">
          📍 {data.location}
        </p>

        <div className="mb-6 grid grid-cols-2 gap-3">
          {data.features.map((f, i) => (
            <div
              key={i}
              style={{ fontSize: 16 }}
              className="flex items-center gap-2 rounded-lg bg-neutral-50 px-4 py-3 text-neutral-700"
            >
              <span className="text-amber-500">✦</span>
              {f}
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p style={{ fontSize: 13, letterSpacing: 2 }} className="mb-1 uppercase text-neutral-400">
              Fiyat
            </p>
            <p style={{ fontSize: 40 }} className="font-black text-black">
              {data.price}
            </p>
          </div>
          <p style={{ fontSize: 15 }} className="max-w-[280px] text-right text-neutral-500">
            {text.cta}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateCarousel;
