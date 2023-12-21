function ClearDisplay(){
    document.getElementById('display').value='';
}
function Display(value){
    document.getElementById('display').value+=value;
}
function DisplayResult(){
    var expression = document.getElementById('display').value;
    try{
        document.getElementById('display').value = eval(expression);
    }
    catch(error){
        document.getElementById('display').value='error';
    }
}