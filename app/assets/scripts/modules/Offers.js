import FetchWrapper from "./FetchWrapper";

const API = new FetchWrapper("../../assets/offers.json");
const offersContainer = document.querySelector("div#offers-container");

offersContainer.innerHTML = "";

export const fetchedOffers = () => API.get("").then(data => {
  data.forEach(offer => {
    offersContainer.insertAdjacentHTML("beforeend", `
        <div class="offers__offers__offerbox">
            <div class="offers__offers__offerbox__picture">
                <img src="${offer.pictures[0]}" alt="">
            </div>
            <a href=""><div class="offers__offers__offerbox__info">
                <ul class="offers__offers__offerbox__info-details">
                    <li>${offer.area} m<sup>2</sup></li>
                    <li>${
                      offer.rooms === 1 ? '1 pokój' :
                      offer.rooms === 2 ? '2 pokoje' :
                      offer.rooms === 3 ? '3 pokoje' :
                      offer.rooms === 4 ? '4 pokoje' :
                      offer.rooms + ' pokoi'
                    }</li>
                    <li>${offer.location === "" ? "Szczecin" : offer.location }</li>
                </ul>
                <h3>${offer.title}</h3>
                <p class="offers__offers__offerbox__info-price"><span>Sprzedaż |</span> ${offer.price} zł</p>
            </div></a>
            <div class="offers__offers__offerbox__buttons">
                <a href="mailto:agnieszka@symetrianieruchomosci.pl" class="button button--secondary button--icon-left button--icon--mail">Zadaj pytanie</a>
                <a href="tel:+48 663 515 288" class="button button--secondary button--icon-left button--icon--phone">Umów spotkanie</a>
            </div>
        </div>
      `)
  })
});