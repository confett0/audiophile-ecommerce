import { Link } from "react-router-dom";

export default function CategoryLinks() {
  return (
    <section className="category-links">
      <CategoryLink
        imgUrl="../src/assets/shared/desktop/image-category-thumbnail-headphones.png"
        categoryName="Headphones"
      />
      <CategoryLink
        imgUrl="../src/assets/shared/desktop/image-category-thumbnail-speakers.png"
        categoryName="Speakers"
      />
      <CategoryLink
        imgUrl="../src/assets/shared/desktop/image-category-thumbnail-earphones.png"
        categoryName="Earphones"
      />
    </section>
  );
}

function CategoryLink({ imgUrl, categoryName, link }) {
  return (
    <div className="category-link">
      <img src={imgUrl} />
      <div className="category-name">
        <h6>{categoryName}</h6>
        <button className="minimal">Shop <span>&gt;</span></button>
      </div>
    </div>
  );
}
