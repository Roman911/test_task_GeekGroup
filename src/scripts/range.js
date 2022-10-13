// Inputs
const firstRange = document.getElementById("first-range");
const lastRange = document.getElementById("last-range");

// selectors
const firstSign = document.getElementById("first-sign");
const lastSign = document.getElementById("last-sign");

const children = document.getElementsByClassName("children");

let valueMin = 0;
let valueMax = 54;

let priceMin = 980;
let priceMax = 40930;

const thumbMin = (input, sign) => {
  input.value = Math.min(input.value, lastRange.value - 1);
  children[0].style.width = valueMin + "%";
  children[2].style.left = valueMin + "%";
  children[3].style.left = valueMin + "%";

  if (valueMin === 0) {
    sign.innerHTML = priceMin;
  } else {
    sign.innerHTML = Math.round((valueMin * (priceMax - priceMin)) / 100);
  }
};

const thumbMax = (input, sign) => {
  input.value = Math.max(input.value, firstRange.value - -1);
  children[1].style.width = 100 - valueMax + "%";
  children[2].style.right = 100 - valueMax + "%";
  children[4].style.left = valueMax + "%";

  if (valueMax === 100) {
    sign.innerHTML = priceMax;
  } else {
    sign.innerHTML = Math.round((valueMax * (priceMax - priceMin)) / 100);
  }
};

firstRange.addEventListener("mousemove", () => {
  thumbMin(firstRange, firstSign);
  if (valueMin < valueMax) {
    valueMin = Math.round((firstRange.value / parseInt(firstRange.max)) * 100);
  } else {
    valueMin = valueMax - 1;
  }
});

lastRange.addEventListener("mousemove", () => {
  thumbMax(lastRange, lastSign);
  if (valueMin < valueMax) {
    valueMax = Math.round((lastRange.value / parseInt(lastRange.max)) * 100);
  } else {
    valueMax = valueMin + 1;
  }
});
