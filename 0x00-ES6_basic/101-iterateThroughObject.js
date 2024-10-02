export default function iterateThroughObject(reportWithIterator) {
  const emp = [];

  for (const employee of reportWithIterator) {
    emp.push(employee);
  }

  return emp.join(' | ');
}
