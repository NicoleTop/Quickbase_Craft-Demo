document.addEventListener("DOMContentLoaded", async function () {
  const data = await fetch('dataset1.json');
  const jsonData = await data.json();
  const parks = jsonData.parks;

  if (parks !== null && parks.length > 0) {
    const cardsContianer = document.querySelector(".cards-container");

    parks.forEach(element => {
      // No image, don't rended a card
      if (!element.image) {
        return;
      }

      // Create card elements
      const card = document.createElement("div");
      const cardHeader = document.createElement("div");
      const cardHeaderText = document.createElement("h3");
      const cardImage = document.createElement("img");
      const cardBody = document.createElement("div");
      const bodyHeader = document.createElement("h2");
      const bodyParagraph = document.createElement("p");
      const cardFooter = document.createElement("div");

      // Add CSS classes to elements
      card.classList.add("card-custom");
      cardHeader.classList.add("card-custom-header");
      cardHeaderText.classList.add("banner", `${categoryColor(element.category)}-bg`);

      cardImage.classList.add("card-custom-img", "img-fluid");
      cardBody.classList.add("card-custom-body");
      bodyHeader.classList.add("card-custom-title");
      bodyParagraph.classList.add("card-custom-info");
      cardFooter.classList.add("card-custom-footer");

      // Add text content to elements
      cardHeaderText.textContent = element.category;
      cardImage.src = element.image;
      bodyHeader.textContent = element.title !== "" ? element.title:"National Park";
      bodyParagraph.textContent = element.body;

      // Check if there is a link to display the card button
      if (element.link) {
        const footerLink = document.createElement("a");
        footerLink.classList.add("btn", `btn--${categoryColor(element.category)}`);
        footerLink.textContent = element.linkText;
        footerLink.href = element.link;
        footerLink.target = "_blank";

        cardFooter.appendChild(footerLink);
      }

      // Add card elements
      cardHeader.appendChild(cardHeaderText);
      cardHeader.appendChild(cardImage);
      cardBody.appendChild(bodyHeader);
      cardBody.appendChild(bodyParagraph);
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);

      // Add the card element to the card container
      cardsContianer.appendChild(card);
    });
  }
});

function categoryColor(category) {
  switch (category) {
    case "Natural":
      return "asparagus"
    case "Historical":
      return "carrot";
    case "Monument":
      return "elm";
    default:
      return "asparagus";
  }
}