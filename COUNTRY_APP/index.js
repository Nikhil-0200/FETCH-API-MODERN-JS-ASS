let display = document.querySelector("#display");
let selectTag = document.querySelector("select");

async function fetchData(URL) {  // FETCHING DATA
  try {
    let res = await fetch(URL);
    let finalData = await res.json();
    showData(finalData.data);
  } catch (error) {}
}

fetchData(
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`
);

function handleSort() {        // HANDLING SORT
  selectTag.addEventListener("change", () => {
    selectTag.value === "ID"
      ? fetchData(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`
        )
      : fetchData(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc`
        );
  });
}

handleSort();

function showData(arr) {  // SHOWING DATA
  display.innerHTML = "";
  arr.forEach((element) => {
    let cardDiv = document.createElement("div");
    cardDiv.id = "cardDiv";

    let countryId = document.createElement("p");
    countryId.id = "countryId";
    countryId.textContent = `Id: ${element.id}`;

    let countryName = document.createElement("p");
    countryName.textContent = `Name: ${element.country}`;

    let countryRank = document.createElement("p");
    countryRank.textContent = `Rank: ${element.Rank}`;

    let countryPopulation = document.createElement("p");
    countryPopulation.textContent = `Population: ${element.population}`;

    cardDiv.append(countryId, countryName, countryRank, countryPopulation);
    display.append(cardDiv);
  });
}
