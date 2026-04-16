import { PropertyData } from "@/types/property";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PropertyFormProps {
  data: PropertyData;
  onChange: (data: PropertyData) => void;
}

const PropertyForm = ({ data, onChange }: PropertyFormProps) => {
  const [featureInput, setFeatureInput] = useState("");

  const update = (partial: Partial<PropertyData>) =>
    onChange({ ...data, ...partial });

  const addFeature = () => {
    const trimmed = featureInput.trim();
    if (trimmed && data.features.length < 5) {
      update({ features: [...data.features, trimmed] });
      setFeatureInput("");
    }
  };

  const removeFeature = (index: number) => {
    update({ features: data.features.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-5">
      <h2 className="font-display text-2xl font-semibold text-foreground">
        İlan Bilgileri
      </h2>

      <div className="space-y-4">
        <div>
          <Label className="font-body text-sm">Başlık</Label>
          <Input
            placeholder="Ör: 3+1 Lüks Daire"
            value={data.title}
            onChange={(e) => update({ title: e.target.value })}
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="font-body text-sm">Fiyat</Label>
            <Input
              placeholder="Ör: 4.250.000 TL"
              value={data.price}
              onChange={(e) => update({ price: e.target.value })}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="font-body text-sm">İlan Türü</Label>
            <Select
              value={data.propertyType}
              onValueChange={(v) =>
                update({ propertyType: v as "sale" | "rent" })
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sale">Satılık</SelectItem>
                <SelectItem value="rent">Kiralık</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="font-body text-sm">Konum</Label>
          <Input
            placeholder="Ör: Kadıköy / İstanbul"
            value={data.location}
            onChange={(e) => update({ location: e.target.value })}
            className="mt-1"
          />
        </div>

        <div>
          <Label className="font-body text-sm">
            Özellikler ({data.features.length}/5)
          </Label>
          <div className="mt-1 flex gap-2">
            <Input
              placeholder="Ör: 150 m², Açık Otopark"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
              disabled={data.features.length >= 5}
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={addFeature}
              disabled={data.features.length >= 5 || !featureInput.trim()}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.features.map((f, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {f}
                <button onClick={() => removeFeature(i)}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-4">
          Emlakçı Bilgileri
        </h3>

        <div className="space-y-4">
          <div>
            <Label className="font-body text-sm">Logo</Label>
            <div className="mt-1">
              {data.agentLogo ? (
                <div className="flex items-center gap-3">
                  <img
                    src={data.agentLogo}
                    alt="Logo"
                    className="h-12 w-12 rounded-lg object-contain border border-border"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => update({ agentLogo: "" })}
                  >
                    <X className="h-3 w-3 mr-1" />
                    Kaldır
                  </Button>
                </div>
              ) : (
                <label className="flex h-16 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30 text-sm text-muted-foreground hover:border-primary/50 transition-colors">
                  Logo Yükle (Opsiyonel)
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onload = () => update({ agentLogo: reader.result as string });
                      reader.readAsDataURL(file);
                    }}
                  />
                </label>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="font-body text-sm">İsim</Label>
              <Input
                placeholder="Ör: Ahmet Yılmaz"
                value={data.agentName}
                onChange={(e) => update({ agentName: e.target.value })}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="font-body text-sm">Telefon</Label>
              <Input
                placeholder="Ör: 0532 123 4567"
                value={data.agentPhone}
                onChange={(e) => update({ agentPhone: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
