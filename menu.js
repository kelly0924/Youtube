function showHiddenNav(){
    var mainLeftHiddenNav=document.getElementById("main_left_hidden_nav");
    if(mainLeftHiddenNav.style.display == "none"){
        mainLeftHiddenNav.style.display = "inline-block";
       // window.getComputedStyle(mainLeftHiddenNav).width="300px"
        window.getComputedStyle(mainLeftHiddenNav).transitionDuration="1s"; 
    }else{
        mainLeftHiddenNav.style.display="none";
    }
}