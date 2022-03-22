window.onscroll=function(){

    if(window.pageYOffset>=200){
        document.getElementById("navbar").style.backgroundColor="#293241";
        document.getElementById("logo").style.height="80px";
        document.getElementById("nav-links").style.height="80px";
    }
    else{
        document.getElementById("navbar").style.backgroundColor="transparent";
        document.getElementById("logo").style.height="100px";
        document.getElementById("nav-links").style.height="100px";
    }

}