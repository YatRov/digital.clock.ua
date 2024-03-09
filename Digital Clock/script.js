let hrs = document.getElementById("hrs");

let min = document.getElementById("min");

let sec = document.getElementById("sec");

setInterval(()=>{
let date = new Date();
//let todayGMT = new Date(date.getTime()+(60*60*1000)) //Ukrainian time (GMT+0100)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds= date.getSeconds();


    hrs.innerHTML = hours < 10 ? '0' + hours : hours;
    min.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    sec.innerHTML = seconds< 10 ? '0' + seconds: seconds;
},1000);