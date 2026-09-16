import { useState } from "react";
import menuData from "./menuData";
import MenuCard from "../components/MenuCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";

function RestaurantMenu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    ...new Set(menuData.map((item) => item.category))
  ];

  const filteredMenu = menuData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="restaurant-menu">
      <h1>Our Menu</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default RestaurantMenu;