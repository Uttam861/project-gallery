function grade() {
    let score = parseFloat(document.getElementById("dv").value);
    let grade = "";
    if (score >= 80) {
    grade = "A";
    } else if (score >= 60) {
    grade = "B";
    } else if (score >= 40) {
    grade = "C";
    } else {
    grade = "F";
    }
    document.getElementById("gh").innerText = grade;
    }
    