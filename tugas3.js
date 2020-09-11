let nilaiAwal = 2
let nilaiAkhir = 10
let dataArray = [3, 12, 10, 2, 8, 5]

let isValid = true

function validasi() {
    //nilaiAwal harus lebih kecil dari nilaiAkhir, maka jika
    if (nilaiAwal > nilaiAkhir) {
        console.log('Nilai awal harus lebih kecil dari nilai akhir')
        isValid = false
    }
    // dataArray is array?
    if (Array.isArray(dataArray)) {
        //dataArray harus lebih dari 5
        if (dataArray.length <= 5) {
            console.log('Jumlah angka dalam dataArray harus lebih dari 5')
            isValid = false
        }
    } else {
        console.log('dataArray harus berupa Array')
        isValid = false
    }
}
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    //validasi
    validasi()
    if (isValid) {
        //tampilkan hanya diantara nilaiAwal dan nilaiAkhir
        let hasilAkhir = dataArray.filter(item => item > nilaiAwal && item < nilaiAkhir)
        //sorting
        console.log(hasilAkhir.sort((a, b) => a - b))
    }
}
seleksiNilai(nilaiAwal, nilaiAkhir, dataArray)