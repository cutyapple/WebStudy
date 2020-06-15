function swap(node1, node2) {
  const afterNode2 = node2.nextElementSibling;
  const parent = node2.parentNode;

  // console.log(parent);

  node1.replaceWith(node2);
  parent.insertBefore(node1, afterNode2);
}

var dragTarget;
var nowTarget;
var beforeY = 0;
var nowY = 0;
const background = document.querySelector("#target");

function dragstart_handler(ev) {
  ev.dataTransfer.setData("application/my-app", ev.target.id);
  ev.dataTransfer.dropEffect = "move";

  dragTarget = ev.target;
}

function mouseMoves(e) {
  nowY = e.clientY;
  beforeY = nowY;
}

function dragover_handler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";

  if (ev.target != background && nowTarget != ev.target) {
    beforeY < nowY ? swap(ev.target, dragTarget) : swap(dragTarget, ev.target);
    console.log(beforeY, nowY);
  }
}

function drop_handler(ev) {
  ev.preventDefault();

  const data = ev.dataTransfer.getData("application/my-app");
  if (ev.target == document.querySelector("#target")) {
    ev.target.appendChild(document.getElementById(data));
  }
}
