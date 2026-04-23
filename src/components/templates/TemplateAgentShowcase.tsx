import React from "react";
import { PropertyData, GeneratedText } from "@/types/property";

interface Props {
  data: PropertyData;
  text: GeneratedText;
}

const TemplateAgentShowcase: React.FC<Props> = ({ data }) => {
  const typeLabel = data.propertyType === "sale" ? "SATILIK" : "KİRALIK";

  const features =
    data.features?.slice(0, 3).map((f: any) =>
      typeof f === "string" ? f : f?.label || ""
    ) || [];

  return (
    <div
      style={{ width: 1080, height: 1350, fontFamily: "'Inter', sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "hsl(30 15% 88%)" }} />

      {/* HERO IMAGE */}
      <div className="absolute left-0 right-0 top-0" style={{ height: 640 }}>
        {data.images?.[0] ? (
          <img
            src={data.images[0]}
            alt=""
            className="h-full w-full object-cover"
            crossOrigin="anonymous"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: "hsl(30 10% 80%)" }}
          >
            <span style={{ fontSize: 20, color: "hsl(30 10% 50%)" }}>Görsel</span>
          </div>
        )}

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)" }}
        />
      </div>

      {/* PRICE */}
      {data.price && (
        <div
          className="absolute flex items-center justify-center"
          style={{ top: 30, right: 30, zIndex: 3 }}
        >
          <div
            className="rounded-xl px-6 py-3"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          >
            <span style={{ fontSize: 32, fontWeight: 800, color: "white" }}>
              {data.price}
            </span>
          </div>
        </div>
      )}

      {/* RED BANNER */}
      <div
        className="absolute left-0 right-0 flex items-center justify-center"
        style={{ top: 620, height: 90, zIndex: 2 }}
      >
        <div
          className="flex items-center justify-center px-16 py-3"
          style={{ background: "hsl(0 72% 45%)", borderRadius: 6 }}
        >
          <h1
            style={{ fontSize: 52, letterSpacing: 14, color: "white" }}
            className="font-black uppercase"
          >
            {typeLabel}
          </h1>
        </div>
      </div>

      {/* FEATURE CHIPS */}
      {features.length > 0 && (
        <div
          className="absolute left-0 right-0 flex items-center justify-center gap-3"
          style={{ top: 575, zIndex: 3 }}
        >
          {features.map((f: string, i: number) => (
            <div
              key={i}
              className="rounded-full px-5 py-2"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid hsl(0 0% 85%)",
                fontSize: 16,
                fontWeight: 600,
                color: "hsl(0 0% 25%)",
              }}
            >
              {f}
            </div>
          ))}
        </div>
      )}

      {/* GRID IMAGES */}
      <div
        className="absolute left-6 right-6 flex gap-3"
        style={{ top: 730, height: 250 }}
      >
        {[1, 2, 3].map((idx) => (
          <div key={idx} className="h-full flex-1 overflow-hidden rounded-xl">
            {data.images?.[idx] ? (
              <img
                src={data.images[idx]}
                alt=""
                className="h-full w-full object-cover"
                crossOrigin="anonymous"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ background: idx % 2 === 0 ? "hsl(30 10% 82%)" : "hsl(30 10% 78%)" }}
              >
                <span style={{ fontSize: 14, color: "hsl(30 10% 50%)" }}>Görsel {idx}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AGENT CARD */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center"
        style={{ top: 1000, background: "hsl(30 15% 88%)" }}
      >
        <div
          className="flex flex-col items-center rounded-2xl px-12 py-6"
          style={{ background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", minWidth: 600 }}
        >
          {/* LOGO */}
          {data.agentLogo && (
            <img
              src={data.agentLogo}
              alt=""
              className="mb-2 object-contain"
              style={{ height: 44, maxWidth: 200 }}
              crossOrigin="anonymous"
            />
          )}

          {/* NAME */}
          <h2
            style={{ fontSize: 32, color: "hsl(220 20% 20%)" }}
            className="mb-1 font-black uppercase"
          >
            {data.agentName || "Emlak Ofisi"}
          </h2>

          {/* PHONE */}
          {data.agentPhone && (
            <p style={{ fontSize: 24, color: "hsl(0 72% 45%)" }} className="mb-2 font-bold">
              {data.agentPhone}
            </p>
          )}

          {/* CTA */}
          <div className="mb-2">
            <div
              className="rounded-full px-10 py-2"
              style={{ background: "hsl(0 72% 45%)" }}
            >
              <span style={{ fontSize: 17, fontWeight: 700, color: "white", letterSpacing: 3 }}>
                HEMEN ARA
              </span>
            </div>
          </div>

          {/* LOCATION */}
          {data.location && (
            <p style={{ fontSize: 15, color: "hsl(220 10% 45%)" }}>
              📍 {data.location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateAgentShowcase;
