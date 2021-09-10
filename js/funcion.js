var user=document.getElementById("tbxUser");
var password=document.getElementById("tbxPassword");
var box=document.getElementById("loginForm");
var variante;

function logeo(){
    if((user.value=="")||(password.value=="")){
        highlightError();
    }else{
        highlightSuccess();
    }
}
//FUNCION PARA REMARCAR QUE HAY UN ERROR EN LOS DATOS
function highlightError(){
    variante = setTimeout(function(){
        box.style.border="4px solid rgba(231, 76, 60, 1)";
    }, 200);
    setTimeout(function() {
        clearHighlightError();
    }, 2000);
}
//FUNCION PARA REMARCAR CUANDO SON CORRECTOS LOS DATOS
function highlightSuccess(){
    setTimeout(function(){
       variante = box.style.border="4px solid rgba(88, 214, 141, 1)";
    }, 200);
    setTimeout(function() {
        clearHighlightError();
    }, 2000);
}
//FUNCION PARA DETENER LOS CAMBIOS Y VOLVER VALOR ORIGINAL
function clearHighlightError(){
    clearTimeout(variante);
    box.style.border="2px solid rgba(255,255,255, 0.2)";
    user.focus();
}


