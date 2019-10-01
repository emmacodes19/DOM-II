// Your code goes here


//1 
const mapImage = document.querySelector('.img-content');
console.log(mapImage);

mapImage.addEventListener('mouseenter', () => {
    mapImage.style.transform = 'scale(3)';
    mapImage.style.transition = 'all 0.3s';
});

//2
mapImage.addEventListener('mouseleave', () => {
    mapImage.style.transform = 'scale(1)';
    mapImage.style.transition = 'all 0.3s';
})

//3  with Stop Propagation
document.querySelectorAll('.nav-link').forEach(element=> {
    element.addEventListener('click', (event) => {
        element.style.color = 'blue';
        event.stopPropagation();
    })
})


//4 
const newImg = document.querySelector('.intro img');
newImg.addEventListener('dblclick', () => {
    newImg.src =" https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80";
})


//5 
const resizeImg = document.querySelector('.inverse-content .img-content img');
window.addEventListener('resize', () => {
    resizeImg.src = 'https://images.unsplash.com/photo-1494870363241-b5225be3dada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
})

//6 

const body = document.querySelector('body');
body.addEventListener('keydown',() => {
body.style.backgroundColor="blue";


})

//7 

const navigation = document.querySelector('.main-navigation');
navigation.addEventListener('click', (event) => {
    navigation.style.border = '5px solid orange';
   
})


//8 
const footer = document.querySelector('.footer p');
footer.addEventListener('mousemove',() => {
footer.style.color ='hotpink';
alert('See you soon');

})


//9 
 document.querySelectorAll('.btn').forEach(el => {
    el.addEventListener('click', () => {
        el.style.transform = "rotate(180deg)";
        
    })
})




//10 with Stop Propagation

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


 




 //11 
 
 
     const lastBoat = document.querySelector('.content-destination img');
     lastBoat.addEventListener('wheel', () => {
         lastBoat.style.transform='scale(0.2)'
     })
     
    
    
 //12 

 window.addEventListener('load', (event) => {
    alert ('Welcome friend');
   
   
})

//13

window.addEventListener('resize', (event)=> {
    alert ('You are now in a Responsive Layout')
    
})

//14

window.addEventListener('scroll', () => {
   const change =  document.querySelector('.intro');
   change.style.backgroundColor="purple";

})

//15

window.addEventListener('scroll', () => {
    const change =  document.querySelector('.text-content');
    change.style.backgroundColor="red";
 
 })

 
 

//16
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


