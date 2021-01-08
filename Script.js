var Ads = [{Img:""},
          {Img:"/Images/Lobby.jpg"}, 
          {Img:"/Images/BF.png"},
          {Img:"/Images/Promo2.png"},];
size= Ads.length 
i=0

img = document.querySelector("img");
Imag = document.getElementById("promo")

Curent=Ads[i].Img
function Arrow_right(){

    if (Imag != Curent){   
        if (i < size){
        i+=1
        Imag.src=`${Ads[i].Img}`;}
        if(i>=size){
            i=0
            Imag.src =`${Ads[i].Img}`;}}
        if(i>size){
            Arrow = document.getElementsByClassName("Arrow_right")
            Arrow.src=`${Ads[0].Img}`;}
;}
function Arrow_left(){
    if (Imag != Curent){   
        if (i < size){
        i-=1
        Imag.src=`${Ads[i].Img}`;}
        if(i>=size){
            i=0
            Imag.src =`${Ads[i].Img}`;}}
        if(i>size){
            Arrow = document.getElementsByClassName("Arrow_left")
            Arrow.src=`${Ads[0].Img}`;}
;}
