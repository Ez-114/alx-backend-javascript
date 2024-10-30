import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse('PHP', 20, ["Lucie", "Guillaume"]);

try {
  c1.name = "PHP2";
  c1.length = 10;
  c1.students = ["Thomas", 7];
  console.log(c1.name);
  console.log(c1.length);
  console.log(c1.students);
}
catch (err) {
  console.log(err);
}
