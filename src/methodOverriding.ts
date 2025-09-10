//mendeklarasikan ulang method yang sudah ada di parent class

class Animal {
  suara() {
    console.log("....hewan bersuara");
  }
}

class Kucing extends Animal {
  suara() {
    super.suara(); //kita bisa memanggil suara dari class parent dengan kata kunci super
    console.log("meong meong meong");
  }
}

const j = new Animal();
j.suara();

const k = new Kucing();
k.suara();
