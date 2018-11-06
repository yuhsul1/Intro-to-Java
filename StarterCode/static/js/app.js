// from data.js
var tableData = data;

// YOUR CODE HERE!
let alldateTime = tableData.map(function(data) {
    return data.datetime
})
let allcity = tableData.map(function(data) {
    return data.city
})
let allstate = tableData.map(function(data) {
    return data.state
})
let allcountry = tableData.map(function(data) {
    return data.country
})
let allshape = tableData.map(function(data) {
    return data.shape
})
let alldurationInMin = tableData.map(function(data) {
    return data.durationMinutes
})
let allcomments = tableData.map(function(data) {
    return data.comments
})



let table = d3.select("#ufo-table");
let tbody = table.select("tbody");
let trow;
for (var i = 0, limit = alldateTime.length; i<limit ; i++) {
    trow = tbody.append("tr");
    trow.append("td").text(alldateTime[i]);
    trow.append("td").text(allcity[i]);
    trow.append("td").text(allstate[i]);
    trow.append("td").text(allcountry[i]);
    trow.append("td").text(allshape[i]);
    trow.append("td").text(alldurationInMin[i]);
    trow.append("td").text(allcomments[i]);
}


let submit = d3.select("#filter-btn");
submit.on("click", function() {

    //clear out old table before adding new table
    d3.select("#ufo-table>tbody").remove();
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    var filteredData = tableData.filter(function(dates) {
        return dates.datetime ===inputValue
    });
  
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


