import "./styles.css";

// 3rd task
document.getElementById("my-button").onclick = function () {
  console.log("hello world");
  document.getElementById("my-header").textContent = "My notebook";
};

// 4th task
document.getElementById("add-data").onclick = function () {
  const node = document.createElement("li");
  const text = document.getElementById("user-input").value;
  node.appendChild(document.createTextNode(text));
  document.getElementById("my-list").appendChild(node);
};
