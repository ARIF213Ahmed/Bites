const arifuser = "Arif Ahmed";
const arifpass = "Arif123";
const Priyakshiuser = "Priyakshi Saikia";
const Priyakshipass = "Priyakshi123";

document.getElementById("sub").onclick = function(){
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    if(username == arifuser && password == arifpass ||username == Priyakshiuser && password == Priyakshipass){
        window.alert(`Welcome ${username}`);
        setTimeout(() => {
            window.location.href = "/order.html";
        }, 1000);
    } 
    else
    {
        window.alert("wrong credentials!!");
    }
}
   
  