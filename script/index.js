var image = document.getElementById("first");

    var img_array=[ "./images/img40.png",
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
    function slide1()
    {
        image.setAttribute("src",img_array[index]);
        index++;
        
        if(index >= img_array.length)
        {
        index = 0;
        }
    }
    setInterval("slide1()",1200);

    let x = document.getElementById("Second");

    var arr =[  "./images/img50.png",
                "./images/img51.png",
                "./images/img53.png"
                     
            ];

    var el = 0;
    function slidefun()
    {
        x.setAttribute("src",arr[el]);
        el++;
        
        if(el >= arr.length)
        {
        el = 0;
        }
    }
    setInterval("slidefun()",1500);

    let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
    console.log(logeduser)
     document.querySelector("#welcome").textContent = logeduser.name;
    // console.log(logeduser.name)
    