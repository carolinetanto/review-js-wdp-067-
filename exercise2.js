//A. Buatlah sebuah objek yang mendeskripsikan diri kalian masing-masing.B. Object tersebut harus memiliki property nama_depan(string), nama_belakang(string), hobi(array ofstrings), angka_favorit(number), memakai_kacamata(boolean), dan boleh memanambahkan propertylainnya.C. Tampilkan setiap propertynya menggunakan console.log setelah setiap perubahan.D. Cetak nama_lengkap dengan console.log.E. Ubah angka_favorit jadi 8.F. Tambahkan satu hobi "coding".G. Tambahkan satu property "lulusan" dengan value "Hacktiv8".H. Cetak semua hobi satu per satu menggunakan loop.I. Cetak semua key milik objek, dan cetak semua values milik objek.J. Gunakan loop untuk cetak semua property milik objek dengan format key : values.
const carol = {
    nama_depan: 'Caroline Avery',
    nama_belakang: 'Tanto',
    hobi: ['nonton', 'makan', 'olahraga'],
    angka_favorit: 3,
    memakai_kacamata: true
}
console.log(carol);

carol.nama_lengkap = carol.nama_depan + ' ' + carol.nama_belakang;
console.log(carol.nama_lengkap);

carol.angka_favorit = 8;
console.log(carol.angka_favorit);

carol.hobi.push('coding');
console.log(carol.hobi);

carol.lulusan = 'Hacktiv8';
console.log(carol.lulusan)

for(var i=0; i<carol.hobi.length; i++){
    console.log(carol.hobi[i]);
}
