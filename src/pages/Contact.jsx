// src/pages/Contact.jsx

function Contact() {
  return (
    <div className="container py-4">
      <h1 className="mb-3">Contact</h1>

      {/* Info-rutor med uppgiftens text */}
      <div className="row g-4">
        <div className="col-lg-6">
          {/* alert = färdigt meddelandekort; alert-light = ljus variant */}
          <div className="alert alert-light border" role="alert">
            <p className="mb-2"><strong>Home delivery:</strong> All the city of Stockholm and Malmö (additional cost).</p>
            <p className="mb-2"><strong>Pickup:</strong> Via la Costa Avenue. Blue Port gated neighbourhood. We will send you the GPS Location via WhatsApp.</p>
            <p className="mb-0"><strong>Orders:</strong> Place your order 2 days in advance for processing and availability.</p>
          </div>

          <div className="alert alert-light border" role="alert">
            <p className="mb-1"><strong>Opening hours</strong></p>
            <p className="mb-0">Tuesday to Saturday · 9:00–14:00</p>
          </div>

          {/* Direktlänkar */}
          <div className="d-flex gap-2">
            <a href="mailto:munamiicakery@gmail.com" className="btn btn-outline-primary">Email us</a>
            <a href="https://www.instagram.com/munamii.cakery/" target="_blank" rel="noreferrer" className="btn btn-outline-secondary">Instagram</a>
            <a href="https://www.facebook.com/munamiicupcakes/" target="_blank" rel="noreferrer" className="btn btn-outline-secondary">Facebook</a>
          </div>
        </div>

        {/* Kontaktform – BONUS: räcker att se “på riktigt” utan backend */}
        <div className="col-lg-6">
          <form
            className="needs-validation"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              // “Fake submit”: visa en enkel bekräftelse – duger i uppgiften
              alert("Thanks! We'll get back to you soon.");
            }}
          >
            {/* form-label/form-control = Bootstrap-formstil.
                required = enkel HTML5-validering. */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input id="name" type="text" className="form-control" placeholder="Your name" required />
              <div className="invalid-feedback">Please enter your name.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" type="email" className="form-control" placeholder="you@example.com" required />
              <div className="invalid-feedback">Please enter a valid email.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" rows="4" className="form-control" placeholder="Your message..." required />
              <div className="invalid-feedback">Please write a message.</div>
            </div>

            {/* d-flex + gap-2 = horisontell rad av knappar med luft */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">Send</button>
              <button type="reset" className="btn btn-outline-secondary">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
