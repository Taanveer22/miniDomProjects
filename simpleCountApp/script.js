console.log('connected');

let sum = 0;

function additionClick(){
    const count = document.getElementById('count');
    // console.log(count);
    sum = sum + 1;
    // count.innerText = 'plus with zero';
    count.innerText = sum;
    console.log(count);
}

const minusBtn = document.getElementById('minus-btn');
// console.log(minusBtn);
minusBtn.addEventListener('click', function(){
    const count = document.getElementById('count');
    // console.log(count);
    sum = sum - 1;
    // count.innerText = 'minus with zero';
    count.innerText = sum;
    console.log(count);
})