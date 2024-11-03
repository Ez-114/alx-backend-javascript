export default function updateStudentGradeByCity(studentsArr, locationName, gradeList) {
  return studentsArr
    .filter((student) => student.location === locationName)
    .map((student) => {
      const gradeObj = gradeList.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
