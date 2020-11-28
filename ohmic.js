function myFunction(){
    var R1 = document.getElementById("R1").value;
    var R2 = document.getElementById("R2").value;
    var R3 = document.getElementById("R3").value;
    var R4 = document.getElementById("R4").value;
    var V = document.getElementById("V").value;
    var I2 = (V*R3 )/(R1*R2 + R1*R3 + R2*R3);
    var I3 = (V*R2 )/(R1*R2 + R1*R3 + R2*R3);
    var I = I2 + I3;
    var text = I +" "+I2 +" "+ I3;
    document.getElementById("demo").innerHTML = text;
}

