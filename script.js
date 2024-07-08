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
  },
   scrollTrigger:{
    trigger:menu.children
  }

})

// text
gsap.utils.toArray('.title').forEach(title=>{
  gsap.fromTo(title,{
      letterSpacing:'10px',
      opacity:0,
      x:300,
      skewX:65
  },{
      letterSpacing:'0',
      opacity:1,
      x:0,
      skewX:0,
      duration:1,
      delay:.5,
      scrollTrigger:title
  })
})

gsap.utils.toArray('p').forEach(p=>{
  gsap.fromTo(p,{
      opacity:0,
      x:150,
      skewX:30
  },{
      opacity:1,
      x:0,
      skewX:0,
      duration:1,
      delay:.5,
      scrollTrigger:p

  })
})
