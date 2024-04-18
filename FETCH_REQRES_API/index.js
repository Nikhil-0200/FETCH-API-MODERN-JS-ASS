let display = document.querySelector("#display");
let fetchDataBtn = document.querySelector("button");

function fetchData(URL) {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((finalData) => {
      showData(finalData.data);
    });
}

fetchDataBtn.addEventListener("click", () => {
  fetchData("https://reqres.in/api/users?page=2");
});

function showData(arr) {
  arr.forEach((ele) => {
    let dataDiv = document.createElement("div");
    dataDiv.id = "dataDiv";
    let imgDiv = document.createElement("div");
    imgDiv.id = "imgDiv";
    let img = document.createElement("img");

    img.src = ele.avatar
    let para = document.createElement("p");
    let email = document.createElement("p");

    para.textContent = `Name: ${ele.first_name} ${ele.last_name}`;
    email.textContent = `Email: ${ele.email}`

    console.log(ele);

    imgDiv.append(img);
    dataDiv.append(imgDiv, para, email);
    display.append(dataDiv);
  });
}
