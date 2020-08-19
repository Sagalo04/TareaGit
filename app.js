function validar(){
    var usuario, contrasena, expresion; 

    usuario = document.getElementById("usuario").value; 
    contrasena = document.getElementById("contrasena").value; 


expresion = /^(?=(?:.*\d))(?=(?:.*[A-Z]))(?=(?:.*[a-z]))\S{8,}$/;  

if(usuario === "" || contrasena === ""){
    alert("Hay un campo vacío"); 

}
else if(usuario.lenght>20){
    alert("El nombre de usuario es demasiado largo");

}
else if(contrasena.lenght>20){
    alert("Contraseña muy larga");

}
else if(expresion.test(contrasena)){
    //location.href='bingo.html';

}
else {
    alert("La contraseña no es valida, debe tener al menos un numero, una letra mayuscula, minuscula y ser mayor a 8 caracteres");
}

}

