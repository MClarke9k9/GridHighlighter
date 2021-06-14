const container = document.querySelector("#container");
container.setAttribute(
  "style",
  "width: 480px; height: 480px; border: 1px solid black; display: flex; flex-wrap: wrap"
);
const content = document.createElement("div");
content.classList.add("content");
content.setAttribute("style", "width: 120px; height: 120px; background: white");
for (var i = 1; i <= 16; ++i) {
  container.appendChild(content.cloneNode());
}
const sidebar = document.querySelector("#sidebar");
sidebar.setAttribute(
  "style",
  "width: 480px; height: 51px; border: 1px solid black; display: flex; flex-flow: row"
);
const nRow = document.createElement("input");
const mColumn = document.createElement("input");
const myBtn = document.createElement("button");
nRow.id = "rows";
mColumn.id = "columns";
myBtn.id = "btn";
sidebar.appendChild(nRow);
sidebar.appendChild(mColumn);
sidebar.appendChild(myBtn);
document.getElementById("btn").innerHTML = "O.K";
nRow.setAttribute("style", "flex-grow: 1; text-align: center");
mColumn.setAttribute("style", "flex-grow: 1; text-align: center");
myBtn.style.flexGrow = 2;
nRow.setAttribute("placeholder", "Rows");
mColumn.setAttribute("placeholder", "Columns");
nRow.setAttribute("type", "number");
mColumn.setAttribute("type", "number");
nRow.setAttribute("min", "1");
mColumn.setAttribute("min", "1");
myBtn.addEventListener("click", myFunction);
const grid = document.querySelectorAll(".content");
grid.forEach((content) => {
  content.addEventListener("mouseover", () => {
    content.style.background =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  });
});
function myFunction() {
  document.getElementById("container").innerHTML = "";
  var n = document.getElementById("rows").value;
  var m = document.getElementById("columns").value;
  if (n <= 0 || n % 1 != 0 || m <= 0 || m % 1 != 0) {
    alert("wrong input");
  } else {
    content.style.width = 480 / m + "px";
    content.style.height = 480 / n + "px";
    for (var i = 1; i <= n * m; ++i) {
      container.appendChild(content.cloneNode());
    }
    const grid = document.querySelectorAll(".content");
    grid.forEach((content) => {
      content.addEventListener("mouseover", () => {
        content.style.background =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      });
    });
  }
}
