console.log('connected')
var controls  = document.querySelectorAll('.barsAdjustment input')
// console.log(controls)

function handleUpdate(){
    // console.log(this.value)
    // console.log(this.dataset.sizing)
    var suffix =  this.dataset.sizing || ''
    // console.log(suffix)
    // console.log(this.name)
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}

//change event at control variable
//1: itterting on control, 
//2: passing control as an argument in forEach
//3: event listner on argunment i.e 'control'
//4: change event
//5: handleUnpdate fn is passed in eventListner 
controls.forEach(controls => controls.addEventListener('change', handleUpdate)); //doesn't working on mouse move, so changing it 
controls.forEach(controls => controls.addEventListener('mousemove', handleUpdate));  