const initialPrice = document.querySelector("#initial-prz");
const stockQuantity = document.querySelector("#quantity");
const currentPrice= document.querySelector("#current-prz");
const submitBtn = document.querySelector("#btn");
const outputBox = document.querySelector("#output");


function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
      var loss = (initial - current) * quantity;
      var lossPercentage = (loss / initial) * 100;
      outputBox.innerText = `Hey the loss is: ${loss} and the percentage is" ${lossPercentage}%`;
    }else if(current > initial){
          var profit = (current - initial) * quantity;
      var profitPercentage = (profit / initial) * 100;
      outputBox.innerText = `Hey the Profit is: ${profit} and the percentage is" ${profitPercentage}%`;
    
    }else{
      outputBox. innerText="Hey no pain no gain and no gain no pain!!";
    }
  
    }
  
  
  function submitHandler(){
    // console.log("hello");
    var ip = (initialPrice.value);
    var qty = (stockQuantity.value);
    var curr = (currentPrice.value);
  
    calculateProfitAndLoss(ip, qty, curr);
  }
  
  
  
  
  
  
  submitBtn.addEventListener('click',  submitHandler);