
import Hero from "../components/Hero";
import About from "../components/About";
import TeamMember from "../components/TeamMember";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />

      <h2 className="home-section-title">Meet Our Team</h2>
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

      <h2 className="home-section-title">Our Products</h2>
      <div className="product-container" id="products">
        <InfoCard
          emoji="💻"
          title="Laptop"
          description="Rs. 85,000"
          buttonText="Buy Now"
          className="product-card"
        />
        <InfoCard
          emoji="🎧"
          title="Headphones"
          description="Rs. 3,500"
          buttonText="Buy Now"
          className="product-card"
        />
      </div>

      <h2 className="home-section-title">Our Services</h2>
      <div className="service-container" id="services">
        <InfoCard
          emoji="🌐"
          title="Web Development"
          description="Building responsive websites."
          buttonText="Learn More"
          className="service-card"
        />
        <InfoCard
          emoji="🎨"
          title="UI Design"
          description="Creating beautiful user interfaces."
          buttonText="Learn More"
          className="service-card"
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;
