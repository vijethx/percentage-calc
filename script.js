const x = document.getElementById('x');
const y = document.getElementById('y');
const result = document.getElementById('result');
const form = document.getElementById('form');


form.addEventListener('submit',function(e){
    if(!x.value || !y.value){
        alert("Enter values in the field");
    } else {
        let val1 = parseFloat(x.value);
        let val2 = parseFloat(y.value);

        let res = val1/val2*100;
        result.innerText = "Answer: "+res+" %";
        e.preventDefault();
    }
    

});