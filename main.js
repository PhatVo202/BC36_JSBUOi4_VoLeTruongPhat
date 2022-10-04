// Bai 1:
// Input: luong 1 ngay, so ngay lam
// Process:
// 1. Lay dc input , tao 2 bien luong 1 ngay = 100000,so ngay lam =20
// 2.Tinh luong: so ngay lam * luong 1 ngay
// 3.Xuat KQ
// Output:Tinh luong(tien)
function ex1() {
  var oneDaySalary = +document.getElementById("salaryDay").value;
  var numberOfWorkingDay = +document.getElementById("numberWorkingDay").value;
  var salary = oneDaySalary * numberOfWorkingDay;
  document.getElementById("results1").innerHTML = salary;
}
// Bai 2:
// Input: nguoi dung nhap 5 so thuc n1,n2,n3,n4,n5
// Process:
// 1.lay input
// 2.Tinh gia tri trung binh 5 so: (n1+n2+n3+n4+n5)/5
// 3.Xuat KQ
// Output: Tinh kQ trung binh 5 so
function ex2() {
  var n1 = +document.getElementById("number1").value;
  var n2 = +document.getElementById("number2").value;
  var n3 = +document.getElementById("number3").value;
  var n4 = +document.getElementById("number4").value;
  var n5 = +document.getElementById("number5").value;

  var averageValue = (n1 + n2 + n3 + n4 + n5) / 5;
  document.getElementById("results2").innerHTML = averageValue;
}
// Bai 3:
// Input: 1 USD = 23000 vnd
// Process:
// 1.lay input
// 2.quy doi so tien usd sang vnd
// 3.Xuat ra kq tien vnd
// Output: Tinh tien tien sau quy doi
function ex3() {
  var changeUSD = +document.getElementById("changeUSD").value;
  var changeMoney = changeUSD * 23500;
  changeMoney = new Intl.NumberFormat().format(changeMoney);
  document.getElementById("results3").innerHTML = changeMoney;
}
// Bai4:
// Input: chieu dai, chieu rong;
// Process:
// 1.lay input
// 2.Tinh chu vi = (chieu dai + chieu rong ) * 2;
// 3.Tinh dien tich = chieu dai * chieu rong;
// 4.Xuat KQ chu vi, dien tich;
// Output: tinh va xuat ra chu vi dien tich

function ex4() {
  var long = +document.getElementById("longs").value;
  var width = +document.getElementById("widths").value;
  var area = long * width;
  var perimeter = (long + width) * 2;
  var results4 = document.getElementById("results4");
  results4.innerHTML = "Dien tich: " + area + "; " + "Chu vi: " + perimeter;
}
// Bai5:
// Input:cho 1 so co 2 chu so
// Process:
// 1.lay input
// 2.dau tien tach lay ki so hang don vi = so % 10;
// 3.tach lay ki so hang chuc = so / 10;
// 4.Kq = kisohangdonvi + kisohangchuc;
// Output:Tinh tong 2 ki so vd:3+4=7

function ex5() {
  var n = +document.getElementById("addNumber").value;

  var dozen = Math.floor(n / 10);
  var units = Math.floor(n % 10);
  var results = dozen + units;
  document.getElementById("results5").innerHTML = results;
}
