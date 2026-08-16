import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { adminTemplates } from "@/data/adminMock";
import { toast } from "sonner";

const AdminTemplates = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(adminTemplates);

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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Şablon Yönetimi</h2>
        <p className="text-sm text-muted-foreground">Tasarım şablonlarını görüntüle ve durumlarını yönet</p>
      </div>

      <Input
        placeholder="Şablon ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-sm"
      />

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Şablon</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Boyut</TableHead>
                <TableHead className="text-right">İndirme</TableHead>
                <TableHead className="text-right">Durum</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((t) => (
                <TableRow key={t.id}>
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
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="py-8 text-center text-muted-foreground">
                    Sonuç bulunamadı
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTemplates;
