let games = [
  { name: "BattleField", price: "100000 VNĐ", photoUrl: "./images/g1.png" },
  {
    name: "League of Legends",
    price: "10000 VNĐ",
    photoUrl: "./images/g2.jpg",
  },
  { name: "Valorant", price: "50000 VNĐ", photoUrl: "./images/g3.jpg" },
  { name: "God of War", price: "1000 VNĐ", photoUrl: "./images/g4.jpg" },
  { name: "PES 2021", price: "53000 VNĐ", photoUrl: "./images/g5.png" },
  { name: "Free Fire", price: "1000 VNĐ", photoUrl: "./images/g6.jpg" },
  { name: "Genshin Impact", price: "11100 VNĐ", photoUrl: "./images/g7.jpg" },
  {
    name: "One Piece Pirate Warrior 3",
    price: "150000 VNĐ",
    photoUrl: "./images/g18.png",
  },
  {
    name: "Captain Tsubasa: Rise of New Champion",
    price: "17000 VNĐ",
    photoUrl: "./images/g19.png",
  },
  { name: "Naruto Storm 4", price: "13000 VNĐ", photoUrl: "./images/g20.png" },
];

let group = document.getElementsByClassName("items");

for (let i = 0; i < games.length; i++) {
  let temp = document.createElement("div");
  temp.className = "item";
  let temp2 = document.createElement("img");
  temp2.className = "img";
  let temp3 = document.createElement("h3");
  let temp4 = document.createElement("h4");
  temp2.src = games[i].photoUrl;
  temp3.innerHTML = games[i].name;
  temp4.innerHTML = games[i].price;
  temp.appendChild(temp2);
  temp.appendChild(temp3);
  temp.appendChild(temp4);

  group[0].appendChild(temp);
}
