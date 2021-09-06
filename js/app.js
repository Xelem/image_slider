const pictures = [
    'contBcg-0',
    'contBcg-1',
    'contBcg-2',
    'contBcg-3',
    'contBcg-4'
];
const image = document.querySelector('.img-container')
const buttons = document.querySelectorAll('.btn');
let index = 0

buttons.forEach(function(button) {
    button.addEventListener('click', (changeImg) => {
        if(button.classList.contains('btn-left')){
            index --
            if(index < 0){
                index = pictures.length -1
            }
            image.style.backgroundImage = `url('./img/${pictures[index]}.jpeg')`;
        } else if(button.classList.contains('btn-right')){
            index ++
            if(index > pictures.length - 1){
                index = 0
            }
            image.style.backgroundImage = `url('./img/${pictures[index]}.jpeg')`;
        }
    })
})

