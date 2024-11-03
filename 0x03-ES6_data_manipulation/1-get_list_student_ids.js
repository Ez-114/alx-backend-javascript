export default function getListStudentIds(studentsArr) {
  if (Array.isArray(studentsArr)) {
    return studentsArr.map((student) => student.id);
  }
  return [];
}
