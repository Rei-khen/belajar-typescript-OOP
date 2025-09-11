/*
Abstract class adalah kelas yang tidak bisa langsung diinstansiasi (tidak bisa dibuat objeknya secara langsung), tapi bisa dijadikan kelas dasar untuk kelas lain.

Fungsinya:

Menjadi blueprint untuk kelas turunannya.

Bisa memiliki metode biasa (dengan implementasi) dan metode abstrak (tanpa implementasi, harus diimplementasikan di subclass).
*/

abstract class Customer {
  readonly id: string;
  abstract name: string;

  constructor(id: string) {
    this.id = id;
  }

  abstract sayHello(): void;

  sayGoodbye() {
    console.log("selamat tingal kawan");
  }
}

// const regularCustomer = new Customer("d11212"); error tidak bisa

//abstract class harus dibuat childnya
class RegularCustomer extends Customer {
  name: string; //harus dibuat ulang karna variabel abstract di abstract class
  level: number;

  constructor(id: string, level: number, name: string) {
    super(id);
    this.level = level;
    this.name = name;
  }

  //fungsi sayHello harus dibuat ulang karna sudah dideklarasi di abstract class
  sayHello(): void {
    console.log("hello semuanya");
  }
}

const ucok = new RegularCustomer("d1212", 12, "ucok");
console.log(ucok);

ucok.sayGoodbye();
ucok.sayHello();
