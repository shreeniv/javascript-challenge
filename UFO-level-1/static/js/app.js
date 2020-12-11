// from data.js
var tableData = data;
console.log(tableData);

// fetching reference to table body
var tbody = d3.select("tbody");

// UFO Sighting values iterate for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // var city = tableData.map(function(ufoSightings) {
    //     return ufoSightings.city;
    //   });
    //   console.log("UFO City: ", city);
    
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});