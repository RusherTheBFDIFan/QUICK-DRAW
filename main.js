array1 = ['pen', 'paper', 'book', 'bottle'];
random_no = Math.floor((Math.random()*array1.length)+1);
element_of_array = array1(random_no);
document.getElementById("sketch").innerHTML = element_of_array;
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function updateCanvas(){
    background("white");
}

function setup(){
    canvas = createCanvas(280, 280, 0, 0);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
    check_sketch();
    if(drawn_sketch = document.getElementById("sketch")){
        answer_holder = "set";
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}

function check_sketch(){
    timer++;
    document.getElementById("timer").innerHTML = "Timer: " + timer;
    console.log(timer)
    if(timer = 400){
        timer_counter = 0;
        timer_check = "completed";
    }
    if((answer_holder = "set") || (timer = 400)){
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}
