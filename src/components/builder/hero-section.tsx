import { ReactNode } from "react";

export default function HeroSection({
  children,
  image,
  video,
}: {
  children: ReactNode;
  image?: string;
  video?: string;
}) {
  return (
    <div className="flex min-h-svh py-24 relative w-full">
      <div className="absolute top-0 left-0 w-full bottom-0 bg-red-300 overflow-hidden">
        {image && <img src={image} className="w-full" />}
        {video && !image && (
          <video
            autoPlay
            muted
            className="absolute bottom-0 top-0 right-0 left-0"
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="container flex flex-1 flex-col items-center justify-between relative">
        {children}
      </div>
    </div>
  );
}
