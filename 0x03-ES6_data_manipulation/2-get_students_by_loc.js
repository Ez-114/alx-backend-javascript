export default function getStudentsByLocation(studentsArr, locationName) {
  return studentsArr.filter((student) => student.location === locationName);
}
