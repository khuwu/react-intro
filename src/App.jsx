import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TeamMember from "./components/TeamMember";
import ProductCard from "./components/ProductCard";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

      <Navbar />

      <Hero />

      <About />

      {/* ---------- TEAM ---------- */}

      <section className="team-section" id="team">

    <h1>Meet the Team</h1>

    <p className="section-description">
        Reusable React components using props.
    </p>

    <div className="team-container">

        <TeamMember
            emoji="👩"
            name="Khushi Thami"
            role="Frontend Developer"
        />

        <TeamMember
            emoji="👨"
            name="Shayne Topp"
            role="Backend Developer"
        />

        <TeamMember
            emoji="👩‍💻"
            name="Courtney Miller"
            role="UI Designer"
        />

    </div>

</section>

      {/* ---------- PRODUCTS ---------- */}

      <section className="product-section" id="products">

        <h1>Products</h1>

        <div className="product-container">

          <ProductCard
            emoji="💻"
            name="Gaming Laptop"
            price="$899"
          />

          <ProductCard
            emoji="🖱️"
            name="Gaming Mouse"
            price="$399"
          />

          <ProductCard
            emoji="⌨️"
            name="Mechanical Keyboard"
            price="$499"
          />

        </div>

      </section>

      {/* ---------- SERVICES ---------- */}

      <section className="service-section" id="services">

        <h1>Services</h1>

        <div className="service-container">

          <ServiceCard
            emoji="🎨"
            title="Graphic Design"
            description="Creative designs for social media and branding."
          />

          <ServiceCard
            emoji="🌐"
            title="Website Design"
            description="Modern responsive websites for businesses."
          />

          <ServiceCard
            emoji="📱"
            title="Content Creation"
            description="Creative social media content that gets attention."
          />

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default App;