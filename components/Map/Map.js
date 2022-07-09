import React from "react";

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.58409038293!2d55.980955115020734!3d25.75126418364154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef677104e8d0be5%3A0x2c3558ded9d18d96!2sOrigin%20Craft!5e0!3m2!1sen!2sin!4v1630321330113!5m2!1sen!2sin"
        width="100%"
        height="550"
        options={{
          style: [
            {
              featureType: "all",
              elementType: "all",
              stylers: [
                {
                  invert_lightness: true,
                },
                {
                  saturation: 10,
                },
                {
                  lightness: 30,
                },
                {
                  gamma: 0.5,
                },
                {
                  hue: "#435158",
                },
              ],
            },
          ],
        }}
        // allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
