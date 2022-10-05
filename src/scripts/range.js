// Inputs
const firstRange = document.getElementById("first-range");
const lastRange = document.getElementById("last-range");

// selectors
const firstSign = document.getElementById("first-sign");
const lastSign = document.getElementById("last-sign");

const children = firstRange.parentNode.childNodes[1].childNodes;

let value1 = 0;
let value2 = 100;

const f1 = (input, sign) => {
  input.value = Math.min(input.value, input.parentNode.childNodes[5].value - 1);
  children[1].style.width = value1 + "%";
  children[5].style.left = value1 + "%";
  children[7].style.left = value1 + "%";

  sign.innerHTML = value1;
};

const f2 = (input, sign) => {
  input.value = Math.max(
    input.value,
    input.parentNode.childNodes[3].value - -1
  );
  children[3].style.width = 100 - value2 + "%";
  children[5].style.right = 100 - value2 + "%";
  children[9].style.left = value2 + "%";

  sign.innerHTML = value2;
};

const f = (input, sign, func) => {
  func(input, sign);
};

firstRange.addEventListener("mousemove", () => {
  f(firstRange, firstSign, f1);
  if (value1 < value2) {
    value1 = Math.round((firstRange.value / parseInt(firstRange.max)) * 100);
  } else {
    value1 = value2 - 1;
  }
});

lastRange.addEventListener("mousemove", () => {
  f(lastRange, lastSign, f2);
  if (value1 < value2) {
    value2 = Math.round((lastRange.value / parseInt(lastRange.max)) * 100);
  } else {
    value2 = value1 + 1;
  }
});
