const description = document.getElementById('description');
const desctext = "Untuk memberikan kenyamanan tambahan selama pemakaian produk SolarTuff, konsumen bisa menghubungi layanan Help Desk kami yang senantiasa tersedia untuk membantu segala permasalahan anda.\n\nJuga melayani konsultasi seputar produk dan harga SolarTuff sebelum melakukan transaksi pembelian, staff kami akan memberikan penjelasan dengan senang hati tanpa dikenakan biaya tambahan.\n\n"
const desctextoriginal = "To provide additional comfort while using SolarTuff products, consumers can contact our Help Desk service which is always available to help with all your problems.\n\nAlso serving consultations about SolarTuff products and prices before making a purchase transaction, our staff will gladly provide an explanation at no additional cost.\n\n"

const hd1 = document.getElementById('hd1')
const hd2 = document.getElementById('hd2')
const hd3 = document.getElementById('hd3')
const hd4 = document.getElementById('hd4')

const hd1text = "Layanan Help desk SolarTuff Indonesia"
const hd1textoriginal = "Help desk service SolarTuff Indonesia"
const hd2text = "Telepon / WA : +62811 61 2830"
const hd2textoriginal = "Phone / WA : +62811 61 2830"
const hd3text = "Hari / Jam Layanan : Senin - Sabtu ( 09.00 – 17.00 )"
const hd3textoriginal = "Days / Hours of Operation : Monday - Saturday ( 09.00 – 17.00 )"
const hd4text = "* KECUALI HARI LIBUR *"
const hd4textoriginal = "* EXCEPT HOLIDAYS *"

let bool = false
function changeparttext() {
    if (bool == false) {
        description.innerText = desctext
        hd1.innerText = hd1text
        hd2.innerText = hd2text
        hd3.innerText = hd3text
        hd4.innerText = hd4text
        bool = true
    } else {
        description.innerText = desctextoriginal
        hd1.innerText = hd1textoriginal
        hd2.innerText = hd2textoriginal
        hd3.innerText = hd3textoriginal
        hd4.innerText = hd4textoriginal
        bool = false
    }
}
function changetext() {
    const anim = document.querySelectorAll(".anim")
    setTimeout(() => {
        for (let i = 0; i < anim.length; i++) {
            anim[i].classList.toggle("abanim")
        }
    }, 1000);
    for (let i = 0; i < anim.length; i++) {
        anim[i].classList.toggle("abanim")
    }
    setTimeout(() => {
        changeparttext()
    }, 500);
};



