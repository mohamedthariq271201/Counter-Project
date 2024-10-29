let count=0;
function updatecounter() {
    document.getElementById("counter").textContent=count;
    
}
function increase() {
    count++;
    updatecounter();
    
}
function decrease() {
    count--;
    updatecounter();
    
}
function reset() {
    count=0;
    updatecounter();
}
