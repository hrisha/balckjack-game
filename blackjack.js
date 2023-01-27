let sum = document.querySelector(".sum");
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let card = [firstCard, secondCard];
let totalCards = firstCard + secondCard;
let start = (document.querySelector(".start").onclick = function () {
  document.querySelector(".card").innerHTML = `Card: ${card.join(" ")}`;
  sum.innerHTML = `Sum: ${totalCards}`;
  if (totalCards <= 20) {
    document.querySelector(".title").innerHTML =
      "Do you want to draw a new card?";
  } else if (totalCards === 21) {
    document.querySelector(".title").innerHTML = "Congratulations ! You've got Blackjack!";
  } else {
    document.querySelector(".title").innerHTML = "Oops! You Lost The Game! Try Again";
  }
  let newCard = document.querySelector(".new");
  newCard.onclick = function () {
    if ((totalCards < 21) & (card.length >= 2)) {
      let cardNew = getRandomCard();
      totalCards += cardNew;
      sum.innerHTML = `Sum: ${totalCards}`;
      card.push(cardNew);
      start();
    }
  };
});

function getRandomCard() {
  let random = Math.ceil(Math.random() * 10);
  if (random === 1) {
    return 11;
  } else {
    return random;
  }
}

document.querySelector(".try").onclick = function () {
  window.location.reload();
};
