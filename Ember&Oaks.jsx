import { useState, useEffect } from "react";
import {
  NAV_LINKS,
  HERO,
  ABOUT,
  MENU_ITEMS,
  EXPERIENCE,
  GALLERY_IMAGES,
  CONTACT,
  GUEST_OPTIONS,
  FOOTER_LINKS,
  handleAnchorClick,
  validateReservation,
  initialFormState,
} from "./data.js";

const C = {
  gold:       "#e8b96a",
  amber:      "#c9913d",
  dark:       "#1a0f08",
  darkText:   "#3b2314",
  body:       "#2c1a0e",
  muted:      "#7a6655",
  bg:         "#faf7f2",
  cream:      "#f5efe6",
  white:      "#ffffff",
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position:        "fixed",
    top:             0,
    left:            0,
    right:           0,
    zIndex:          100,
    backgroundColor: scrolled
      ? "rgba(26,15,8,0.98)"
      : "rgba(26,15,8,0.95)",
    display:         "flex",
    justifyContent:  "space-between",
    alignItems:      "center",
    padding:         "0 60px",
    height:          "70px",
    borderBottom:    `1px solid rgba(201,145,61,0.2)`,
    transition:      "background-color 0.3s",
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div style={{ fontSize: "1.5rem", fontWeight: 700, color: C.gold, fontStyle: "italic", letterSpacing: 2 }}>
        <em>Ember</em>{" "}
        <span style={{ color: C.white, fontStyle: "italic" }}>&amp; Oak</span>
      </div>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={handleAnchorClick}
              style={{ color: C.white, fontSize: "0.82rem", letterSpacing: 2, textTransform: "uppercase", textDecoration: "none", fontFamily: "Trebuchet MS, sans-serif" }}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#reserve"
            onClick={handleAnchorClick}
            style={{
              backgroundColor: C.amber,
              color:           C.white,
              padding:         "9px 22px",
              borderRadius:    10,
              fontWeight:      600,
              fontSize:        "0.82rem",
              letterSpacing:   2,
              textTransform:   "uppercase",
              textDecoration:  "none",
              fontFamily:      "Trebuchet MS, sans-serif",
            }}
          >
            Reserve a Table
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      style={{
        position:       "relative",
        height:         "100vh",
        minHeight:      600,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        textAlign:      "center",
        overflow:       "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position:           "absolute",
          inset:              0,
          backgroundImage:    `url(${HERO.bgImage})`,
          backgroundSize:     "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position:   "absolute",
          inset:      0,
          background: "linear-gradient(to bottom, rgba(20,10,4,0.55), rgba(20,10,4,0.45) 50%, rgba(20,10,4,0.75))",
        }}
      />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 700, padding: "0 24px" }}>
        <span
          style={{
            display:       "inline-block",
            fontFamily:    "Trebuchet MS, sans-serif",
            fontSize:      "0.72rem",
            letterSpacing: 5,
            textTransform: "uppercase",
            color:         C.gold,
            marginBottom:  20,
            borderBottom:  `1px solid rgba(232,185,106,0.4)`,
            paddingBottom: 8,
          }}
        >
          {HERO.eyebrow}
        </span>
        <h1
          style={{
            fontSize:     "5rem",
            fontWeight:   400,
            color:        C.white,
            lineHeight:   1.0,
            letterSpacing: -1,
            marginBottom: 10,
          }}
        >
          Where Every <em style={{ fontStyle: "italic", color: C.gold }}>Meal</em>
          <br />Tells a Story
        </h1>
        <p
          style={{
            fontSize:   "1.1rem",
            color:      "rgba(255,255,255,0.75)",
            lineHeight: 1.8,
            margin:     "20px auto 36px",
            maxWidth:   480,
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          {HERO.subheading}
        </p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
          <a href="#reserve" onClick={handleAnchorClick} style={btnPrimary}>
            Reserve a Table
          </a>
          <a href="#menu" onClick={handleAnchorClick} style={btnOutline}>
            View Our Menu
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      style={{
        display:             "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight:           560,
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <img
          src={ABOUT.image}
          alt={ABOUT.imageAlt}
          style={{ width: "100%", height: "100%", minHeight: 500, objectFit: "cover", display: "block" }}
        />
      </div>
      <div
        style={{
          backgroundColor: C.dark,
          color:           C.white,
          padding:         "80px 70px",
          display:         "flex",
          flexDirection:   "column",
          justifyContent:  "center",
        }}
      >
        <SectionLabel color={C.amber}>{ABOUT.label}</SectionLabel>
        <h2 style={{ fontSize: "2.8rem", fontWeight: 400, lineHeight: 1.2, marginBottom: 24, color: C.white }}>
          Passion on<br />Every <em style={{ color: C.gold }}>Plate</em>
        </h2>
        {ABOUT.body.map((para, i) => (
          <p
            key={i}
            style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 16 }}
          >
            {para}
          </p>
        ))}
        <div
          style={{
            display:     "flex",
            gap:         36,
            marginTop:   36,
            paddingTop:  36,
            borderTop:   "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {ABOUT.stats.map((s) => (
            <div key={s.label}>
              <h3 style={{ fontSize: "2rem", color: C.gold, fontWeight: 400 }}>{s.value}</h3>
              <p style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.75rem", letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" style={{ backgroundColor: C.white, padding: "100px 60px" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <SectionLabel color={C.amber}>Culinary Selections</SectionLabel>
        <h2 style={{ fontSize: "3rem", fontWeight: 400, color: C.darkText, lineHeight: 1.2 }}>
          Our Signature <em style={{ color: C.amber }}>Menu</em>
        </h2>
        <p style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.95rem", color: C.muted, marginTop: 14, lineHeight: 1.7 }}>
          Seasonal dishes crafted fresh daily by our award-winning culinary team.
        </p>
        <div style={{ width: 60, height: 1, backgroundColor: C.amber, margin: "16px auto 0" }} />
      </div>

      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap:                 28,
          maxWidth:            1100,
          margin:              "0 auto",
        }}
      >
        {MENU_ITEMS.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function MenuCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#ebebeb",
        borderRadius:    10,
        overflow:        "hidden",
        boxShadow:       hovered
          ? "0 12px 36px rgba(59,35,20,0.15)"
          : "0 2px 20px rgba(59,35,20,0.08)",
        transform:       hovered ? "translateY(-6px)" : "translateY(0)",
        transition:      "transform 0.25s, box-shadow 0.25s",
      }}
    >
      <div style={{ height: 220, overflow: "hidden" }}>
        <img src={item.image} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div style={{ padding: "22px 24px 26px" }}>
        <div style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.66rem", letterSpacing: 2.5, textTransform: "uppercase", color: C.amber, marginBottom: 8 }}>
          {item.tag}
        </div>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: C.darkText, marginBottom: 8 }}>{item.name}</h3>
        <p style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.85rem", color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>{item.desc}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "1.1rem", fontWeight: 700, color: C.amber }}>{item.price}</span>
          <a
            href="#reserve"
            onClick={handleAnchorClick}
            style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.72rem", letterSpacing: 1.5, textTransform: "uppercase", color: C.darkText, borderBottom: "1px solid black", paddingBottom: 2, textDecoration: "none" }}
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

function ExperienceBanner() {
  return (
    <section
      style={{
        position:       "relative",
        height:         500,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        textAlign:      "center",
        overflow:       "hidden",
      }}
    >
      <div
        style={{
          position:           "absolute",
          inset:              0,
          backgroundImage:    `url(${EXPERIENCE.bgImage})`,
          backgroundSize:     "cover",
          backgroundPosition: "center",
        }}
      />
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(15,7,2,0.72)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 640, padding: "0 24px" }}>
        <SectionLabel color={C.gold}>{EXPERIENCE.label}</SectionLabel>
        <h2 style={{ fontSize: "3.2rem", color: C.white, fontWeight: 400, lineHeight: 1.2, marginBottom: 20 }}>
          More Than a Meal,<br />It is a <em style={{ color: C.gold }}>Memory</em>
        </h2>
        <p style={{ fontFamily: "Trebuchet MS, sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 36 }}>
          {EXPERIENCE.body}
        </p>
        <a href="#reserve" onClick={handleAnchorClick} style={btnPrimary}>
          Plan Your Evening
        </a>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        display:             "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows:    "260px 260px",
      }}
    >
      {GALLERY_IMAGES.map((img, i) => (
        <div
          key={i}
          style={{
            overflow:   "hidden",
            gridColumn: img.span > 1 ? `span ${img.span}` : undefined,
          }}
        >
          <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      ))}
    </section>
  );
}

