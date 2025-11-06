// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} Munamii Cakery</div>

      {/* nav är semantiskt bra för länklista; aria-label för skärmläsare */}
      <nav className="social-links" aria-label="Social links">
        <a
          href="https://www.instagram.com/munamii.cakery/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/munamiicupcakes/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          Facebook
        </a>
        <a
          href="mailto:munamiicakery@gmail.com"
          className="social-link"
        >
          Email us
        </a>
      </nav>
    </footer>
  );
}
