canvas = document.getElementById("canvas");
ctx= canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.arc (200 , 200 , 50, 0, 2*Math.PI);
ctx.stroke();

canvas2 = document.getElementById("canvas");
ctx= canvas.getContext("2d");
color2 = "yellow";
ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 10;
ctx.arc (270 , 250 , 50, 0, 2*Math.PI);
ctx.stroke();

canvas3 = document.getElementById("canvas");
ctx= canvas.getContext("2d");
color3 = "black";
ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 10;
ctx.arc (340 , 200 , 50, 0, 2*Math.PI);
ctx.stroke();

canvas4 = document.getElementById("canvas");
ctx= canvas.getContext("2d");
color4 = "green";
ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = 10;
ctx.arc (410 , 250 , 50, 0, 2*Math.PI);
ctx.stroke();

canvas5 = document.getElementById("canvas");
ctx= canvas.getContext("2d");
color5 = "red";
ctx.beginPath();
ctx.strokeStyle = color5;
ctx.lineWidth = 10;
ctx.arc (480 , 200 , 50, 0, 2*Math.PI);
ctx.stroke();