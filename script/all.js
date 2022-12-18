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
        "Price": 15999
    },
    {
        "ProductID": 6,
        "Category": "Mobile phones",
        "Title": "OPPO F19s (Glowing Gold, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/ku1k4280/mobile/j/x/v/f19s-cph2223-oppo-original-imag78zafhg3w69x.jpeg?q=70",
        "Description": "6 GB RAM  128 GB ROM  Expandable Upto 256 GB  16.33 cm (6.43 inch) Full HD+ Display  48MP + 2MP + 2MP  16MP Front Camera  5000 mAh Battery  Qualcomm Snapdragon 662 Processor  Brand Warranty of 1 Year Available for Mobile Including Battery and 6 Months for Accessories",
        "Price": 14555
    },
    {
        "ProductID": 7,
        "Category": "Mobile phones",
        "Title": "Infinix Smart 6 HD (Aqua Sky, 32 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/c/o/z/-original-imaggvx8xndbbssj.jpeg?q=70",
        "Description": "2 GB RAM  32 GB ROM  Expandable Upto 512 GB  16.76 cm (6.6 inch) HD+ Display  8MP Rear Camera  5MP Front Camera  5000 mAh Lithium-ion Polymer Battery  Mediatek Helio A22 Processor  1 Year on Handset and 6 Months on Accessories",
        "Price": 5678
    },

    {
        "ProductID": 140,
        "Category": "Laptops",
        "Title": "ASUS VivoBook Ultra 14 (2022) Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) X413EA-EB321WS Thin...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kh9gbrk0/computer/e/6/d/asus-na-thin-and-light-laptop-original-imafxbj7gbsraqzk.jpeg?q=70",
        "Description": "Intel Core i3 Processor (11th Gen)  8 GB DDR4 RAM  64 bit Windows 11 Operating System  512 GB SSD  35.56 cm (14 inch) Display  Office Home and Student 2021",
        "Price": 45673
    },

    {
        "ProductID": 225,
        "Category": "Tv",
        "Title": "iFFALCON by TCL 79.97 cm (32 inch) HD Ready LED TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/3/h/j/-original-imaghu24fzywxvvd.jpeg?q=70",
        "Description": "HD Ready 1366 x 768 Pixels  1 Year Warranty on Product",
        "Price": 7456
    },
    {
        "ProductID": 226,
        "Category": "Tv",
        "Title": "Mi 5A 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Audio (2022 Model)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l2ghgnk0/television/b/h/f/l40m7-eain-mi-original-imagdsdw9gkhscmb.jpeg?q=70",
        "Description": "Operating System: Android  Full HD 1920 x 1080 Pixels  1 Year Warranty on Product and 2 Years for Panel",
        "Price": 21999
    },

    {
        "ProductID": 238,
        "Category": "Tv",
        "Title": "KODAK 7X Pro 98 cm (40 inch) Full HD LED Smart Android TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/r/p/p/-original-imaghngm28fg8vjw.jpeg?q=70",
        "Description": "Operating System: Android  Full HD 1920 x 1080 Pixels  1 Year Warranty on Product & 6 Months on Accessories",
        "Price": 13456
    },
    {
        "ProductID": 239,
        "Category": "Tv",
        "Title": "Vu GloLED 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV with DJ Subwoofer 84W",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/u/m/3/43gloled-vu-original-imagjpyect5t8gu8.jpeg?q=70",
        "Description": "Operating System: Google TV  Ultra HD (4K) 3840 x 2160 Pixels  1 Year Domestic Warranty from Vu",
        "Price": 2334
    },
    {
        "ProductID": 240,
        "Category": "Tv",
        "Title": "OnePlus U1S 164 cm (65 inch) Ultra HD (4K) LED Smart Android TV with Far field and Dolby Audio",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kuwzssw0/television/u/i/r/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnmnkyz7je.jpeg?q=70",
        "Description": "Operating System: Android  Ultra HD (4K) 3840 x 2160 Pixels  1 year warranty on product and 1 year warranty on panel",
        "Price": 61999
    },
    {
        "ProductID": 241,
        "Category": "Tv",
        "Title": "realme 108 cm (43 inch) Full HD LED Smart Android TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l3uhvgw0/television/g/c/c/-original-imageuxkfxhruvfx.jpeg?q=70",
        "Description": "Operating System: Android  Full HD 1920 x 1080 Pixels  1 Year Domestic Warranty on Product and 2 Years on Panel",
        "Price": 21999
    },
    {
        "ProductID": 242,
        "Category": "Tv",
        "Title": "Mi 5A Pro 80 cm (32 inch) HD Ready LED Smart Android TV with 24W Dolby Audio & 1.5GB RAM (2022 Model)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/h/l/f/l32m7-eain-mi-original-imaggumt5vzrverj.jpeg?q=70",
        "Description": "Operating System: Android  HD Ready 1366 x 768 Pixels  1 Year Product Warranty and 1 Year Additional on Panel",
        "Price": 12345
    },
    {
        "ProductID": 243,
        "Category": "Tv",
        "Title": "SAMSUNG 108 cm (43 inch) Full HD LED Smart Tizen TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kfoapow0/television/v/h/k/samsung-ua43te50fakxxl-original-imafw2r7knjww635.jpeg?q=70",
        "Description": "Operating System: Tizen  Full HD 1920 x 1080 Pixels  1 Year Comprehensive Warranty on Product and 1 Year Additional on Panel",
        "Price": 27890
    },
    {
        "ProductID": 244,
        "Category": "Tv",
        "Title": "iFFALCON by TCL F53 79.97 cm (32 inch) HD Ready LED Smart Android TV with Android 11",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/n/k/q/-original-imaghu25za2hq7dy.jpeg?q=70",
        "Description": "Operating System: Android  HD Ready 1366 x 768 Pixels  1 Year Warranty on Product",
        "Price": 12567
    },
    {
        "ProductID": 245,
        "Category": "Tv",
        "Title": "Blaupunkt Cybersound 126 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Dolby MS12 & 60W Speaker...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/x/2/a/-original-imagk7scymprach9.jpeg?q=70",
        "Description": "Operating System: Android  Ultra HD (4K) 3840 x 2160 Pixels  1 Year Warranty on Product & 6 Months on Accessories",
        "Price": 4563
    },
    {
        "ProductID": 246,
        "Category": "Tv",
        "Title": "OnePlus Y1S 80 cm (32 inch) HD Ready LED Smart Android TV with Android 11 and Bezel-Less Frame",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kzfvzww0/television/e/b/b/32hd2a00-32-y1s-oneplus-original-imagbgcewfqywgk7.jpeg?q=70",
        "Description": "Operating System: Android  HD Ready 1366 x 768 Pixels  1 Year Comprehensive Warranty and Additional 1 Year on Panel Provided By the Manufacturer From Date of Purchase",
        "Price": 15980
    },
    {
        "ProductID": 247,
        "Category": "Tv",
        "Title": "OnePlus U1S 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV with Far field and Dolby Audio",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kuwzssw0/television/b/1/v/u-series-55-u1s-55uc1a00-oneplus-original-imag7xtnzgaaxqrg.jpeg?q=70",
        "Description": "Operating System: Android  Ultra HD (4K) 3840 x 2160 Pixels  1 year warranty on product and 1 year warranty on panel",
        "Price": 45876
    },
    {
        "ProductID": 317,
        "Category": "Refrigerator",
        "Title": "Haier 195 L Direct Cool Single Door 4 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/j/l/d/-original-imaggb2xwmuc2m6y.jpeg?q=70",
        "Description": "Reciprocatory Compressor  Built-in Stabilizer  1 Year Warranty on Product, 10 Years Warranty on Compressor",
        "Price": 16478
    },
    {
        "ProductID": 318,
        "Category": "Refrigerator",
        "Title": "Panasonic 592 L Frost Free Side by Side Refrigerator  with Wifi Connectivity",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/y/4/p/nr-bs62gkx1-1760-na-na-104-panasonic-713-914-original-imaghytg2ndxw4fa.jpeg?q=70",
        "Description": "Inverter Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years Warranty on Compressor",
        "Price": 84678
    },
    {
        "ProductID": 319,
        "Category": "Refrigerator",
        "Title": "Godrej 185 L Direct Cool Single Door 3 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kzblocw0/refrigerator-new/c/t/u/-original-imagbcu87q9rgq2x.jpeg?q=70",
        "Description": "Reciprocatory Compressor  Built-in Stabilizer  1 Year on Product and 10 Years on Compressor From Godrej",
        "Price": 13456
    },
    {
        "ProductID": 320,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 314 l Frost Free Double Door 2 Star Convertible Refrigerator  with with Curd Maestro",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/t/y/r/-original-imagkgpqmytpehfq.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 56479
    },
    {
        "ProductID": 321,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 220 L Direct Cool Single Door 4 Star Refrigerator  with Curd Maestro",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/j/a/d/-original-imagkgpqgsuky3uw.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 34123
    },
    {
        "ProductID": 322,
        "Category": "Refrigerator",
        "Title": "Godrej 240 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l2dmky80/refrigerator-new/z/q/h/-original-imagdqk5pbxqvmvh.jpeg?q=70",
        "Description": "Inverter Compressor  1 Year Warranty on Product and 10 Years on Compressor from Godrej",
        "Price": 19678
    },
    {
        "ProductID": 323,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 198 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/7/u/t/-original-imagkgpqw26ezb65.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 12450
    },
    {
        "ProductID": 324,
        "Category": "Refrigerator",
        "Title": "Godrej 190 L Direct Cool Single Door 5 Star Refrigerator  with Base Drawer and Intelligent Inverter Co...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l0lbrm80/refrigerator-new/w/p/h/-original-imagccpfp6xgfmsr.jpeg?q=70",
        "Description": "Hygiene Plus Inverter Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years Warranty on Compressor from Godrej",
        "Price": 34526
    },
    {
        "ProductID": 332,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 324 L Frost Free Double Door 2 Star Convertible Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/k8ro3gw0/refrigerator-new/3/f/j/rt34t4522s8-hl-2-samsung-original-imafqpg3xkfs9mkw.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 32452
    },
    {
        "ProductID": 333,
        "Category": "Refrigerator",
        "Title": "Godrej 185 L Direct Cool Single Door 4 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/r/l/e/-original-imagggcfgdpaf9bp.jpeg?q=70",
        "Description": "Intelligent Inverter Compressor  Built-in Stabilizer  1 Year on Product and 10 Years on Compressor From Godrej",
        "Price": 45612
    },
    {
        "ProductID": 334,
        "Category": "Refrigerator",
        "Title": "MarQ by Flipkart 170 L Direct Cool Single Door 2 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/keaaavk0/refrigerator-new/j/z/t/170bd2mqb1-2-marq-by-flipkart-original-imafvy3aj65zqat3.jpeg?q=70",
        "Description": "Reciprocatory Compressor  Built-in Stabilizer  1 Year on Product and 5 Years on Compressor Warranty From Marq by Flipkart",
        "Price": 45350
    },
    {
        "ProductID": 335,
        "Category": "Refrigerator",
        "Title": "Panasonic 338 L Frost Free Double Door 3 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kumzpu80/refrigerator-new/5/o/b/nr-tg351cusn-1747-3-2021-56-panasonic-681-600-original-imag7pywtqtgtwky.jpeg?q=70",
        "Description": "Inverter Compressor  Built-in Stabilizer  1 Year Comprehensive Warranty on Product and 10 Years on Compressor",
        "Price": 125463
    },
    {
        "ProductID": 336,
        "Category": "Refrigerator",
        "Title": "Panasonic 592 L Frost Free Side by Side Refrigerator  with Wifi Connectivity",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/d/w/c/nr-bs62mkx1-1760-na-na-91-panasonic-713-914-original-imagg4ff6uwgy5bc.jpeg?q=70",
        "Description": "Inverter Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years Warranty on Compressor",
        "Price": 75485
    },
    {
        "ProductID": 337,
        "Category": "Refrigerator",
        "Title": "LG 260 L Frost Free Double Door Top Mount 3 Star Refrigerator  with Smart Inverter",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/t/n/y/-original-imaggsgpvu9rhthj.jpeg?q=70",
        "Description": "Smart Inverter Compressor  Built-in Stabilizer  1 Year on Product and 10 Years on Compressor from LG",
        "Price": 12466
    },
    {
        "ProductID": 338,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 336 l Frost Free Double Door 2 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/j/g/m/-original-imagkgpqyd8uckps.jpeg?q=70",
        "Description": "Liner Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 26539
    },
    {
        "ProductID": 339,
        "Category": "Refrigerator",
        "Title": "Panasonic 336 L Frost Free Double Door 3 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/ken59jk0/refrigerator-new/u/t/u/nr-bg343vgg3-3-panasonic-original-imafv9efhjxvpedz.jpeg?q=70",
        "Description": "Inverter Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years on Compressor",
        "Price": 36952
    },
    {
        "ProductID": 340,
        "Category": "Refrigerator",
        "Title": "Whirlpool 200 L Direct Cool Single Door 3 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/k9k8wi80/refrigerator-new/h/b/j/215-impro-prm-3s-3-whirlpool-original-imafrbnqsgchnaqk.jpeg?q=70",
        "Description": "Digital Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years Warranty on Compressor from Whirlpool",
        "Price": 45687
    },
    {
        "ProductID": 341,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator with Base Drawer",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/a/s/9/-original-imagkgpq7gfuzmfp.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 41652
    },
    {
        "ProductID": 342,
        "Category": "Refrigerator",
        "Title": "Whirlpool 300 L Frost Free Triple Door Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/ky90scw0/refrigerator-new/g/q/s/-original-imagaj234t6qqayh.jpeg?q=70",
        "Description": "Normal Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years on Compressor From Whirlpool",
        "Price": 54215
    },
    {
        "ProductID": 343,
        "Category": "Refrigerator",
        "Title": "realme TechLife 195 L Direct Cool Single Door 2 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l2jcccw0/refrigerator-new/1/f/n/195bd2rmb1-1165-2-2022-34-realme-techlife-660-540-original-imagdunghhzhuymm.jpeg?q=70",
        "Description": "Reciprocating Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years on Compressor",
        "Price": 112546
    },
    {
        "ProductID": 344,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 225 L Direct Cool Single Door 4 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/z/i/y/-original-imagkgpraqqfh7fe.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 14526
    },
    {
        "ProductID": 345,
        "Category": "Refrigerator",
        "Title": "Lloyd 200 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l1nwnm80/refrigerator-new/6/x/t/gldf214ss1pb-gldf214sgws1pb-1285-4-2022-37-lloyd-644-571-original-imagd6h9jcvn9ktt.jpeg?q=70",
        "Description": "Inverter Compressor  Built-in Stabilizer  1 Year on Product and 10 Years on Compressor From Lloyd",
        "Price": 14658
    },
    {
        "ProductID": 346,
        "Category": "Refrigerator",
        "Title": "Haier 195 L Direct Cool Single Door 4 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/7/u/k/-original-imaggb2xz8rqkfhw.jpeg?q=70",
        "Description": "Reciprocatory Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years on Compressor",
        "Price": 14652
    }, {
        "ProductID": 332,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 324 L Frost Free Double Door 2 Star Convertible Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/k8ro3gw0/refrigerator-new/3/f/j/rt34t4522s8-hl-2-samsung-original-imafqpg3xkfs9mkw.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 32569
    },
    {
        "ProductID": 333,
        "Category": "Refrigerator",
        "Title": "Godrej 185 L Direct Cool Single Door 4 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/r/l/e/-original-imagggcfgdpaf9bp.jpeg?q=70",
        "Description": "Intelligent Inverter Compressor  Built-in Stabilizer  1 Year on Product and 10 Years on Compressor From Godrej",
        "Price": "13,990"
    },
    {
        "ProductID": 334,
        "Category": "Refrigerator",
        "Title": "MarQ by Flipkart 170 L Direct Cool Single Door 2 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/keaaavk0/refrigerator-new/j/z/t/170bd2mqb1-2-marq-by-flipkart-original-imafvy3aj65zqat3.jpeg?q=70",
        "Description": "Reciprocatory Compressor  Built-in Stabilizer  1 Year on Product and 5 Years on Compressor Warranty From Marq by Flipkart",
        "Price": 12546
    },
    {
        "ProductID": 335,
        "Category": "Refrigerator",
        "Title": "Panasonic 338 L Frost Free Double Door 3 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kumzpu80/refrigerator-new/5/o/b/nr-tg351cusn-1747-3-2021-56-panasonic-681-600-original-imag7pywtqtgtwky.jpeg?q=70",
        "Description": "Inverter Compressor  Built-in Stabilizer  1 Year Comprehensive Warranty on Product and 10 Years on Compressor",
        "Price": 35462
    },
    {
        "ProductID": 336,
        "Category": "Refrigerator",
        "Title": "Panasonic 592 L Frost Free Side by Side Refrigerator  with Wifi Connectivity",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/d/w/c/nr-bs62mkx1-1760-na-na-91-panasonic-713-914-original-imagg4ff6uwgy5bc.jpeg?q=70",
        "Description": "Inverter Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years Warranty on Compressor",
        "Price": 78452
    },
    {
        "ProductID": 337,
        "Category": "Refrigerator",
        "Title": "LG 260 L Frost Free Double Door Top Mount 3 Star Refrigerator  with Smart Inverter",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/t/n/y/-original-imaggsgpvu9rhthj.jpeg?q=70",
        "Description": "Smart Inverter Compressor  Built-in Stabilizer  1 Year on Product and 10 Years on Compressor from LG",
        "Price": 12455
    },
    {
        "ProductID": 338,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 336 l Frost Free Double Door 2 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/j/g/m/-original-imagkgpqyd8uckps.jpeg?q=70",
        "Description": "Liner Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 25462
    },
    {
        "ProductID": 339,
        "Category": "Refrigerator",
        "Title": "Panasonic 336 L Frost Free Double Door 3 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/ken59jk0/refrigerator-new/u/t/u/nr-bg343vgg3-3-panasonic-original-imafv9efhjxvpedz.jpeg?q=70",
        "Description": "Inverter Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years on Compressor",
        "Price": 25462
    },
    {
        "ProductID": 340,
        "Category": "Refrigerator",
        "Title": "Whirlpool 200 L Direct Cool Single Door 3 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/k9k8wi80/refrigerator-new/h/b/j/215-impro-prm-3s-3-whirlpool-original-imafrbnqsgchnaqk.jpeg?q=70",
        "Description": "Digital Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years Warranty on Compressor from Whirlpool",
        "Price": 14526
    },
    {
        "ProductID": 341,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 230 L Direct Cool Single Door 3 Star Refrigerator with Base Drawer",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/a/s/9/-original-imagkgpq7gfuzmfp.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 45125
    },
    {
        "ProductID": 342,
        "Category": "Refrigerator",
        "Title": "Whirlpool 300 L Frost Free Triple Door Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/ky90scw0/refrigerator-new/g/q/s/-original-imagaj234t6qqayh.jpeg?q=70",
        "Description": "Normal Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years on Compressor From Whirlpool",
        "Price": 54621
    },
    {
        "ProductID": 291,
        "Category": "Tv",
        "Title": "Blaupunkt Cybersound 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV with Dolby MS12 & 60W Speaker...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l12h1u80/television/z/c/1/-original-imagcppgc2ycvxdb.jpeg?q=70",
        "Description": "Operating System: Android  Ultra HD (4K) 3840 x 2160 Pixels  1 Year Warranty on Product & 6 Months on Accessories",
        "Price": 35462
    },
    {
        "ProductID": 292,
        "Category": "Tv",
        "Title": "Dyanora 60 cm (24 inch) HD Ready LED Smart Android Based TV with Noise Reduction, Android 9.0, Powerfu...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l4pxk7k0/television/v/a/c/dy-ld24h4s-dy-ld24h4s-dyanora-original-imagfk7yq8gpzzqh.jpeg?q=70",
        "Description": "Operating System: Android Based  HD Ready 1366 x 768 Pixels  1 Year Manufacturer Warranty from the Date of Purchase from Dyanora",
        "Price": 65485
    },
    {
        "ProductID": 293,
        "Category": "Tv",
        "Title": "KODAK CA Series 164 cm (65 inch) Ultra HD (4K) LED Smart Android TV with Dolby Digital Plus & DTS TruS...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/7/p/t/-original-imaghy5qe6mp2wae.jpeg?q=70",
        "Description": "Operating System: Android  Ultra HD (4K) 3840X2160 Pixels  1 Year Warranty on Product & 6 Months on Accessories",
        "Price": 45821
    },
    {
        "ProductID": 294,
        "Category": "Tv",
        "Title": "Coocaa Frameless 108 cm (43 inch) Full HD LED Smart Google TV with HDR 14 Dolby Audio and Eye care tec...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/t/p/v/43z72-coocaa-original-imagjfrvks3kpekg.jpeg?q=70",
        "Description": "Operating System: Google TV  Full HD 1920 x 1080 Pixels  1 Year Domestic Warranty",
        "Price": 15645
    },
    {
        "ProductID": 295,
        "Category": "Tv",
        "Title": "iFFALCON by TCL U62 139 cm (55 inch) Ultra HD (4K) LED Smart Google TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/x/n/x/-original-imagkjvf52c2vwrn.jpeg?q=70",
        "Description": "Operating System: Google TV  Ultra HD (4K) 3840 x 2160 Pixels  1 Year Warranty on Product",
        "Price": 32956
    },
    {
        "ProductID": 296,
        "Category": "Tv",
        "Title": "Vu 108 cm (43 inch) Ultra HD (4K) LED Smart WebOS TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/o/d/k/43ut-webos-vu-original-imaggtsdjbstwtqr.jpeg?q=70",
        "Description": "Operating System: WebOS  Ultra HD (4K) 3840 x 2160 Pixels  1 Year Domestic Warranty from Vu",
        "Price": 25645
    },
    {
        "ProductID": 297,
        "Category": "Tv",
        "Title": "TOSHIBA C350LP Series 126 cm (50 inch) Ultra HD (4K) LED Smart Google TV with Dolby Vision Atmos and R...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/b/c/7/-original-imaggz6zd5rchpuq.jpeg?q=70",
        "Description": "Operating System: Google TV  Ultra HD (4K) 3840 x 2160 Pixels  2 Years Warranty on Product and Panel",
        "Price": 66466
    },
    {
        "ProductID": 298,
        "Category": "Tv",
        "Title": "MOTOROLA Revou 2 80 cm (32 inch) HD Ready LED Smart Android TV with Sound by boAt",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/r/s/w/-original-imagj4u8j4ucd5nm.jpeg?q=70",
        "Description": "Operating System: Android  HD Ready 1366 x 768 Pixels  1 Year Warranty on Product",
        "Price": 14562
    },
    {
        "ProductID": 299,
        "Category": "Tv",
        "Title": "LG 108 cm (43 inch) Ultra HD (4K) LED Smart TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/n/i/t/43uq8040psb-43uq8040psb-lg-original-imagghcgwgg2rag3.jpeg?q=70",
        "Description": "Ultra HD (4K) 3840*2160 Pixels  1 YEAR",
        "Price": 46621
    },
    {
        "ProductID": 300,
        "Category": "Tv",
        "Title": "iFFALCON by TCL U62 164 cm (65 inch) Ultra HD (4K) LED Smart Google TV",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/television/u/d/e/-original-imagkjver8za4ags.jpeg?q=70",
        "Description": "Operating System: Google TV  Ultra HD (4K) 3840 x 2160 Pixels  1 Year Warranty on Product",
        "Price": 46525
    },
    {
        "ProductID": 343,
        "Category": "Refrigerator",
        "Title": "realme TechLife 195 L Direct Cool Single Door 2 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l2jcccw0/refrigerator-new/1/f/n/195bd2rmb1-1165-2-2022-34-realme-techlife-660-540-original-imagdunghhzhuymm.jpeg?q=70",
        "Description": "Reciprocating Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years on Compressor",
        "Price": 45621
    },
    {
        "ProductID": 344,
        "Category": "Refrigerator",
        "Title": "SAMSUNG 225 L Direct Cool Single Door 4 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/z/i/y/-original-imagkgpraqqfh7fe.jpeg?q=70",
        "Description": "Digital Inverter Compressor  Built-in Stabilizer  1 year comprehensive warranty on product, 20 years on compressor",
        "Price": 14662
    },
    {
        "ProductID": 345,
        "Category": "Refrigerator",
        "Title": "Lloyd 200 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l1nwnm80/refrigerator-new/6/x/t/gldf214ss1pb-gldf214sgws1pb-1285-4-2022-37-lloyd-644-571-original-imagd6h9jcvn9ktt.jpeg?q=70",
        "Description": "Inverter Compressor  Built-in Stabilizer  1 Year on Product and 10 Years on Compressor From Lloyd",
        "Price": 14562
    },
    {
        "ProductID": 346,
        "Category": "Refrigerator",
        "Title": "Haier 195 L Direct Cool Single Door 4 Star Refrigerator",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/7/u/k/-original-imaggb2xz8rqkfhw.jpeg?q=70",
        "Description": "Reciprocatory Compressor  Built-in Stabilizer  1 Year Warranty on Product and 10 Years on Compressor",
        "Price": 14562
    },
    {
        "ProductID": 191,
        "Category": "Laptops",
        "Title": "ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/1 TB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kz4gh3k0/computer/n/e/x/fx506lh-hn258ws-gaming-laptop-asus-original-imagb7hfzhmv6v9y.jpeg?q=70",
        "Description": "Intel Core i5 Processor (10th Gen)  8 GB DDR4 RAM  64 bit Windows 11 Operating System  1 TB SSD  39.62 cm (15.6 Inch) Display  1 Year Onsite Warranty",
        "Price": 54256
    },
    {
        "ProductID": 192,
        "Category": "Laptops",
        "Title": "Lenovo IdeaPad Gaming Core i7 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kp2y2kw0/computer/3/q/k/lenovo-original-imag3eht25nykhjn.jpeg?q=70",
        "Description": "Intel Core i7 Processor (10th Gen)  8 GB DDR4 RAM  64 bit Windows 10 Operating System  512 GB SSD  39.62 cm (15.6 Inch) Display  Microsoft Office (Trial Only)",
        "Price": 72466
    },
    {
        "ProductID": 193,
        "Category": "Laptops",
        "Title": "ASUS Vivobook Pro 14X OLED with ASUS DialPad Ryzen 9 Octa Core 5900HX - (8 GB/1 TB SSD/Windows 10 Home...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kwl0akw0/computer/r/0/d/-original-imag98fvf2yr5xz7.jpeg?q=70",
        "Description": "AMD Ryzen 9 Octa Core Processor  8 GB DDR4 RAM  64 bit Windows 10 Operating System  1 TB SSD  35.56 cm (14 Inch) Display  1 Year Onsite Warranty",
        "Price": 45658
    },
    {
        "ProductID": 194,
        "Category": "Laptops",
        "Title": "ASUS Vivobook 15 OLED (2022) Core i5 12th Gen - (16 GB/512 GB SSD/Windows 11 Home) X1505ZA-L1511WS Thi...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/1/v/u/x1505za-l1511ws-thin-and-light-laptop-asus-original-imaghyvaqhhvhyv9.jpeg?q=70",
        "Description": "Get unparalleled power and reliability with the new Intel 12th Gen CPU  15.6 Inch Full HD OLED 16:9 aspect ratio, 0.2ms response time, 600nits HDR peak brightness, 100% DCI-P3 color gamut, VESA CERTIFIED Display HDR True Black 600, 1.07 billion colors, PANTONE Validated, Glossy display, 70% less harmful blue light, TUV Rheinland-certified  Stylish & Portable Just 1.99 cm thin and 1.7 kg in weight. US MIL-STD 810H Military-grade durability  Light Laptop without Optical Disk Drive  Backlit chiclet keyboard, Finger Print Sensor for Faster System Access  720p HD webcam with physical privacy shutter",
        "Price": 74524
    },
    {
        "ProductID": 195,
        "Category": "Laptops",
        "Title": "Lenovo IdeaPad 3 Core i3 10th Gen - (8 GB/256 GB SSD/Windows 11 Home) 81WA00Q3IN81WA00MEIN Thin and L...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/keaaavk0/computer/c/q/t/lenovo-na-thin-and-light-laptop-original-imafuzt873zgp9xe.jpeg?q=70",
        "Description": "Intel Core i3 Processor (10th Gen)  8 GB DDR4 RAM  64 bit Windows 11 Operating System  256 GB SSD  35.56 cm (14 inch) Display  2 Years Onsite�Warranty",
        "Price": 22465
    },
    {
        "ProductID": 196,
        "Category": "Laptops",
        "Title": "ASUS ROG Strix G15 Ryzen 7 Octa Core AMD R7-4800H - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVI...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l3vxbbk0/computer/g/u/y/-original-imagewgtfgzf8fdd.jpeg?q=70",
        "Description": "AMD Ryzen 7 Octa Core Processor  8 GB DDR4 RAM  64 bit Windows 10 Operating System  512 GB SSD  39.62 cm (15.6 inch) Display  1 Year Onsite Warranty",
        "Price": 75468
    },
    {
        "ProductID": 197,
        "Category": "Laptops",
        "Title": "ASUS TUF Gaming A15 Ryzen 5 Hexa Core AMD R5-4600H - (8 GB/1 TB SSD/Windows 11 Home/4 GB Graphics/NVID...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/i/j/u/-original-imaggzes4pd7ptkx.jpeg?q=70",
        "Description": "AMD Ryzen 5 Hexa Core Processor  8 GB DDR4 RAM  64 bit Windows 11 Operating System  1 TB SSD  39.62 cm (15.6 inch) Display  1 Year Onsite Warranty",
        "Price": 65485
    },
    {
        "ProductID": 198,
        "Category": "Laptops",
        "Title": "ASUS VivoBook K15 OLED Ryzen 7 Octa Core AMD R7-5700U - (16 GB/512 GB SSD/Windows 11 Home) KM513UA-L71...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l15bxjk0/computer/8/4/i/-original-imagcsyu53jxgtqe.jpeg?q=70",
        "Description": "AMD Ryzen 7 Octa Core Processor  16 GB DDR4 RAM  64 bit Windows 11 Operating System  512 GB SSD  39.62 cm (15.6 Inch) Display  1 Year onsite warranty",
        "Price": 65486
    },
    {
        "ProductID": 199,
        "Category": "Laptops",
        "Title": "SAMSUNG Galaxy Book Go Snapdragon 7c Gen 2 - (4 GB/128 GB EMMC Storage/Windows 11 Home) NP340XLA-KA1IN...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l0r1j0w0/computer/z/m/a/np340xla-ka1in-thin-and-light-laptop-samsung-original-imagcgqvcvcbsun6.jpeg?q=70",
        "Description": "Qualcomm Snapdragon 7c Gen 2 Processor  4 GB LPDDR4X RAM  Windows 11 Operating System  35.56 cm (14 Inch) Display  Office Home and Student 2021  1 Year Onsite Warranty",
        "Price": 25462
    },
    {
        "ProductID": 200,
        "Category": "Laptops",
        "Title": "acer Extensa Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) EX 215-54/ EX 215-54-356V Thin and L...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l5e81ow0/computer/j/w/o/ex-215-54-thin-and-light-laptop-acer-original-imagg28wzdeny2jq.jpeg?q=70",
        "Description": "Intel Core i3 Processor (11th Gen)  8 GB DDR4 RAM  64 bit Windows 11 Operating System  512 GB SSD  39.62 cm (15.6 Inch) Display  1 Year International Travelers Warranty (ITW)",
        "Price": 25462
    },
    {
        "ProductID": 201,
        "Category": "Laptops",
        "Title": "ASUS VivoBook K15 OLED Ryzen 5 Hexa Core AMD R5-5500U - (16 GB/512 GB SSD/Windows 11 Home) KM513UA-L51...",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l13whow0/computer/o/s/h/-original-imagcqvpmys2cmg3.jpeg?q=70",
        "Description": "AMD Ryzen 5 Hexa Core Processor  16 GB DDR4 RAM  64 bit Windows 11 Operating System  512 GB SSD  39.62 cm (15.6 Inch) Display  1 Year onsite warranty",
        "Price": 64589
    },
    {
        "ProductID": 27,
        "Category": "Mobile phones",
        "Title": "BlackZone B310",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kdxfc7k0pkrrdj/mobile/v/f/3/blackzone-b310-b310-original-imafupywddmckaje.jpeg?q=70",
        "Description": "10 MB RAM  10 MB ROM  Expandable Upto 32 GB  4.57 cm (1.8 inch) Display  0.3MP Rear Camera  1000 mAh Battery  1 Year Manufacturer Warranty for Device",
        "Price": 859
    },
    {
        "ProductID": 28,
        "Category": "Mobile phones",
        "Title": "REDMI Note 11 SE (Bifrost Blue, 64 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/j/3/-original-imaghh2fyy8xzszj.jpeg?q=70",
        "Description": "6 GB RAM  64 GB ROM  Expandable Upto 512 GB  16.33 cm (6.43 inch) Full HD+ Display  64MP + 8MP + 2MP + 2MP  13MP Front Camera  5000 mAh Lithium Polymer Battery  Mediatek Helio G95 Octa Core Processor  1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories",
        "Price": 114621
    },
    {
        "ProductID": 29,
        "Category": "Mobile phones",
        "Title": "realme C33 (Night Sea, 64 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70",
        "Description": "4 GB RAM  64 GB ROM  Expandable Upto 1 TB  16.51 cm (6.5 inch) HD+ Display  50MP + 0.3MP  5MP Front Camera  5000 mAh Lithium Ion Battery  Unisoc T612 Processor  1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories",
        "Price": 98768
    },
    {
        "ProductID": 30,
        "Category": "Mobile phones",
        "Title": "realme 9 (Meteor Black, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l3t2fm80/mobile/7/w/5/-original-imageu8c4ae9sezr.jpeg?q=70",
        "Description": "6 GB RAM  128 GB ROM  Expandable Upto 256 GB  16.26 cm (6.4 inch) Full HD+ AMOLED Display  108MP + 8MP + 2MP  16MP Front Camera  5000 mAh Lithium Ion Battery  Qualcomm Snapdragon 680 Processor  1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories",
        "Price": 14524
    },
    {
        "ProductID": 31,
        "Category": "Mobile phones",
        "Title": "MOTOROLA edge 30 (Meteor Grey, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l2xmqvk0/mobile/o/r/n/-original-image674ydfks6se.jpeg?q=70",
        "Description": "6 GB RAM  128 GB ROM  16.64 cm (6.55 inch) Full HD+ Display  50MP + 50MP + 2MP  32MP Front Camera  4020 mAh Lithium Battery  Qualcomm Snapdragon 778G Plus Processor  1 Year on Handset and 6 Months on Accessories",
        "Price": 22456
    },
    {
        "ProductID": 32,
        "Category": "Mobile phones",
        "Title": "OPPO K10 (Black Carbon, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l2jcccw0/mobile/h/x/3/-original-imagduwqakhhkrse.jpeg?q=70",
        "Description": "6 GB RAM  128 GB ROM  Expandable Upto 1 TB  16.74 cm (6.59 inch) Full HD+ Display  50MP + 2MP + 2MP  16MP Front Camera  5000 mAh Lithium Ion Battery  Qualcomm Snapdragon 680 Processor  33W SUPERVOOC Charger  Dual Speaker  Super Adaptive Refresh Rate",
        "Price": 12456
    },
    {
        "ProductID": 33,
        "Category": "Mobile phones",
        "Title": "MOTOROLA G32 (Satin Silver, 64 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/d/m/f/-original-imaggvfz5xvn4j93.jpeg?q=70",
        "Description": "4 GB RAM  64 GB ROM  16.64 cm (6.55 inch) Full HD+ Display  50MP + 8MP + 2MP  16MP Front Camera  5000 mAh Lithium Polymer Battery  Qualcomm Snapdragon 680 Processor  1 Year on Handset and 6 Months on Accessories",
        "Price": 75462
    },
    {
        "ProductID": 34,
        "Category": "Mobile phones",
        "Title": "APPLE iPhone 11 (White, 64 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70",
        "Description": "64 GB ROM  15.49 cm (6.1 inch) Liquid Retina HD Display  12MP + 12MP  12MP Front Camera  A13 Bionic Chip Processor  Brand Warranty of 1 Year",
        "Price": 42546
    },
    {
        "ProductID": 35,
        "Category": "Mobile phones",
        "Title": "SAMSUNG Galaxy F23 5G (Forest Green, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l0sgyvk0/mobile/f/v/c/-original-imagcg22pf79cgau.jpeg?q=70",
        "Description": "6 GB RAM  128 GB ROM  Expandable Upto 1 TB  16.76 cm (6.6 inch) Full HD+ Display  50MP + 8MP + 2MP  8MP Front Camera  5000 mAh Lithium Ion Battery  Qualcomm Snapdragon 750G Processor  1 Year Warranty Provided by the Manufacturer from Date of Purchase",
        "Price": 14662
    },
    {
        "ProductID": 36,
        "Category": "Mobile phones",
        "Title": "vivo T1 44W (Starry Sky, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70",
        "Description": "4 GB RAM  128 GB ROM  Expandable Upto 1 TB  16.36 cm (6.44 inch) Full HD+ AMOLED Display  50MP + 2MP + 2MP  16MP Front Camera  5000 mAh Lithium Battery  Qualcomm Snapdragon 680 Processor  1 Year Handset and 6 Months Accessories",
        "Price": 45624
    },
    {
        "ProductID": 37,
        "Category": "Mobile phones",
        "Title": "POCO M4 Pro 5G (Power Black, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/6/8/o/-original-imagcafj5zcxz9wg.jpeg?q=70",
        "Description": "6 GB RAM  128 GB ROM  Expandable Upto 1 TB  16.76 cm (6.6 inch) Full HD+ Display  50MP + 8MP  16MP Front Camera  5000 mAh Lithium-ion Polymer Battery  Mediatek Dimensity 810 Processor  One Year for Handset, 6 Months for Accessories",
        "Price": 14524
    },
    {
        "ProductID": 38,
        "Category": "Mobile phones",
        "Title": "realme C35 (Glowing Green, 64 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/y/g/i/-original-imagc7ryyhrrcgxh.jpeg?q=70",
        "Description": "4 GB RAM  64 GB ROM  Expandable Upto 1 TB  16.76 cm (6.6 inch) Full HD+ Display  50MP + 2MP + 0.3MP  8MP Front Camera  5000 mAh Lithium Polymer Battery  Unisoc Tiger T616 Processor  1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
        "Price": 11452
    },
    {
        "ProductID": 39,
        "Category": "Mobile phones",
        "Title": "MOTOROLA e40 (Carbon Gray, 64 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/l1l1rww0/mobile/v/7/n/-original-imagd48zkjwujxzz.jpeg?q=70",
        "Description": "4 GB RAM  64 GB ROM  Expandable Upto 1 TB  16.51 cm (6.5 inch) HD+ Display  48MP + 2MP + 2MP  8MP Front Camera  5000 mAh Battery  UNISOC T700 Processor  1 Year on Handset and 6 Months on Accessories",
        "Price": 45625
    },
    {
        "ProductID": 40,
        "Category": "Mobile phones",
        "Title": "SAMSUNG Galaxy F22 (Denim Black, 64 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kqqykcw0/mobile/p/y/u/galaxy-f22-sm-e225fzkhins-samsung-original-imag4z99fagskjxd.jpeg?q=70",
        "Description": "4 GB RAM  64 GB ROM  Expandable Upto 1 TB  16.26 cm (6.4 inch) HD+ Display  48MP + 8MP + 2MP + 2MP  13MP Front Camera  6000 mAh Lithium-ion Battery  MediaTek Helio G80 Processor  1 Year Warranty Provided by the Manufacturer from Date of Purchase",
        "Price": 14524
    },
    {
        "ProductID": 41,
        "Category": "Mobile phones",
        "Title": "SAMSUNG Galaxy F22 (Denim Black, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/kqqykcw0/mobile/p/y/u/galaxy-f22-sm-e225fzkhins-samsung-original-imag4z99fagskjxd.jpeg?q=70",
        "Description": "6 GB RAM  128 GB ROM  Expandable Upto 1 TB  16.26 cm (6.4 inch) HD+ Display  48MP + 8MP + 2MP + 2MP  13MP Front Camera  6000 mAh Lithium-ion Battery  MediaTek Helio G80 Processor  1 Year Warranty Provided by the Manufacturer from Date of Purchase",
        "Price": 14525
    },
    {
        "ProductID": 42,
        "Category": "Mobile phones",
        "Title": "APPLE iPhone 11 (White, 128 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70",
        "Description": "128 GB ROM  15.49 cm (6.1 inch) Liquid Retina HD Display  12MP + 12MP  12MP Front Camera  A13 Bionic Chip Processor  Brand Warranty of 1 Year",
        "Price": 45264
    },
    {
        "ProductID": 43,
        "Category": "Mobile phones",
        "Title": "REDMI 10 (Caribbean Green, 64 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/g/p/x/-original-imagk4nz54s7a7rf.jpeg?q=70",
        "Description": "4 GB RAM  64 GB ROM  Expandable Upto 1 TB  17.02 cm (6.7 inch) HD+ Display  50MP + 2MP  5MP Front Camera  6000 mAh Lithium Polymer Battery  Qualcomm Snapdragon 680 Processor  1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
        "Price": 54621
    },
    {
        "ProductID": 44,
        "Category": "Mobile phones",
        "Title": "realme C33 (Aqua Blue, 32 GB)",
        "Image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70",
        "Description": "3 GB RAM  32 GB ROM  Expandable Upto 1 TB  16.51 cm (6.5 inch) HD+ Display  50MP + 0.3MP  5MP Front Camera  5000 mAh Lithium Ion Battery  Unisoc T612 Processor  1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories",
        "Price": 46865
    }

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCard(prdtArr) {

    document.querySelector("#div2").innerHTML = "";

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
        btn.innerText = "Add to cart"

        btn.addEventListener("click", function () {

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            let datapresent = false;
            for (let i = 0; i < cart.length; i++) {

                if (cart[i].ProductID == elem.ProductID) {
                    datapresent = true;
                    break;
                }
            }

            console.log(datapresent)
            if (datapresent === true) {
                alert("Product Already in Cart");

            } else {
                cart.push({ ...elem, quantity: 1 });
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Product Added To Cart");

            }

        })

        div.append(imageProd, title, des, cate, price, btn);

        document.querySelector("#div2").append(div);

    });
}
displayCard(prdtArr);

function search() {
    let q = document.querySelector("input").value;
    //console.log(q);
    let newData = prdtArr.filter(function (elem) {
        return elem.Title.toLowerCase().includes(q.toLowerCase());
    });
   // console.log(newData)
    displayCard(newData);
}


let prio = document.querySelector("#filter");

prio.addEventListener("change", function (event) {
    event.preventDefault();

    let selected = event.target.value;

    if (selected == "All") {
        displayCard(prdtArr);
    } else {

        let filtered_data = prdtArr.filter(function (el) {
            return el.Category == selected
        });
        displayCard(filtered_data)
    }

});

let sorted = document.querySelector("#sort");

sorted.addEventListener("change", function (event) {

    let val = document.querySelector("#sort").value;
    //console.log(val)

    if (val == "LTH") {
        let data1 = prdtArr.sort(function (a, b) {
            return a.Price - b.Price;

        })
        displayCard(data1)

    } else if (val == "HTL") {
        let sorteddata = prdtArr.sort(function (a, b) {
            return b.Price - a.Price;

        })
        displayCard(sorteddata)


    } else {
        displayCard(prdtArr)
    }
})

