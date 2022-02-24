function showHiddenNav(){
    var mainLeftHiddenNav=document.getElementById("main_left_hidden_nav");
    var mainCenterDiv=document.getElementsByClassName("main_center_div");
    var mainCenter=document.getElementById("main_center");
    var mainCenterDivImg=document.getElementsByClassName("main_center_div_img");
    var mainCenterDivDetails=document.getElementsByClassName("main_center_div_details");

    if(mainLeftHiddenNav.style.display == "none"){
        mainLeftHiddenNav.style.display = "inline-block";
        document.getElementById("main_left_nav").style.display="none"
        for(var index=0; index <mainCenterDivImg.length; index++){
            mainCenterDiv[index].style.width="23%";
            mainCenterDivImg[index].style.width="250px";
            mainCenterDivImg[index].style.height="150px";
        }
        mainCenter.style.left="17%";
        mainCenter.style.width="85%";
    }else{
        mainLeftHiddenNav.style.display="none";
        document.getElementById("main_left_nav").style.display="inline-block";
        mainCenter.style.width="100%"
        mainCenter.style.left="0%";
        for(var index=0; index <mainCenterDivImg.length; index++){
            mainCenterDivImg[index].style.width="320px";
            mainCenterDivImg[index].style.height="170px";

        }
    }
}