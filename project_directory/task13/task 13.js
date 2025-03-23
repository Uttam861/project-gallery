window.onload = function () {
    let studentData = [];
    document.getElementById("insertBtn").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let college = document.getElementById("college").value;
    let grade = document.getElementById("grade").value;
    if (name && dob && college && grade) {
    studentData.push({ name, dob, college, grade });
    document.getElementById("info").innerText = `Info Inserted: ${name}`;
    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("college").value = "";
    document.getElementById("grade").value = "";
    } else {
    alert("Please fill all fields");
    }
    });
    document.getElementById("showBtn").addEventListener("click", function () {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h3>Stored Student Data:</h3>";
    if (studentData.length === 0) {
    outputDiv.innerHTML += "<p>No data available.</p>";
    } else {
    studentData.forEach((student, index) => {
    outputDiv.innerHTML += `<p>${index + 1}. Name: ${student.name},
    D.O.B: ${student.dob}, College: ${student.college}, Grade: ${student.grade}</p>`;
    });
    }
    });
    };
    