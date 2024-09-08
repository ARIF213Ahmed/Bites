document.querySelector("#emo1").addEventListener("click",function(){
    document.querySelector(".pop1").classList.add("active");
  });
  document.querySelector(".pop1 .close-btn").addEventListener("click",function(){
    document.querySelector(".pop1").classList.remove("active");
  });

//sec

document.querySelector("#emo2").addEventListener("click",function(){
    document.querySelector("#toto").classList.add("active");
  });
  document.querySelector(".pop1 .close-btn1").addEventListener("click",function(){
    document.querySelector("#toto").classList.remove("active");
  });

//third

document.querySelector("#emo3").addEventListener("click",function(){
    document.querySelector("#hoho").classList.add("active");
  });
  document.querySelector(".pop1 .close-btn2").addEventListener("click",function(){
    document.querySelector("#hoho").classList.remove("active");
  });
