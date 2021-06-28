canvas = document.getElementById("myCanvas");

pen = canvas.getContext("2d");

mouse_event = "";

var last_pos_x, last_pos_y;

 width_of_line = 2;

radi = 20

colour = "red";

canvas.addEventListener("mousedown", whenMouseDown);


function whenMouseDown(e) {

    mouse_event = "mousedown";

    console.log(mouse_event);

    colour = document.getElementById("color").value;

    width_of_line = document.getElementById("width").value;

    radi = document.getElementById("radius_1").value;


}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {

    mouse_event = "mouseup";

    console.log(mouse_event);


}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

    mouse_event = "mouseleave";

    console.log(mouse_event);

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    current_pos_mouse_x = e.clientX - canvas.offsetLeft;

    current_pos_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown"){

        pen.beginPath();

        pen.strokeStyle = colour;

        pen.lineWidth = width_of_line;

        pen.arc(current_pos_mouse_x,current_pos_mouse_y,radi,0,2 * Math.PI)

        pen.stroke();

    }

    last_pos_x = current_pos_mouse_x;

    last_pos_y = current_pos_mouse_y;

}

function clearArea(){
    pen.clearRect(0,0,canvas.width,canvas.height);
}