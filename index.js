
// Start Header

let Header = document.querySelector(".header")
let NavLink = document.querySelectorAll(".header ul li a")


onscroll = () => {
    if( scrollY >= 80 ){
        Header.classList.add('active')
        NavLink.forEach(link=>{
            link.classList.add('active')
        })
    }else{
        Header.classList.remove('active')
        NavLink.forEach(link=>{
            link.classList.remove('active')
        })
    }
} 
 

let bars = document.querySelector(".fa-bars")
let NavMobil = document.querySelector(".Mobil")

bars.addEventListener("click" , ()=>{
    NavMobil.classList.toggle("active")
})


// Start Testemonial


let Testemonial = [
    {
        Names:'Nelson Mundsh',
        para:'"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et .',
        Jops:'Businessman',
    },
    {
        Names:'Naimur Rahman',
        para:'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata .',
        Jops:'CEO - GrayGrid',
    },
    {
        Names:'Musharof Chowdhury',
        para:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata .',
        Jops:'CEO - WpthemesGrid',
    },
]

let NumTestimonial = 0;

let paragraph = document.querySelector('.Testemonial-Dis')
let Name = document.querySelector('.Testemonial-Name')
let Jop = document.querySelector('.Testemonial-Jop')

UpDateTestimonial  ()

function UpDateTestimonial  () {
    let OneTes = Testemonial[NumTestimonial]

    paragraph.innerHTML =  OneTes.para
    Name.innerHTML =  OneTes.Names
    Jop.innerHTML =  OneTes.Jops

    NumTestimonial++

    if( NumTestimonial == Testemonial.length ){
        NumTestimonial = 0
    }

  setTimeout(()=>{
    UpDateTestimonial  ()
  },2000)
    
}






