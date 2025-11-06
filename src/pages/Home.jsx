// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  // PUBLIC_URL säkrar att bilden hittas både lokalt och när du publicerar (t.ex. GitHub Pages)
  const heroImg = process.env.PUBLIC_URL + "/images/cupcakes/mixed-cupcakes.jpeg";

  return (
    // container = centrerad maxbredd + sidomarginaler. py-4 = "padding-y: 1.5rem" (vertikal luft)
    <div className="container py-4">

      {/* row = starta en "grid-rad". align-items-center = vertikalt centrera kolumnerna.
          g-4 = gap 1.5rem mellan kolumner/rader i denna rad */}
      <div className="row align-items-center g-4">

        {/* col-lg-6 = kolumn som tar 6/12 (halva bredden) på ≥992px.
            Utan prefix (bara "col") staplas den fullbredd på mobil.  */}
        <div className="col-lg-6">
          {/* h1 = semantisk rubrik. mb-3 = margin-bottom 1rem */}
          <h1 className="mb-3">Welcome to Munamii Cakery!</h1>

          {/* lead = lite större/ljusare brödtext för att framhäva "ingress".
              (Lead finns i Bootstrap typografi) */}
          <p className="lead">
            We offer you the most delicious cakes and cupcakes for all kinds of
            events and celebrations. Browse around to discover what you would like to buy.
          </p>

          {/* d-flex = flexbehållare. gap-2 = mellanrum mellan knapparna.
              mt-3 = margin-top 1rem för luft mot texten ovan. */}
          <div className="d-flex gap-2 mt-3">
            {/* btn btn-primary = primär knapp-stil.
                Link (react-router) + className istället för <a> för SPA-navigering. */}
            <Link to="/products" className="btn btn-primary">
              Browse products
            </Link>

            {/* btn btn-outline-secondary = sekundär knapp med outline-stil */}
            <Link to="/about" className="btn btn-outline-secondary">
              About us
            </Link>
          </div>
        </div>

        {/* Bildkolumn – samma breddregler som ovan (col-lg-6) */}
        <div className="col-lg-6">
          {/* img-fluid = max-width:100% + height:auto → bilden blir responsiv.
              rounded = rundade hörn.
              style objectFit: "contain" gör att hela bilden syns (ingen beskärning). */}
          <img
            src={heroImg}
            alt="Assorted cupcakes from Munamii Cakery"
            className="img-fluid rounded"
            style={{ objectFit: "contain", width: "100%" }}
          />
        </div>
      </div>

      {/* alert = färdig informationsruta. alert-light = ljus variant.
          border = tunn kant. mt-5 = luft ovanför sektionen. role="alert" för a11y. */}
      <div className="alert alert-light border mt-5" role="alert">
        Home delivery: Stockholm & Malmö (extra cost). Orders must be placed{" "}
        <strong>2 days in advance</strong> for availability. Opening hours:
        Tuesday–Saturday, 9:00–14:00.
      </div>
    </div>
  );
}

export default Home;
