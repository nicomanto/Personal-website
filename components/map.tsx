'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from './language-provider'; // Import your hook
import { personalInfo } from '@/lib/data';

// Custom Animated "Ping" Icon
const createPingIcon = (label: string) => L.divIcon({
  className: 'custom-icon',
  html: `
    <div class="relative group/marker">
      <!-- Ping Animation -->
      <div class="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
      <!-- Solid Center -->
      <div class="relative w-4 h-4 bg-blue-500 rounded-full border-2 border-neutral-950 shadow-lg shadow-blue-500/50"></div>
      <!-- Label that appears on hover -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 border border-neutral-800 text-[10px] text-white rounded opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ${label}
      </div>
    </div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export default function MapComponent() {
  const { t } = useLanguage(); // Initialize translation hook
  // Coordinates for the two cities
  const locations = [
    { id: 1, name: "Mantova", position: [45.156, 10.791] as [number, number] },
    { id: 2, name: "Padova", position: [45.406, 11.876] as [number, number] }
  ];

  // Calculate bounds to fit both markers automatically
  const bounds = L.latLngBounds(locations.map(loc => loc.position));

  return (
    <div className="relative h-80 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
      <MapContainer 
        bounds={bounds} // This automatically sets center and zoom
        boundsOptions={{ padding: [50, 50] }} // Adds space around the markers
        zoomControl={false}
        scrollWheelZoom={false}
        className="h-full w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {locations.map((loc) => (
          <Marker 
            key={loc.id} 
            position={loc.position} 
            icon={createPingIcon(loc.name)} 
          />
        ))}
      </MapContainer>

      {/* Overlay Info Card */}
      <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-950/80 backdrop-blur-md rounded-xl border border-neutral-800 z-[1000] pointer-events-none">
        <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">{t('contact_map_title')} {/* "Operating Areas" */}</p>
        <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-white">{personalInfo.location}</p>
            <span className="text-[10px] text-neutral-500 italic"> {t('contact_map_distance')} {/* "Approx. 90km apart" */}</span>
        </div>
      </div>
    </div>
  );
}