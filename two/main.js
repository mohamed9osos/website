

let h5one = document.querySelectorAll(".main ul li h5")[0]
let h5two = document.querySelectorAll(".main ul li h5")[1]
let h5three = document.querySelectorAll(".main ul li h5")[2]
let li = document.querySelector(".lione")
let span = document.querySelector(".main ul li .num")
let moon = document.querySelector(".moon")
let moon_toggle = document.querySelectorAll(".moon_toggle")[0]
let moon_toggle_one = document.querySelectorAll(".moon_toggle")[1]
let moon_toggle_two = document.querySelectorAll(".moon_toggle")[2]
let moon_toggle_main2_p_one = document.querySelector(".moon_toggle_one")
let moon_toggle_main2_p_two = document.querySelector(".moon_toggle_two")
let moon_toggle_main2_p_three = document.querySelector(".moon_toggle_three")
let moon_toggle_main2_p_four = document.querySelector(".p_toggle")
// let h2_one_dark = document.querySelector(".h2_one_dark")
// let h2_two_dark = document.querySelector(".h2_two_dark")
// let a0 = document.querySelectorAll("a")[0]
// let a1 = document.querySelectorAll("a")[1]
// let a2 = document.querySelectorAll("a")[2]
// let a3 = document.querySelectorAll("a")[3]
// let a4 = document.querySelectorAll("a")[4]
// let a5 = document.querySelectorAll("a")[5]
// let a6 = document.querySelectorAll("a")[6]
// let p0 = document.querySelectorAll(".main1 .text p")[0]
// let p1 = document.querySelectorAll(".main1 .text p")[1]
// let p2 = document.querySelectorAll(".main1 .text p")[2]
// let p3 = document.querySelectorAll(".main1 .text p")[3]
let toggle = document.querySelector(".toggle")
// let active = document.querySelector(".active")
// let containertwo = document.querySelector(".containertwo")
// let name0 = document.querySelectorAll("h2")[0]
// let name1 = document.querySelectorAll("h2")[1]
// let name2 = document.querySelectorAll("h2")[2]
// let name3 = document.querySelectorAll("h2")[3]
// let name4 = document.querySelectorAll("h2")[4]
// let name5 = document.querySelectorAll("h2")[5]
// let name6 = document.querySelectorAll("h2")[6]
// let name7 = document.querySelectorAll("h2")[7]
// let name8 = document.querySelectorAll("h2")[8]
// let name9 = document.querySelectorAll("h2")[9]
// let name10 = document.querySelectorAll("h2")[10]
// let name11 = document.querySelectorAll("h2")[11]
// let cardone1 = document.querySelectorAll(".cardone")[0]
// let cardone2 = document.querySelectorAll(".cardone")[1]
// let cardone3 = document.querySelectorAll(".cardone")[2]
// let cardone4 = document.querySelectorAll(".card4 .cardone")[0]
// let cardone5 = document.querySelectorAll(".card4 .cardone")[1]
// let cardtwo1 = document.querySelectorAll(".cardtwo")[0]
// let cardtwo2 = document.querySelectorAll(".cardtwo")[1]
let line = document.querySelector(".line")
let line_one = document.querySelectorAll(".line")[0]
let line_two = document.querySelectorAll(".line")[1]
let line_three = document.querySelectorAll(".line")[2]
let aside = document.querySelector(".container div:first-child")
let aside_head = document.querySelector(".aside .head")
let ul = document.querySelector(".aside .main ul")
let header = document.querySelector(".header")

let ggg1 = document.querySelector(".contact .containertwo .main2 .card1 .cardone")
let ggg2 = document.querySelector(".contact .containertwo .main2 .card1 .cardtwo")
let ggg3 = document.querySelector(".contact .containertwo .main2 .card2 .cardone")
let ggg4 = document.querySelector(".contact .containertwo .main2 .card3 .cardone")
let ggg5 = document.querySelectorAll(".contact .containertwo .main2 .card4 .cardone")[0]
let ggg6 = document.querySelectorAll(".contact .containertwo .main2 .card4 .cardtwo")[1]
console.log(aside)

moon.addEventListener("click", () => {
    moon_toggle.classList.toggle("moon_toggle")
    moon_toggle_one.classList.toggle("moon_toggle")
    moon_toggle_two.classList.toggle("moon_toggle")
    moon_toggle_main2_p_one.classList.toggle("moon_toggle_one")
    moon_toggle_main2_p_two.classList.toggle("moon_toggle_two")
    moon_toggle_main2_p_three.classList.toggle("moon_toggle_three")
    moon_toggle_main2_p_four.classList.toggle("p_toggle")
    toggle.classList.toggle("toggle")
    line_one.classList.toggle("line_dark")
    line_two.classList.toggle("line_dark")
    line_three.classList.toggle("line_dark")
    ggg1.classList.toggle("ggg1")
    ggg2.classList.toggle("ggg2")
    ggg3.classList.toggle("ggg3")
    ggg4.classList.toggle("ggg4")
    ggg5.classList.toggle("ggg5")
    ggg6.classList.toggle("ggg5")
})
line.addEventListener("click", () => {
    aside.classList.toggle("aside_mob")
    aside_head.classList.toggle("head_mob")
    ul.classList.toggle("ul_mob")
    header.classList.toggle("header_mob")
})
li.addEventListener("click", () => {
    h5one.style.display = "block"
    h5two.style.display = "block"
    h5three.style.display = "block"
})

li.addEventListener("click", () => {
    span.style.display = "none"
})