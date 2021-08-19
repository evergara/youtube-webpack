import style from "./style.css";
import logo from "./assets/webpack.svg";

const arr = [1, 2, 3],
codeESNext = () => console.log(...arr);

codeESNext();

console.log("Hola mundo webpack")

document.getElementById("app").innerHTML = `<img src="${logo}" alt="logo webpack"/>`;