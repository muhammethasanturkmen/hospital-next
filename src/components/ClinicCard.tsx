"use client";

import Image from "next/image";
import Link from "next/link";
import { Clinic } from "@/types";

type Props = {
  clinic: Clinic;
};

export default function ClinicCard({ clinic }: Props) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
      <Image
        src={clinic.image}
        alt={clinic.name}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#0066CC]">{clinic.name}</h3>
        <p className="text-sm text-gray-600">{clinic.city}, {clinic.district}</p>
        <p className="mt-1 text-sm text-gray-700">
          <span className="font-medium text-[#00CC66]">{clinic.category}</span>
        </p>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          ⭐ {clinic.rating} ({clinic.reviewCount} yorum)
        </div>
        <Link
          href={`/clinic/${clinic.id}`}
          className="inline-block mt-4 bg-[#FF6B35] text-white px-4 py-2 rounded-md text-sm hover:bg-[#e95e2f] transition"
        >
          Detayları Gör
        </Link>
      </div>
    </div>
  );
}
