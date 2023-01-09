const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/logo.png") {
    myImage.setAttribute("src", "imagens/cnc.jpg");
  } else {
    myImage.setAttribute("src", "imagens/logo.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

  function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla é legal, " + myName;
    }
  }

  myButton.onclick = () => {
    setUserName();
  };