function Reservation() {
  const [form, setForm]         = useState(initialFormState());
  const [errors, setErrors]     = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validateReservation(form);
    if (!result.valid) {
      setErrors(result.errors);
    } else {
      setErrors([]);
      setSubmitted(true);
      setForm(initialFormState());
    }
  };

  const inputStyle = {
    width:           "100%",
    padding:         "13px 16px",
    border:          `1px solid #e5d9ca`,
    backgroundColor: C.white,
    fontFamily:      "Trebuchet MS, sans-serif",
    fontSize:        "0.88rem",
    color:           C.body,
    borderRadius:    2,
    outline:         "none",
    boxSizing:       "border-box",
  };

  return (
    <section id="reserve" style={{ backgroundColor: C.cream, padding: "100px 60px" }}>
      <div
        style={{
          maxWidth:            900,
          margin:              "0 auto",
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 80,
          alignItems:          "center",
        }}
      >
        {/* Left: info */}
        <div>
          <SectionLabel color={C.amber}>Book a Table</SectionLabel>
          <h2 style={{ fontSize: "2.8rem", fontWeight: 400, color: C.darkText, lineHeight: 1.2, marginBottom: 18 }}>
            Reserve Your<br /><em style={{ color: C.amber }}>Evening</em>
          </h2>
          <p style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.92rem", color: C.muted, lineHeight: 1.8, marginBottom: 12 }}>
            Join us for an unforgettable dining experience. We accommodate private dining, special occasions, and corporate events.
          </p>
          <p style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.92rem", color: C.muted, lineHeight: 1.8, marginBottom: 12 }}>
            For parties of 8 or more, please call us directly.
          </p>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["Phone",   CONTACT.phone],
              ["Email",   CONTACT.email],
              ["Hours",   CONTACT.hours],
              ["Address", CONTACT.address],
            ].map(([label, value]) => (
              <div key={label} style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.85rem", color: C.darkText, display: "flex", gap: 10 }}>
                <strong style={{ color: C.amber, minWidth: 60 }}>{label}:</strong>
                {value}
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div>
          {submitted && (
            <div
              style={{
                backgroundColor: "#d4edda",
                color:           "#155724",
                padding:         "14px 18px",
                borderRadius:    4,
                marginBottom:    18,
                fontFamily:      "Trebuchet MS, sans-serif",
                fontSize:        "0.9rem",
              }}
            >
              ✅ Your reservation request has been received! We'll confirm shortly.
            </div>
          )}
          {errors.length > 0 && (
            <div
              style={{
                backgroundColor: "#f8d7da",
                color:           "#721c24",
                padding:         "14px 18px",
                borderRadius:    4,
                marginBottom:    18,
                fontFamily:      "Trebuchet MS, sans-serif",
                fontSize:        "0.85rem",
              }}
            >
              {errors.map((err, i) => <div key={i}>• {err}</div>)}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input name="firstName" placeholder="First Name"   value={form.firstName} onChange={handleChange} style={inputStyle} />
              <input name="lastName"  placeholder="Last Name"    value={form.lastName}  onChange={handleChange} style={inputStyle} />
            </div>
            <input name="email" type="email" placeholder="Email Address"  value={form.email} onChange={handleChange} style={inputStyle} />
            <input name="phone" type="tel"   placeholder="Phone Number"   value={form.phone} onChange={handleChange} style={inputStyle} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input name="date" type="date" value={form.date} onChange={handleChange} style={inputStyle} />
              <input name="time" type="time" value={form.time} onChange={handleChange} style={inputStyle} />
            </div>
            <select name="guests" value={form.guests} onChange={handleChange} style={inputStyle}>
              <option value="" disabled>Number of Guests</option>
              {GUEST_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <textarea
              name="requests"
              placeholder="Special requests or dietary requirements..."
              value={form.requests}
              onChange={handleChange}
              style={{ ...inputStyle, resize: "vertical", minHeight: 90 }}
            />
            <button
              type="submit"
              style={{
                width:          "100%",
                padding:        15,
                backgroundColor: C.dark,
                color:          C.white,
                border:         "none",
                fontFamily:     "Trebuchet MS, sans-serif",
                fontSize:       "0.8rem",
                letterSpacing:  2.5,
                textTransform:  "uppercase",
                cursor:         "pointer",
                borderRadius:   2,
              }}
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: C.dark, color: "rgba(255,255,255,0.5)", padding: "60px 60px 30px" }}>
      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap:                 48,
          marginBottom:        48,
        }}
      >
        {/* Brand */}
        <div>
          <h3 style={{ fontSize: "1.5rem", fontStyle: "italic", color: C.gold, marginBottom: 14 }}>Ember and Oak</h3>
          <p style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.85rem", lineHeight: 1.8 }}>
            A celebration of food, fire, and the joy of gathering. Award-winning fine dining in the heart of the city since 2008.
          </p>
        </div>

        {/* Navigate */}
        <FooterCol title="Navigate" links={FOOTER_LINKS.navigate} />

        {/* Hours */}
        <div>
          <h4 style={footerColHeading}>Opening Hours</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {FOOTER_LINKS.hours.map((h) => (
              <li key={h.label} style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>{h.label}</li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <FooterCol title="Follow Us" links={FOOTER_LINKS.social.map((s) => ({ label: s.label, href: "#" }))} />
      </div>

      <div
        style={{
          borderTop:      "1px solid rgba(255,255,255,0.08)",
          paddingTop:     24,
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          fontFamily:     "Trebuchet MS, sans-serif",
          fontSize:       "0.78rem",
        }}
      >
        <span>© 2025 Ember and Oak. All rights reserved.</span>
        <span>Designed with passion.</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 style={footerColHeading}>{title}</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href || "#"}
              onClick={handleAnchorClick}
              style={{ fontFamily: "Trebuchet MS, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const btnPrimary = {
  backgroundColor: C.amber,
  color:           C.white,
  padding:         "14px 34px",
  fontFamily:      "Trebuchet MS, sans-serif",
  fontSize:        "0.82rem",
  letterSpacing:   2,
  textTransform:   "uppercase",
  borderRadius:    2,
  textDecoration:  "none",
  display:         "inline-block",
};

const btnOutline = {
  border:         "1px solid rgba(255,255,255,0.5)",
  color:          C.white,
  padding:        "14px 34px",
  fontFamily:     "Trebuchet MS, sans-serif",
  fontSize:       "0.82rem",
  letterSpacing:  2,
  textTransform:  "uppercase",
  borderRadius:   2,
  textDecoration: "none",
  display:        "inline-block",
};

const footerColHeading = {
  fontFamily:    "Trebuchet MS, sans-serif",
  fontSize:      "0.7rem",
  letterSpacing: 2.5,
  textTransform: "uppercase",
  color:         C.amber,
  marginBottom:  18,
};

function SectionLabel({ children, color = C.amber }) {
  return (
    <div
      style={{
        fontFamily:    "Trebuchet MS, sans-serif",
        fontSize:      "0.68rem",
        letterSpacing: 4,
        textTransform: "uppercase",
        color,
        marginBottom:  16,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        fontFamily:      "Georgia, 'Times New Roman', Times, serif",
        backgroundColor: C.bg,
        color:           C.body,
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <ExperienceBanner />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  );
}
