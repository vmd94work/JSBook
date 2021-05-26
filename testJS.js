/* cycle: for (let i = 0; i < 10; i++) {
  //! Эту строку можно изменить
  for (let j = 0; j < 10; j++) {
    if (i === 5 && j === 5) {
      break cycle;
    }

    console.log(i, j);
  }
}
 */
/* const apple = 1.15;
const orange = 2.3;

let sum = apple + orange;
console.log(sum);
 */
/* console.log(typeof null); */
/* let animal = {
  name: "animal",
  age: 10,
  childs: ["child 1", "child 2"],
};
let cat = clone(animal);
cat.name = "cat";
cat.age = 5;
cat.childs.push("child 3");

console.log(cat.name, cat.age); // cat 5
console.log(cat.childs); // [ 'child 1', 'child 2', 'child 3' ]

console.log(animal.name, animal.age); // cat 5
console.log(animal.childs); // [ 'child 1', 'child 2', 'child 3' ]
function clone(obj) {
  return obj;
}
 */
/* function sumInput() {
  let sumArr = [];
  while (true) {
    let num = prompt("num", 0);

    if (num == "" || num === null || !isFinite(num)) break;

    sumArr.push(+num);
  }
  let sum = 0;
  for (let item of sumArr) {
    sum += item;
  }
  console.log(sum);
}
sumInput(); */

/* function getMaxSubSum(arr) {
  let maxSum = 0;
  let parcialSum = 0;

  for (let item of arr) {
    parcialSum += item;
    maxSum = Math.max(maxSum, parcialSum);
    parcialSum < 0 ? (parcialSum = 0) : parcialSum;
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3])); */

/* let arr = [1, 2];
console.log(arr.concat([3, 4], [5, 6])); */
/* let arr = [1, 2];

let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log(arr.concat(arrayLike));
 */
/* ["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);
 */
/* ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} имеет позицию ${index} в ${array}`);
});
 */
/* let names = 'Вася, Петя, Маша';

let arr = names.split(', ');
console.log(arr); */

/* function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      word == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize("my-short-string"));
 */
/* let arr = [5, 3, 8, 1]; */
/*  */
/* function filterRange(arr, a, b) { */
/*   return arr.filter((item) => item >= a && item <= b); */
/* } */
/* let filtered = filterRange(arr, 1, 4); */
/* console.log(filtered); */
/* console.log(arr); */
/* function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);

console.log(arr); */
/* function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);
 */

/* function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      word == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize("my-short-string"));
 */
/* let arr = [5, 3, 8, 1];
const a = 1;
const b = 2;

let filtered = function filterRange(arr, a, b) {
  return arr.filter(arr[i] > a && arr[i] < b);
}; */
/* function filterRange(arr, a, b) {
  for (let i = 0; i <= arr.length; i++) {
    let val = arr[i];
    if (val > a && val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRange(arr, 1, 4);
console.log(arr);
 */
/* let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);
 */
/* let arr = ["HTML", "JavaScript", "CSS"];
let sorted = arr.slice().sort();
console.log(arr);
console.log(sorted); */

/* function calculator() {
  this.metods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" ");
    (a = +split[0]), (op = split[1]), (b = +split[2]);
    if (!this.metods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.metods[op](a, b);
  };
  this.addMetod = function (name, func) {
    this.metod[name] = func;
  };
}
 */
/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

/* let names = function trans(obj) {}; */
/* console.log(names); */

/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];
let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
console.log(usersMapped);
 */
