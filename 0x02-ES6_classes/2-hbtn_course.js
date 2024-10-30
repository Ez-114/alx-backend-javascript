export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;

    if (!(newStudents instanceof Array)) {
      throw new TypeError('Students must be an array');
    }

    if (newStudents.every((std) => typeof std !== 'string')) {
      throw new TypeError('Every student name must be string');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!(newStudents instanceof Array)) {
      throw new TypeError('Students must be an array');
    }

    if (newStudents.every((std) => typeof std !== 'string')) {
      throw new TypeError('Every student name must be string');
    }

    this._students = newStudents;
  }
}
