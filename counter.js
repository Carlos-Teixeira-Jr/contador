let increase = document.getElementById("btn-add");
let decrease = document.getElementById("btn-minus");
let reset = document.getElementById("btn-reset");
let number = document.getElementById("number");
let count = 0;
let oneByOneCount = document.getElementById("oneByOne-btn");
let customCountBtn = document.getElementById("custom-btn");
let inputValue = 1;
let customInputValue;

customCountBtn.addEventListener("click", function(e){
  e.preventDefault();
  customInputValue = document.getElementById("customCountInput");
  inputValue = parseInt(customInputValue.value);
  console.log(typeof inputValue)
});

oneByOneCount.addEventListener("click", function(){
  inputValue = 1;
})

function increaseNumber(){
  count += inputValue;
  number.innerHTML = count;
}

function resetNumber(){
  count = 0;
  number.innerHTML = count;
}

function decreaseNumber(){
  count -= inputValue;
  number.innerHTML = count;
}