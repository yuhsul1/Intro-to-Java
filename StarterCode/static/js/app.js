// from data.js
var tableData = data;

let tbody = d3.select("tbody");
tableData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});



let submit = d3.select("#filter-btn");
submit.on("click", function() {

    //clear out old table before adding new table
    d3.select("#ufo-table>tbody").remove();
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    // Get the value property of the input element
    //multiple level filter use if(inputvalue) to only filter when inputvalue return true

    var filteredData = tableData
    console.log(inputDate);
    if (inputDate){var filteredData = filteredData.filter(function(dates) {
        return dates.datetime ===inputDate
    });};
    if (inputCity){var filteredData = filteredData.filter(function(dates) {
        return dates.city ===inputCity
    });};
    if (inputState){var filteredData = filteredData.filter(function(dates) {
        return dates.state ===inputState
    });};
    if (inputCountry){var filteredData = filteredData.filter(function(dates) {
        return dates.country ===inputCountry
    });};
    if (inputShape){var filteredData = filteredData.filter(function(dates) {
        return dates.shape ===inputShape
    });};
  
    //after cleaning the filteredData, store filtered data information in a variable
    console.log(filteredData);
    let dateTime = filteredData.map(function(data) {
        return data.datetime
    })
    let city = filteredData.map(function(data) {
        return data.city
    })
    let state = filteredData.map(function(data) {
        return data.state
    })
    let country = filteredData.map(function(data) {
        return data.country
    })
    let shape = filteredData.map(function(data) {
        return data.shape
    })
    let durationInMin = filteredData.map(function(data) {
        return data.durationMinutes
    })
    let comments = filteredData.map(function(data) {
        return data.comments
    })
    
    //build table with information
    let newtable = d3.select("#ufo-table");
    newtable.append("tbody");
    let newtbody = newtable.select("tbody");
    let newtrow;
    for (let i = 0, limit = dateTime.length; i<limit ; i++) {
        newtrow = newtbody.append("tr");
        newtrow.append("td").text(dateTime[i]);
        newtrow.append("td").text(city[i]);
        newtrow.append("td").text(state[i]);
        newtrow.append("td").text(country[i]);
        newtrow.append("td").text(shape[i]);
        newtrow.append("td").text(durationInMin[i]);
        newtrow.append("td").text(comments[i]);
    }
    //just want to see the unique city and state after filtered
    var citylabel = city.filter(onlyUnique);
    console.log(citylabel)
    var statelabel = state.filter(onlyUnique);
    console.log(statelabel)

  });
//function for finding all unique value
function onlyUnique(value, index, self) {
    return self.indexOf(value) ===index;
}


