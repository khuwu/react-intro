
import Hero from "../components/Hero";
import About from "../components/About";
import TeamMember from "../components/TeamMember";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />

      <h2>Meet Our Team</h2>
      <div className="team-container">
        <TeamMember
          emoji="👩‍💻"
          name="Khushi"
          role="Frontend Developer"
        />
        <TeamMember
          emoji="👨‍💻"
          name="Alex"
          role="UI Designer"
        />
      </div>

      <h2>Our Products</h2>
      <div className="product-container" id="products">
        <ProductCard
          emoji="💻"
          name="Laptop"
          price="Rs. 85,000"
        />
        <ProductCard
          emoji="🎧"
          name="Headphones"
          price="Rs. 3,500"
        />
      </div>

      <h2>Our Services</h2>
      <div className="service-container" id="services">
        <ServiceCard
          emoji="🌐"
          title="Web Development"
          description="Building responsive websites."
        />
        <ServiceCard
          emoji="🎨"
          title="UI Design"
          description="Creating beautiful user interfaces."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;
