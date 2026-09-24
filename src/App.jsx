import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TeamMember from "./components/TeamMember";
import ProductCard from "./components/ProductCard";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";

import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import DynamicForm from "./components/DynamicForm";

import RestaurantMenu from "./restaurant/RestaurantMenu";

import UserList from "./api/UserList";

import NewsApp from "./news/NewsApp";
import ProductList from "./products/ProductList";

function App() {

const products = [
  {
    emoji: "💻",
    name: "Gaming Laptop",
    price: "$899",
  },
  {
    emoji: "🖱️",
    name: "Gaming Mouse",
    price: "$399",
  },
  {
    emoji: "⌨️",
    name: "Mechanical Keyboard",
    price: "$499",
  },
];

const teamMembers = [
  {
    emoji: "👩",
    name: "Khushi Thami",
    role: "Frontend Developer",
  },
  {
    emoji: "👨",
    name: "John Doe",
    role: "Backend Developer",
  },
  {
    emoji: "👩‍💻",
    name: "Sarah Smith",
    role: "UI Designer",
  },
];

const services = [
  {
    emoji: "🎨",
    title: "Graphic Design",
    description: "Creative designs for social media and branding.",
  },
  {
    emoji: "🌐",
    title: "Website Design",
    description: "Modern responsive websites for businesses.",
  },
  {
    emoji: "📱",
    title: "Content Creation",
    description: "Creative social media content that gets attention.",
  },
];

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

        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            emoji={member.emoji}
            name={member.name}
            role={member.role}
          />
        ))}

    </div>

</section>

      {/* ---------- PRODUCTS ---------- */}

      <section className="product-section" id="products">

        <h1>Products</h1>

        <div className="product-container">

          {products.map((product) => (
            <ProductCard
              key={product.name}
              emoji={product.emoji}
              name={product.name}
              price={product.price}
            />
        ))}

        </div>

      </section>

      {/* ---------- SERVICES ---------- */}

      <section className="service-section" id="services">

        <h1>Services</h1>

        <div className="service-container">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              emoji={service.emoji}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </section>

      <section className="week7">
        <h1>Week 7: State Management</h1>

        <Counter />

        <Toggle />

        <DynamicForm />

      </section>

      <RestaurantMenu />

      <UserList />

      <NewsApp />
      <ProductList />

      <Footer />

    </div>

    
  );
}

export default App;