/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];
function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}
sortByAge(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
 */
/* let arr = [1, 2, 3];
function shaffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}
console.log(shaffle(arr));
 */
/* function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      word == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize("my-short-string"));
 */
/* let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
 */
/* function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);
 */

/* let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr); */
/* let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
  return arr.slice(0).sort();
}
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr); */

/* function calculate() {
  this.metodos = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = function (str) {
    let split = str.split("");
    (a = +split(0)), (op = split(1)), (b = +split(2));{
      if(!this.metodos[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
    return this.metodos[op](a,b)
  };
  this.addMethod = function(name, func){
    this.metod[name] = func
  };
   */
/*   function calculator() {
  this.metods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" ");
    (a = +split[0]), (op = split[1]), (b = +split[2]);
    if (!this.metods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.metods[op](a, b);
  };
  this.addMetod = function (name, func) {
    this.metod[name] = func;
  };
} */
/*
Прислал Ruslan Yand (Человек с Топором).

Новый фильм "Мстители" только что вышел! В кассе кинотеатра много людей,
стоящих в огромной очереди. Каждый из них имеет по одной купюре, номиналом
100, 50 или 25 $.
Билет "Мстители" стоит 25 $.
Вася сейчас работает клерком. Он хочет продать билет каждому человеку в этой
очереди.
Может ли Вася продать билет каждому человеку и дать сдачу, если у него
изначально нет денег и он продает билеты строго в порядке очереди?
Верните YES, если Вася сможет продать билет каждому человеку и дать сдачу.
В противном случае верните NO.
*/
/* function tickets(people) {
  
}

console.log(tickets([25, 25, 50])); // "YES"
console.log(tickets([25, 100])); // "NO" (У Васи нет сдачи со 100)
console.log(tickets([25, 25, 50, 50, 100])); // "NO"
console.log(tickets([25, 25, 25, 25, 25, 100, 100])); // "NO"
console.log(tickets([25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 25, 100])); // "YES"
console.log(tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100])); // "YES"
console.log(
  tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100])
); // => "NO"
console.log(tickets([25, 25, 50])); // "YES"
console.log(tickets([25, 100])); // "NO"
console.log(tickets([25, 25, 50, 50, 100])); // "NO"
console.log(tickets([25, 50, 25, 100])); // "YES"
console.log(tickets([25, 50, 50])); // "NO"
console.log(tickets([25, 25, 25, 100])); // "YES"
console.log(tickets([25, 25, 25, 25, 25, 50, 100])); // "YES"
console.log(tickets([25, 100])); // "NO" */

/* function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O
 */

/* function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }
  return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));
 */

/* function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O
 */

/* function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era" */

/* let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys); */

/* let user = {
  name: "John",
  years: 30,
};

let { name, years, isAdmin = false } = user;
console.log(isAdmin);
console.log(name);
 */
/* let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function toSalaries(salaries) {
  let max = 0;
  let maxName = null;
  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}
console.log(toSalaries(salaries)); */

/* let date = new Date(2012, 1, 20, 3, 12);
console.log(date);
 */

/* function getDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}
let date = new Date(2014, 0, 3);
console.log(getDay(date));
 */
/* let date = new Date(2012, 01, 20, 3, 12);
console.log(date) */
/* function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}
let date = new Date(2012, 0, 3);
console.log(getWeekDay(date)); */

/* let date = new Date(2012, 0, 3);

function getLocalDate(date) {
  let day = date.getDay();
  day == 0 ? (day = 7) : null;
  return day;
}
console.log(getLocalDate(date)); */
/* let date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}
console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
 */
/*
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1)); */
/* function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}
console.log(getSecondsToday()); */
/* function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}
console.log(getSecondsToTomorrow());
 */

/* function formatDate(date) {
  let diff = new Date() - date;
  if (diff < 1000) {
    return "now";
  }
  let sec = Math.floor(diff / 1000);
  if (sec < 60) {
    return sec + " second after";
  }
  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + " min after";
  }

  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    " " + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2));
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}
console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
console.log(new Date().getHours());
 */
/* function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100)); */
/* function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
console.log(sumTo(2));
 */
/* function sumTo(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumTo(2)); */

/* function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));
 */

/* function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(7));
 */

/* function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(7)); */
/* let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function printList(list) {
  console.log(list.next);
  if (list.next) {
    printList(list.next);
  }
}
printList(list);
 */

/* function sumTo(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumTo(100));
 */
/* function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));
 */

/* function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(7));
 */
/* let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function printList(list) {
  if (list.next) {
    return list.next;
  }
}
console.log(printList(list));
 */
/* function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
 */

/* function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}
console.log(( arr.filter(inArray([1, 2, 10])) )); */
/* function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(1)(2));
console.log(sum(5)(-1)); */
/* function unBetween(a, b) {
  return function (x) {
    return a <= x && x <= b;
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(unBetween(3, 6))); */
/* function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([1, 2, 10])));
 */

/* let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}
users.sort(byField("name"));
users.forEach((user) => console.log(user.name));

users.sort(byField("age"));
users.forEach((user) => console.log(user.name));
 */
/* function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy(); */
/* function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      // функция shooter
      console.log(j); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

console.log(army[0]());
console.log(army[5]()); */
/* function sayHi() {
  console.log("Привет");
}
sayHi(); */
/* let sayHi = function () {
  console.log("Привет");
};
sayHi(); */

/* function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }
  counter.set = (value) => (count = value);
  counter.decrease = () => count--;
  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика
console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1
console.log(counter()); // 10 (вместо 11)
 */

/* function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  };
  return f;
}
console.log(sum(1)(2)); */
/* function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

console.log( sum(1)(2) ); // 3
console.log( sum(5)(-1)(2) ); // 6
console.log( sum(6)(-1)(-2)(-3) ); // 0
console.log( sum(0)(1)(2)(3)(4)(5) ); // 15 */
/* function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = (value) => (count = value);
  counter.decrease = () => count--;
  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11) */

/* function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  };
  return f;
} */
/* function printNumbers(start, end) {
  let currentValue = start;
  let timerClock = setInterval(function () {
    console.log(currentValue);
    if (currentValue == end) {
      clearInterval(timerClock);
    }
    currentValue++;
  }, 1000);
}
console.log(printNumbers(5, 10)); */
/* function printNumbers(start, end) {
  let current = start;
  setTimeout(function go() {
    console.log(current);
    if (current < end) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}
console.log(printNumbers(5, 10)); */

/* function printNumbers(from, to) {
  let currentValue = from;
  let timeId = setInterval(function () {
    console.log(currentValue);
    if (currentValue == to) {
      clearInterval(timeId);
    }
    currentValue++;
  }, 1000);
}
console.log(printNumbers(5, 10)); */

/* function printNumbers(from, to) {
  let currentValue = from;
  setTimeout(function go() {
    console.log(currentValue);
    if (currentValue < to) {
      setTimeout(go, 1000);
    }
    currentValue++;
  }, 1000);
}
console.log(printNumbers(5, 10));
 */
/* function printNumbers(start, end) {
  let current = start;
  let timer = setInterval(function () {
    console.log(current);
    if (current == end) {
      clearInterval(timer);
    }
    current++;
  }, 1000);
}
console.log(printNumbers(5, 10)); */
/* function printNumbers(start, end) {
  let current = start;
  setTimeout(function go() {
    console.log(current);
    if (current < end) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}
console.log(printNumbers(5, 10));
 */
/* function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }
  wrapper.calls = [];
  return wrapper;
}
 */

/* function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}
let f1000 = delay(alert, 1000);
let f1500 = delay(alert, 1500);
f1000("test"); // показывает "test" после 1000 мс
f1500("test");
 */
/* function debounce(f, ms) {
  let coolDown = false;
  return function () {
    if (coolDown) return;
    f.apply(this, arguments);
    coolDown = true;
    setTimeout(() => (coolDown = false), ms);
  };
} */
/* function spy(func) {
  function wrapper(...arg) {
    wrapper.calls.push(arg);
    return func.apply(this, arguments);
  }
  wrapper.calls = [];
  return wrapper;
}
 */

/* function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}
let f5000 = delay(console.log("5s"), 5000);
 */

/* function debounce(f, ms) {
  let coolDown = false;
  return function () {
    if (coolDown) return;
    f.apply(this, arguments);
    coolDown = true;
    setTimeout(() => (coolDown = false), ms);
  };
}
 */

/* function throttle(func, ms) {
  let isThrottled = false,
    saveArg,
    saveThis;
  function wrapper() {
    if (isThrottled) {
      saveArg = arguments;
      saveThis = this;
      return;
    }
    func.apply(this, arguments);
    isThrottled = true;
  }
  setTimeout(function () {
    isThrottled = false;
    if (saveArg) {
      wrapper.apply(saveThis, saveArg);
      saveArg = saveThis = null;
    }
  }, ms);
  return wrapper;
}
 */

/* function throttle(func, ms) {
  let isThrottled = false;
  let savedArg;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArg = arguments;
      savedThis = this;
      return;
    }
    func.apply(this, arguments);
    isThrottled = true;
  }
  setTimeout(function () {
    isThrottled = false;
    wrapper.apply(savedThis, savedArg);
    savedArg = savedThis = null;
  }, ms);
  return wrapper;
}
 */
/* function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
 */
/* function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); */
const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 8];

/* function dublicate(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (currentValue === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      uniqueArr.push(currentValue);
    }
  }
  return uniqueArr;
}
console.log(dublicate(arr));
 */
/* function checkDublicate(array) {
  let uniqueArr = [];
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (!(currentValue in obj)) {
      obj[currentValue] = 1;
    } else {
      obj[currentValue] += 1;
    }
  }
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (obj[key] === 1) {
      uniqueArr.push(key);
    }
  });
  return uniqueArr;
}

console.log(checkDublicate(arr));
 */
