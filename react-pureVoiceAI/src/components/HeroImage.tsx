function HeroImage({ backgroundUrl }: { backgroundUrl: string }) {
  return (
    <div
      className="py-5"
      style={{
        backgroundImage: "url(${backgroundUrl})",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

export default HeroImage;
