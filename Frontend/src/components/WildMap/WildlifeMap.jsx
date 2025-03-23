import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { v4 as uuidv4 } from "uuid";
import ReportSightingForm from "./ReportSightingForm";

const dangerLevelIcons = {
  red: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4215/4215290.png", // Icon for red level
    iconSize: [30, 30],
  }),
  blue: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4641/4641627.png", // Icon for blue level
    iconSize: [30, 30],
  }),
  green: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2551/2551182.png", // Icon for green level (same as blue for now)
    iconSize: [30, 30],
  }),
};

import { biodiversePlaces, endangeredSpeciesAreas } from "./Wildlifedata";
import BiodiversityZones from "./BiodiversityZones";

const animalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  iconSize: [25, 25],
});

const WildlifeMap = () => {
  const [sightings, setSightings] = useState([]);
  const [formLocation, setFormLocation] = useState(null);
  const [formData, setFormData] = useState({ species: "", description: "" });
  const [showForm, setShowForm] = useState(false);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setFormLocation(e.latlng);
      },
    });
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.species) {
      setSightings((prev) => [
        ...prev,
        {
          id: uuidv4(),
          position: formLocation,
          ...formData,
        },
      ]);
      setFormData({ species: "", description: "" });
      setFormLocation(null);
      setShowForm(false); // Hide the form after submitting
    }
  };

  return (
    <div className="w-full h-screen p-4 relative">
      <div className="w-full p-5 h-screen gap-5 flex flex-col md:flex-row rounded-xl bg-green-200">
        {/* Map Section */}
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-4">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            className="h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] w-full rounded-lg shadow-lg z-0"
          >
            <MapClickHandler />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Dynamic Sighting Markers */}
            {sightings.map((item) => (
              <Marker key={item.id} position={item.position} icon={animalIcon}>
                <Popup>
                  <strong>{item.species}</strong>
                  <br />
                  {item.description}
                </Popup>
              </Marker>
            ))}

            {/* Biodiverse Locations */}
            {biodiversePlaces.map((place, index) => (
              <Marker
                key={`bio-${index}`}
                position={place.position}
                icon={dangerLevelIcons[place.iconColor]}
              >
                <Popup>{place.name}</Popup>
              </Marker>
            ))}

            {/* Endangered Species Zones */}
            {endangeredSpeciesAreas.map((zone, index) => (
              <Marker
                key={`danger-${index}`}
                position={zone.position}
                icon={zone.icon}
              >
                <Popup>
                  <strong>{zone.name}</strong>
                  <br />
                  Danger Level:{" "}
                  <span className={`text-${zone.level}-500 font-semibold`}>
                    {zone.level.toUpperCase()}
                  </span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Biodiversity Zones & Report Section */}
        <div className="w-full md:w-1/3 bg-white relative flex flex-col items-center justify-center space-y-5 rounded-lg shadow-lg p-4 overflow-y-auto h-auto md:h-[95vh]">
          <h1 className="text-2xl sm:text-3xl font-kanit text-center">
            Biodiversity Hotspots in India
          </h1>

          <BiodiversityZones />

          {/* Danger Level Indicators */}
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="w-[100px] rounded-full text-center bg-red-500 p-1 text-white">
              Critical
            </div>
            <div className="w-[100px] rounded-full text-center bg-blue-700 p-1 text-white">
              High Priority
            </div>
            <div className="w-[100px] rounded-full text-center bg-green-600 p-1 text-white">
              Good
            </div>
          </div>

          {/* Report Sighting Button */}
          <button
            onClick={() => {
              setFormLocation({ lat: 20.5937, lng: 78.9629 });
              setShowForm(true);
            }}
            className="mt-auto w-[200px] h-10 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Report a Sighting
          </button>
        </div>

        {/* Form as a fixed bottom modal */}
        {showForm && formLocation && (
          <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg z-10 transition-all transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-4">Report a Sighting</h3>
            <ReportSightingForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
            <button
              onClick={() => setShowForm(false)}
              className="mt-3 text-red-600 hover:text-red-800"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WildlifeMap;
