export function homeContent() {
    const container = document.querySelector("#content");

    const titleContainer = document.createElement("div");
    const titleContent = document.createElement("h1");
    titleContent.textContent = "Welcome to my restaurant"
    titleContainer.appendChild(titleContent);

    const mainImage = document.createElement("img");
    mainImage.classList.add("mainImage")
    mainImage.src = "https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg"

    const mainContent = document.createElement("p");
    mainContent.textContent = "Enjoy the warmth and the vibe of an Italian country side in our restaurant. All of the ingredients are fresh and locally sourced."

    container.appendChild(titleContainer);
    container.appendChild(mainImage);
    container.appendChild(mainContent);


}