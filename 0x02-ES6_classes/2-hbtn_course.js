export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateName(name);
    this._length = HolbertonCourse._validateLength(length);
    this._students = HolbertonCourse._validateArray(students);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = HolbertonCourse._validateName(name);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = HolbertonCourse._validateLength(length);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = HolbertonCourse._validateArray(students);
  }

  static _validateName(name) {
    if (typeof name === 'string') {
      return name;
    }
    throw (new TypeError('Name must be a string'));
  }

  static _validateLength(length) {
    if (typeof length === 'number') {
      return length;
    }
    throw (new TypeError('Length must be a number'));
  }

  static _validateArray(array) {
    if (Array.isArray(array)) {
      return array;
    }
    throw (new TypeError('Students must be an array'));
  }
}
