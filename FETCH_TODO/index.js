let display = document.querySelector("#display");
let fetchDataBtn = document.querySelector("button");

function fetchData(URL) {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((finalData) => {
      console.log(finalData);
      showData(finalData);
    });
}

fetchDataBtn.addEventListener("click", () => {
  fetchData("https://jsonplaceholder.typicode.com/todos");
});

function showData(arr) {
  arr.forEach((ele) => {
    let dataDiv = document.createElement("div");
    dataDiv.id = "dataDiv";
    let para = document.createElement("p");

    para.textContent = ele.title;

    dataDiv.append(para);
    display.append(dataDiv);
  });
}
