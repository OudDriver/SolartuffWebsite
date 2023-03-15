const title1 = document.getElementById("title1");
const part1 = document.getElementById("part1");
const title2 = document.getElementById("title2");
const part21 = document.getElementById("part21");
const part22 = document.getElementById("part22");
const part23 = document.getElementById("part23");
const anim = document.querySelectorAll(".anim")


const title1text = "Prinsip Kerja";
const title1originaltext = "Working Principle";

const part1text = `Proses pemanasan air bermula dari panel kolektor berupa tabung vakum yang merubah cahaya matahari menjadi energi panas dan memanasi air dingin menjadi air panas yang bisa mencapai 80*C. Berkat teknologi tabung vakum yang hampa udara, air yang telah panas tetap terjaga suhu panasnya (anti heatloss).\n\nSelanjutnya air yang telah panas akan tersimpan ke dalam tangki air melalui proses thermosyphon, yaitu proses sirkulasi air panas menggantikan air yang masih dingin. Proses ini terus berlanjut sampai semua air di dalam tangki menjadi panas merata.\n\nProduk SolarTuff mengadopsi tipe "Indirect System", dimana pemakaian air panas bukan langsung dari tangki. Terdapat pipa stainless steel "SUS 316 foodgrade” sekitar 30 meter yang tertanam di dalam tangki. Air yg digunakan adalah air yang melalui pipa ini sehingga suhu yang ada di dalam tangki lebih stabil karena tidak tercampur dengan air dingin baru yang masuk ke tangki dan menyebabkan suhu drop pada tipe "Direct System".\n\n"Indirect System"  juga menjamin pemakaian air panas yang lebih hygenis dan bersih dibanding  "Direct System" yang memakai air tangki langsung dimana dalam tangki penampung air panas sering terkontaminasi dengan endapan lumpur dan karat yang timbul seiring pemakaian jangka panjang.\n\n\n\n`
const part1originaltext = `The water heating process starts from the collector panel in the form of a vacuum tube which converts sunlight into heat energy and heats cold water into hot water which can reach 80*C. Thanks to the vacuum tube technology, the hot water is maintained at its hot temperature (anti-heatloss).\n\nFurthermore, the hot water will be stored in the water tank through the thermosyphon process, which is the process of circulating hot water to replace cold water. This process continues until all the water in the tank is heated evenly.\n\nSolarTuff products adopt the "Indirect System" type, where the use of hot water is not directly from the tank. There is a 30-meter “SUS 316 food-grade” stainless steel pipe embedded in the tank. The water used is water that goes through this pipe so that the temperature in the tank is more stable because it is not mixed with new cold water that enters the tank and causes the temperature to drop in the "Direct System" type.\n\nThe “Indirect System” also guarantees the use of hot water that is more hygienic and cleaner than the “Direct System” which uses direct tank water where the hot water holding tank is often contaminated with silt and rust deposits that arise with long-term use.\n\n\n\n`

const title2text = "Struktur Solartuff"
const title2originaltext = "Structure"

const part21text = "Terdiri dari 2 lapisan yaitu lapisan tangki dalam dan lapisan tangki luar.\n\nLapisan dalam terbuat dari bahan stainless steel SUS 304 foodgrade yang tahan karat dan tahan suhu panas yang tinggi, menjamin pemakaian jangka panjang tanpa resiko kebocoran.\n\nLapisan luar terbuat dari bahan besi galvanis yang tahan karat, hujan dan panas matahari. Pemakaian bahan ini juga memperindah tampilan tangki SolarTuff secara keseluruhan.\n\nDiantara lapisan dalam dan luar tangki ini terdapat lapisan polyreuthene foam setebal 55 mm merk Bayer buatan Jerman yang diinjeksi menggunakan mesin “High Pressure Injection” yang berfungsi menjaga temperatur air panas di dalam tangki tetap terjaga selama 72 jam.\n\n"
const part21originaltext = `Consists of 2 layers, namely the inner tank layer and the outer tank layer.\n\nThe inner layer is made of food-grade SUS 304 stainless steel which is rust-resistant and can withstand high temperatures, ensuring long-term use without the risk of leakage.\n\nThe outer layer is made of galvanized iron which is resistant to rust, rain, and the sun heat. The use of this material also enhances the overall appearance of the SolarTuff tank.\n\nBetween the inner and outer layers of this tank, there is a layer of polyurethane foam with a thickness of 55 mm from the Bayer brand made in Germany which is injected using a High-Pressure Injection" machine which functions to maintain the temperature of the hot water in the tank for 72 hours.\n\n`

