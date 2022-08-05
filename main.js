
let tbody = document.getElementById('tbody');
let dnum = document.getElementById('dnum');
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

let mood = 'create';
let temp;

// create case

let dataPro;
if(localStorage.product != null){
	dataPro = JSON.parse(localStorage.product)
} else {
	dataPro = [];
	}
		

submit.onclick = function(){
	let newPro = {
		dnum:dnum.Value,
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

	
	if(mood === 'create'){
		dataPro.push(newPro);
	}else{
		dataPro[ temp ] = newPro;
		mood = 'create'
		submit.innerHTML = 'Create'
		 
	}
	
	//// save
	localStorage.setItem('product',   JSON.stringify(dataPro)    )

	clearData()
	showData()


}


// clear inputes

function clearData(){
	dnum.Value = '';
	pnum.Value = '';
	wnum.Value = '';
	hnum.Value = '';
	title1.Value = '';
	title2.Value = '';
	title3.Value = '';
	title4.Value = '';
	title5.Value = '';
	title6.Value = '';
	title7.Value = '';
	title8.Value = '';
	title9.Value = '';
	title10.Value = '';
}

// read data
function showData() 
{
	let table = '';
	for (let i = 1; i < dataPro.length;i++){
		table += `
    <tr>
    <td>${i}</td>
    <td>${dataPro[i].dnum}</td>
    <td>${dataPro[i].wnum}</td>
    <td>${dataPro[i].hnum}</td>
    <td>${dataPro[i].wnum}</td>
    <td>${dataPro[i].title1}</td>
    <td>${dataPro[i].title2}</td>
    <td>${dataPro[i].title3}</td>
    <td>${dataPro[i].title4}</td>
    <td>${dataPro[i].title5}</td>
    <td>${dataPro[i].title6}</td>
    <td>${dataPro[i].title7}</td>
    <td>${dataPro[i].title8}</td>
    <td>${dataPro[i].title9}</td>
    <td>${dataPro[i].title10}</td>
    <td>
	<button onclick="updateData(${i})" id="update">update</button>
	</td>
    <td>
	<button onclick="deleteData(${i})" id="delete">delete</button>
	</td>
</tr>
`
	}


	document.getElementById('tbody').innerHTML = table;
	let btnDelete = document.getElementById('deleteAll');
	if(dataPro.length > 0){
		btnDelete.innerHTML = `
		<button onclick="deleteAll()" id="delete">حذف</button>
		`
	}else{
		btnDelete.innerHTML = '';
	}
}
	showData()




// delete
function deleteData(i)
{
	dataPro.splice(i,1);
	localStorage.product = JSON.stringify(dataPro);
	showData()

}

function deleteAll(){
localStorage.clear()
dataPro.splice(0)
showData()

}
// update

function updateData(i){
	dnum.Value = dataPro[i].dnum;
	pnum.Value = dataPro[i].pnum;
	hnum.Value = dataPro[i].hnum;
	wnum.Value = dataPro[i].wnum;
	title1.Value = dataPro[i].title1;
	title2.Value = dataPro[i].title2;
	title3.Value = dataPro[i].title3;
	title4.Value = dataPro[i].title4;
	title5.Value = dataPro[i].title5;
	title6.Value = dataPro[i].title6;
	title7.Value = dataPro[i].title7;
	title8.Value = dataPro[i].title8;
	title9.Value = dataPro[i].title9;
	title10.Value = dataPro[i].title10;
	submit.innerHTML = 'Update';
	mood = 'update';
	temp = i;
	scroll({ 
		top:0,
		behavior: 'smooth',
	})
	



}
// search



// clear

  