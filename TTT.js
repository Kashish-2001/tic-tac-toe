var c1 = document.querySelectorAll(".tc");
console.log(c1);

c1.forEach((box) => {

    box.style.fontSize = "40px";

  box.addEventListener("click", function () {
    if (box.textContent == "") {
      box.textContent = "X";
    } else {
      box.textContent = "";
    }
  });

  box.addEventListener("dblclick", function () {
    box.textContent = "O";
  });
});

var restart = document.querySelector("#reload");

restart.addEventListener("click", function () {
  location.reload();
});

console.log("hi");
