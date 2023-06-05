let height = document.querySelector("#height")
let weight = document.querySelector("#weight")



function calculate() {

    var altura = (height.value)
    var peso = (weight.value)

    var resultado = peso / (altura * altura).toFixed(2)


    if (resultado < 17) {
        document.querySelector("#under17").classList.add("under17active")
    } else if (resultado >= 17 && resultado <= 18.49) {
        document.querySelector("#under18").classList.add("under18active")

    } else if (resultado >= 18.5 && resultado <= 24.99) {
        document.querySelector("#under25").classList.add("under25active")
    } else if (resultado >= 25 && resultado <= 29.99) {
        document.querySelector("#under30").classList.add("under30active")
    } else if (resultado >= 30 && resultado <= 34.99) {
        document.querySelector("#under35").classList.add("under35active")
    } else if (resultado >= 35 && resultado <= 39.99) {
        document.querySelector("#under40").classList.add("under40active")
    } else if (resultado >= 40) {
        document.querySelector("#above40").classList.add("above40active")
    }
}