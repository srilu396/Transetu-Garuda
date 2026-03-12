import React from "react";

const clients = [
  { name: "Mining Logistics", logo: "/placeholder.svg" },
  { name: "FastWay Trans", logo: "/placeholder.svg" },
  { name: "Global Fleet", logo: "/placeholder.svg" },
  { name: "Safe Move", logo: "/placeholder.svg" },
  { name: "Urban Cargo", logo: "/placeholder.svg" },
  { name: "Heavy Haul", logo: "/placeholder.svg" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Garuda Technology powers small to enterprise-level fleets across multiple industries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale transition-all hover:opacity-100">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center h-12">
              <span className="text-xl font-bold text-muted-foreground">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
