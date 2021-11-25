const menu = document.getElementById('menu')
const show = document.getElementById('screen_menu')
const links = document.querySelectorAll('#link')
const bars = document.querySelector('.bars')

menu.addEventListener('click', ()=>{
    show.classList.toggle('on')
    bars.classList.toggle('on')
})

links.forEach(n=>{
    n.addEventListener('click', ()=> {
        show.classList.toggle('on')
    })
})






gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();

        tl.from('.hero_left',{
            y: '-30%',
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        })

        tl.from('.stagger',{
            opacity: 0,
            x: '-20%',
            stagger: .3,
            duration: 3,
            ease: Power4.easeOut
        }, "-=1.5")

        gsap.from('.transition',{
            scrollTrigger: {
                trigger: '.transition',
                start: 'top center'
            },
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: .5,
            
        })

        
