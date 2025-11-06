// src/pages/About.jsx

function About() {
  const hero = process.env.PUBLIC_URL + "/images/weddingcakes/rustic-weddingcake.jpeg";

  return (
    // container = centrerad maxbredd + sidomarginaler. py-4 = vertikal padding
    <div className="container py-4">
      {/* Rad med två kolumner: text + bild */}
      <div className="row g-4 align-items-center">
        {/* col-lg-6 = 50% bredd på stora skärmar, 100% på mobil */}
        <div className="col-lg-6">
          {/* h1 + mb-3: stor rubrik med bottenmarginal */}
          <h1 className="mb-3">About Munamii Cakery</h1>

          {/* lead = större, mjukare brödtext (Bootstrap-typografi) */}
          <p className="lead">
            At Munamii Cakery, each cake, each box of cupcakes that we make has a very special value for us.
            We not only want to bring a dessert to your table but rather a unique experience for you,
            which will become an unforgettable memory.
          </p>

          <p>
            We have been in the pastry market for more than 8 years and now we offer you a new way to shop
            through our website.
          </p>

          {/* Liten “info-kort” med ljus bakgrund */}
          <div className="p-3 border rounded bg-light">
            <strong>What we care about:</strong>
            <ul className="mb-0">
              <li>Quality ingredients</li>
              <li>Beautiful presentation</li>
              <li>Friendly, reliable service</li>
            </ul>
          </div>
        </div>

        {/* Bildkolumn */}
        <div className="col-lg-6">
          {/* img-fluid = responsiv bild; rounded = rundade hörn */}
          <img
            src={hero}
            alt="A selection of Munamii wedding cakes"
            className="img-fluid rounded"
            style={{ objectFit: "cover", width: "100%", maxHeight: 380 }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