const part22text = `Inilah komponen utama penyerap energi matahari. Terbuat dari kaca Borosilicate ( sekelas kaca pyrex ) yang sangat tahan terhadap benturan maupun panas matahari. Jenis tabung kaca yang dipakai SolarTuff adalah “Tabung Kaca Amethyst” yang merupakan grade tertinggi yang dapat menyerap energi matahari lebih maksimal yang tidak diragukan lagi merupakan tabung kaca vakum terbaik dikelasnya.\n\nMenggunakan teknologi “Nano Absorber Layer” 3 lapisan yaitu Aln – Aln/SS – Cu , lapisan ini memegang peranan penting dalam menyerap cahaya matahari dan mengubahnya menjadi energi panas.\n\nProses pembuatan tersulit dari tabung vakum adalah vakumisasi tabung, sehingga terdapat ruang hampa udara di antara 2 lapisan kaca. Inilah kunci mengapa tabung vakum dapat mencegah heatloss, karena ketiadaan media penghantar panas di dalam tabung.\n\nTidak kalah penting dari tabung vakum ini adalah bentuknya yang bulat jelas memberikan keuntungan lebih dibandingkan pemanas matahari menggunakan panel rata. Sinar matahari dapat diserap secara maksimal sepanjang hari pagi, siang maupun sore hari.\n\n\n\n`
const part22originaltext = `This is the main component of solar energy absorbers. Made of Borosilicate glass (class pyrex glass) which is very resistant to impact and heat from the sun. The type of glass tube used by SolarTuff is "Amethyst Glass Tube" which is the highest grade that can absorb solar energy more optimally which is undoubtedly the best vacuum glass tube in its class.\n\nUsing 3 layers of "Nano Absorber Layer" technology, namely Aln - Aln / SS - Cu , this layer plays an important role in absorbing sunlight and converting it into heat energy.\n\nThe most difficult manufacturing process of vacuum tubes is vacuum tube vacuuming, so that there is a vacuum between the 2 layers of glass. This is the key to why vacuum tubes can prevent heat loss, due to the absence of a heat-conducting medium in the tube.\n\nNo less important than this vacuum tube is its round shape which clearly provides more advantages over solar heating using flat panels. Sunlight can be absorbed optimally throughout the morning, afternoon, and evening.\n\n\n\n`

const part23text = `Manufaktur SolarTuff melengkapi unit SolarTuff dengan frame asli dari pabrik yang terbuat dari bahan besi galvanis dengan ketebalan 1,5mm dan dimensi yang ekstra lebar untuk menjamin kekuatan dan ketahanan dari korosi setelah penggunaan bertahun – tahun. Pemasangan di atas dek / cor an tidak diperlukan tambahan kaki besi lagi.`
const part23originaltext = `SolarTuff Manufacturing equips SolarTuff units with factory original frames made of galvanized iron with a thickness of 1.5mm and extra-wide dimensions to ensure strength and corrosion resistance after years of use. Installation on the deck/cast does not require additional iron legs anymore.`

let bool = false
function changeparttext() {
    if (bool == false) {
        title1.innerText = title1text
        part1.innerText = part1text
        title2.innerText = title2text
        part21.innerText = part21text
        part22.innerText = part22text
        part23.innerText = part23text
        bool = true
    } else {
        title1.innerText = title1originaltext
        part1.innerText = part1originaltext
        title2.innerText = title2originaltext
        part21.innerText = part21originaltext
        part22.innerText = part22originaltext
        part23.innerText = part23originaltext
        bool = false
    }
}
function changetext() {
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

let testBool = false
function otherchangetext() {
    
    testBool = !testBool;
              
    console.log('Toggled bool is',testBool);
    
}



