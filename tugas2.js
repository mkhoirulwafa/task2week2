const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]
let result = []

//cek if mengandung string yang dimasukkan user
function check(key){
    for (let i = 0; i < name.length; i++) {
        if (name[i].toLowerCase().includes(key.toLowerCase()) == true) {
            //push name[i] ke result
            result.push(name[i])
        }
    }
    return result
}

function searchName(key, till, callback) {
    //masukkan hasil callback ke result
    let result = callback(key)

    //hanya tampilkan value sebanyak till
    let hasilAkhir = result.splice(0, till)
    console.log(hasilAkhir)
}

//key = 'an', tampilkan hanya 3 value, callback func check()
searchName('an', 3, check)


