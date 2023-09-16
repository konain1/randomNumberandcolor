

const card = document.getElementById('card')

const random = document.querySelector('.random')



const button = document.querySelector('button')

let color = ['red','green','blue','yellow','pink','black','orange','aqua','lighpink','lightgreen']

button.addEventListener('click',()=>{

    randomfn()
    button.style.display = 'none'
    


    setTimeout(()=>{
        card.style.backgroundColor = ''
        button.style.display = 'block'


        removedp()
    },2000)
})

function randomfn(){

    let num = Math.floor(Math.random() * 10)
    card.style.backgroundColor = color[num]
    const p = document.createElement('p')
   

    p.className = 'randomNumber'
    p.innerHTML = num
    random.appendChild(p)
    


}
function removedp(){

    const p = document.querySelector('p')
    
    random.removeChild(p)
  
}