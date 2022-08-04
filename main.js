canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")

color = ["blue" , "black" , "red" , "yellow" , "green"]

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150 , 143 , 360 , 200);
ctx.stroke();





ctx.beginPath();
ctx.strokeStyle = color[0];
ctx.lineWidth = 3;
ctx.arc(250 , 210 , 30 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color[1];
ctx.lineWidth = 3;
ctx.arc(325 , 210 , 30 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color[2];
ctx.lineWidth = 3;
ctx.arc(400 , 210 , 30 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color[3];
ctx.lineWidth = 3;
ctx.arc(287.5 , 240 , 30 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color[4];
ctx.lineWidth = 3;
ctx.arc(362.5 , 240 , 30 , 0 , 2 * Math.PI);
ctx.stroke();