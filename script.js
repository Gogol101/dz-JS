var box1 = document.querySelectorAll('.box1');
var box2 = document.querySelectorAll('.box2');
var allBox = document.querySelectorAll('.box1','.box2');

for (var i = 0; i < box1.length; i++){
    box1[i].style.width = '50px';
    box1[i].style.height = '50px';
    box1[i].style.backgroundColor = 'red';
}
for (var i = 0; i < box2.length; i++){
    box2[i].style.width = '100px';
    box2[i].style.height = '100px';
    box2[i].style.backgroundColor = 'blue';
}
for (var i = 0; i < allBox.length; i++) {
    if(i%2){
        allBox[i].style.border = '3px','black'
    }
}

