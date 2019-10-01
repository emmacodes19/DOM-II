// Your code goes here
//1 
const mapImage = document.querySelector('.img-content');
console.log(mapImage);

mapImage.addEventListener('mouseenter', () => {
    mapImage.style.transform = 'scale(1.2)';
    mapImage.style.transition = 'all 0.3s';
});

//2
mapImage.addEventListener('mouseleave', () => {
    mapImage.style.transform = 'scale(1)';
    mapImage.style.transition = 'all 0.3s';
})

//3 
document.querySelectorAll('.nav-link').forEach(element=> {
    element.addEventListener('click', () => {
        element.style.color = 'blue';
    })
})


//4 
const newImg = document.querySelector('.intro img');
newImg.addEventListener('dblclick', () => {
    newImg.src =" https://images.unsplash.com/photo-1493398961404-f06dd2f81108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80";
})


//5 
const resizeImg = document.querySelector('.inverse-content .img-content img');
window.addEventListener('resize', () => {
    resizeImg.src = 'https://images.unsplash.com/photo-1500917832468-298fa6292e2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
})

//6 

const body = document.querySelector('body');
body.addEventListener('keydown',() => {
body.style.backgroundColor="blue";

})

//7 

const navigation = document.querySelector('.main-navigation');
navigation.addEventListener('contexmenu', (event) => {
    navigation.style.border = '5px solid orange';
})


//8 
const footer = document.querySelector('.footer p');
footer.addEventListener('mousemove',() => {
footer.style.color ='hotpink';

})


//9 
 document.querySelectorAll('.btn').forEach(el => {
    el.addEventListener('click', () => {
        el.style.transform = "rotate(180deg)";
        
    })
})


//10 

 document.querySelectorAll('.destination h4').forEach(ele => {
     ele.addEventListener('mouseout', ()=> {
         ele.style.fontSize="5rem";
         ele.style.color="yellow";
     })
 })


 11 
 
 window.addEventListener('scroll', (event) => {
     alert ('Where are you going ? ')
    
    
 })

 

//12 
navigation.addEventListener('mouseover', (element)=> {
    navigation.style.backgroundColor="green";
    
    
})

//13 Stop Navs using preventDefault

const navLinks =
document.querySelectorAll('.nav .nav-link');

navLinks.forEach(el => {
    el.addEventListener('click', (event)=> {
        event.preventDefault();
    })
})


//13 or Looping ...
// const stopNav =
// document.querySelectorAll('.nav-link');
// for (let i = 0; i<= 3; i++)
// stopNav[i].addEventListener('click', (event)=> {
//     event.preventDefault();
// })


