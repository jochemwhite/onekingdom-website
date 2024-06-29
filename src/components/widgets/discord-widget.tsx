import React from "react";

interface DiscordWidgetProps {
  server_id: string;
}

export default function DiscordWidget({ server_id }: DiscordWidgetProps) {
  return (
    <iframe
      src={`https://discord.com/widget?id=${server_id}&theme=dark`}
      width={500}
      height={500}
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      className="iframe"
    />
  );
}
