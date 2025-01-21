const kebabRolls = [
  {
    name: "Kebab med Bröd",
    description: "Kebab, Sallad, Tomat, Gurka, Lök, Vitlökssås",
    price: "115 KR",
    img: "./assets/cacciatore.jpg",
  },
  {
    name: "Kebab Rulle",
    description: "Kebab, Sallad, Tomat, Gurka, Lök, K-sås",
    price: "115 KR",
    img: "./assets/cacciatore.jpg",
  },
  {
    name: "Falafel Rulle",
    description: "5 st Falafel, Sallad, Tomat, Gurka, Lök, Vitlökssås",
    price: "115 KR",
    img: "./assets/cacciatore.jpg",
  },
  {
    name: "Kyckling Rulle",
    description: "Kyckling, Sallad, Tomat, Gurka, Lök, K-sås",
    price: "115 KR",
    img: "./assets/cacciatore.jpg",
  },
  {
    name: "Balad Rulle",
    description:
      "Skinka, Kyckling, Räkor, Ost, Sallad, Tomat, Gurka, Lök, Vitlökssås",
    price: "115 KR",
    img: "./assets/cacciatore.jpg",
  },
  {
    name: "Kompis Rulle",
    description:
      "Kebab, Kyckling, Räkor, Sallad, Tomat, Gurka, Lök, Vitlökssås",
    price: "115 KR",
    img: "./assets/cacciatore.jpg",
  },
  {
    name: "Kebab Athena Talrik",
    description: "Kebab, pommes frites, fetaost, valfri sås",
    price: "115 KR",
    img: "./assets/cacciatore.jpg",
  },
  {
    name: "Kyckling Tallrik",
    description: "Kyckling, pommes frites, K-sås",
    price: "115 KR",
    img: "./assets/cacciatore.jpg",
  },
];

const aLaCarte = [
  {
    name: "Grillbiff",
    description: "Malet kött, Bearnaisesås",
    price: "120 KR",
    img: "./assets/grillbiff.jpg",
  },
  {
    name: "Schnitzel",
    description: "Malet Fläskkött, Aromsmör, Citron",
    price: "120 KR",
    img: "./assets/schnitzel.jpg",
  },
  {
    name: "Panerad Fisk",
    description: "Panerad Fiskfilé, Remouladsås, Citron",
    price: "120 KR",
    img: "./assets/panerad-fisk.jpg",
  },
  {
    name: "Kyckling File",
    description: "2 st Kycklingfilé, Curry sås",
    price: "120 KR",
    img: "./assets/kyckling-file.jpg",
  },
];

function loadCategory(category) {
  const column1 = document.querySelector(".column-1");
  const column2 = document.querySelector(".column-2");

  // Clear the columns before adding new items
  column1.innerHTML = "";
  column2.innerHTML = "";

  if (category === "Kebab & Rolls") {
    kebabRolls.forEach((item, index) => {
      const menuItem = `
          <div class="items-1">
            <div class="item-wrapper">
              <img
                width="50px"
                height="50px"
                src="${item.img}"
                alt="${item.name}"
              />
              <div class="item-ds">
                <div class="item-name">${item.name}</div>
                <p class="item-rec">${item.description}</p>
              </div>
            </div>
            <div class="item-price">
              <div>${item.price}</div>
            </div>
          </div>
        `;

      // Alternate between the two columns
      if (index % 2 === 0) {
        column1.innerHTML += menuItem;
      } else {
        column2.innerHTML += menuItem;
      }
    });
  } else if (category === "À La Carte") {
    aLaCarte.forEach((item, index) => {
      const menuItem = `
          <div class="items-1">
            <div class="item-wrapper">
              <img
                width="50px"
                height="50px"
                src="${item.img}"
                alt="${item.name}"
              />
              <div class="item-ds">
                <div class="item-name">${item.name}</div>
                <p class="item-rec">${item.description}</p>
              </div>
            </div>
            <div class="item-price">
              <div>${item.price}</div>
            </div>
          </div>
        `;
      // Alternate between the two columns
      if (index % 2 === 0) {
        column1.innerHTML += menuItem;
      } else {
        column2.innerHTML += menuItem;
      }
    });
  } else {
    column1.innerHTML = `<p>No items found for this category.</p>`;
    column2.innerHTML = "";
  }
}

document
  .querySelector(".menu-list")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Ensure the clicked element is an <a>
    const clickedLink = event.target.closest("a");
    if (clickedLink) {
      // Get the text content of the clicked <a> tag
      const linkContent = clickedLink.textContent.trim();

      // Compare the content with specific values
      if (linkContent === "Pizzaria") {
        location.reload();
      } else if (linkContent === "Kebab & Rolls") {
        loadCategory(linkContent);
      } else if (linkContent === "À La Carte") {
        loadCategory(linkContent);
      } else {
        console.log(`Other category selected: ${linkContent}`);
      }

      // Remove the 'active' class from all <a> tags
      document
        .querySelectorAll(".menu-list a")
        .forEach((link) => link.classList.remove("active"));

      // Add the 'active' class to the clicked <a> tag
      clickedLink.classList.add("active");
    }
  });
