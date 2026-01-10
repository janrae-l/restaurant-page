export function contactContent() {
    const container = document.querySelector("#content");
    const contact = document.createElement("p");
    contact.classList.add("contact");
    

    const contactCont = document.createElement("div");
    const contactDetails = document.createElement("h2");
    contactDetails.textContent = `Contact US`
contactCont.appendChild(contactDetails);

    const addressContainer = document.createElement("div");
    const addressDetails = document.createElement("p");
    addressDetails.classList.add("contact-details");
    addressDetails.textContent = `Address: \r\n
    Ristorante Italiano 
    \r\n97 Italian Street, Food City 
    \r\nPA Food Country`
    addressContainer.appendChild(addressDetails)

    const phoneContainer = document.createElement("div");
    const phoneDetails = document.createElement("p");
    phoneDetails.classList.add("contact-details");
    phoneDetails.textContent = `Phone: 
    \r\n+63 962587415`
    phoneContainer.appendChild(phoneDetails)

    const emailContainer = document.createElement("div");
    const emailDetails = document.createElement("p");
    emailDetails.classList.add("contact-details");
    emailDetails.textContent = `Email: \r\n
    contact@restorante.com`
    emailContainer.appendChild(emailDetails)

    const hoursContainer = document.createElement("div");
    const hoursDetails = document.createElement("p");
    hoursDetails.classList.add("contact-details");
    hoursDetails.textContent = `Hours: \r\n
    Monday-Sunday\r\n 
    09:00AM - 07:00PM`
    hoursContainer.appendChild(hoursDetails)

    const websiteContainer = document.createElement("div");
    const websiteDetails = document.createElement("p");
    websiteDetails.classList.add("contact-details");
    websiteDetails.textContent = `Website: \r\n
    restorante-italiano.com`
    websiteContainer.appendChild(websiteDetails)

    const socialContainer = document.createElement("div");
    const socialDetails = document.createElement("p");
    socialDetails.classList.add("contact-details");
    socialDetails.textContent = `Social Media:\r\n
    Instagram: @restoranteitalian\r\n
    Facebook: Restorante Italiano`
    socialContainer.appendChild(socialDetails)

    contact.appendChild(contactCont);
    contact.appendChild(addressContainer);
    contact.appendChild(phoneContainer);
    contact.appendChild(emailContainer);
    contact.appendChild(hoursContainer);
    contact.appendChild(websiteContainer);
    contact.appendChild(socialContainer);
    container.appendChild(contact);
}