import { useState } from "react";
import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TemplateThumb from "@/components/admin/TemplateThumb";
import { adminTemplates, AdminTemplate } from "@/data/adminMock";
import { toast } from "sonner";

const parseSize = (size: string) => {
  const [w, h] = size.split("×").map((n) => parseInt(n, 10));
  return { width: w || 1080, height: h || 1080 };
};

const AdminTemplates = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(adminTemplates);
  const [preview, setPreview] = useState<AdminTemplate | null>(null);

  const filtered = items.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()));

  const toggle = (id: string) => {
    setItems((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        toast.success(`${t.name} ${t.active ? "pasifleştirildi" : "aktifleştirildi"}`);
        return { ...t, active: !t.active };
      }),
    );
  };

  const renderGrid = (list: AdminTemplate[]) => (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {list.map((t) => {
        const { width, height } = parseSize(t.size);
        return (
          <Card key={t.id} className="overflow-hidden">
            <button
              type="button"
              onClick={() => setPreview(t)}
              className="group block w-full bg-muted/40 p-3 text-left"
              aria-label={`${t.name} önizlemesini büyüt`}
            >
              <div className="mx-auto w-fit transition-transform group-hover:scale-[1.02]">
                <TemplateThumb templateId={t.id} width={width} height={height} previewWidth={190} />
              </div>
            </button>
            <CardContent className="space-y-2 p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.size} · {t.downloads} indirme
                  </p>
                </div>
                <Switch checked={t.active} onCheckedChange={() => toggle(t.id)} />
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2" onClick={() => setPreview(t)}>
                <Eye className="h-3.5 w-3.5" />
                Önizle
              </Button>
            </CardContent>
          </Card>
        );
      })}
      {list.length === 0 && (
        <p className="col-span-full py-8 text-center text-muted-foreground">Sonuç bulunamadı</p>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Şablon Yönetimi</h2>
        <p className="text-sm text-muted-foreground">
          Tasarım şablonlarını önizle ve durumlarını yönet
        </p>
      </div>

      <Input
        placeholder="Şablon ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-sm"
      />

      <Tabs defaultValue="social">
        <TabsList>
          <TabsTrigger value="social">Sosyal Medya</TabsTrigger>
          <TabsTrigger value="cards">Kartvizit</TabsTrigger>
          <TabsTrigger value="list">Liste</TabsTrigger>
        </TabsList>

        <TabsContent value="social">
          {renderGrid(filtered.filter((t) => t.category === "Sosyal Medya"))}
        </TabsContent>
        <TabsContent value="cards">
          {renderGrid(filtered.filter((t) => t.category === "Kartvizit"))}
        </TabsContent>

        <TabsContent value="list">
          <Card className="mt-4">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">Önizleme</TableHead>
                    <TableHead>Şablon</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Boyut</TableHead>
                    <TableHead className="text-right">İndirme</TableHead>
                    <TableHead className="text-right">Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((t) => {
                    const { width, height } = parseSize(t.size);
                    return (
                      <TableRow key={t.id}>
                        <TableCell>
                          <button type="button" onClick={() => setPreview(t)} aria-label={`${t.name} önizle`}>
                            <TemplateThumb templateId={t.id} width={width} height={height} previewWidth={84} />
                          </button>
                        </TableCell>
                        <TableCell className="font-medium">{t.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{t.category}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{t.size}</TableCell>
                        <TableCell className="text-right tabular-nums">{t.downloads}</TableCell>
                        <TableCell className="text-right">
                          <Switch checked={t.active} onCheckedChange={() => toggle(t.id)} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {filtered.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="py-8 text-center text-muted-foreground">
                        Sonuç bulunamadı
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {preview?.name} <span className="text-sm font-normal text-muted-foreground">({preview?.size})</span>
            </DialogTitle>
          </DialogHeader>
          {preview && (
            <div className="flex max-h-[70vh] justify-center overflow-auto">
              <TemplateThumb
                templateId={preview.id}
                width={parseSize(preview.size).width}
                height={parseSize(preview.size).height}
                previewWidth={parseSize(preview.size).height > parseSize(preview.size).width ? 340 : 460}
              />
            </div>
          )}
          <p className="text-xs text-muted-foreground">Önizlemeler örnek verilerle gösterilir.</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminTemplates;
