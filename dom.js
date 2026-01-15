const paragraf = document.getElementById("paragraf1")
// console.log(paragraf)

// paragraf.style.color="red"
// paragraf.classList.add("hide")

// paragraf.innerHTML="halo dunia"

// const tombol2 = document.getElementById('tombol')
// tombol2.addEventListener('click', function(){
//     alert("tombol berhasil di klik")
// })

// const tombol3 = document.getElementById("paragraf1")
// tombol3.addEventListener('mouseover', function(){
//     paragraf.classList.add("hide")
// })

// const form =  document.querySelector('form')
// form.addEventListener('submit',function(event){
//     const inputNama = document.getElementById('nama')
//     if(inputNama.value == ''){
//         alert("nama tidak boleh kosong")
//         event.preventDefault
//     }
// })


const form =  document.querySelector('form')
function rumus(namaValue){
    console.log(namaValue*100)
}
form.addEventListener('submit',function(event){
    const inputNama = document.getElementById('nama')
    const namaValue = inputNama.value
    if(namaValue == ''){
        alert("nama tidak boleh kosong")
        event.preventDefault()
    }
    rumus(namaValue)
})


