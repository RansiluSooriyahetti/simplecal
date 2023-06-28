//5th row
const AC_btn = document.getElementById("reset");
const C_btn = document.getElementById("remove");
const module_btn = document.getElementById("num-module");
const mul_btn = document.getElementById("num-multiply");
//4th row
const seven_btn = document.getElementById('num-seven');
const eight_btn = document.getElementById('num-eight');
const nine_btn = document.getElementById('num-nine');
const divide_btn = document.getElementById('num-divide');

//3rd row
const four_btn = document.getElementById("num-four");
const five_btn = document.getElementById('num-five');
const six_btn = document.getElementById('num-six');
const minus_btn = document.getElementById('num-minus');

//2nd row
const one_btn = document.getElementById('num-one');
const two_btn = document.getElementById('num-two');
const three_btn = document.getElementById('num-three');
const plus_btn = document.getElementById('num-plus');
//1st row
const zero_btn = document.getElementById('num-zero');
const dot_btn = document.getElementById('num-dot');
const sign_btn = document.getElementById('num-sign');
const equal_btn = document.getElementById('num-equal');


const input_display = document.getElementById('cal-input');
const result_display = document.getElementById('value-display');



AC_btn.addEventListener('click',()=>{input_display.value ='' ; sum=0;})
C_btn.addEventListener('click',()=>{input_display.value =1 ;})
module_btn.addEventListener('click',()=>{input_display.value =1 ;})
mul_btn.addEventListener('click',()=>{display.value =1 ;})

seven_btn.addEventListener('click',()=>{input_display.value+=7})
eight_btn.addEventListener('click',()=>{input_display.value +=8 ;})
nine_btn.addEventListener('click',()=>{input_display.value +=9 ;})
divide_btn.addEventListener('click',()=>{input_display.value +=1 ;})

four_btn.addEventListener('click',()=>{input_display.value +=4 ;})
five_btn.addEventListener('click',()=>{input_display.value +=5 ;})
six_btn.addEventListener('click',()=>{input_display.value +=6 ;})
minus_btn.addEventListener('click',minus);

one_btn.addEventListener('click',()=>{input_display.value +=1 ;})
two_btn.addEventListener('click',()=>{input_display.value +=2 ;})
three_btn.addEventListener('click',()=>{input_display.value +=3 ;})
plus_btn.addEventListener('click',add);

zero_btn.addEventListener('click',()=>{input_display.value =0 ;})
dot_btn.addEventListener('click',()=>{input_display.value =1 ;})
sign_btn.addEventListener('click',()=>{input_display.value =1 ;})
equal_btn.addEventListener('click',()=>{input_display.value =1 ;})


