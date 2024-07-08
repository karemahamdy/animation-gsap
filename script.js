gsap.registerPlugin(ScrollTrigger)

// header
gsap.from('.logo div',{
    opacity:0,
    delay:1,
    x:20
} )

const menu_items = document.querySelector('.menu-items')
gsap.from(menu_items.children ,{
    opacity:0,
    x:0,
    duration:1,
    delay:1.5,
    stagger:{
        amount:2
    }
})

// footer
const menu = document.querySelector('.menu')
gsap.from(menu.children ,{
  opacity:0,
  x:50,
  duration:1,
  delay:.5,
  stagger:{
      amount:2
  }
})