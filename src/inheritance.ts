//inheritance disebut juga dengan kelas turunan dimana kita membuat class yang properti dan methodnya diturunkan dari class lain

class Pekerja {
  readonly id: string;
  nama: string;
  gaji?: number;

  constructor(id: string, nama: string) {
    this.id = id;
    this.nama = nama;
  }

  get gajiBersih(): number {
    if (this.gaji) {
      return this.gaji - (this.gaji * 15) / 100;
    } else {
      return 0;
    }
  }
}

class Karyawan extends Pekerja {
  status: string = "karyawan";
  gaji: number = 4_000_000;
}

class Manager extends Pekerja {
  status: string = "manager";
  gaji: number = 8_000_000;
}

class Boss extends Pekerja {
  status: string = "boss";
  gaji: number = 12_000_000;
}

class CEO extends Boss {
  //class child bisa punya child lagi
  tipe: string = "CEO";
}

const ucok = new Karyawan("uck112", "ucok baba");
console.log(ucok);
console.log(ucok.gaji);
console.log(ucok.gajiBersih); //dari getter di class parent pekerja tapi bisa digunakan di child

const elonmask = new CEO("eln1212", "elonmask");
console.log(elonmask);
console.log(elonmask.gajiBersih);
