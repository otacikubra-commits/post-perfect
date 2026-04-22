import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/ImageUpload";
import PropertyForm from "@/components/PropertyForm";
import TemplatePreview from "@/components/TemplatePreview";
import { PropertyData, GeneratedText } from "@/types/property";
import { generateTexts } from "@/lib/textGenerator";

const INITIAL_DATA: PropertyData = {
  title: "",
  price: "",
  location: "",
  propertyType: "sale",
  features: [],
  images: [],
  agentName: "",
  agentPhone: "",
  agentEmail: "",
  agentAddress: "",
  agentLogo: "",
};

const STEPS = ["Görseller", "Bilgiler", "Tasarımlar"];

const Index = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<PropertyData>(INITIAL_DATA);
  const [generatedText, setGeneratedText] = useState<GeneratedText | null>(null);

  const canNext =
    step === 0
      ? data.images.length >= 1
      : step === 1
      ? data.title && data.price && data.location
      : false;

  const handleGenerate = () => {
    const texts = generateTexts(data);
    setGeneratedText(texts);
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2.5">
            <div className="gradient-gold flex h-9 w-9 items-center justify-center rounded-lg">
              <Sparkles className="h-5 w-5 text-black" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              EmlakTasarım AI
            </span>
          </div>

          {/* Steps indicator */}
          <div className="hidden items-center gap-2 sm:flex">
            {STEPS.map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    i <= step
                      ? "gradient-gold text-black"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`font-body text-sm ${
                    i <= step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
                {i < STEPS.length - 1 && (
                  <div className="mx-1 h-px w-8 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-2xl py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {step === 0 && (
              <ImageUpload
                images={data.images}
                onChange={(images) => setData({ ...data, images })}
              />
            )}
            {step === 1 && (
              <PropertyForm data={data} onChange={setData} />
            )}
            {step === 2 && generatedText && (
              <TemplatePreview data={data} text={generatedText} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {step < 2 && (
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              disabled={step === 0}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Geri
            </Button>
            {step === 1 ? (
              <Button
                onClick={handleGenerate}
                disabled={!canNext}
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Sparkles className="h-4 w-4" />
                Tasarımları Oluştur
              </Button>
            ) : (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canNext}
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Devam
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => {
                setStep(0);
                setData(INITIAL_DATA);
                setGeneratedText(null);
              }}
            >
              Yeni Tasarım Oluştur
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
