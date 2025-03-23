let vehicles = [];

function Vehicle(name, brand, year, plate, color, owner) {
  this.name = name;
  this.brand = brand;
  this.year = year;
  this.plate = plate;
  this.color = color;
  this.owner = owner;

  this.describe = function () {
    return `Vehicle: ${this.name}, Brand: ${this.brand}, Year: ${this.year}, Plate: ${this.plate}, Color: ${this.color}, Owner: ${this.owner}`;
  };
}

function addVehicle() {
  const name = document.getElementById("vehicleName").value.trim();
  const brand = document.getElementById("vehicleBrand").value.trim();
  const year = document.getElementById("vehicleYear").value.trim();
  const plate = document.getElementById("vehiclePlate").value.trim();
  const color = document.getElementById("vehicleColor").value.trim();
  const owner = document.getElementById("vehicleOwner").value.trim();

  if (name && brand && year && plate && color && owner) {
    const newVehicle = new Vehicle(name, brand, year, plate, color, owner);
    vehicles.push(newVehicle);
    alert("Vehicle added successfully!");
    resetForm();
  } else {
    alert("Please fill out all fields.");
  }
}

function resetForm() {
  document.getElementById("vehicleName").value = "";
  document.getElementById("vehicleBrand").value = "";
  document.getElementById("vehicleYear").value = "";
  document.getElementById("vehiclePlate").value = "";
  document.getElementById("vehicleColor").value = "";
  document.getElementById("vehicleOwner").value = "";
}

function showVehicles() {
  const list = document.getElementById("vehicleList");
  list.innerHTML = "";

  vehicles.forEach(vehicle => {
    const p = document.createElement("p");
    p.textContent = vehicle.describe();
    list.appendChild(p);
  });
}

function clearList() {
  document.getElementById("vehicleList").innerHTML = "";
}

function searchVehicle() {
  const searchTerm = document.getElementById("searchVehicle").value.toLowerCase().trim();
  const list = document.getElementById("vehicleList");
  list.innerHTML = "";

  const results = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchTerm)
  );

  if (results.length > 0) {
    results.forEach(vehicle => {
      const p = document.createElement("p");
      p.textContent = vehicle.describe();
      list.appendChild(p);
    });
  } else {
    list.innerHTML = "<p>No vehicle found.</p>";
  }
}