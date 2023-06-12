function appendCharacter(element){
    document.getElementById('display').value += element;
    
}
function clearItem(){
    document.getElementById('display').value = " ";
}

function sliceItem(){
    document.getElementById('display').value = display.value.slice(0, -1);
};


document.getElementById("generateBtn").addEventListener('click', function(){
    let pin = (Math.random() * 9000 + 1000);
    let generatePin = Math.round(pin);
    document.getElementById('generateDisplay').value = generatePin;
    
});

document.getElementById('pinMatch').style.display = 'none';
document.getElementById('pinWrang').style.display = 'none';

document.getElementById('submitBtn').addEventListener("click", function(){
    let generateDisplayOutPut = document.getElementById('generateDisplay').value;
    let typingDisplayOutPut = document.getElementById('display').value;

    if(generateDisplayOutPut == typingDisplayOutPut ){
        document.getElementById('pinMatch').style.display = 'block';
    }
    else{
        document.getElementById('pinWrang').style.display = 'block';
    }
})



