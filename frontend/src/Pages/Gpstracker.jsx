import { useState } from "react";

export default function Gpstracker() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const startTracking = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        alert(err.message);
        setLoading(false);
      }
    );
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#040d1c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 🔲 DYNAMIC BOX */}
      <div
        style={{
          width: location ? "80%" : "400px",   // ✅ expands after click
          height: location ? "80vh" : "250px", // ✅ expands after click
          transition: "all 0.4s ease",         // 🔥 smooth animation
          border: "1px solid #00cfff",
          borderRadius: "10px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 🔘 BUTTON VIEW */}
        {!location && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h1 style={{ color: "#fff", fontSize: "22px" }}>
              GPS LOCATION
            </h1>

            <button
              onClick={startTracking}
              style={{
                padding: "12px 24px",
                background: "transparent",
                border: "1px solid #00cfff",
                color: "#00cfff",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {loading ? "Getting Location..." : "Start Tracking"}
            </button>
          </div>
        )}

        {/* 🗺️ MAP VIEW */}
        {location && (
          <iframe
            title="map"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
          />
        )}
      </div>
    </div>
  );
}