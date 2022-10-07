const elements = document.getElementsByClassName("del");

for (let i = 0; i < elements.length; i++) {
  const str = elements[i].innerHTML.replace(/ ₴/g, "");

  elements[i].innerHTML = str;
}
