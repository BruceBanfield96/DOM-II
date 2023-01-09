import './less/index.less'

// load
window.onload = function(evt){
    console.log(`event ${evt.type} fired! Ready to go`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!'

    // copy - whatever you copy on the page will show on the DOM
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then (text => {
            console.log(text)
        })
    })

    // click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    //dblclick // this removes whatever you double click from the page
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = '' 
    })

    //keydown
    window.addEventListener('keydown' , evt => {
        if (evt.key == 6){
            document.body.innerHTML = 'YOU RAN ORDER 66' // this will wipe the website and add this line to the page instead
        }
    })

    // mousemove
    document.body.addEventListener ('mousemove', evt => {
        //console.log(evt)
        const {clientX, clientY} = evt // tells you where the mouse moves to and the coordinates of the page it is at
        //console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    //mouseenter, mouseleave

    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations){
        destination.addEventListener('mouseenter', ()=> {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener ('mouseleave', ()=> {
            destination.style.fontWeight = 'initial'
        })
    }


}




