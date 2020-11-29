function myQunction(){
    var R1 = document.getElementById("P1").value;
    var R2 = document.getElementById("P2").value;
    var R3 = document.getElementById("P3").value;
    var R4 = document.getElementById("P4").value;
    var R5 = document.getElementById("P5").value;
    var R6 = document.getElementById("P6").value;
    var V  = document.getElementById("X").value;
    var A = (R2+R3+R4);
    var B = (R4+R5+R6);
    var C = (R1+R2+R5);
    var D =(A*B - R4*R4);
    var text2 = (D*V)/(C*D - R2*R2*B + R2*R4*R5 - R5*R2*R4 - R5*R5*A) ;
    document.getElementById("memo").innerHTML = text2;
}
