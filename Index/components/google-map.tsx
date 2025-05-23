"use client"

import { useEffect, useRef } from "react"

interface GoogleMapProps {
  location: string
}

export function GoogleMap({ location }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Esta función carga el mapa de Google Maps
    const loadGoogleMap = () => {
      // Verificar si el script de Google Maps ya está cargado
      if (!window.google) {
        const script = document.createElement("script")
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
        script.async = true
        script.defer = true

        // Definir la función de callback global
        window.initMap = () => {
          if (mapRef.current) {
            // Coordenadas aproximadas de Santa Ana, Costa Rica
            const santaAna = { lat: 9.9327, lng: -84.1834 }

            const map = new window.google.maps.Map(mapRef.current, {
              center: santaAna,
              zoom: 15,
              styles: [
                {
                  featureType: "all",
                  elementType: "geometry.fill",
                  stylers: [{ weight: "2.00" }],
                },
                {
                  featureType: "all",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#9c9c9c" }],
                },
                {
                  featureType: "all",
                  elementType: "labels.text",
                  stylers: [{ visibility: "on" }],
                },
                {
                  featureType: "administrative",
                  elementType: "all",
                  stylers: [{ visibility: "on" }],
                },
                {
                  featureType: "landscape",
                  elementType: "all",
                  stylers: [{ color: "#f2f2f2" }],
                },
                {
                  featureType: "landscape",
                  elementType: "geometry.fill",
                  stylers: [{ color: "#f2f2f2" }],
                },
                {
                  featureType: "poi",
                  elementType: "all",
                  stylers: [{ visibility: "on" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "all",
                  stylers: [{ visibility: "on" }],
                },
                {
                  featureType: "road",
                  elementType: "all",
                  stylers: [{ saturation: -100 }, { lightness: 45 }],
                },
                {
                  featureType: "road.highway",
                  elementType: "all",
                  stylers: [{ visibility: "simplified" }],
                },
                {
                  featureType: "road.arterial",
                  elementType: "labels.icon",
                  stylers: [{ visibility: "off" }],
                },
                {
                  featureType: "transit",
                  elementType: "all",
                  stylers: [{ visibility: "off" }],
                },
                {
                  featureType: "water",
                  elementType: "all",
                  stylers: [{ color: "#b4d2dc" }, { visibility: "on" }],
                },
              ],
            })

            // Añadir un marcador
            const marker = new window.google.maps.Marker({
              position: santaAna,
              map: map,
              title: "Plaza Obelisco, Santa Ana",
            })

            // Añadir un InfoWindow
            const infoWindow = new window.google.maps.InfoWindow({
              content:
                '<div style="font-weight: bold; color: #1e40af;">Plaza Obelisco</div><div>Santa Ana, Costa Rica</div>',
            })

            marker.addListener("click", () => {
              infoWindow.open(map, marker)
            })
          }
        }

        document.head.appendChild(script)
      } else if (mapRef.current && window.google?.maps) {
        // Si el script ya está cargado, inicializar el mapa directamente
        // Coordenadas aproximadas de Santa Ana, Costa Rica
        const santaAna = { lat: 9.9327, lng: -84.1834 }

        const map = new window.google.maps.Map(mapRef.current, {
          center: santaAna,
          zoom: 15,
        })

        // Añadir un marcador
        const marker = new window.google.maps.Marker({
          position: santaAna,
          map: map,
          title: "Plaza Obelisco, Santa Ana",
        })

        // Añadir un InfoWindow
        const infoWindow = new window.google.maps.InfoWindow({
          content:
            '<div style="font-weight: bold; color: #1e40af;">Plaza Obelisco</div><div>Santa Ana, Costa Rica</div>',
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })
      }
    }

    loadGoogleMap()

    // Cleanup
    return () => {
      // Eliminar la función global cuando el componente se desmonte
      if (window.initMap) {
        delete window.initMap
      }
    }
  }, [location])

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-50 p-4 z-10">
        <div className="mb-4 text-center">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Plaza Obelisco, Santa Ana</h3>
          <p className="text-sm text-gray-600">Para ver el mapa interactivo completo, haga clic en el botón de abajo</p>
        </div>
        <a
          href="https://maps.google.com/?q=WQQW%2BGMH"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Ver en Google Maps
        </a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8!2d-84.1834!3d9.9327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zV1FRVytHTUg!5e0!3m2!1sen!2sus!4v1621436289123!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      ></iframe>
    </div>
  )
}

// Extender el objeto Window para incluir la función initMap
declare global {
  interface Window {
    initMap: () => void
    google: any
  }
}
