import React from "react";

export default function Video({ src }) {
  const swatch = src.split("/")[5];
  return (
    <div
      className={`wistia_embed wistia_async_${swatch} videoFoam=true`}
      style={{ height: "100%", position: "relative", width: "100%" }}
    >
      <div
        className="wistia_swatch"
        style={{
          height: "100%",
          left: 0,
          opacity: 0,
          overflow: "hidden",
          position: "absolute",
          top: 0,
          transition: "opacity 250ms",
          width: "50%"
        }}
      >
        <img
          src={src}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain"
          }}
          alt=""
        />
      </div>
    </div>
  );
}
