/*
Namespace adalah cara untuk mengelompokkan kode (kelas, fungsi, variabel, interface) ke dalam satu ruang nama agar tidak terjadi konflik nama.

Mirip folder untuk kode, tapi di level kode TypeScript.

Berguna untuk project besar agar modul yang berbeda tidak saling bentrok.
*/

//mengimport namespace
import { Persegi, PersegiPanjang } from "./matematika/bangunRuang.js";

console.log(Persegi.Luas(12));
console.log(Persegi.Keliling(4));

console.log(PersegiPanjang.Luas(12, 31));
console.log(PersegiPanjang.Keliling(12, 31));
