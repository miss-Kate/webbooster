let popupBg = document.getElementById('popup_bg');
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.btn');  
let closePopupButton =document.getElementById('close')

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active');
        popup.classList.add('active');

    })
});
closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active'); 
    popup.classList.remove('active');
});
