let Stack = [];
function Add() {
let taskInput = document.getElementById("Input").value;
if (taskInput) {
Stack.push(taskInput);
document.getElementById("Input").value = "";
update();
}
}
function Undo() {
if (Stack.length > 0) {
Stack.pop();
update();
}
}
function update() {
document.getElementById("Display").textContent = Stack.join(", ");
}
