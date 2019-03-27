document.addEventListener('DOMContentLoaded', function(){
    const modal = document.querySelector('.modal');
    const signin = document.querySelector('.signin');
    const close = document.querySelector('.close');
    const submit = document.querySelector('.submit');
    const inputList = document.querySelectorAll('input');
    
    signin.addEventListener('click', function() {
        modal.style.display = 'inline-block';
    })

    close.addEventListener('click', function() {
        modal.style.display = 'none';
    })
    
    submit.addEventListener('click', function() {
        inputList.forEach(function(input) {
            if (!input.classList.contains('error')) {
                input.className += 'error';
            }
        })
    })

    inputList.forEach(function(input) {
        input.addEventListener('mouseover', function() {
            input.classList.remove('error');
        })
    })
})
