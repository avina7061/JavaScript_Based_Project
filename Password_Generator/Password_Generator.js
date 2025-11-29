const typer = document.querySelector(".typer")
const btn = document.querySelector(".but")
const Copy = document.querySelector(".copy")

const length = 10;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let special = "@#!$%&-_~*";
let create = uppercase + lowercase + number + special;

btn.onclick = function () {
    let generate = "";
    generate += uppercase[Math.floor(Math.random() * uppercase.length)];
    generate += lowercase[Math.floor(Math.random() * lowercase.length)];
    generate += number[Math.floor(Math.random() * number.length)];
    generate += special[Math.floor(Math.random() * special.length)];

    while (length > generate.length) {
        generate += create[Math.floor(Math.random() * create.length)];
    }

    typer.value = generate; // Setting the generated password to the input/textarea
}

Copy.onclick = function () {
    typer.select(); // Select the content of the input/textarea
    document.execCommand("Copy"); // Copy the selected content

}
