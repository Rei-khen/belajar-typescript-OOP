//semua parameter di constructor yang ada visibilitynya (public, private, protected) akan dijadikan properties

class Orang {
  constructor(public nama: string = "", public umur: number = 0) {}
}

const kairi = new Orang("kairi kumar", 29);
console.log(kairi);

//lebih simple daripada seperti ini

class Human {
  public nama: string;
  public umur: number;
  constructor(nama: string, umur: number) {
    this.nama = nama;
    this.umur = umur;
  }
}
