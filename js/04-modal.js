//const modelButtons = document.querySelectorAll('[data-modal-button]');
//const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
//const allModals = document.querySelectorAll('[data-modal]');


//Кнопки открыть модалку 
//modelButtons.forEach(function (item){
//item.addEventListener('click', function() {
//   const modalID = this.dataset.modalButton;
// const modal = document.querySelector('#' + modalID);
// modal.classList.remove('hidden');

 // Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики 'наверх'
//modal.querySelector('.modal-window]').addEventListener('click', function(e){
//e.stopPropagation();
//});




//})
//})



//Кнопки закрыть модалку
//modalClosebuttons.forEach(function (item){
//    item.addEventListener('click', function(){
//      const modal = this.closest('[data-modal]'); 
//      modal.classList.add('hidden');
 //   })
//})


// Закрытие модалок по фейду 
//allModals.forEach(function (item){
//    item.addEventListener('click', function(){
//this.classList.add('hidden');
//    })
//})


//const button= document.querySelector('[data-modal-button]');
//const modal = document.querySelector('[data-modal]');
//const buttonClose = document.querySelector('[data-modal-close]');


//button.addEventListener('click', function(){
//  modal.classList.remove('hidden');
//});

//buttonClose.addEventListener('click', function(){
//   modal.classList.toggle('hidden');
//});

//modal.addEventListener('click', function(){
//  modal.classList.add('hidden'); 
//})

//modal.querySelector('.modal-window').addEventListener('click', function(event){
//event.stopPropagation();
//})