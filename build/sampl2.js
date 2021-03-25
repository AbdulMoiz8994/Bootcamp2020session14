// //Array In Details
// let a = [1, 2, 3, 4, 5];
// a.push(6);
// console.log(a);
// //we should initize before use so we add in line 9 --> []
// let b: string[] = [];
// b.push("moiz", "rafay");
// b[1] = "khanzada";
// console.log(b);
// let students: string[] = ["moiz", "rafay", "malik"];
// let c = ["moiz", "rizwan", 1, true];
// // for (let v of c) {
// //   console.log(v);
// // }
// for (let v of students) {
//   console.log(v.toUpperCase());
// }
//TUPLES --> This is sub array of Array
// let person: [string, string, number, boolean] = ["moiz", "abdullah", 2, true];
// console.log(person[1].length);
// console.log(person[0].replace(/i/g, "E"));
// console.log(person[2].toFixed(3));
// console.log(person[3].valueOf());
// let person: [string, string, number?, boolean?] = ["moiz", "abdullah", 3];
// if (person[2]) {
//   console.log(person[2].toFixed(3));
// }
// immutable measns read onlY not perform any actions
// let d: readonly string[] = ["Abdul moiz", "Zafar Ali", "Ali"];
// d.map((arrays) => {
//   console.log(arrays);
// });
// console.log(d.push)//we can not do psuh bacuse it is only read able
// let person: readonly [string, string, number?, boolean?] = [
//   "moiz",
//   "abdullah",
//   1,
// ];
//give an error
// person.push(1.0);
// person[2]=1
//here is the condition if the number ava then it will show us 3 decimal
// console.log(person[2]?.toFixed(3));
//spread operators
// let man: [number, boolean, ...object[]] = [
//   2,
//   true,
//   { names: "Abdul moiz", fatherName: "Zafar Ali" },
// ];
// console.log(man);
// let man: [number, boolean, ...string[]] = [2, true, "Abdul moiz", "Zafar Ali"];
// console.log(man);
// enum
// enum Role {
//   Student,
//   Teacher,
//   Principal,
// }
// const { Student, Teacher, Principal } = Role;
// const students = {
//   names: "Abdul moiz",
//   roles: [Student, Teacher],
// };
// if (students.roles.includes(Student)) {
//   console.log(students.names + " is a Good Student");
//   if (students.roles.includes(Teacher)) {
//     console.log(students.names + " is also Good Teacher");
//   }
// }
"use strict";
