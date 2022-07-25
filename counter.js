let increase = document.getElementById("btn-add");
let decrease = document.getElementById("btn-minus");
let reset = document.getElementById("btn-reset");
let number = document.getElementById("number");
let count = 0;
let oneByOneCount = document.getElementById("oneByOne-btn");
let customCountBtn = document.getElementById("custom-btn");

customCountBtn.addEventListener("click", function(e){
  e.preventDefault();
  let input = document.getElementById("customCountInput");
  let inputValue = input.value;
  console.log(inputValue);
});


if(inputValue != undefined){
  function increaseNumber(){
  count += Number(inputValue);
  number.innerHTML = count;
  }
  function resetNumber(){
    count = 0;
    number.innerHTML = count;
  }
  function decreaseNumber(){
    count -= Number(inputValue);
    number.innerHTML = count;
  }
}else{
  function increaseNumber(){
    count++;
    number.innerHTML = count;
  }
  
  function resetNumber(){
    count = 0;
    number.innerHTML = count;
  }
  
  function decreaseNumber(){
    count--;
    number.innerHTML = count;
  }
}


/*
}
function increaseNumber(){
  count++;
  number.innerHTML = count;
}

function resetNumber(){
  count = 0;
  number.innerHTML = count;
}

function decreaseNumber(){
  count--;
  number.innerHTML = count;
}
*/

