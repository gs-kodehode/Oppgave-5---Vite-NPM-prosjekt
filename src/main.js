import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";
import confetti from "canvas-confetti";

document.querySelector("#app").innerHTML = `
  <h1>Merry Christmas 🎅</h1>
  <div class="wish">
  <p> to Everyone 🎉🎊</p>

  <p>✨ Wishing you a joyful holiday season filled with love, laughter, and cherished moments. 
  May this Christmas bring peace and happiness, and may the New Year be full of hope, success, and new opportunities ✨

Enjoy the festivities and here's to a bright and successful year ahead! 🌟
  <strong id="wish-m">Merry Christmas 🤶 and Happy New Year 🎉</strong></p></div>
  <h2>🎄</h2>
`;

confetti({
  spread: 350,
});
