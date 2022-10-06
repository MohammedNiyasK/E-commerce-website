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
console.log(smallImg)

  
  for(i=0;i<smallImg.length;i++){
    smallImg[i].addEventListener('click',(e)=>{
      ProductImg.setAttribute('src',e.target.src)
    })
  }


 