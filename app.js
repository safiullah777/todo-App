
var text=document.getElementById('search');
var b=document.getElementById('sec');
var counter=0;


function add(){

if(!text.value==""){
    counter++;
    var c=document.createElement('div');
    b.appendChild(c);
    b.lastElementChild.setAttribute('id','record');
    b.lastElementChild.innerHTML=text.value;
    var rec=document.getElementById('record');
    var del=document.createElement('button');
    b.lastElementChild.appendChild(del);

    b.lastElementChild.lastElementChild.innerHTML="delete"
    var c=b.lastElementChild;
    c.lastElementChild.setAttribute('id','dlt');
    c.lastElementChild.setAttribute('class','btn btn-danger');
    c.lastElementChild.setAttribute("onclick","deletes(this)");

    document.getElementById('count').innerHTML="There are "+counter+" todos."
    text.value="";

}
else{
    alert("please enter todo.")

}

    
}
function deleteAll(){
    counter=0;
    // b.innerHTML="";
    document.getElementById('count').innerHTML=`There are ${counter} todos.`
    


}
function deletes(e){
    counter--;
    document.getElementById('count').innerHTML="There are "+counter+" todos."

    e.parentNode.remove();

    
}
// console.log(b.childNodes[1])