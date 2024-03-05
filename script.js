const textBox = document.getElementById("textBox");
const taskList = document.getElementById("task-list");

function addTask() {
  if (textBox.value === "") {
    document.getElementById("alert").innerHTML = "Insira alguma tarefa";
  } else {
    let li = document.createElement("li");
    li.innerHTML = textBox.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  textBox.value = "";
  salvar();
}

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    salvar();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    salvar();
  }
});

function salvar() {
  localStorage.setItem("data", taskList.innerHTML);
}

function carregar() {
  taskList.innerHTML = localStorage.getItem("data");
}
carregar();

function clearAlert() {
  document.getElementById("alert").innerHTML = "";
}