const cardArray = [
  {
    name: "image1",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/cheeseburger.png?raw=true",
  },
  {
    name: "image2",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/fries.png?raw=true",
  },
  {
    name: "image3",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/hotdog.png?raw=true",
  },
  {
    name: "image4",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/ice-cream.png?raw=true",
  },
  {
    name: "image5",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/milkshake.png?raw=true",
  },
  {
    name: "image6",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/pizza.png?raw=true",
  },
  {
    name: "image1",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/cheeseburger.png?raw=true",
  },
  {
    name: "image2",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/fries.png?raw=true",
  },
  {
    name: "image3",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/hotdog.png?raw=true",
  },
  {
    name: "image4",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/ice-cream.png?raw=true",
  },
  {
    name: "image5",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/milkshake.png?raw=true",
  },
  {
    name: "image6",
    img: "https://github.com/Kalvium-Program/Image-files/blob/main/images/pizza.png?raw=true",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const cardBackImage =
  "https://github.com/Kalvium-Program/Image-files/blob/main/images/blank.png?raw=true";

const playGround = document.querySelector(".play");
const result = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("data-id", i);
    img.setAttribute("src", cardBackImage);
    img.addEventListener("click", flipcard);
    playGround.appendChild(img);
  }
}

function checkForMatch() {
  const images = document.querySelectorAll("img");
  const op0Id = cardsChosenId[0];
  const op1Id = cardsChosenId[1];

  if (op0Id == op1Id) {
    images[op0Id].setAttribute("src", cardBackImage);
    images[op1Id].setAttribute("src", cardBackImage);
    alert("You have clicked the same image!");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match!");
    images[op0Id].setAttribute("class", "hidden");
    images[op1Id].setAttribute("class", "hidden");
    images[op0Id].removeEventListener("click", flipcard);
    images[op1Id].removeEventListener("click", flipcard);
    cardsWon.push(cardsChosen);
  } else {
    images[op0Id].setAttribute("src", cardBackImage);
    images[op1Id].setAttribute("src", cardBackImage);
  }
  cardsChosen = [];
  cardsChosenId = [];
  result.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    result.textContent = "Congratulations! The game is completed";
  }
}

function flipcard() {
  let imgId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[imgId].name);
  cardsChosenId.push(imgId);
  this.setAttribute("src", cardArray[imgId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 1000);
  }
}

createBoard();
