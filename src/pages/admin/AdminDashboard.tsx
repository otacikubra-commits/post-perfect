import { Users, Building2, LayoutTemplate, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { adminListings, adminUsers, adminTemplates } from "@/data/adminMock";

const AdminDashboard = () => {
  const stats = [
    { label: "Toplam Kullanıcı", value: adminUsers.length, icon: Users },
    { label: "Toplam İlan", value: adminListings.length, icon: Building2 },
    { label: "Şablon", value: adminTemplates.length, icon: LayoutTemplate },
    {
      label: "İndirme",
      value: adminTemplates.reduce((sum, t) => sum + t.downloads, 0),
      icon: Download,
    },
  ];

  const recent = adminListings.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Genel Bakış</h2>
        <p className="text-sm text-muted-foreground">Platform istatistikleri ve son hareketler</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-foreground">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Son İlanlar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recent.map((l) => (
              <div key={l.id} className="flex items-center justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{l.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{l.location}</p>
                </div>
                <Badge variant={l.type === "sale" ? "default" : "secondary"}>
                  {l.type === "sale" ? "Satılık" : "Kiralık"}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">En Çok Kullanılan Şablonlar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[...adminTemplates]
              .sort((a, b) => b.downloads - a.downloads)
              .slice(0, 5)
              .map((t) => (
                <div key={t.id} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{t.name}</span>
                    <span className="text-muted-foreground">{t.downloads}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted">
                    <div
                      className="h-1.5 rounded-full bg-accent"
                      style={{
                        width: `${Math.round(
                          (t.downloads / Math.max(...adminTemplates.map((x) => x.downloads))) * 100,
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
