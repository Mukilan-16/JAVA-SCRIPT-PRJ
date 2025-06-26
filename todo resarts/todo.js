let input = document.getElementById("input-area");

// let btnaction = document.getElementById("btn");
let task = document.getElementById("task");

function btnact() {
  let trim = input.value.trim();
  if (trim !== "") {
    const li = document.createElement("li");
    li.textContent = trim;
    task.appendChild(li);

    const dle = document.createElement("button");
    dle.innerText = "REMOVE";
    dle.classList.add("remove-btn");
    li.appendChild(dle);

    dle.addEventListener("click", () => {
      li.remove(); // 👈 removes the entire <li> (and the button inside it)
    });
    input.value = "";
  }
}
