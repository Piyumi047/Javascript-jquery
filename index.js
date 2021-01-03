let isangry=true;
const elementId='myimg';
const angryemogy='angry.jpg';
const hahaemogy='haha.jpg';

function changeface(){

    isangry=!isangry;
    if(isangry){
        document.getElementById(elementId).src=hahaemogy;
    }
    else{
        document.getElementById(elementId).src=angryemogy;
    }
}