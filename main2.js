player_1 = localStorage.getItem("player_1");
player_2 = localStorage.getItem("player_2");



player1_score = 0;
player2_score = 0;

function send(){
    document.getElementById("math").innerHTML;
    num_1 = document.getElementById("number1_input").value;
    num_2 = document.getElementById("number2_input").value;
    actual_ans = parseInt(num_1) + parseInt(num_2);

    question_number = "<h4 id = 'font_designing'>" + num_1 + "+" + num_2 + "</h4>";
    input = '<br> Answer : <input type="text" id="input_box" >';
    check_btn = '<br> <br> <button class="btn btn-success" onclick="check()" id = "btn_design"> Check </button> ';

    final_output = question_number + input + check_btn;
    document.getElementById("math").innerHTML = final_output;

    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}

question_turn = 'player 1';
answer_turn = 'player 2';

function check(){
    get_ans = document.getElementById('input_box').value;

    if(get_ans == actual_ans){

        if(answer_turn == 'player 1'){
            player1_score = player1_score + 1;
            document.getElementById('player1_score').innerHTML = '<h2>' + player_1 + ' : ' + player1_score + '</h2>';
            console.log(player1_score);
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById('player2_score').innerHTML = '<h2>' + player_2 + ' : ' + player2_score + '</h2>';
            console.log(player2_score);
        }
    }

    if(question_turn == 'player 1'){
        question_turn = 'player 2';
        document.getElementById('player_question_label').innerHTML = '<h2> Question Turn : ' + player_2 + '</h2>';
    }
    else{
        question_turn = 'player 1';
        document.getElementById('player_question_label').innerHTML = '<h2> Question Turn : ' + player_1 + '</h2>';
    }

    if(answer_turn == 'player 1'){
        answer_turn = 'player 2';
        document.getElementById('player_ans_label').innerHTML = '<h2> Answer Turn : ' + player_2 + '</h2>';
    }
    else{
        answer_turn = 'player 1';
        document.getElementById('player_ans_label').innerHTML = '<h2> Answer Turn : ' + player_1 + '</h2>';
    }
    document.getElementById("math").innerHTML = "";
}