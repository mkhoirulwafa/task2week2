//1 .length
// untuk mengetahui panjang sebuah string, array, atau object
// contoh :
const nilai = [80, 90, 40, 70]
console.log(nilai.length) //4

//2. isArray()
//untuk mengecek apakah sebuah variabel bertipe array?
//contoh :
console.log(
    Array.isArray(nilai) //true
)

//3. .pop()
//untuk menghapus value dari array di index terakhir
//contoh :
nilai.pop()
console.log( nilai ) //[80, 90, 40]

// 4. .push()
//untuk menambah value dari array dan ditempatkan di index akhir
//contoh:
nilai.push(100)
console.log(nilai) //[ 80, 90, 40, 100 ]

//5. isNaN()
//untuk mengecek apakah sebuah value itu bukan number
//contoh :
console.log(isNaN(123)) //false karena 123 adalah number

// 6. .parseInt()
//untuk mengurai string dan mengembalikan number
//contoh:
let a = '10' //tipe string
console.log(parseInt(a)) // 10 tipe number

//7. toLowerCase()
//untuk mengubah sebuah rangkaian string menjadi lowercase
//contoh:
let b = 'HeLLo WoRlD'
console.log(b.toLowerCase()) //hello world

//8. .toUpperCase()
//untuk mengubah sebuah rangkaian string menjadi uppercase
console.log(b.toUpperCase()) //HELLO WORLD

//9. Math.floor()
//untuk number yang memiliki koma dibulatkan kebawah
//contoh:
let c = 2.7
console.log(Math.floor(c))

//10. Math.round()
//untuk number yang memiliki koma dibulatkan keatas
//contoh:
console.log(Math.round(c))

