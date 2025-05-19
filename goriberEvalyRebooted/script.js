console.log('connected');
let serialCount = 1;
// step -1
document.getElementById('btn-submit').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('submit btn clicked');

    // step-2
    const inputElement = document.querySelector('#review-textarea');
    console.log(inputElement);
    const inputValue = inputElement.value;
    console.log(inputValue);

    // step-3
    const div = document.querySelector('#review-container');
    console.log(div);

    // step-4
    const para = document.createElement('p');
    console.log(para);
    // para.innerText = inputValue;
    para.innerText = serialCount + " . " + inputValue;

    // step-5
    div.appendChild(para);

    // step-6
    serialCount++;
    document.getElementById('review-textarea').value = "";
})