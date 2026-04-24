export function HeroBackgroundVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-[var(--border)]">
      <video
        className="h-full w-full object-cover"
        style={{ opacity: "var(--hero-video-opacity)" }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/hero-lawyer-team.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-video-overlay)" }}
      />
    </div>
  );
}
