const dropBtn= document.querySelectorAll('.drop-icon');

dropBtn.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let sib= e.currentTarget.parentElement.querySelector('.more');
        if(sib.classList.contains('shown-drop-down')){
            sib.classList.remove('shown-drop-down')
        }
        else{
            sib.classList.add('shown-drop-down')
        }
        
    })
})