type ItemCardProps = {
  title: string;
  text: string;
  imageSrc: string;
};

function ItemCard({ title, text, imageSrc }: ItemCardProps) {
  return (
    <div className="card shadow-sm rounded-4 my-5">
      <img src={imageSrc} alt="card image" className="card-img-top" />
      <div className="card-body" style={{ width: "30rem" }}>
        <h2 className="card-title fw-bold fs-3 text-center pb-3">{title}</h2>
        <p className="card-text text-secondary text-center">{text}</p>
      </div>
    </div>
  );
}

export default ItemCard;
