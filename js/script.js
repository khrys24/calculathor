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
