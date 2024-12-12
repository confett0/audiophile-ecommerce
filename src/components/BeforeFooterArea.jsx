export default function BeforeFooterArea() {
  return (
    <section className="area before-footer">
      <div className="text">
        <h2>
          Bringing you the <span className="orange-text">best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture>
      <source
              media="(max-width: 500px)"
              srcSet="../src/assets/shared/mobile/image-best-gear.jpg 500w"
              sizes="500x"
            />
            <source
              media="(max-width: 900px)"
              srcSet="../src/assets/shared/tablet/image-best-gear.jpg 900w"
              sizes="900x"
            />
            <source
              srcSet="../src/assets/shared/desktop/image-best-gear.jpg 1280w"
              sizes="1280px"
            />
            <img src="../src/assets/shared/desktop/image-best-gear.jpg" />
          </picture>
    </section>
  );
}
