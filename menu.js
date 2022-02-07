function showHiddenNav(){
    var mainLeftHiddenNav=document.getElementById("main_left_hidden_nav");
    if(mainLeftHiddenNav.style.display == "none"){
        mainLeftHiddenNav.style.display = "inline-block";
    }else{
        mainLeftHiddenNav.style.display="none";
    }
}