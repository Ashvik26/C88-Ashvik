var canvas=new fabric.Canvas ("myCanvas");
player_x=10;
player_y=10;
var block_width=30;
var block_height=30;
var player_object="";
var block_object="";

function player_upload(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
top:player_y,
left:player_x
        });
        canvas.add(player_object);
    });
}


function block_upload(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
       block_object.scaleToHeight(block_height);
    block_object.set({
top:player_y,
left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    console.log(e);
    key_pressed=e.keyCode;
    if(e.shiftKey==true && key_pressed=="80"){
        block_width= block_width+10;
        block_height=block_height+10;
        console.log("block width="+block_width+"block height="+block_height);
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && key_pressed=="77"){
        block_width= block_width-10;
        block_height=block_height-10;
        console.log("block width="+block_width+"block height="+block_height);
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
    }
    if(key_pressed=="87"){
        console.log("w key is pressed");
        block_upload("wall.jpg");
    }
    if(key_pressed=="67"){
        console.log("c key is pressed");
        block_upload("cloud.jpg");
    }
    if(key_pressed=="68"){
        console.log("d key is pressed");
        block_upload("dark_green.png");
    }
    if(key_pressed=="71"){
        console.log("g key is pressed");
        block_upload("ground.png");
    }
    if(key_pressed=="76"){
        console.log("l key is pressed");
        block_upload("light_green.png");
    }
    if(key_pressed=="82"){
        console.log("r key is pressed");
        block_upload("roof.jpg");
    }
    if(key_pressed=="84"){
        console.log("t key is pressed");
        block_upload("trunk.jpg");
    }
    if(key_pressed=="85"){
        console.log("u key is pressed");
        block_upload("unique.png");
    }
    if(key_pressed=="89"){
        console.log("y key is pressed");
        block_upload("yellow_wall.png");
    }
    if(key_pressed=="38"){
        console.log("up key is pressed");
        up();
    }
    if(key_pressed=="40"){
        console.log("down key is pressed");
        down();
    }
    if(key_pressed=="37"){
        console.log("left key is pressed");
        left();
    }
    if(key_pressed=="39"){
        console.log(" rightkey is pressed");
        right();
    }
}
function up(){
    if(player_y>=0){ player_y= player_y-block_height;
        console.log("player_x="+ player_x +"player_y="+player_y);
        canvas.remove(player_object);
        player_upload();}
   
}
function down(){ 
    if(player_y<=460){ 
    player_y= player_y+block_height;
    console.log("player_x="+ player_x +"player_y="+player_y);
    canvas.remove(player_object);
    player_upload();}
    
}
function left(){ 
    if(player_x>=0){ 
    player_x= player_x-block_width;
    console.log("player_x="+ player_x +"player_y="+player_y);
    canvas.remove(player_object);
    player_upload();}
    
}
function right(){ 
    if(player_x<=750){ 
    player_x= player_x+block_width;
    console.log("player_x="+ player_x +"player_y="+player_y);
    canvas.remove(player_object);
    player_upload();}
    
}

