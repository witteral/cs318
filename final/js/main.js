var tabA = document.getElementById('a');
var tabB = document.getElementById('b');
var tabC = document.getElementById('c');
var tabD = document.getElementById('d');
var tabE = document.getElementById('e');
var panel1 = document.getElementById('panel1');
var panel2 = document.getElementById('panel2');
var panel3 = document.getElementById('panel3');
var panel4 = document.getElementById('panel4');
var panel5 = document.getElementById('panel5');

tabA.onclick = function() {
    panel1.style.display = 'block';
    panel2.style.display = 'none';
    panel3.style.display = 'none';
    panel4.style.display = 'none';
    panel5.style.display = 'none';
}

tabB.onclick = function() {
    panel1.style.display = 'none';
    panel2.style.display = 'block';
    panel3.style.display = 'none';
    panel4.style.display = 'none';
    panel5.style.display = 'none';
}

tabC.onclick = function() {
    panel1.style.display = 'none';
    panel2.style.display = 'none';
    panel3.style.display = 'block';
    panel4.style.display = 'none';
    panel5.style.display = 'none';
}

tabD.onclick = function() {
    panel1.style.display = 'none';
    panel2.style.display = 'none';
    panel3.style.display = 'none';
    panel4.style.display = 'block';
    panel5.style.display = 'none';
}

tabE.onclick = function() {
    panel1.style.display = 'none';
    panel2.style.display = 'none';
    panel3.style.display = 'none';
    panel4.style.display = 'none';
    panel5.style.display = 'block';
}