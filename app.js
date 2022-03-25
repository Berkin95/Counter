
// set initial count
let count = 0;

// select valua and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('reset')) {
            count = 0;
        }
        else {
            count++;
        }
        if(count > 0) {
            value.style.color = "#146356";
        }
        if(count < 0){
            value.style.color = "#9B0000";
        }
        if(count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    });
});