var input_text=document.querySelector('input');
var add_but=document.querySelector('button');
var todo_data=document.querySelector('.todos');
var count=0;
add_but.addEventListener('click',function(){
    var data=input_text.value
    var para=document.createElement('p');
    para.setAttribute('key',count);
    para.append(data);
    todo_data.append(para);
    input_text.value=" ";
    count+=1
    para.addEventListener('click',function(){
        para.remove()
        count-=1
    })
})