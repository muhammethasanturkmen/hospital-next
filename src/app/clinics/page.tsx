"use client"
import { useState } from "react";
import { clinics } from "@/lib/data";
import ClinicCard from "@/components/ClinicCard";
import SearchFilters from "@/components/SearchFilters";

export default function ClinicsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredClinics = clinics.filter((clinic) => {
    const matchesSearch =
      clinic.name.toLowerCase().includes(search.toLowerCase()) ||
      clinic.city.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || clinic.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesCity =
      selectedCity === "" || clinic.city.toLowerCase() === selectedCity.toLowerCase();

    return matchesSearch && matchesCategory && matchesCity;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0066CC] mb-6">Tüm Klinikler</h1>


      <SearchFilters
        search={search}
        onSearchChange={setSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
      />


      {filteredClinics.length === 0 ? (
        <p className="text-gray-600">Sonuç bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
      )}
    </main>
  );
}
