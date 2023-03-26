// Нашли все заголовки тфбов по дате отрибуту 
//const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все content Box 
//const contentBoxes = document.querySelectorAll('[data-tab-content]');


//tabHeaders.forEach(function(item){
//item.addEventListener('click', function(){
    
  // 1. Скрыть все content box и скрыт 
//  contentBoxes.forEach(function(item){
// item.classList.add('hidden');
 // })
//2. Выбрать нужный content box и показать его  
//const contentBox =  document.querySelector('#' + this.dataset.tab );
//contentBox.classList.remove('hidden')

//})
//})


const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');


tabHeaders.forEach(function(item){
item.addEventListener('click', function(){
  contentBoxes.forEach(function(item){
    item.classList.add('hidden');
  })
const contentBox = document.querySelector('#' + this.dataset.tab);
contentBox.classList.remove('hidden');
})
})