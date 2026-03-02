import React, { useEffect } from "react";

const FlourishEmbed = ({ visualizationId }) => {
  useEffect(() => {
    // load Flourish script dynamically
    const script = document.createElement("script");
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);
    // console.log(visualizationId);
  }, []);

  return (
    <div
      className="flourish-embed flourish-chart"
      data-src={`visualisation/${visualizationId}`}
      style={{ width: "100%" }}
    />
  );
};

export default FlourishEmbed;