import LinkButton from "./LinkButton";

export default function CategoryLinks() {
  return (
    <section className="category-links">
      <CategoryLink
        imgUrl="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        categoryName="Headphones"
        link="/shop/headphones"
      />
      <CategoryLink
        imgUrl="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        categoryName="Speakers"
        link="/shop/speakers"
      />
      <CategoryLink
        imgUrl="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        categoryName="Earphones"
        link="/shop/earphones"
      />
    </section>
  );
}

function CategoryLink({ imgUrl, categoryName, link }: CategoryLinkProps) {
  return (
    <div className="category-link">
      <img src={imgUrl} alt={categoryName} />
      <div className="category-name">
        <h6>{categoryName}</h6>
        <LinkButton to={link} variant="minimal">
          Shop <span>&gt;</span>
        </LinkButton>
      </div>
    </div>
  );
}

type CategoryLinkProps = {
  imgUrl: string;
  categoryName: string;
  link: string;
};
