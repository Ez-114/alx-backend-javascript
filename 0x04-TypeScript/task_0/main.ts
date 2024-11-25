interface Student {
  firstName: string,
  lastName: string
  age: number,
  location: string,
}

const std1: Student = {
  firstName: "Ezzeldin",
  lastName: "Morgan",
  age: 21,
  location: "Alexandria",
};

const std2: Student = {
  firstName: "Youssef",
  lastName: "Obayed",
  age: 20,
  location: "Cairo",
};

const stdsList: Array<Student> = [
  std1,
  std2
];

const tableBody = document.querySelector("table");

stdsList.forEach((student) => {
  const row = document.createElement("tr");

  // Create a cell for the first name
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  // Create a cell for the location
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  // Append cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});
