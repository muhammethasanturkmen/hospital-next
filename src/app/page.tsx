import { clinics } from "@/lib/data";
import ClinicCard from "@/components/ClinicCard";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const featuredClinics = clinics.slice(0, 6);

  return (
    <main className="bg-gray-100">
      <section className="bg-[#0066CC] text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Türkiye’de Sağlık Turizmi</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Türkiye’nin önde gelen kliniklerinde profesyonel sağlık hizmetleri. Hemen keşfedin!
        </p>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#0066CC] mb-6">Öne Çıkan Klinikler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredClinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl font-semibold text-[#0066CC] mb-6 text-center">
          Popüler Tedavi Kategorileri
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Diş", "Estetik", "Saç Ekimi", "Göz", "Ortopedi"].map((category) => (
            <div
              key={category}
              className="bg-white border border-[#00CC66] text-[#00CC66] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#00CC66] hover:text-white transition"
            >
              {category}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
