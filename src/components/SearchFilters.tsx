"use client";

import React from "react";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedCity: string;
  onCityChange: (value: string) => void;
};

const categories = ["Diş", "Estetik", "Saç Ekimi", "Göz", "Ortopedi"];
const cities = ["İstanbul", "Ankara", "Antalya", "İzmir"];

export default function SearchFilters({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedCity,
  onCityChange,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">

      <input
        type="text"
        placeholder="Klinik adı veya şehir..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border border-gray-400 rounded px-4 py-2 w-full md:w-1/3 placeholder-gray-500"
      />

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border border-gray-400 rounded px-4 py-2 w-full md:w-1/4 text-gray-400"
      >
        <option value="">Tüm Kategoriler</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="border border-gray-400 rounded px-4 py-2 w-full md:w-1/4 text-gray-400"
      >
        <option value="">Tüm Şehirler</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
