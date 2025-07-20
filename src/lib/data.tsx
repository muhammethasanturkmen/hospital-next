
import { Clinic } from "@/types";

export const clinics: Clinic[] = [
  {
    id: 1,
    name: "Acıbadem Maslak Hastanesi",
    category: "Genel Hastane",
    city: "İstanbul",
    district: "Maslak",
    specialties: ["Kalp Cerrahisi", "Onkoloji", "Estetik"],
    rating: 4.8,
    reviewCount: 1250,
    priceRange: "$$",
    image: "/acibadem.webp",
    description: "Uluslararası standartlarda sağlık hizmeti sunar.",
    accreditations: ["JCI", "ISO 9001"],
    languages: ["Türkçe", "İngilizce", "Arapça"],
    services: [
      { name: "Kalp Ameliyatı", priceRange: "15.000€ - 25.000€" },
      { name: "Estetik Rinoplasti", priceRange: "3.000€ - 5.000€" }
    ]
  },
  {
    id: 2,
    name: "Medicana Ankara",
    category: "Ortopedi",
    city: "Ankara",
    district: "Çankaya",
    specialties: ["Ortopedi", "Fizik Tedavi"],
    rating: 4.5,
    reviewCount: 870,
    priceRange: "$",
    image: "/medicana.webp",
    description: "Hasta odaklı modern tedavi imkanları.",
    accreditations: ["ISO 9001"],
    languages: ["Türkçe", "İngilizce"],
    services: [
      { name: "Diz Protezi", priceRange: "8.000€ - 12.000€" },
      { name: "Bel Fıtığı Ameliyatı", priceRange: "5.000€ - 7.000€" }
    ]
  },
  {
    id: 3,
    name: "Estetik Center",
    category: "Estetik",
    city: "İzmir",
    district: "Alsancak",
    specialties: ["Estetik", "Diş", "Saç Ekimi"],
    rating: 4.7,
    reviewCount: 950,
    priceRange: "$$",
    image: "/estetik.webp",
    description: "Güzellik ve özgüven için profesyonel çözümler.",
    accreditations: ["JCI"],
    languages: ["Türkçe", "İngilizce", "Almanca"],
    services: [
      { name: "Burun Estetiği", priceRange: "3.000€ - 4.500€" },
      { name: "Liposuction", priceRange: "2.500€ - 4.000€" }
    ]
  },
  {
    id: 4,
    name: "HairTrans Antalya",
    category: "Saç Ekimi",
    city: "Antalya",
    district: "Lara",
    specialties: ["Saç Ekimi"],
    rating: 4.6,
    reviewCount: 680,
    priceRange: "$",
    image: "/adatip.webp",
    description: "Deneyimli uzmanlar ile saçlarınıza yeniden kavuşun.",
    accreditations: ["ISO 9001"],
    languages: ["Türkçe", "İngilizce", "Fransızca"],
    services: [
      { name: "Fue Saç Ekimi", priceRange: "1.500€ - 2.500€" },
      { name: "DHI Yöntemi", priceRange: "2.000€ - 3.000€" }
    ]
  },
  {
    id: 5,
    name: "Göz Vakfı Hastanesi",
    category: "Göz",
    city: "İstanbul",
    district: "Üsküdar",
    specialties: ["Göz Hastalıkları"],
    rating: 4.9,
    reviewCount: 1340,
    priceRange: "$$",
    image: "/hospital.jpg",
    description: "Göz sağlığınız için en iyi teknolojiler burada.",
    accreditations: ["JCI", "ISO 14001"],
    languages: ["Türkçe", "İngilizce", "Arapça"],
    services: [
      { name: "Lazer Göz Ameliyatı", priceRange: "2.000€ - 3.500€" },
      { name: "Katarakt Operasyonu", priceRange: "1.500€ - 2.500€" }
    ]
  },
  {
    id: 6,
    name: "Dental Smile",
    category: "Diş",
    city: "İzmir",
    district: "Karşıyaka",
    specialties: ["Diş", "Ortodonti"],
    rating: 4.4,
    reviewCount: 420,
    priceRange: "$",
    image: "/park.webp",
    description: "Gülümsemenizi estetik ve sağlıklı hale getirin.",
    accreditations: ["ISO 9001"],
    languages: ["Türkçe", "İngilizce", "İtalyanca"],
    services: [
      { name: "Zirkonyum Kaplama", priceRange: "200€ - 400€" },
      { name: "İmplant", priceRange: "500€ - 800€" }
    ]
  }
];
