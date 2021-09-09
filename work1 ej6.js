/*
Se desea realizar mediante DOM un visor de imágenes. Para ello
en tu página se mostrará una imágen, junto a los botones "Siguiente" y "Anterior".
Impleméntale la funcionalidad para poder navegar entre un conjunto de imágenes
que tendrás previamente preparadas
*/
window.onload=main;
var img;
var arr=['ashes.jpg','gem.jpg','visas.jpg','skarlet.jpg'];
var num=0;

function main(){
    img=document.getElementById("imagen");
    document.getElementById("izquierda").addEventListener("click",atras);
    document.getElementById("derecha").addEventListener("click",siguiente);
}

function atras(){
    if(num==0)
        num=arr.length-1;
    else
        num--;
    
    let src="img/"+arr[num];
    img.src=src;
}
function siguiente(){
    if(num==arr.length-1)
        num=0;
    else
        num++;

    let src="img/"+arr[num];
    img.src=src;
}

