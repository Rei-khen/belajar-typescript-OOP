//function di dalam class

class Customer {
  readonly id: string;
  nama: string;
  pekerjaan?: string;

  constructor(id: string, nama: string) {
    this.id = id;
    this.nama = nama;
  }

  sayHello() {
    console.log("selamat datang", this.nama);
  }

  display() {
    console.log(`id : ${this.id}
nama : ${this.nama}
pekerjaan : ${this.pekerjaan}`);
  }
}

const Kumar: Customer = new Customer("d112", "kumar");
console.log(Kumar);

Kumar.sayHello();
Kumar.display();
