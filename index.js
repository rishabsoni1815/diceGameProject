var randomNumber1=Math.floor((Math.random()*6))+1;
 var imgname="dice"+randomNumber1+".png";
 var newsrc1="images/"+imgname;
 var i1=document.getElementsByClassName("img1")[0];
 i1.setAttribute("src",newsrc1);


 
var randomNumber2=Math.floor((Math.random()*6))+1;
var imgname2="dice"+randomNumber2+".png";
var newsrc2="images/"+imgname2;
var i2=document.getElementsByClassName("img2")[0];
i2.setAttribute("src",newsrc2);



if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw !";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" 🚩 Player 1 Wins !";
}else {
    document.querySelector("h1").innerHTML="Player 2 Wins ! 🚩";
}
  
