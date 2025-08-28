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

// ----------------- call button--------

let callBtns = document.getElementsByClassName('call-btn');
// console.log(callBtns); 

for(let callBtn of callBtns){
    // console.log(callBtn);

    callBtn.addEventListener('click', function(){

        let serviceName = callBtn.parentNode.parentNode.children[1].children[0].innerText;
        // console.log(serviceName);

         let serviceNumber = callBtn.parentNode.parentNode.children[3].innerText;
        //  console.log(serviceNumber);
        alert(`${serviceName}  ${serviceNumber}`)


        // --------coin less than 20 ------

        let coinNav = document.getElementById('coin-nav').innerText;
        // console.log(coinNav);
        let coinNavNumber = Number(coinNav)
        // console.log(coinNavNumber);
        if(coinNavNumber < 20){

            alert('Please recharge your Coin');
            return

        }else{
            document.getElementById('coin-nav').innerText = coinNavNumber - 20
        }


        // ---------- call history-----------

        let time = new Date().toLocaleTimeString();

        let callHistoryUl = document.getElementById('call-history-ul');
        let callHistoryLi =document.createElement('li');
        callHistoryLi.innerHTML = `
        <li class="flex justify-between "><span>${serviceName}</span><span>${time}</span></li> <br>
        <li class="shadow-lg">${serviceNumber}</li>
        `;
        callHistoryUl.append(callHistoryLi)
      
    })
    

}



// claer button  --------------

document.getElementById('clear-btn ').addEventListener('click', function(){
    let callHistoryUl = document.getElementById('call-history-ul');
    callHistoryUl.innerHTML = "";
})




// copyyyyyyyy button ---------------

// let copyBtns = document.getElementsByClassName('copy-btn');
// // console.log(copyBtns);

// for(let copyBtn of copyBtns){
//     // console.log(copyBtn);
//     copyBtn.addEventListener('click', function(){
//         alert('Copy hotline number')
//         let hotLineNumber = copyBtn.parentNode.parentNode.children[3].innerText;
        
//         // console.log(hotLineNumber);
//         let copyNav = document.getElementById('copy-nav').innerText;
//         let copyNavNumber = Number(copyNav);
//         document.getElementById('copy-nav').innerText = copyNavNumber + 1;
        
//     })
// }




let copyBtns = document.getElementsByClassName('copy-btn');

for (let copyBtn of copyBtns) {
  copyBtn.addEventListener('click', function () {
    // get the hotline number (4th child in your card div)
    let hotLineNumber = copyBtn.parentNode.parentNode.children[3].innerText;
    
    // copy to clipboard
    navigator.clipboard.writeText(hotLineNumber).then(() => {
      alert('Copied: ' + hotLineNumber);

      // update copy counter
      let copyNav = document.getElementById('copy-nav').innerText;
      let copyNavNumber = Number(copyNav);
      document.getElementById('copy-nav').innerText = copyNavNumber + 1;
    })
  });
}




