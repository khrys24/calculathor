let screen = document.getElementById ('screen');
let buttons = Array.from( document.getElementsByClassName('btn') );


buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'Clear':
                screen.innerText = ' ';
                break;
            case 'CE':
                screen.innerText = screen.innerText.slice(0, -1);
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = 'Syntax Error!';
                }
                break;
            default:
                screen.innerText += e.target.innerText;
            }
        });
});

        // const btn_0 = document.querySelector('#ze');
        // const btn_1 = document.querySelector('#on');
        // const btn_2 = document.querySelector('#tw');
        // const btn_3 = document.querySelector('#th');
        // const btn_4 = document.querySelector('#fo');
        // const btn_5 = document.querySelector('#fi');
        // const btn_6 = document.querySelector('#si');
        // const btn_7 = document.querySelector('#se');
        // const btn_8 = document.querySelector('#ei');
        // const btn_9 = document.querySelector('#ni');
        
        // const btn_plus = document.querySelector('#add');
        // const btn_minus = document.querySelector('#minus');
        // const btn_times = document.querySelector('#times');
        // const btn_div = document.querySelector('#divide');
        // const btn_dot = document.querySelector('#dot');
        // const clear = document.querySelector('#clear');
        // const ce = document.querySelector('#ce');
        // const equals = document.querySelector('#equalsBtn');
        
        // const write_me = document.querySelector('#type');
        // const result = document.querySelector('#result');
        
        // btn_0.onclick = () => {
        //     type_to(0);
        // }
        // btn_1.onclick = () => {
        //     type_to(1);
        // }
        // btn_2.onclick = () => {
        //     type_to(2);
        // }
        // btn_3.onclick = () => {
        //     type_to(3);
        // }
        // btn_4.onclick = () => {
        //     type_to(4);
        // }
        // btn_5.onclick = () => {
        //     type_to(5);
        // }
        // btn_6.onclick = () => {
        //     type_to(6);
        // }
        // btn_7.onclick = () => {
        //     type_to(7);
        // }
        // btn_8.onclick = () => {
        //     type_to(8);
        // }
        // btn_9.onclick = () => {
        //     type_to(9);
        // }
        // btn_plus.onclick = () => {
        //     type_to("+");
        // }
        // btn_minus.onclick = () => {
        //     type_to("-");
        // }
        // btn_times.onclick = () => {
        //     type_to("x");
        // }
        // btn_div.onclick = () => {
        //     type_to("/");
        // }
        // btn_dot.onclick = () => {
        //     type_to(".");
        // }
        // equals.onclick = () => {
        //     type_to("=");
        // }
        // ce.onclick = () => {
        //     type_to(ce);
        // }
        // clear.onclick = () => {
        //     type_to(clear);
        // }
        
        
        // document.onkeyup = e => {
        //     if(e.key == "0" || e.key == "Num0"){
        //         type_to(0);
        //     } else if (e.key == "1" || e.key == "Num1"){
        //         type_to(1);
        //     } else if (e.key == "2" || e.key == "Num2"){
        //         type_to(2);
        //     } else if (e.key == "3" || e.key == "Num3"){
        //         type_to(3);
        //     } else if (e.key == "4" || e.key == "Num4"){
        //         type_to(4);
        //     } else if (e.key == "5" || e.key == "Num5"){
        //         type_to(5);
        //     } else if (e.key == "6" || e.key == "Num6"){
        //         type_to(6);
        //     } else if (e.key == "7" || e.key == "Num7"){
        //         type_to(7);
        //     } else if (e.key == "8" || e.key == "Num8"){
        //         type_to(8);
        //     } else if (e.key == "9" || e.key == "Num9"){
        //         type_to(9);
        //     } else if (e.key == "+" || e.key == "Num+"){
        //         type_to("+");
        //     } else if (e.key == "-" || e.key == "Num-"){
        //         type_to("-");
        //     } else if (e.key == "/" || e.key == "Num/"){
        //         type_to("/");
        //     } else if (e.key == "*" || e.key == "Num*"){
        //         type_to("x");
        //     } else if (e.key == "." || e.key == "Num."){
        //         type_to(".");
        //     } else if (e.key == "Enter" || e.key == "Numenter="){
        //         calculate();
        //     }
        // }
        
        // var type_to = text => {
        //     if(write_me.innerText == "") {
        //         write_me.innerText == text;
        //     } else if (write_me.innerText.length <= 23){
        //         write_me.innerText = write_me.innerText + text;
        //     } else {
        //         alert("Digit limit reached");
        //     }
        // }
