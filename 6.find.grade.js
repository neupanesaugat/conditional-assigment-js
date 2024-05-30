// ? 6.Find grades for student marks.
// ? A. If the mark is greater than or equal to 90, the grade is “A
// ? plus”.
// ? B. If the mark is greater than or equal to 80,the grade is “A”.
// ? C. Grade “B” from marks greater than equal to 70.
// ? D. “C” for marks greater than equal to 60.
// ? E. “F” for marks less than 60.

let mark = 64; //Number ranging from 0-100

mark >= 90
  ? console.log("Grade : A+")
  : mark >= 80
  ? console.log("Grade : A")
  : mark >= 70
  ? console.log("Grade : B")
  : mark >= 60
  ? console.log("Grade : C")
  : console.log("Grade : F");
