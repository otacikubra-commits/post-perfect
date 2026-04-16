import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, ImageIcon } from "lucide-react";

interface ImageUploadProps {
  images: string[];
  onChange: (images: string[]) => void;
}

const ImageUpload = ({ images, onChange }: ImageUploadProps) => {
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      const remaining = 3 - images.length;
      const toProcess = Array.from(files).slice(0, remaining);

      toProcess.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          onChange([...images, result].slice(0, 3));
        };
        reader.readAsDataURL(file);
      });
    },
    [images, onChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl font-semibold text-foreground">
        Görselleri Yükleyin
      </h2>
      <p className="font-body text-sm text-muted-foreground">
        En fazla 3 görsel yükleyebilirsiniz (sürükle-bırak veya tıklayın)
      </p>

      {images.length < 3 && (
        <motion.label
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-10 transition-colors ${
            dragOver
              ? "border-accent bg-accent/10"
              : "border-border hover:border-accent/50"
          }`}
        >
          <Upload className="mb-3 h-10 w-10 text-muted-foreground" />
          <span className="font-body text-sm font-medium text-muted-foreground">
            Görselleri buraya bırakın veya tıklayın
          </span>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </motion.label>
      )}

      <div className="grid grid-cols-3 gap-3">
        <AnimatePresence>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={img}
                alt={`Yüklenen ${i + 1}`}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => removeImage(i)}
                className="absolute right-1.5 top-1.5 rounded-full bg-destructive p-1 text-destructive-foreground opacity-0 transition-opacity group-hover:opacity-100"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              {i === 0 && (
                <div className="absolute bottom-1.5 left-1.5 rounded bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                  Ana Görsel
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        {images.length > 0 &&
          Array.from({ length: 3 - images.length }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-border"
            >
              <ImageIcon className="h-6 w-6 text-muted-foreground/40" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageUpload;
