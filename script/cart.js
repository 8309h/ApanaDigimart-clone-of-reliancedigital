let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome").textContent = logeduser.name;
// console.log(logeduser.name)

let cartitem = JSON.parse(localStorage.getItem("cart")) || [];

displaycard(cartitem);

function displaycard(out) {

    let total = 0;
    document.querySelector("#cart-container").innerHTML = "";
    let count = 1
    let totalprice = document.querySelector("#cart-total");

    out.forEach(function (el, i) {

        let card = document.createElement("div");

        let imageProd = document.createElement("img");
        imageProd.setAttribute("src", el.Image)

        let title = document.createElement("h3");
        title.innerText = el.Title;

        let des = document.createElement("p")
        des.innerText = el.Description

        let cate = document.createElement("h3")
        cate.innerText = el.Category;

        let price = document.createElement("h3");
        price.innerText = "Rs" + " " + el.Price;
        let btn1 = document.createElement("button");
        btn1.textContent = "+";
        btn1.addEventListener("click", function () {
            count++;
            qtn.textContent = count;
            total = total + Number(el.Price)
            totalprice.textContent = total;

        })

        let qtn = document.createElement("span");
        qtn.textContent = el.quantity;

        let btn2 = document.createElement("button");
        btn2.textContent = "-";
        btn2.addEventListener("click", function () {
            if (count <= 1) {
                let cartdata = JSON.parse(localStorage.getItem("cart")) || [];
                cartdata.splice(i, 1);
                localStorage.setItem("cart", JSON.stringify(cartdata));
                displaycard(cartdata);
            } else {
                count--;
                qtn.textContent = count;
                total = total - Number(el.Price)
                totalprice.textContent = total;
            }

        })


        let btn3 = document.createElement("button");
        btn3.textContent = "Remove";
        btn3.addEventListener("click", function () {

            let cartdata = JSON.parse(localStorage.getItem("cart")) || [];
            cartdata.splice(i, 1);
            localStorage.setItem("cart", JSON.stringify(cartdata));
            displaycard(cartdata);
        })
        total = total + Number(el.Price);


        totalprice.textContent = total;


        card.append(imageProd, title, des, cate, price, btn1, qtn, btn2, btn3);

        document.querySelector("#cart-container").append(card);

    })


    let dis = document.querySelector("form");
    dis.addEventListener("submit", function (event) {

        event.preventDefault();
        let val = document.querySelector("#cupon-filled").value;
        // console.log(val)
        if (val === "Harsh30") {
            totalprice.textContent = Math.floor(total - (total * 0.3));
            // console.log(totalprice)
            localStorage.setItem("disprice", totalprice.textContent)


        } else {
            alert("You Enter The Wrong Coupen Code")
        }


    })



}
