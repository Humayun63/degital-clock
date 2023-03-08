const setText = (id, value) =>{
     document.getElementById(id).innerHTML = value;
}
const timeShow = () =>{
    const dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    const session = document.getElementById('session');
    if(hours > 11){
        session.innerHTML = 'PM';
    }
    if(hours > 12){
        hours = hours - 12;
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    setText('hours', hours);
    setText('meniutes', minutes);
    setText('seconds', seconds);
}
setInterval(timeShow, 10);