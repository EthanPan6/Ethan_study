import {
    method
} from "bluebird";
import data from "./data.json";
import "./style.css";
console.log(data);
console.log('src');
let btn = document.querySelector("button");
btn.onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.open({
        method: "get",
        url: "http://localhost:3000/api/aa"
    })
}