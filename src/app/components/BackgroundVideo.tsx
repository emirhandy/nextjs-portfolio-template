'use client';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/city_new.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
    </div>
  );
} 