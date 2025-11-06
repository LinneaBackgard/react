// src/pages/Products.jsx
function Products() {
  const cupcakes = [
    { src: "/images/cupcakes/baby-cupcakes.jpeg",  title: "Baby",     price: "45 kr",  alt: "Cupcake med babymotiv" },
    { src: "/images/cupcakes/cherry-on-top.jpeg",  title: "Körsbär",  price: "45 kr",  alt: "Cupcake med körsbär" },
    { src: "/images/cupcakes/christmas-cupcakes.jpeg", title: "Jul",  price: "45 kr",  alt: "Cupcake med jul" },
    { src: "/images/cupcakes/flower-cupcakes.jpeg", title: "Bukett",  price: "45 kr",  alt: "Cupcake som bukett" },
    { src: "/images/cupcakes/mixed-cupcakes.jpeg", title: "Blandade", price: "45 kr",  alt: "Cupcake med rosa blommor" },
    { src: "/images/cupcakes/pink-cupcake.jpeg",   title: "Rosa",     price: "45 kr",  alt: "Cupcake lila tema" },
    { src: "/images/cupcakes/sugar-plum-fairy-cupcakes.jpeg", title: "Fairy", price: "45 kr", alt: "Cupcake med hjärtmotiv" },
    { src: "/images/cupcakes/wedding-cupcakes.jpeg", title: "Bröllop", price: "45 kr", alt: "Cupcake med smiley" },
  ];

  const weddingCakes = [
    { src: "/images/weddingcakes/bird-weddingcake.jpeg",       title: "Fågel",        price: "fr. 1100 kr", alt: "Bröllopstårta blå blomma" },
    { src: "/images/weddingcakes/blossom-weddingcake.jpeg",    title: "Tårta + cupcakes", price: "fr. 1200 kr", alt: "Bröllopstårta med cupcakes" },
    { src: "/images/weddingcakes/flower-sandwich.jpeg",        title: "Klassisk",     price: "fr. 950 kr",  alt: "Klassisk bröllopstårta" },
    { src: "/images/weddingcakes/galaxy-weddingcake.jpeg",     title: "Blommor",      price: "fr. 1200 kr", alt: "Bröllopstårta med blommor" },
    { src: "/images/weddingcakes/orange-flower-weddingcake.jpeg", title: "Monte",     price: "fr. 1300 kr", alt: "Bröllopstårta Monte" },
    { src: "/images/weddingcakes/peachy-weddingcake.jpeg",     title: "Rosa rosor",   price: "fr. 1200 kr", alt: "Bröllopstårta rosa rosor" },
    { src: "/images/weddingcakes/rustic-weddingcake.jpeg",     title: "Vit blomma",   price: "fr. 1200 kr", alt: "Bröllopstårta vit blomma" },
    { src: "/images/weddingcakes/watercolour-weddingcake.jpeg", title: "Macarons",    price: "fr. 1300 kr", alt: "Bröllopstårta med macarons" },
  ];

  // Liten hjälpare så vi slipper skriva PUBLIC_URL överallt
  const imgUrl = (path) => `${process.env.PUBLIC_URL}${path}`;

const SimpleGrid = ({ items }) => (
  <div className="row g-3">
    {items.map((p, i) => (
      <div key={i} className="col-6 col-md-4 col-lg-3">
        <div className="card h-100">
          <img
            src={imgUrl(p.src)}
            alt={p.alt}
            loading="lazy"
            className="thumb"
          />
          <div className="card-body">
            <h3 className="h6 mb-1">{p.title}</h3>
            <p className="mb-0 fw-semibold">{p.price}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);



  return (
    <div className="container py-4">
      <h1 className="mb-4">Products</h1>

      <section className="mb-5">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <h2 className="h4 mb-0">Cupcakes</h2>
          <span className="text-muted small">Beställ 2 dagar i förväg</span>
        </div>
        <SimpleGrid items={cupcakes} />
      </section>

      <section className="mb-4">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <h2 className="h4 mb-0">Wedding cakes</h2>
          <span className="text-muted small">Hemleverans i Stockholm & Malmö</span>
        </div>
        <SimpleGrid items={weddingCakes} />
      </section>
    </div>
  );
}

export default Products;