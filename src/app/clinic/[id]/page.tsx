import { clinics } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import ServiceList from "@/components/ServiceList";
import type { Clinic } from "@/types";


type Props = {
  params: Promise<{ id: string }>;
};


export function generateStaticParams() {
  return clinics.map((clinic) => ({
    id: clinic.id.toString(),
  }));
}


export default async function ClinicDetailPage({ params }: Props) {

  const { id } = await params;
  
  const clinicId = parseInt(id, 10);
  const clinic = clinics.find((c) => c.id === clinicId);

  if (!clinic) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={clinic.image}
            alt={clinic.name}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full"
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-[#0066CC]">{clinic.name}</h1>
          <p className="text-gray-600 mt-2">
            {clinic.city}, {clinic.district}
          </p>
          <p className="mt-4 text-gray-800">{clinic.description}</p>

          <div className="mt-4 text-sm text-black space-y-1">
            <p>
              ⭐ {clinic.rating} ({clinic.reviewCount} yorum)
            </p>
            <p>
              <strong>Kategori:</strong> {clinic.category}
            </p>
            <p>
              <strong>Uzmanlıklar:</strong> {clinic.specialties.join(", ")}
            </p>
            <p>
              <strong>Diller:</strong> {clinic.languages.join(", ")}
            </p>
            <p>
              <strong>Sertifikalar:</strong> {clinic.accreditations.join(", ")}
            </p>
            <p>
              <strong>Fiyat Aralığı:</strong> {clinic.priceRange}
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00CC66] text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
            <button className="bg-[#FF6B35] text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              Randevu Al
            </button>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-[#0066CC] mb-4">Sunulan Hizmetler</h2>
        <ServiceList services={clinic.services} />
      </section>
    </main>
  );
}


export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const clinicId = parseInt(id, 10);
  const clinic = clinics.find((c) => c.id === clinicId);

  if (!clinic) {
    return {
      title: 'Klinik Bulunamadı',
    };
  }

  return {
    title: `${clinic.name} - ${clinic.city}`,
    description: clinic.description,
    keywords: [clinic.category, ...clinic.specialties, clinic.city, clinic.district].join(', '),
  };
}