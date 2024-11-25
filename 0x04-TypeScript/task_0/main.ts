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

export const renderTable = (stdsList: Array<Student>): void =>  {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of stdsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(stdsList);
