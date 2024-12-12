import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function CategoryLinks({ closeNav }) {
  return (
    <section className="category-links">
      <CategoryLink
        imgUrl="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        categoryName="Headphones"
        link="/shop/headphones"
        closeNav={closeNav}
      />
      <CategoryLink
        imgUrl="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        categoryName="Speakers"
        link="/shop/speakers"
        closeNav={closeNav}
      />
      <CategoryLink
        imgUrl="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        categoryName="Earphones"
        link="/shop/earphones"
        closeNav={closeNav}
      />
    </section>
  );
}

function CategoryLink({ imgUrl, categoryName, link, closeNav }) {
  return (
    <div className="category-link">
      <img src={imgUrl} />
      <div className="category-name">
        <h6>{categoryName}</h6>
        <Link to={link}>
          <button onClick={closeNav} className="minimal">
            Shop <span>&gt;</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

CategoryLinks.propTypes = {
  closeNav: PropTypes.func,
}

CategoryLink.propTypes = {
  imgUrl: PropTypes.string,
  categoryName: PropTypes.string,
  link: PropTypes.string,
  closeNav: PropTypes.func,
}
