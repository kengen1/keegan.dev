import React from "react";

interface SpotifyEmbedProps {
  playlistUrl: string;
  width?: string | number;
  height?: string | number;
  theme?: "0" | "1";
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
  playlistUrl,
  width = "100%",
  height = 352,
  theme = "0",
}) => {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={`${playlistUrl}?utm_source=generator&theme=${theme}`}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbed;
