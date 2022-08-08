let met1 = document.getElementById("met1");
let met2 = document.getElementById("met2");
let met3 = document.getElementById("met3");
let category1 = document.getElementById("category1");
let category2 = document.getElementById("category2");
let category3 = document.getElementById("category3");
let category4 = document.getElementById("category4");
let category5 = document.getElementById("category5");
let category6 = document.getElementById("category6");
let category7 = document.getElementById("category7");
let category8 = document.getElementById("category8");
let category9 = document.getElementById("category9");
let category10 = document.getElementById("category10");
let submit = document.getElementById("submit");
let search = document.getElementById("search");
let tbody = document.getElementById("tbody");
let deleteAllBtn = document.getElementById("deleteAll");
let searchTitle = document.getElementById("searchTitle");
let searchCategory = document.getElementById("searchCategory");

let mood = "create";
let id;

// create product
let dataPro = [];

if (localStorage.product) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

submit.addEventListener("click", () => {
  if (
    met1.value &&
    met2.value &&
    met3.value &&
    category1.value
  
  ) {
    const newPro = {

      met1: met1.value,
      met2: met2.value,
      met3: met3.value,
      category1:
        category1.value.charAt(0).toUpperCase() +
        category1.value.slice(1).toLowerCase(),
      category2:
        category2.value.charAt(0).toUpperCase() +
        category2.value.slice(1).toLowerCase(),
      category3:
        category3.value.charAt(0).toUpperCase() +
        category3.value.slice(1).toLowerCase(),
      category4:
        category4.value.charAt(0).toUpperCase() +
        category4.value.slice(1).toLowerCase(),
      category5:
        category5.value.charAt(0).toUpperCase() +
        category5.value.slice(1).toLowerCase(),
      category6:
        category6.value.charAt(0).toUpperCase() +
        category6.value.slice(1).toLowerCase(),
      category7:
        category7.value.charAt(0).toUpperCase() +
        category7.value.slice(1).toLowerCase(),
      category8:
        category8.value.charAt(0).toUpperCase() +
        category8.value.slice(1).toLowerCase(),
      category9:
        category9.value.charAt(0).toUpperCase() +
        category9.value.slice(1).toLowerCase(),
      category10:
        category10.value.charAt(0).toUpperCase() +
        category10.value.slice(1).toLowerCase(),
    };

      if (mood === "create"){
          dataPro.push(newPro);
      
      } else {
        dataPro[id] = newPro;
        submit.innerHTML = "إضافة";
        mood = "create";
      }
      clearData();


    // save localstorage
    localStorage.setItem("product", JSON.stringify(dataPro));
  }

  showData();
});

// clear inputs
const clearData = () => {
  met1.value = "";
  met2.value = "";
  met3.value = "";
  category1.value = "";
  category2.value = "";
  category3.value = "";
  category4.value = "";
  category5.value = "";
  category6.value = "";
  category7.value = "";
  category8.value = "";
  category9.value = "";
  category10.value = "";
};

// read
const showData = () => {
  let row = "";

  if (dataPro.length > 0) {
    dataPro.map((t, i) => {
      row += `
      <tr>
          <td>${i + 1}</td>
          <td>${t.met1}</td>
          <td>${t.met2}</td>
          <td>${t.met3}</td>
          <td>${t.category1}</td>
          <td>${t.category2}</td>
          <td>${t.category3}</td>
          <td>${t.category4}</td>
          <td>${t.category5}</td>
          <td>${t.category6}</td>
          <td>${t.category7}</td>
          <td>${t.category8}</td>
          <td>${t.category9}</td>
          <td>${t.category10}</td>
          <td><button onClick="updateData(${i})" id="update">تحديث</button></td>
          <td><button onClick="deleteProduct(${i})" id="delete">حذف</button></td>
        </tr>
      `;
      tbody.innerHTML = row;
    });

    // Create Delete All Button
    let btn = `
          <button onClick="deleteAll()" id="deleteAllBtn">حذف الكل (${dataPro.length})</button>
    `;
    deleteAllBtn.innerHTML = btn;
  } else {
    deleteAllBtn.innerHTML = "";
    tbody.innerHTML = "";
  }


};
showData();

