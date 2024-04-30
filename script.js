// "use strict";

// const botsResult = document.querySelector("#bot");
// const playerResult = document.querySelector("#player");
// const rock = document.querySelector("#rock");
// const paper = document.querySelector("#paper");
// const scissor = document.querySelector("#scissor");

// const bot = function () {
//   const botDisplay = Math.floor(Math.random() * 3 + 1);
//   if (botDisplay === 1) {
//     botsResult.textContent = "🪨";
//   } else if (botDisplay === 2) {
//     botsResult.textContent = "📃";
//   } else {
//     botsResult.textContent = "✂️";
//   }
// };

// rock.addEventListener("click", () => {
//   playerResult.textContent = "🪨";
//   bot();

//   if (botsResult.textContent === "🪨" && playerResult.textContent === "🪨") {
//     console.log(`Match draw`);
//   }
// });
// paper.addEventListener("click", () => {
//   playerResult.textContent = "📃";
//   bot();
// });
// scissor.addEventListener("click", () => {
//   playerResult.textContent = "✂️";
//   bot();
// });

////////////////////////

"use strict";

const botsResult = document.querySelector("#bot");
const playerResult = document.querySelector("#player");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const heading = document.querySelector(".heading");

const defaultResults = {
  won: "won",
  lost: "lost",
  draw: "draw",
};

const bot = function () {
  const botDisplay = Math.floor(Math.random() * 3 + 1);

  switch (botDisplay) {
    case 1:
      botsResult.textContent = "🪨";
      return "🪨";
    case 2:
      botsResult.textContent = "📃";
      return "📃";
    case 3:
      botsResult.textContent = "✂️";
      return "✂️";
  }
};

const changeHeading = (result) => {
  if (result === defaultResults.won) {
    heading.textContent = "🎉 You won! 🎉";
  } else if (result === defaultResults.lost) {
    heading.textContent = "😭 You lost! 😭";
  } else if (result === defaultResults.draw) {
    heading.textContent = "😑 Match draw! 😑";
  }
};

const play = (playerOption) => {
  console.log("run");
  playerResult.textContent = playerOption;
  const botOption = bot();

  if (botOption === playerOption) return changeHeading(defaultResults.draw);

  if (playerOption === "🪨") {
    switch (botOption) {
      case "📃":
        changeHeading(defaultResults.lost);
        break;

      case "✂️":
        changeHeading(defaultResults.won);
        break;
    }
  } else if (playerOption === "📃") {
    switch (botOption) {
      case "🪨":
        changeHeading(defaultResults.won);
        break;

      case "✂️":
        changeHeading(defaultResults.lost);
        break;
    }
  } else if (playerOption === "✂️") {
    switch (botOption) {
      case "📃":
        changeHeading(defaultResults.won);
        break;

      case "🪨":
        changeHeading(defaultResults.lost);
        break;
    }
  }
};

rock.addEventListener("click", () => {
  play("🪨");
});
paper.addEventListener("click", () => {
  play("📃");
});
scissor.addEventListener("click", () => {
  play("✂️");
});
