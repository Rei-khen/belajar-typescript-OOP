//biasa disebut attribute atau field
//kita bisa membuat property yang readonly, mandatory, dan optional
//propertty yang mandatory wajib ditambahkan nilainya di Constructor

class Mahasiswa {
  readonly id: string;
  nama: string;
  hobi?: string;

  constructor(id: string, nama: string) {
    this.id = id;
    this.nama = nama;
  }
}

const pablo: Mahasiswa = new Mahasiswa("d111", "pablo araco"); //wajib diisi keduanya
pablo.hobi = "ngoding";
console.log(pablo);

pablo.nama = "pablo gaming"; //bisa diubah
console.log(pablo);

// pablo.id = "d112"; error karna readonly
console.log(pablo);

//property default value
class Murid {
  readonly id: number;
  nama: string = "belum diisi";
  hobi?: string[];

  constructor(id: number) {
    this.id = id;
  }
}

const ucok: Murid = new Murid(111);
console.log(ucok);
console.log(ucok.nama);
console.log(ucok.hobi);

ucok.nama = "ucok surucok";
console.log(ucok.nama);

ucok.hobi = ["ngoding", "main bola", "tidur"];

ucok.hobi.map((hobi): void => {
  console.log(hobi);
});
