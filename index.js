// ----------1-masala
// 1. Berilgan massivning ichidan berilgan qiymat bor yoki yoqligini tekshiruvchi funksiya yozing

// function tekshir(arr, value) {
//   return arr.includes(value);
// }
// var myArray = [1, 2, 3, 4, 5];

// var result1 = tekshir(myArray, 3, 6);
// var result2 = tekshir(myArray, 6);

// console.log(result1, result2);

// ----------2-masala
// 2. Quyidagi kabi obyektlardan tashkil topgan massiv berilganda uning ichidan berilgan qiymatlarga mos keluvhi funksiya yozing

// const products = [
//   { id: 1, name: "Laptop", brand: "Dell", price: 999.99 },
//   { id: 2, name: "Smartphone", brand: "Samsung", price: 699.99 },
//   { id: 3, name: "Tablet", brand: "Apple", price: 499.99 },
//   { id: 4, name: "Desktop", brand: "HP", price: 1199.99 },
// ];
// function filterProducts(arr, key, value) {
//   let res = [];
//   res = arr.filter((v) => {
//     return v[key] == value;
//   });
//   return res;
// }

// console.log(filterProducts(products, "brand", "Dell"));
// Should return [{ id: 1, name: 'Laptop', brand: 'Dell', price: 999.99 }]

// console.log(filterProducts(products, "price", 699.99));
// Should return [{ id: 2, name: 'Smartphone', brand: 'Samsung', price: 699.99 }]

// ----------3-masala
// 3. Quyidagi kabi massiv berilganda uning ichidan yoshlarining o'rtachasini topuvchi funksiya yozing
// const students = [
//   { name: "Alice", age: 22, grades: [85, 90, 92, 88] },
//   { name: "Bob", age: 20, grades: [78, 85, 80, 88] },
//   { name: "Charlie", age: 21, grades: [90, 92, 89, 94] },
// ];

// function findAverageAge(students) {
//   let totalAge = 0;
//   students.forEach((student) => {
//     totalAge += student.age;
//   });
//   return totalAge / students.length;
// }

// console.log(findAverageAge(students));

// ----------4-masala
// Quyidagi kabi massivni priority boyicha saralab beradigan funksiya yozing
// const tasks = [
//   { taskName: "Task A", priority: "High", deadline: "2023-03-15" },
//   { taskName: "Task B", priority: "Medium", deadline: "2023-04-10" },
//   { taskName: "Task C", priority: "Low", deadline: "2023-03-01" },
//   { taskName: "Task D", priority: "High", deadline: "2023-03-20" },
// ];

// function sortTasksByDeadline(tasks) {
//   tasks.sort((a, b) => {
//     return new Date(a.deadline) - new Date(b.deadline);
//   });
// }
// sortTasksByDeadline(tasks);

// console.log(tasks);
/*
Should output:
[
  { taskName: 'Task C', priority: 'Low', deadline: '2023-03-01' },
  { taskName: 'Task A', priority: 'High', deadline: '2023-03-15' },
  { taskName: 'Task D', priority: 'High', deadline: '2023-03-20' },
  { taskName: 'Task B', priority: 'Medium', deadline: '2023-04-10' },
]
*/

// ----------5-masala
// Berilgan massivdan berilgan oraliqdan berilgan oraliqqacha bolgan qiymatlarni olib beruvchi funksiya yozing
