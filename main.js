let dat = document.getElementById('dat')
let pnum = document.getElementById('pnum');
let wnum = document.getElementById('wnum');
let hnum = document.getElementById('hnum');
let title1 = document.getElementById('title1');
let title2 = document.getElementById('title2');
let title3 = document.getElementById('title3');
let title4 = document.getElementById('title4');
let title5 = document.getElementById('title5');
let title6 = document.getElementById('title6');
let title7 = document.getElementById('title7');
let title8 = document.getElementById('title8');
let title9 = document.getElementById('title9');
let title10 = document.getElementById('title10');
let submit = document.getElementById('submit');

// create case
let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}
submit.onclick = function(){
    let newPro = {
date:date.Value,
pnum:pnum.Value,
wnum:wnum.Value,
hnum:hnum.Value,
title1:title1.Value,
title3:title3.Value,
title4:title4.Value,
title5:title5.Value,
title6:title6.Value,
title7:title7.Value,
title8:title8.Value,
title9:title9.Value,
title10:title10.Value,
}
dataPro.push(newPro);
localStorage.setItem('product',    JSON.stringify(dataPro)   )
console.log(dataPro)
}


// save localstorge
// clear inputes
// read
// delete
// update
// search
// clea