// delete
const deleteProduct = (i) => {
  dataPro.splice(i, 1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
};

// delete all
const deleteAll = () => {
  dataPro = [];
  localStorage.clear();
  submit.innerHTML = "إضافة";
  mood = "create";
  clearData();
  showData();
};

// update
const updateData = (i) => {
  met1.value = dataPro[i].met1;
  met2.value = dataPro[i].met2;
  met3.value = dataPro[i].met3;
  category1.value = dataPro[i].category1;
  category2.value = dataPro[i].category2;
  category3.value = dataPro[i].category3;
  category4.value = dataPro[i].category4;
  category5.value = dataPro[i].category5;
  category6.value = dataPro[i].category6;
  category7.value = dataPro[i].category7;
  category8.value = dataPro[i].category8;
  category9.value = dataPro[i].category9;
  category10.value = dataPro[i].category10;
  submit.innerHTML = "تحديث";
  mood = "update";
  id = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
};

// search
let searchMood = "title";

// Get Search Mood
const getSearchMood = (e) => {
  if (e.target.id == "searchTitle") {
    searchMood = "title";
    search.placeholder = "Search By Title";
  } else {
    searchMood = "category2";
    search.placeholder = "Search By Category";
  }

  search.addEventListener("blur", () => {
    search.placeholder = "Search";
  });

  search.focus();
  search.value = "";
  searchData();
};

// Search Data
const searchData = () => {
  let row = "";

  if (search.value) {
    for (let i = 0; i < dataPro.length; i++) {
      if (searchMood == "title") {
        if (
          dataPro[i].title.toLowerCase().includes(search.value.toLowerCase())
        ) {
          row += `
            <tr>
                <td>${i + 1}</td>
                <td>${dataPro[i].met1}</td>
                <td>${dataPro[i].met2}</td>
                <td>${dataPro[i].met3}</td>
                <td>${dataPro[i].category1}</td>
                <td>${dataPro[i].category2}</td>
                <td>${dataPro[i].category3}</td>
                <td>${dataPro[i].category4}</td>
                <td>${dataPro[i].category5}</td>
                <td>${dataPro[i].category6}</td>
                <td>${dataPro[i].category7}</td>
                <td>${dataPro[i].category8}</td>
                <td>${dataPro[i].category9}</td>
                <td>${dataPro[i].category10}</td>
                <td><button onClick="updateData(${i})" id="update">تحديث</button></td>
                <td><button onClick="deleteProduct(${i})" id="delete">حذف</button></td>
            </tr>
            `;
        }
      } else {
        if (
          dataPro[i].category.toLowerCase().includes(search.value.toLowerCase())
        ) {
          row += `
            <tr>
                <td>${i + 1}</td>
                <td>${dataPro[i].met1}</td>
                <td>${dataPro[i].met2}</td>
                <td>${dataPro[i].met3}</td>
                <td>${dataPro[i].category1}</td>
                <td>${dataPro[i].category2}</td>
                <td>${dataPro[i].category3}</td>
                <td>${dataPro[i].category4}</td>
                <td>${dataPro[i].category5}</td>
                <td>${dataPro[i].category6}</td>
                <td>${dataPro[i].category7}</td>
                <td>${dataPro[i].category8}</td>
                <td>${dataPro[i].category9}</td>
                <td>${dataPro[i].category10}</td>
                <td><button onClick="updateData(${i})" id="update">تحديث</button></td>
                <td><button onClick="deleteProduct(${i})" id="delete">حذف</button></td>
            </tr>
          `;
        }
      }
    }
    tbody.innerHTML = row;
  } else {
    showData();
  }
};

// Add Event Listeners

search.addEventListener("keyup", searchData);
searchTitle.addEventListener("click", getSearchMood);
searchCategory.addEventListener("click", getSearchMood);
