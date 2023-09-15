

const card = document.getElementById('card')

const random = document.querySelector('.random')



const button = document.querySelector('button')


button.addEventListener('click',()=>{

    card.style.backgroundColor = 'red'
    randomfn()

    setTimeout(()=>{
        card.style.backgroundColor = ''


        removedp()
    },2000)
})

function randomfn(){

    let num = Math.floor(Math.random() * 10)

    const p = document.createElement('p')
    p.className = 'randomNumber'
    p.innerHTML = num
    random.appendChild(p)

}
function removedp(){

    const p = document.querySelector('p')
    
    random.removeChild(p)
  
}