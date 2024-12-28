"use client";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import React, { use, useEffect, useState } from "react";

interface DiscordWidgetProps {
  server_id: string;
}

export default function DiscordWidget({ server_id }: DiscordWidgetProps) {
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);
  const { width: deviceWidth } = useWindowDimensions();

  useEffect(() => {
    if (deviceWidth) {
      if (deviceWidth <= 1280) {
        setHeight(400);
        setWidth(400);
      }
      if (deviceWidth > 1280) {
        setHeight(500);
        setWidth(500);
      }
    }
  }, [height, width, deviceWidth]);

  return (
    <iframe
      src={`https://discord.com/widget?id=${server_id}&theme=dark`}
      width={width}
      height={height}
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      className="iframe bg-black rounded-lg"
    />
  );
}
