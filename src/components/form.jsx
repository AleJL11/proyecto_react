const formulario= document.getElementById('formulario');
const formulario2= document.getElementById('formulario2');
const formulario3= document.getElementById('formulario3');
const formulario4= document.getElementById('formulario4');

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const formularioValue=formulario.nodeValue.trim();
    const formulario2Value=formulario2.value.trim();
    const formulario3Value=formulario3.value.trim();
    const formulario4Value=formulario4.value.trim();


    if(formularioValue ===''){
        setErrorFor()
    }
}


function setErrorFor(input, message){

const formControl = input.parentElement;
const small = formControl. querySelector('small');
formControl.className = 'form-control-error';
small.innerText = message;

}