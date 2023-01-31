let workdays = 0;

function addInputFields() {
  workdays++;
  let inputFields = `<div>
    Día ${workdays}:<br>
    Entrada: <input type="time" id="day${workdays}In">
    Salida: <input type="time" id="day${workdays}Out">
    </div>`;
  document.getElementById("workdays").innerHTML += inputFields;
}

function calculateSalary() {
  let salary = 0;
  for (let i = 1; i <= workdays; i++) {
    let dayIn = new Date(
      "1970-01-01T" + document.getElementById(`day${i}In`).value
    );
    let dayOut = new Date(
      "1970-01-01T" + document.getElementById(`day${i}Out`).value
    );
    let hoursWorked = dayOut.getHours() - dayIn.getHours();
    if (dayOut.getHours() < dayIn.getHours()) {
      hoursWorked += 24;
    }
    hoursWorked += (dayOut.getMinutes() - dayIn.getMinutes()) / 60;
    /*salary += hoursWorked * 10.40;*/

    let rate = document.getElementById("rate").value;
    salary += hoursWorked * rate;
  }
  document.getElementById("result").innerHTML = "Sueldo: $" + salary.toFixed(2);
}
