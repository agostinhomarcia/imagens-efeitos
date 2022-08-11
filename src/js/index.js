const effect = (classe) =>{
    let listElements = document.querySelectorAll(`.${classe}`);
    listElements.forEach((element) => {
        element.parentNode.style.overflow = 'hidden'

        if(element.getBoundingClientRect().top < window.innerHeight){
            element.classList.add('faz-efeito')

        }
    })

}
window.onload = () => {
    for(let i = 0; i <= 10; i++){
        effect(`efeito-${i}`)
    }
}

window.onscroll = () =>{
    for(let i = 0; i <= 10; i++){
        effect(`efeito-${i}`)
    }
}

