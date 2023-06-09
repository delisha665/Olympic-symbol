canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Blue";
ctx.lineWidth=4;
ctx.arc(220,220,50,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Black";
ctx.lineWidth=4;
ctx.arc(335,220,50,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Red";
ctx.lineWidth=4;
ctx.arc(450,220,50,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Yellow";
ctx.lineWidth=4;
ctx.arc(280,270,50,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Green";
ctx.lineWidth=4;
ctx.arc(395,270,50,0,Math.PI*2);
ctx.stroke();