// eng qimmat mashinani ajratib oling

// eng arzon mashinani qaytari bersin

// qiymati 20000 qimmata bolgan mashinalrni
// ajratib bitta rrayga yigib qaytarsin

// color white bolganlarini ajratib bersin

// umumiy summani hisoblab bersin

//==================================================
const cars = [
  { id: 1, name: "Chevrolet Gentra", price: 15000, color: "Oq" },
  { id: 2, name: "Chevrolet Cobalt", price: 12500, color: "Kulrang" },
  { id: 3, name: "BYD Song Plus", price: 32000, color: "Qora" },
  { id: 4, name: "Kia K5", price: 28000, color: "To'q ko'k" },
  { id: 5, name: "Hyundai Sonata", price: 27500, color: "Kumushrang" },
  { id: 6, name: "Toyota Camry", price: 35000, color: "Qora" },
  { id: 7, name: "BMW X5", price: 75000, color: "To'q kulrang" },
  { id: 8, name: "Mercedes-Benz E-Class", price: 80000, color: "Oq" },
  { id: 9, name: "Chevrolet Tracker", price: 19000, color: "Qizil" },
  { id: 10, name: "Tesla Model 3", price: 42000, color: "Moviy" },
];
//==================================================

//==================================================
// 1.
function mostExpensive(cars) {
  let max = 0;
  for (let i of cars) {
    if (i.price > max) {
      max = i.price;
    }
  }
  return max;
}
console.log(mostExpensive(cars));
//==================================================

//==================================================
// 2.
function cheapest(cars) {
  let min = 100_000;
  for (let i of cars) {
    if (i.price < min) {
      min = i.price;
    }
  }
  return min;
}
console.log(cheapest(cars));
//==================================================

//==================================================
// 3.
function price20k(cars) {
  let cars20k = [];
  for (let i of cars) {
    if (i.price > 20000) {
      cars20k.push(i);
    }
  }
  return cars20k;
}
console.log(price20k(cars));
//==================================================

//==================================================
// 4.
function whiteCars(cars) {
  let white = [];
  for (let i of cars) {
    if (i.color === "Oq") {
      white.push(i);
    }
  }
  return white;
}
console.log(whiteCars(cars));
//==================================================

//==================================================
// 5.
function sum(cars) {
  let sum = 0;
  for (let i of cars) {
    sum += i.price;
  }
  return sum;
}
console.log(sum(cars));
//==================================================

// kitobdan
//==================================================
// 70.
function kubikchalar(n) {
  return 6 * Math.pow(n, 2);
}

console.log(kubikchalar(2));

//=================================
// 71.
//=================================
function sayohat(odamlar) {
  if (odamlar == 0) {
    return 0;
  }

  return Math.floor((odamlar + 4) / 5);
}

console.log(sayohat(11));
//=================================

//=================================
// 72.
//=================================
function boshJoy(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }

  return false;
}

console.log(boshJoy("hello world"));
//=================================

//=================================
// 73.
//=================================
//=================================
// 73.
//=================================
function hajm(a, b, c) {
  return a * b * c;
}

console.log(hajm(2, 5, 1));
//=================================
//=================================

//=================================
// 74.
//=================================
function sonlar(son1, son2, arr) {
  let result = [];

  for (let i of arr) {
    if (i > son1 && i < son2) {
      result.push(i);
    }
  }

  return result;
}

console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7]));
//=================================

//=================================
// 75.
//=================================
function turlar(arr) {
  let result = [];

  for (let i of arr) {
    result.push(typeof i);
  }

  return result;
}

console.log(turlar([1, 2, "null", []]));
//=================================

//=================================
// 76.
//=================================
function qaytarString(str, miqdor) {
  if (typeof str !== "string") {
    return "Not A String !!";
  }

  let result = "";

  for (let i = 0; i < miqdor; i++) {
    result += str;
  }

  return result;
}

console.log(qaytarString("Mubashir", 2));
//=================================

//=================================
// 77.
//=================================
function koplik(str) {
  return str.slice(str.length - 3) === "lar";
}

console.log(koplik("daraxtlar"));
//=================================

//=================================
// 78.
//=================================
function boshOxiri(str) {
  return str[0] + str[str.length - 1];
}

console.log(boshOxiri("ganesh"));
//=================================

//=================================
// 79.
//=================================
function sozAytish(word) {
  let ikkiHarf = word.slice(0, 2);

  return ikkiHarf + "... " + ikkiHarf + "... " + word;
}

console.log(sozAytish("incredible"));
//=================================

//=================================
// 80.
//=================================
function ahvol(status) {
  if (status === undefined) {
    status = "neutral";
  }

  return `Today, I am feeling ${status}`;
}

console.log(ahvol("happy"));
console.log(ahvol());
//=================================
