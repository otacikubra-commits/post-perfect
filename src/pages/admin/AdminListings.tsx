import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { adminListings } from "@/data/adminMock";
import { toast } from "sonner";

const AdminListings = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(adminListings);

  const filtered = items.filter(
    (l) =>
      l.title.toLowerCase().includes(query.toLowerCase()) ||
      l.location.toLowerCase().includes(query.toLowerCase()),
  );

  const remove = (id: string, title: string) => {
    setItems((prev) => prev.filter((l) => l.id !== id));
    toast.success(`"${title}" silindi`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">İlan Yönetimi</h2>
        <p className="text-sm text-muted-foreground">Oluşturulan emlak ilanlarını görüntüle ve sil</p>
      </div>

      <Input
        placeholder="İlan veya konum ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-sm"
      />

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>İlan</TableHead>
                <TableHead>Konum</TableHead>
                <TableHead>Fiyat</TableHead>
                <TableHead>Tip</TableHead>
                <TableHead>Danışman</TableHead>
                <TableHead className="text-right">İşlem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="font-medium">{l.title}</TableCell>
                  <TableCell className="text-muted-foreground">{l.location}</TableCell>
                  <TableCell className="tabular-nums">{l.price}</TableCell>
                  <TableCell>
                    <Badge variant={l.type === "sale" ? "default" : "secondary"}>
                      {l.type === "sale" ? "Satılık" : "Kiralık"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{l.agent}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="İlanı sil"
                      onClick={() => remove(l.id, l.title)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="py-8 text-center text-muted-foreground">
                    İlan bulunamadı
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

export default AdminListings;
