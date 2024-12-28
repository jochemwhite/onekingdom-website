import React from 'react';

interface YouTubeBackgroundProps {
  videoId: string;
  children?: React.ReactNode;
}

export function YouTubeBackground({ videoId, children }: YouTubeBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full pt-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: 'scale(1.5)', // Makes the video slightly larger to cover any gaps
            }}
          />
        </div>
        {/* Overlay to dim the video and make content more readable */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content container */}
      <div className="relative z-10 h-screen w-full flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
}