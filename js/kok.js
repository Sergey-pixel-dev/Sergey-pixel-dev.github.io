let params = new URL(document.location).searchParams;
console.log(params.get("temperature"));
let a = document.querySelector("p");
a.innerHTML = params.get("temperature");
