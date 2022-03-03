const bodyClass = document.querySelector('.light') 
const buttonToggle = document.querySelector('.dark-toggle') 


buttonToggle.addEventListener("click", function() {
    bodyClass.classList.toggle('dark') 
})

