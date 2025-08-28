
const validPin = 1234

document.getElementById("add-money-btn").addEventListener("click",function(){

   const bank =  document.getElementById("bank").value
   const accountNumber =  document.getElementById("account-number").value
   const amount = parseInt(document.getElementById("add-amount").value)
   const pin = parseInt(document.getElementById("add-pin").value)

   const avaiableBalance = parseInt(document.getElementById("available-balance").innerText)

   if(accountNumber.length<11 || accountNumber.length>11){
    alert("Please Provide Valid Account Number")
    return;
   }

   if(pin !== validPin){
      alert("Please Provide Valid Pin Number")
      return;
   }

   const totalNewAvaiableBalance = amount+avaiableBalance

   document.getElementById("available-balance").innerText = totalNewAvaiableBalance
})