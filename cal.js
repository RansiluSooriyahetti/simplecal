let sum = 0;

const add = ()=>{
    display('+');
   sum += parseInt(input_display.value);
   input_display.value='';
   console.log(sum);
};


const minus = ()=>{
    display('-');
    sum -= parseInt(input_display.value);
    input_display.value='';
};

const display = (a)=>{
    
    result_display.innerHTML= `${sum} ${a} ${input_display.value}`; 
}