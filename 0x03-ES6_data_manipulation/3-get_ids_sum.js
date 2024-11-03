export default function getStudentIdsSum(studentsArr) {
  return studentsArr.reduce((accumulator, student) => accumulator + student.id, 0);
}
