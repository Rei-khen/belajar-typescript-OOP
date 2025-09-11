/*
static adalah keyword untuk mendefinisikan properti atau metode yang dimiliki oleh kelas itu sendiri, bukan oleh objeknya.

Artinya, kamu tidak perlu membuat instance dari kelas untuk mengakses properti/metode static.
*/

class Configuration {
  static name: string = "belajar typescript oop";
  static verison: number = 1.0;
  static author: string = "jeki chan";
}

//mengakses variabel static tidak perlu membuat objek terlebih dahulu
console.log(Configuration.name);
console.log(Configuration.verison);
console.log(Configuration.author);

//bisa juga seperti  ini
class Calculator {
  static pi: number = 3.14;

  static perkalian(a: number, b: number): number {
    return a * b;
  }

  static pengurangan(a: number, b: number): number {
    return a - b;
  }

  static penjumlahan(a: number, b: number): number {
    return a + b;
  }

  //non static
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

//mengakses variabel dan fungsi static
console.log(Calculator.penjumlahan(12, 31));
console.log(Calculator.pengurangan(3, 8));
console.log(Calculator.perkalian(12, 31));

const myCalc = new Calculator("kalulator ku");
console.log(myCalc.name);
// console.log(myCalc.penjumlahan(23, 12)); tidak bisa karna static
