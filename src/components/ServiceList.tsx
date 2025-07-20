import { Clinic } from "@/types";

type Props = {
  services: Clinic["services"];
};

export default function ServiceList({ services }: Props) {
  return (
    <ul className="space-y-3">
      {services.map((service, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-white border p-4 rounded-md shadow-sm"
        >
          <span className="text-gray-500">{service.name}</span>
          <span className="text-[#00CC66] font-medium">{service.priceRange}</span>
        </li>
      ))}
    </ul>
  );
}
