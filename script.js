document.addEventListener("DOMContentLoaded", function() {
  // Function to generate the dropdown options
  function generateDropdownOptions() {
    let dropdown = document.getElementById("countryDropdown");

    for (let country in data) {
      let option = document.createElement("option");
      option.text = country;
      dropdown.add(option);
    }
  }

  // Function to update the chart based on the selected country
  function updateChart(data) {
    let selectedCountry = document.getElementById("countryDropdown").value;
    let selectedData = data[selectedCountry];

    let labels = Object.keys(selectedData);
    let values = Object.values(selectedData);

    let trace = {
      x: labels,
      y: values,
      type: "bar"
    };

    let layout = {
      title: "Bar Chart",
      xaxis: { title: "Category" },
      yaxis: { title: "Value" }
    };

    let plotData = [trace];

    Plotly.newPlot("chart", plotData, layout);
  }

  // Generate the dropdown options on page load
  generateDropdownOptions();

  // Attach the updateChart function to the dropdown's onchange event
  document.getElementById("countryDropdown").onchange = function () {
    updateChart(data);
  };
});
