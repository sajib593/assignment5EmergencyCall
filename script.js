console.log('thsi is script');

// -------------------love count increase by 1-------

let loveCards = document.getElementsByClassName('love-card');
// console.log(loveCard);

for(let loveCard of loveCards){

    // console.log(loveCard);

    loveCard.addEventListener('click', function(){
        // console.log(loveCard);

        let loveNav = document.getElementById('love-nav').innerText;
        // console.log(loveNav);
        let loveQuantity = Number(loveNav) + 1;
        document.getElementById('love-nav').innerText = loveQuantity

    })

}


