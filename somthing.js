const nearMe = document.getElementById('nearMe');
const expOne = document.getElementById('expOne');
const expTwo = document.getElementById('expTwo');

expOne.addEventListener('click' , function(e){
    if(nearMe.style.display == 'flex'){
        nearMe.style.display ='none';
    }else{
        nearMe.style.display = 'flex';
    } 
})
expTwo.addEventListener('click' , function(e){
    if(nearMeTwo.style.display == 'flex'){
        nearMeTwo.style.display ='none';
    }else{
        nearMeTwo.style.display = 'flex';
    } 
})

