//Funciones

//Esto agrega a la pantalla el valor del boton de la calculadora que llegemos a presionar.
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

//Esta funcion vacia la pantalla.
function borrar(){
    document.getElementById('pantalla').value = '';
}
//Esta funcion calcula los datos.
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado;
}