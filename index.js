//Acciones de botones 
const upperCasee = document.getElementById("to-upper-case");
const lowerCasee = document.getElementById("to-lower-case");
const addtask = document.getElementById("add-task");
const textarea = document.getElementById("textarea");
const texto = document.getElementById("text");
const valor250 = document.getElementById("valor");
//Evento click
upperCasee.addEventListener("click", mayus);
lowerCasee.addEventListener("click", minus);
addtask.addEventListener("click", agregar);
textarea.addEventListener("input", x)

function mayus() {
    textarea.value = textarea.value.toUpperCase();
}
function minus() {
    textarea.value = textarea.value.toLowerCase();

}
function agregar() {
    texto.textContent+= textarea.value.trim();
    valor250.textContent=10;
    textarea.value="";
    valor250.style.color="";  
}
function x(){
    
    const inputLenght=textarea.value.length;
    valor250.textContent=(10 -(inputLenght));
    
    if(inputLenght > 10){
        textarea.value = textarea.value.slice(0, 9);
        
    }  
if (inputLenght>4){
    valor250.style.color="red";
}else{
    valor250.style.color="";
}


}

