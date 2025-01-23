`use strict`;

// Select all menu items
const menuItems = document.querySelectorAll(".menu-item");

// Function to filter items by category
function filterItems(category) {
  const container = document.querySelector(".column"); // Parent container
  menuItems.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    if (category === "all" || itemCategory === category) {
      container.appendChild(item); // Keep item in view
    } else {
      container.appendChild(item); // Move non-matching items to the end
      item.style.order = 999; // Optional: move to the end visually
    }
  });
}

// Example: Filter by pizzas
filterItems("pizzas");

// Example: Show all items
// filterItems("all");
