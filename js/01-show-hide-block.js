//const button = document.querySelector('#button');
//const content =  document.querySelector('#content');

//button.addEventListener('click', function(){

   
//if (content.classList.toggle('content-hidden')) {
//     button.textContent = "Открыть блок";
//} else{
//    button.textContent = "Закрыть блок";
//}

//});



const btn = document.querySelector('#button');
const content = document.querySelector('#content');


btn.addEventListener('click', function(){
   if (content.classList.toggle('content-hidden')){
    btn.textContent = "Открыть контент";
   }else {
    btn.textContent = "Закрыть контент";
   }
});