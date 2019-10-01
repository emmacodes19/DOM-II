// Your code goes here


//1  moueenter
const mapImage = document.querySelector('.img-content');
console.log(mapImage);

mapImage.addEventListener('mouseenter', () => {
    mapImage.style.transform = 'scale(3)';
    mapImage.style.transition = 'all 0.3s';
});

//2 mouseleave
mapImage.addEventListener('mouseleave', () => {
    mapImage.style.transform = 'scale(1)';
    mapImage.style.transition = 'all 0.3s';
})

//3   click with Stop Propagation
document.querySelectorAll('.nav-link').forEach(element=> {
    element.addEventListener('click', (event) => {
        element.style.color = 'blue';
        event.stopPropagation();
    })
})


//4 dblclick 
const newImg = document.querySelector('.intro img');
newImg.addEventListener('dblclick', () => {
    newImg.src =" https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80";
})


//5 resize
const resizeImg = document.querySelector('.inverse-content .img-content img');
window.addEventListener('resize', () => {
    resizeImg.src = 'https://images.unsplash.com/photo-1494870363241-b5225be3dada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
})

//6 keydown

const body = document.querySelector('body');
body.addEventListener('keydown',() => {
body.style.backgroundColor="coral";


})

 //7 load

 window.addEventListener('load', (event) => {
    alert ('Welcome friend');
   
   
})



//8 mousemove
const footer = document.querySelector('.footer p');
footer.addEventListener('mousemove',() => {
footer.style.color ='hotpink';
alert('See you soon');

})



//9 wheel
 
 
const lastBoat = document.querySelector('.content-destination img');
lastBoat.addEventListener('wheel', () => {
    lastBoat.style.transform='scale(0.2)'
})






//10  mouseout - with Stop Propagation

 document.querySelectorAll('.destination h4').forEach(ele => {
     ele.addEventListener('mouseout', (event)=> {
         ele.style.fontSize="8rem";
         ele.style.color="yellow";
         event.stopPropagation();

     })

     
 })

 document.querySelectorAll('.destination  p').forEach(ele => {
    ele.addEventListener('mouseout', ()=> {
        ele.style.color="green";
        

        
    })

    
})

 // 11 click with Stop Propagation to child element (nav links)

const navigation = document.querySelector('.main-navigation');
navigation.addEventListener('click', (event) => {
    navigation.style.border = '5px solid orange';
   
})



 
//12 click on Button
document.querySelectorAll('.btn').forEach(el => {
    el.addEventListener('click', () => {
        el.style.transform = "rotate(180deg)";
        
    })
})



 


//13 resize

window.addEventListener('resize', (event)=> {
    alert ('You are now in a Responsive Layout')
    
})

//14 scroll

window.addEventListener('scroll', () => {
   const change =  document.querySelector('.intro');
   change.style.backgroundColor="purple";

})

//15 scroll

window.addEventListener('scroll', () => {
    const change =  document.querySelector('.text-content');
    change.style.backgroundColor="red";
 
 })

 
 

//16 mouseover
navigation.addEventListener('mouseover', (element)=> {
    navigation.style.backgroundColor="green";
    
    
})



//17 Stop Navs using preventDefault---

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


