export type AdminTemplate = {
  id: string;
  name: string;
  category: "Sosyal Medya" | "Kartvizit";
  size: string;
  downloads: number;
  active: boolean;
};

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Emlakçı" | "Üye";
  status: "Aktif" | "Pasif";
  joined: string;
};

export type AdminListing = {
  id: string;
  title: string;
  location: string;
  price: string;
  type: "sale" | "rent";
  agent: string;
  createdAt: string;
};

export const adminTemplates: AdminTemplate[] = [
  { id: "t1", name: "Karousel", category: "Sosyal Medya", size: "1080×1080", downloads: 412, active: true },
  { id: "t2", name: "Lüks Koyu", category: "Sosyal Medya", size: "1080×1080", downloads: 358, active: true },
  { id: "t3", name: "Klasik Mavi", category: "Sosyal Medya", size: "1080×1080", downloads: 297, active: true },
  { id: "t4", name: "Çoklu Görsel", category: "Sosyal Medya", size: "1080×1080", downloads: 264, active: true },
  { id: "t5", name: "Geometrik", category: "Sosyal Medya", size: "1080×1080", downloads: 188, active: true },
  { id: "t6", name: "Navy Gold", category: "Sosyal Medya", size: "1080×1350", downloads: 143, active: true },
  { id: "t7", name: "Emlakçı Vitrin", category: "Sosyal Medya", size: "1080×1350", downloads: 121, active: false },
  { id: "t8", name: "Kırmızı Eğri", category: "Kartvizit", size: "1050×600", downloads: 96, active: true },
  { id: "t9", name: "Fotoğraflı Mavi", category: "Kartvizit", size: "1050×600", downloads: 84, active: true },
  { id: "t10", name: "Koyu Elmas", category: "Kartvizit", size: "1050×600", downloads: 61, active: true },
  { id: "t11", name: "Mavi Diagonal", category: "Kartvizit", size: "1050×600", downloads: 47, active: true },
];

export const adminUsers: AdminUser[] = [
  { id: "u1", name: "Murat Tatar", email: "murat@emlakstudio.com", role: "Admin", status: "Aktif", joined: "12.01.2026" },
  { id: "u2", name: "Ayşe Yılmaz", email: "ayse@remax.com", role: "Emlakçı", status: "Aktif", joined: "03.02.2026" },
  { id: "u3", name: "Kemal Demir", email: "kemal@century21.com", role: "Emlakçı", status: "Aktif", joined: "18.02.2026" },
  { id: "u4", name: "Elif Kaya", email: "elif@gmail.com", role: "Üye", status: "Pasif", joined: "27.02.2026" },
  { id: "u5", name: "Serkan Aydın", email: "serkan@turyap.com", role: "Emlakçı", status: "Aktif", joined: "09.03.2026" },
  { id: "u6", name: "Zeynep Şahin", email: "zeynep@gmail.com", role: "Üye", status: "Aktif", joined: "21.04.2026" },
];

export const adminListings: AdminListing[] = [
  { id: "l1", title: "Deniz Manzaralı 3+1 Daire", location: "Kadıköy, İstanbul", price: "8.500.000 ₺", type: "sale", agent: "Ayşe Yılmaz", createdAt: "22.05.2026" },
  { id: "l2", title: "Merkezi Konumda 2+1", location: "Çankaya, Ankara", price: "22.000 ₺/ay", type: "rent", agent: "Kemal Demir", createdAt: "20.05.2026" },
  { id: "l3", title: "Müstakil Villa + Havuz", location: "Çeşme, İzmir", price: "24.750.000 ₺", type: "sale", agent: "Serkan Aydın", createdAt: "18.05.2026" },
  { id: "l4", title: "Öğrenciye Uygun 1+1", location: "Nilüfer, Bursa", price: "11.500 ₺/ay", type: "rent", agent: "Ayşe Yılmaz", createdAt: "15.05.2026" },
  { id: "l5", title: "Sıfır Rezidans 4+1", location: "Ataşehir, İstanbul", price: "15.900.000 ₺", type: "sale", agent: "Kemal Demir", createdAt: "11.05.2026" },
  { id: "l6", title: "Bahçe Katı 3+1", location: "Muratpaşa, Antalya", price: "6.200.000 ₺", type: "sale", agent: "Serkan Aydın", createdAt: "05.05.2026" },
];
