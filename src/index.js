import style from "./style.css";
import logo from "./assets/webpack.svg";
import gemini from "./assets/saga-kanon.png";

const arr = [1, 2, 3],
codeESNext = () => console.log(...arr);

codeESNext();

console.log("Hola mundo webpack")

//document.getElementById("app").innerHTML = `<img src="${logo}" alt="logo webpack"/>`;

const _document = document,
     app = _document.getElementById("app"),
     h1 = _document.createElement("h1"),
     logoImg = _document.createElement("img"),
     img = _document.createElement("img");

h1.textContent ="Hola mundo con Webpack.";
logoImg.src = logo;
logoImg.classList.add("icon");
img.src = gemini;

app.appendChild(h1);
app.appendChild(logoImg);
app.appendChild(img);
