//находим нужные элементы, кнопки модалки, модалка, кнопка закрытия 
//const button = document.querySelector('[data-modal-button]');
//const modal = document.querySelector('[data-modal]');
//const buttonClose = document.querySelector('[data-modal-close]');

// Прослушка клик на кнопке открытия и открываем модалку 
//button.addEventListener('click', function(){
//modal.classList.remove('hidden');
//})

// Прослушивае клик на кнопке Закрытие и закрываем  
//buttonClose.addEventListener('click', function(){
//    modal.classList.add('hidden');
///})



//modal.addEventListener('click', function(){
//   modal.classList.add('hidden');
//})



//modal.querySelector('.modal-window').addEventListener('click', function(event){
//event.stopPropagation();
//})



const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseButtons= document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

modalButtons.forEach(function(item){
item.addEventListener('click', function(){
 const modalId = this.dataset.modalButton;
 const modal = document.querySelector('#'+ modalId);
 modal.classList.remove('hidden');

modal.querySelector('modal-window').addEventListener('click', function(e){
e.stopPropagation();
})

})
})


modalCloseButtons.forEach(function(item){
   item.addEventListener('click', function(){
    const modal = this.closest('[data-modal]');
    modal.classList.add('hidden');
   })
})






allModals.forEach(function(item){
   item.addEventListener('click', function(){
   this.classList.add('hidden');
   })
})