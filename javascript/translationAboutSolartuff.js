let cookie = document.cookie;
const desc = document.getElementById("desctext")

if (! localStorage.noFirstVisit) {
    cookie = "lang=en"
}

function changetext() {
    const desc = document.getElementById("desctext")
    setTimeout(() => {
        desc.classList.toggle("fadeThenUnfadeAnimation")
    }, 1000);
    desc.classList.toggle("fadeThenUnfadeAnimation")
    setTimeout(() => {
        const text = `SolarTuff – Solar Water Heater was established in 2011 to meet the demand for hot water usage oriented towards environmentally friendly “Green Energy” conservation. With renewable technology researched by German scientists who carry the 'Vacuum Tube' technology, SolarTuff immediately dominates the middle market who wants quality products at competitive prices.\n\nThe 'Vacuum Tube' technology has the advantage of replacing the previous technology which still relies a lot on electrical energy to help its performance. Round and vacuum glass tube design, effectively absorbs solar energy all day long and prevents heat loss, which is difficult to obtain from products with conventional technology.\n\n"Indirect compact pressurized with stainless steel coil" is a type of solar water heater that is very suitable for the tropical climate which is abundant with solar energy. Pressurized water, minimal electrical energy, minimal maintenance, and competitive prices are the reasons why this type is most widely used by consumers around the world today.\n\nIn terms of quality, the SolarTuff manufacturing company which has passed the ISO 9001 certificate test, CE Certiﬁcate, ICC-SRCC, and Solar Keymark Certiﬁcate provide 3-years of spare parts warranty, 10-years service warranty, and 20-years glass tube special warranty, which guarantees that SolarTuff product is a trusted premium product.\n\nThe guaranteed after-sales service has also been a testament to the seriousness of SolarTuff as a manufacturer in providing maximum comfort and peace to consumers while using this product. Join our loyal customers to experience more benefits that are not obtained from old conventional products\n\n\n\n`
        const textOriginal = "SolarTuff – Solar Water Heater tampil pada tahun 2011 untuk memenuhi permintaan kebutuhan pemakaian air panas yang berorientasi kepada konservasi “Energi Hijau” yang ramah lingkungan. Dengan teknologi terbarukan hasil riset ilmuwan Jerman yang mengusung teknologi ‘ Tabung Vakum ‘ , SolarTuff segera menguasai pasar menengah yang menginginkan produk berkualitas dengan harga yang kompetitif.\n\nTeknologi ‘ Tabung Vakum ‘ memiliki keunggulan untuk menggantikan teknologi terdahulu yang masih banyak mengandalkan energi listrik untuk membantu kinerjanya. Desain tabung kaca bulat dan vakum, efektif menyerap energi matahari sepanjang hari dan mencegah heatloss, yang sulit didapat dari produk dengan teknologi konvensional.\n\n“ Indirect compact pressurised with stainless steel coil “ merupakan type pemanas air matahari yang sangat cocok dengan iklim daerah tropis yang berlimpah dengan energi matahari. Air bertekanan, minim energi listrik, minim perawatan dan harga yang kompetitif menjadi alasan mengapa tipe ini paling banyak dipakai konsumen di seluruh dunia saat ini.\n\nDari segi kwalitas, perusahaan manufaktur SolarTuff yang telah lulus tes sertiﬁkat ISO 9001, CE Certiﬁcate, ICC-SRCC dan Solar Keymark Certiﬁcate memberikan garansi suku cadang 3 tahun, garansi service 10 tahun dan garansi khusus tabung kaca selama 20 tahun, menjadi jaminan bahwa produk SolarTuff adalah produk premium yang terpercaya.\n\nAfter sales service yang terjamin juga telah menjadi bukti keseriusan SolarTuff sebagai produsen dalam memberikan kenyamanan dan ketenangan maksimal kepada konsumen selama memakai produk ini. Bergabunglah bersama konsumen setia kami merasakan keuntungan lebih yang tidak didapat dari produk konvensional lama.\n\n\n\n"
        if (cookie == "lang=id") {
            desc.innerText = text;
            cookie = "lang=en"
        } else {
            desc.innerText = textOriginal;
            cookie = "lang=id"
        }
    }, 500);
}

