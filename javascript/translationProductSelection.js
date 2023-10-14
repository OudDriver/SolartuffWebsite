const title = document.getElementById('header')
const class1 = document.getElementById('class1')
const class2 = document.getElementById('class2')
const class3 = document.getElementById('class3')

// row 1 to row 7
const row1 = document.getElementById('row1')
const row2 = document.getElementById('row2')
const row3 = document.getElementById('row3')
const row4 = document.getElementById('row4')
const row5 = document.getElementById('row5')
const row6 = document.getElementById('row6')
const row7 = document.getElementById('row7')

const c2row7 = document.getElementById('c2row7')
const c3row7 = document.getElementById('c3row7')
const c4row7 = document.getElementById('c4row7')

const row1text = 'Model Produk'
const row2text = "Jumlah Tabung"
const row3text = "Volume Tangki"
const row4text = "Area Serapan (m²)"
const row5text = 'Berat (kg)'
const row6text = 'Dimensi (P x L x T)mm'
const row7text = 'Kapasitas'

const c2row7text = "3-4 Orang"
const c3row7text = "5-6 Orang"
const c4row7text = ">8 Orang"

const c2row7originaltext = "3-4 Persons"
const c3row7originaltext = "5-6 Persons"
const c4row7originaltext = ">8 Persons"

const row1originaltext = 'Product Model'
const row2originaltext = 'Tubes Qty.'
const row3originaltext = 'Tank (L)'
const row4originaltext = 'Absorbing Area (m²)'
const row5originaltext = 'Weight (KGS)'
const row6originaltext = 'Dimensions (L x B x H)mm'
const row7originaltext = 'Capacity'

const titletext = "SolarTuff memberikan 3 pilihan kapasitas yang dapat disesuaikan dengan kebutuhan konsumen."
const titleoriginaltext = "SolarTuff provides 3 capacity options that can be tailored to consumer needs."

const class1text = "SolarTuff SWH-GS150SSC: Produksi lini SolarTuff terkecil dengan kapasitas sebesar 150 liter, cocok untuk keluarga kecil. Harga yang sangat terjangkau dan ukuran yang kompak, menjadi pertimbangan utama dalam pemilihan type ini."
const class1originaltext = "SolarTuff SWH-GS150SSC : The smallest SolarTuff production line with a capacity of 150 liters, suitable for small families. A very affordable price and compact size, are the main considerations in choosing this type."

const class2text = 'SolarTuff SWH-GS200SSC: Produksi lini SolarTuff dengan kapasitas sebesar 200 liter, pilihan pas untuk keluarga menengah. Apabila budget bukan masalah, disarankan konsumen keluarga kecil untuk memilih type ini. Makin besar kapasitasnya, stok air panas yang tersedia makin banyak.'
const class2originaltext = 'SolarTuff SWH-GS200SSC : Production of the SolarTuff line with a capacity of 200 liters, the right choice for middle-size families. If budget is not a problem, small family consumers are advised to choose this type. The greater the capacity, the more available hot water stock.'

const class3text = 'SolarTuff SWH-GS300SSC: Produksi lini SolarTuff terbesar dengan kapasitas sebesar 300 liter, type yang sangat cocok untuk keluargabesar. Apabila area pemasangan yang tersedia cukup besar dan untuk pemakaian air panas yang banyak, pemilihan type inilah yang paling tepat. Bisa juga diaplikasikan di hotel, guest house, indekost dan apabila diperlukan bisa diinstall parallel sesuai dengan jumlah pengguna.'
const class3originaltext = 'SolarTuff SWH-GS300SSC : The largest SolarTuff production line with a capacity of 300 liters, the type that is very suitable for large families. If the available installation area is large enough and for the use of a lot of hot water, this type of selection is the most appropriate. It can also be applied in hotels, guest houses, boarding houses and if needed can be installed in parallel according to the number of users.'


let bool = false
function changeparttext() {
    if (bool == false) {
        title.innerText = titletext
        class1.innerText = class1text
        class2.innerText = class2text
        class3.innerText = class3text
        row1.innerText = row1text
        row2.innerText = row2text
        row3.innerText = row3text
        row4.innerText = row4text
        row5.innerText = row5text
        row6.innerText = row6text
        row7.innerText = row7text
        c2row7.innerText = c2row7text
        c3row7.innerText = c3row7text
        c4row7.innerText = c4row7text
        bool = !bool
    } else {
        title.innerText = titleoriginaltext
        class1.innerText = class1originaltext
        class2.innerText = class2originaltext
        class3.innerText = class3originaltext
        row1.innerText = row1originaltext
        row2.innerText = row2originaltext
        row3.innerText = row3originaltext
        row4.innerText = row4originaltext
        row5.innerText = row5originaltext
        row6.innerText = row6originaltext
        row7.innerText = row7originaltext
        c2row7.innerText = c2row7originaltext
        c3row7.innerText = c3row7originaltext
        c4row7.innerText = c4row7originaltext
        bool = !bool
    }
}
function changetext() {
    const targetTranslateText = document.querySelectorAll(".targetTranslateText")
    setTimeout(() => {
        for (let i = 0; i < targetTranslateText.length; i++) {
            targetTranslateText[i].classList.toggle("fadeThenUnfadeAnimation")
        }
    }, 1000);
    for (let i = 0; i < targetTranslateText.length; i++) {
        targetTranslateText[i].classList.toggle("fadeThenUnfadeAnimation")
    }
    setTimeout(() => {
        changeparttext()
    }, 500);
};