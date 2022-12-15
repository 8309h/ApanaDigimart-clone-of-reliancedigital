var image = document.getElementById("first");

var img_array = ["./images/img40.png",
    "./images/img12.png",
    "./images/img33.png",
    "./images/img34.png",
    "./images/img35.png",
    "./images/img36.png",
    "./images/img37.png",
    "./images/img38.png",
    "./images/img39.png"
];

var index = 0;
function slide1() {
    image.setAttribute("src", img_array[index]);
    index++;

    if (index >= img_array.length) {
        index = 0;
    }
}
setInterval("slide1()", 1200);

let x = document.getElementById("Second");

var arr = ["./images/img50.png",
    "./images/img51.png",
    "./images/img53.png"

];

var el = 0;
function slidefun() {
    x.setAttribute("src", arr[el]);
    el++;

    if (el >= arr.length) {
        el = 0;
    }
}
setInterval("slidefun()", 1500);

let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome").textContent = logeduser.name;
// console.log(logeduser.name)

prdtArr = [

    {
        "ProductID": 4,
        "Category": "Mobile phones",
        "Title": "BlackZone B310",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kdxfc7k0pkrrdj/mobile/v/f/3/blackzone-b310-b310-original-imafupywddmckaje.jpeg?q=70",
        "Description": "10 MB RAM  10 MB ROM  Expandable Upto 32 GB  4.57 cm (1.8 inch) Display  0.3MP Rear Camera  1000 mAh Battery  1 Year Manufacturer Warranty for Device",
        "Price": 859
    },
    {
        "ProductID": 5,
        "Category": "Mobile phones",
        "Title": "vivo T1 44W (Starry Sky, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70",
        "Description": "6 GB RAM  128 GB ROM  Expandable Upto 1 TB  16.36 cm (6.44 inch) Full HD+ AMOLED Display  50MP + 2MP + 2MP  16MP Front Camera  5000 mAh Lithium Battery  Qualcomm Snapdragon 680 Processor  1 Year Handset and 6 Months Accessories",
        "Price": "15,999"
    },
    {
        "ProductID": 6,
        "Category": "Mobile phones",
        "Title": "OPPO F19s (Glowing Gold, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/ku1k4280/mobile/j/x/v/f19s-cph2223-oppo-original-imag78zafhg3w69x.jpeg?q=70",
        "Description": "6 GB RAM  128 GB ROM  Expandable Upto 256 GB  16.33 cm (6.43 inch) Full HD+ Display  48MP + 2MP + 2MP  16MP Front Camera  5000 mAh Battery  Qualcomm Snapdragon 662 Processor  Brand Warranty of 1 Year Available for Mobile Including Battery and 6 Months for Accessories",
        "Price": "14,990"
    },
    {
        "ProductID": 7,
        "Category": "Mobile phones",
        "Title": "Infinix Smart 6 HD (Aqua Sky, 32 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/c/o/z/-original-imaggvx8xndbbssj.jpeg?q=70",
        "Description": "2 GB RAM  32 GB ROM  Expandable Upto 512 GB  16.76 cm (6.6 inch) HD+ Display  8MP Rear Camera  5MP Front Camera  5000 mAh Lithium-ion Polymer Battery  Mediatek Helio A22 Processor  1 Year on Handset and 6 Months on Accessories",
        "Price": "5,999"
    },

    {
        "ProductID": 140,
        "Category": "Laptops",
        "Title": "ASUS VivoBook Ultra 14 (2022) Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) X413EA-EB321WS Thin...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kh9gbrk0/computer/e/6/d/asus-na-thin-and-light-laptop-original-imafxbj7gbsraqzk.jpeg?q=70",
        "Description": "Intel Core i3 Processor (11th Gen)  8 GB DDR4 RAM  64 bit Windows 11 Operating System  512 GB SSD  35.56 cm (14 inch) Display  Office Home and Student 2021",
        "Price": "41,990"
    },

    {
        "ProductID": 225,
        "Category": "Tv",
        "Title": "iFFALCON by TCL 79.97 cm (32 inch) HD Ready LED TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/3/h/j/-original-imaghu24fzywxvvd.jpeg?q=70",
        "Description": "HD Ready 1366 x 768 Pixels  1 Year Warranty on Product",
        "Price": "7,499"
    },
    {
        "ProductID": 226,
        "Category": "Tv",
        "Title": "Mi 5A 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Audio (2022 Model)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l2ghgnk0/television/b/h/f/l40m7-eain-mi-original-imagdsdw9gkhscmb.jpeg?q=70",
        "Description": "Operating System: Android  Full HD 1920 x 1080 Pixels  1 Year Warranty on Product and 2 Years for Panel",
        "Price": "21,999"
    },

    {
        "ProductID": 238,
        "Category": "Tv",
        "Title": "KODAK 7X Pro 98 cm (40 inch) Full HD LED Smart Android TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/r/p/p/-original-imaghngm28fg8vjw.jpeg?q=70",
        "Description": "Operating System: Android  Full HD 1920 x 1080 Pixels  1 Year Warranty on Product & 6 Months on Accessories",
        "Price": "15,999"
    },
    {
        "ProductID": 239,
        "Category": "Tv",
        "Title": "Vu GloLED 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV with DJ Subwoofer 84W",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/u/m/3/43gloled-vu-original-imagjpyect5t8gu8.jpeg?q=70",
        "Description": "Operating System: Google TV  Ultra HD (4K) 3840 x 2160 Pixels  1 Year Domestic Warranty from Vu",
        "Price": "27,999"
    },
    {
        "ProductID": 240,
        "Category": "Tv",
        "Title": "OnePlus U1S 164 cm (65 inch) Ultra HD (4K) LED Smart Android TV with Far field and Dolby Audio",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kuwzssw0/television/u/i/r/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnmnkyz7je.jpeg?q=70",
        "Description": "Operating System: Android  Ultra HD (4K) 3840 x 2160 Pixels  1 year warranty on product and 1 year warranty on panel",
        "Price": "61,999"
    },
    {
        "ProductID": 241,
        "Category": "Tv",
        "Title": "realme 108 cm (43 inch) Full HD LED Smart Android TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l3uhvgw0/television/g/c/c/-original-imageuxkfxhruvfx.jpeg?q=70",
        "Description": "Operating System: Android  Full HD 1920 x 1080 Pixels  1 Year Domestic Warranty on Product and 2 Years on Panel",
        "Price": "21,999"
    },
    {
        "ProductID": 242,
        "Category": "Tv",
        "Title": "Mi 5A Pro 80 cm (32 inch) HD Ready LED Smart Android TV with 24W Dolby Audio & 1.5GB RAM (2022 Model)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/h/l/f/l32m7-eain-mi-original-imaggumt5vzrverj.jpeg?q=70",
        "Description": "Operating System: Android  HD Ready 1366 x 768 Pixels  1 Year Product Warranty and 1 Year Additional on Panel",
        "Price": "16,999"
    },
    {
        "ProductID": 243,
        "Category": "Tv",
        "Title": "SAMSUNG 108 cm (43 inch) Full HD LED Smart Tizen TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kfoapow0/television/v/h/k/samsung-ua43te50fakxxl-original-imafw2r7knjww635.jpeg?q=70",
        "Description": "Operating System: Tizen  Full HD 1920 x 1080 Pixels  1 Year Comprehensive Warranty on Product and 1 Year Additional on Panel",
        "Price": "27,990"
    },
    {
        "ProductID": 244,
        "Category": "Tv",
        "Title": "iFFALCON by TCL F53 79.97 cm (32 inch) HD Ready LED Smart Android TV with Android 11",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/n/k/q/-original-imaghu25za2hq7dy.jpeg?q=70",
        "Description": "Operating System: Android  HD Ready 1366 x 768 Pixels  1 Year Warranty on Product",
        "Price": "9,999"
    },
    {
        "ProductID": 245,
        "Category": "Tv",
        "Title": "Blaupunkt Cybersound 126 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Dolby MS12 & 60W Speaker...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/x/2/a/-original-imagk7scymprach9.jpeg?q=70",
        "Description": "Operating System: Android  Ultra HD (4K) 3840 x 2160 Pixels  1 Year Warranty on Product & 6 Months on Accessories",
        "Price": "26,999"
    },
    {
        "ProductID": 246,
        "Category": "Tv",
        "Title": "OnePlus Y1S 80 cm (32 inch) HD Ready LED Smart Android TV with Android 11 and Bezel-Less Frame",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kzfvzww0/television/e/b/b/32hd2a00-32-y1s-oneplus-original-imagbgcewfqywgk7.jpeg?q=70",
        "Description": "Operating System: Android  HD Ready 1366 x 768 Pixels  1 Year Comprehensive Warranty and Additional 1 Year on Panel Provided By the Manufacturer From Date of Purchase",
        "Price": "15,999"
    },
    {
        "ProductID": 247,
        "Category": "Tv",
        "Title": "OnePlus U1S 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV with Far field and Dolby Audio",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kuwzssw0/television/b/1/v/u-series-55-u1s-55uc1a00-oneplus-original-imag7xtnzgaaxqrg.jpeg?q=70",
        "Description": "Operating System: Android  Ultra HD (4K) 3840 x 2160 Pixels  1 year warranty on product and 1 year warranty on panel",
        "Price": "42,999"
    },
    {
        "ProductID": 317,
        "Category": "Refrigerator",
        "Title": "Haier 195 L Direct Cool Single Door 4 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/j/l/d/-original-imaggb2xwmuc2m6y.jpeg?q=70",
        "Description": "Reciprocatory Compressor  Built-in Stabilizer  1 Year Warranty on Product, 10 Years Warranty on Compressor",
        "Price": "16,490"
    },
    {
        "ProductID": 318,
        "Category": "Refrigerator",
        "Title": "Panasonic 592 L Frost Free Side by Side Refrigerator  with Wifi Connectivity",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/y/4/p/nr-bs62gkx1-1760-na-na-104-panasonic-713-914-original-imaghytg2ndxw4fa.jpeg?q=70",
        "Description": "Inverter Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years Warranty on Compressor",
        "Price": "84,490"
    },
    {
        "ProductID": 319,
        "Category": "Refrigerator",
        "Title": "Godrej 185 L Direct Cool Single Door 3 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kzblocw0/refrigerator-new/c/t/u/-original-imagbcu87q9rgq2x.jpeg?q=70",
        "Description": "Reciprocatory Compressor  Built-in Stabilizer  1 Year on Product and 10 Years on Compressor From Godrej",
        "Price": "13,590"
    },
    {
        "ProductID": 320,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 314 l Frost Free Double Door 2 Star Convertible Refrigerator  with with Curd Maestro",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/t/y/r/-original-imagkgpqmytpehfq.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": "33,290"
    },
    {
        "ProductID": 321,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 220 L Direct Cool Single Door 4 Star Refrigerator  with Curd Maestro",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/j/a/d/-original-imagkgpqgsuky3uw.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": "19,490"
    },
    {
        "ProductID": 322,
        "Category": "Refrigerator",
        "Title": "Godrej 240 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l2dmky80/refrigerator-new/z/q/h/-original-imagdqk5pbxqvmvh.jpeg?q=70",
        "Description": "Inverter Compressor  1 Year Warranty on Product and 10 Years on Compressor from Godrej",
        "Price": "19,590"
    },
    {
        "ProductID": 323,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 198 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/7/u/t/-original-imagkgpqw26ezb65.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": "16,790"
    },
    {
        "ProductID": 324,
        "Category": "Refrigerator",
        "Title": "Godrej 190 L Direct Cool Single Door 5 Star Refrigerator  with Base Drawer and Intelligent Inverter Co...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l0lbrm80/refrigerator-new/w/p/h/-original-imagccpfp6xgfmsr.jpeg?q=70",
        "Description": "Hygiene Plus Inverter Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years Warranty on Compressor from Godrej",
        "Price": "16,990"
    },
    {
        "ProductID": 325,
        "Category": "Refrigerator",
        "Title": "Godrej 221 L Direct Cool Single Door 3 Star Refrigerator with Base Drawer",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l3xcr680/refrigerator-new/m/f/y/rd-2213-ptdi-33-pl-pr-136-5-3-2021-35-2-godrej-65-57-6-original-imagey5yqrcfdqyx.jpeg?q=70",
        "Description": "Intelligent Inverter Compressor  Built-in Stabilizer  1 Year on Product and 10 Years on Compressor",
        "Price": "16,990"
    },
    {
        "ProductID": 326,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 192 L Direct Cool Single Door 4 Star Refrigerator  with Digi Touch Cool, Curd Maestro",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/5/d/u/-original-imagkgpqytnzetux.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": "18,000"
    },
    {
        "ProductID": 319,
        "Category": "Refrigerator",
        "Title": "Godrej 185 L Direct Cool Single Door 3 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kzblocw0/refrigerator-new/c/t/u/-original-imagbcu87q9rgq2x.jpeg?q=70",
        "Description": "Reciprocatory Compressor  Built-in Stabilizer  1 Year on Product and 10 Years on Compressor From Godrej",
        "Price": "13,590"
    }

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCard(prdtArr) {

    document.querySelector("#container").innerHTML = "";

    prdtArr.forEach(elem => {

        let div = document.createElement("div");

        let imageProd = document.createElement("img");
        imageProd.setAttribute("src", elem.Image)

        let title = document.createElement("h3");
        title.innerText = elem.Title;

        let des = document.createElement("p")
        des.innerText = elem.Description

        let cate = document.createElement("h3")
        cate.innerText = elem.Category;

        let price = document.createElement("h3");
        price.innerText = "Rs" + " " + elem.Price

        let btn = document.createElement("button");
        btn.innerText = "Add to card"

        btn.addEventListener("click", function () {

            // let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // let datapresent = false;
            // for (let i = 0; i < cart.length; i++) {

            //     if (cart[i][0].ProductID === elem.ProductID) {
            //         datapresent = true;
            //         break;
            //     }
            // }
            // console.log(datapresent)

            // if (datapresent === true) {
            //     alert("Product Already in Cart");

            // } else {
            //     cart.push({...elem,quantity:1});
            //     localStorage.setItem("cart",JSON.stringify(cart));
            //     alert("Product Added To Cart");

            // }
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            let datapresent = false;
            for (let i = 0; i < cart.length; i++) {

                if (cart[i].ProductID === elem.ProductID) {
                    datapresent = true;
                    break;
                }
            }

            if (datapresent === true) {
                alert("Product Already in Cart");
            } else {
                cart.push({ ...elem, quantity: 1 });
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Product Added To Cart");

            }

        })

        div.append(imageProd, title, des, cate, price, btn);

        document.querySelector("#container").append(div);

    });
}
displayCard(prdtArr);


