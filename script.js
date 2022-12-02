'use strict';

const modal = document.querySelector('.modal');

const closeBtn = document.querySelector('.close-modal');

const overlay = document.querySelector('.overlay');

const buttonsOpenModal = document.querySelectorAll('.show-modal');

// for(let i=0;i<buttonsOpenModal.length;i++)
// {
//     console.log(buttonsOpenModal[i].textContent);
// }

const openModal=function()
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
    for(let i=0;i<buttonsOpenModal.length;i++)
    buttonsOpenModal[i].addEventListener('click',openModal);


    const closeButton=function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

closeBtn.addEventListener('click',closeButton);