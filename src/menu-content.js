export function menuContent() {
    const container = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuTitleContainer = document.createElement("div");
    menuTitleContainer.classList.add("menu-title-container")
;    const menuTitleFirst = document.createElement("h1");
    menuTitleFirst.classList.add("menu-title-one")
    menuTitleFirst.textContent = "RISTORANTE";

    const menuTitleSecond = document.createElement("h1");
    menuTitleSecond.classList.add("menu-title-sec")
    menuTitleSecond.textContent = "ITALIANO"
    menuTitleContainer.appendChild(menuTitleFirst);
    menuTitleContainer.appendChild(menuTitleSecond);
    

    const menuTagline = document.createElement("h3");
    menuTagline.classList.add("menu-tagline")
    menuTagline.textContent = "Your Authentic Italian Resto";
    menuTitleContainer.appendChild(menuTagline);

    const firstDish = document.createElement("div");

    const frstDshTitleCont = document.createElement("div");
    frstDshTitleCont.classList.add("dishFirstLine")
    const firstDishTitle = document.createElement("h3");
    firstDishTitle.classList.add("dishTitle")
    firstDishTitle.textContent = "The Canellioni";
    const firstDishPrice = document.createElement("h3");
    firstDishPrice.classList.add("price");
    firstDishPrice.textContent = "$14.50";
    frstDshTitleCont.appendChild(firstDishTitle);
    frstDshTitleCont.appendChild(firstDishPrice);

    const firstDishDetail = document.createElement("p");
    firstDishDetail.classList.add("dishDetail");
    firstDishDetail.textContent = "An egg noodle stuffed with beef, veal and chicken, baked with meat sauce and cream sauce."

    firstDish.appendChild(frstDshTitleCont);
    firstDish.appendChild(firstDishDetail);

    const secDish = document.createElement("div");
    const secDishTitleCont = document.createElement("div");
    secDishTitleCont.classList.add("dishFirstLine")
    const secDishTitle = document.createElement("h3");
    secDishTitle.classList.add("dishTitle")
    secDishTitle.textContent = "Gabbriello Raviolli";
    const secDishPrice = document.createElement("h3");
    secDishPrice.classList.add("price");
    secDishPrice.textContent = "$14.50";
    secDishTitleCont.appendChild(secDishTitle);
    secDishTitleCont.appendChild(secDishPrice);

    const secDishDetail = document.createElement("p");
    secDishDetail.classList.add("dishDetail")
    secDishDetail.textContent = "Handmade noodles stuffed with a blend of fresh beef and veal and prepared in our Famous meat sauce."

    secDish.appendChild(secDishTitleCont);
    secDish.appendChild(secDishDetail);

    const thirdDish = document.createElement("div");
    const thirdDishTitleCont = document.createElement("div");
    thirdDishTitleCont.classList.add("dishFirstLine")
    const thirdDishTitle = document.createElement("h3");
    thirdDishTitle.classList.add("dishTitle")
    thirdDishTitle.textContent = "Manicootti Parmigiano";
    const thirdDishPrice = document.createElement("h3");
    thirdDishPrice.classList.add("price");
    thirdDishPrice.textContent = "$10.50";
    thirdDishTitleCont.appendChild(thirdDishTitle);
    thirdDishTitleCont.appendChild(thirdDishPrice);

    const thirdDishDetail = document.createElement("p");
    thirdDishDetail.classList.add("dish-details");
    thirdDishDetail.classList.add("dishDetail");
    thirdDishDetail.textContent = "An egg noodle stuffed with ricotta cheese, baked in tomato sauce and Parmigiano cheese."

    thirdDish.appendChild(thirdDishTitleCont);
    thirdDish.appendChild(thirdDishDetail);

    const fourthDish = document.createElement("div");
    const fourthDishTitleCont = document.createElement("div");
    fourthDishTitleCont.classList.add("dishFirstLine")
    const fourthDishTitle = document.createElement("h3");
    fourthDishTitle.classList.add("dishTitle")
    fourthDishTitle.textContent = "Venetian Kebabs";
    const fourthDishPrice = document.createElement("h3");
    fourthDishPrice.classList.add("price");
    fourthDishPrice.textContent = "$15.50";
    fourthDishTitleCont.appendChild(fourthDishTitle);
    fourthDishTitleCont.appendChild(fourthDishPrice);

    const fourthDishDetail = document.createElement("p");
    fourthDishDetail.classList.add("dishDetail");
    fourthDishDetail.textContent = "Charcoal grilled Kebabs served over penne noodles in tomato sauce with sundried tomato pesto."

    fourthDish.appendChild(fourthDishTitleCont);
    fourthDish.appendChild(fourthDishDetail);

    const fifthDish = document.createElement("div");
    const fifthDishCont = document.createElement("div");
    fifthDishCont.classList.add("dishFirstLine")
    const fifthDishTitle = document.createElement("h3");
    fifthDishTitle.classList.add("dishTitle")
    fifthDishTitle.textContent = "Cavatelli Alla Crema";
    const fifthDishPrice = document.createElement("h3");
    fifthDishPrice.classList.add("price");
    fifthDishPrice.textContent = "$15.50";
    fifthDishCont.appendChild(fifthDishTitle);
    fifthDishCont.appendChild(fifthDishPrice);

    const fifthDishDetail = document.createElement("p");
    fifthDishDetail.classList.add("dishDetail");
    fifthDishDetail.textContent = "Served with our Gabriello salad and fresh loaves of Foccaccia bread."

    fifthDish.appendChild(fifthDishCont);
    fifthDish.appendChild(fifthDishDetail);


menuContainer.appendChild(menuTitleContainer)
    menuContainer.appendChild(firstDish);
    menuContainer.appendChild(secDish);
    menuContainer.appendChild(thirdDish);
    menuContainer.appendChild(fourthDish);
    menuContainer.appendChild(fifthDish);

    container.appendChild(menuContainer);
}