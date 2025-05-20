import React from 'react';

function Location() {
  return (
    <div
      className="location-map"
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "450px",
        margin: "auto"
      }}
    >
      <iframe
        src="https://www.google.com/maps?q=44+Racecourse+Road,+Singapore+218558&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      ></iframe>
    </div>
  );
}

export default Location;
