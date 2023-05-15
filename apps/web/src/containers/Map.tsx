import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapContent from "@/components/MapContent";

const Map = () => {
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={4}
            style={{ width: "100%", height: "100%" }}
        >
            <MapContent />
        </MapContainer>
    );
};

export default Map;
