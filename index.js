let listitems=document.querySelectorAll('.list-group-item');
// console.log("hello world");
// console.log(listitems);
listitems[2].style.backgroundColor='green';
listitems.forEach((items)=>{
    items.style.fontWeight='bold';
})