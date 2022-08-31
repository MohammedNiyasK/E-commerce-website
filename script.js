const menulist=document.getElementById("menu-list");
          menulist.style.maxHeight="0px";

          function menutoggle(){
            if(menulist.style.maxHeight=="0px"){
              menulist.style.maxHeight="3000px"

            }
            else{
                menulist.style.maxHeight="0px"
            }
          }




  // <! ----------------js for Toggle form --------->

  var loginform=document.getElementById("login-form");
  var regform=document.getElementById("reg-form");
  var indicator=document.getElementById("indicator");

   function register(){
    loginform.style.transform="translateX(0px)";
    regform.style.transform="translateX(0px)"
    indicator.style.transform="translateX(100px)"
  }
   function login() {
    loginform.style.transform="translateX(300px)";
    regform.style.transform="translateX(300px) "
    indicator.style.transform="translateX(0px)"
    
  }


  // <!------------------For product details------------>

  let ProductImg=document.getElementById("ProductImg");
  let smallImg=document.getElementsByClassName("smallImg");

  smallImg[0].onclick=function(){
    ProductImg.src=smallImg[0].src
  }
  smallImg[1].onclick=function(){
    ProductImg.src=smallImg[1].src
  }
  smallImg[2].onclick=function(){
    ProductImg.src=smallImg[2].src
  }
  smallImg[3].onclick=function(){
    ProductImg.src=smallImg[3].src
  }