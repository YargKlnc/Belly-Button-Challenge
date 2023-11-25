// Using the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function plotbarchart(otu_id) {
    alert("I am plotting " + otu_id);

}

function demographicinfo(otu_id) {
    alert("I am describing " + otu_id);
    let panel = d3.select("#sample-metadata");
    d3.json(url).then(function(data) {
    let metadata = data.metadata;

    

    });

}

// Creating a init function to display dropdown, bar chart, bubble chart with each dataset
function init() {
    // create dropdown list of sample ids in dataset by appending each id as a new value
    let dropdown = d3.select("#selDataset");
    d3.json(url).then(function(data) {
    let datanames = data.names;

    for (let i = 0; i < datanames.length; i++) {
        dropdown.append("option").text(datanames[i]).property("value");
    }

    });
}

function optionChanged(otu_ids)
{
    plotbarchart(otu_ids);
    demographicinfo(otu_ids);
}

init();



        // Creating a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

// Create a bubble chart that displays each sample.
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.

// Display the sample metadata, i.e., an individual's demographic information.

// Display each key-value pair from the metadata JSON object somewhere on the page.

// Update all of the plots any time that a new sample is selected.

// You are welcome to create any layout that you would like for your dashboard.

// Advanced Challenge Assignment (Optional)
// Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
// You will need to modify the example gauge code to account for values ranging from 0 through 9.
// Update the chart whenever a new sample is selected.

// Use console.log inside of your JavaScript code to see what your data looks like at each step.

// Refer to the Plotly.js documentation when building the plots.

// below is week 14-1-4 or use 14-1-11 for bar chart or 14-2-6
// let name = 'Travis Taylor'
// let title = `${name}'s First Plotly Chart`
// let books = ["The Visual Display of Quantitative Information", "Automate the Boring Stuff", "Data Science from Scratch"]
// let timesRead = [100, 50, 25]
// let trace1 = {
//   x: books,
//   y: timesRead,
//   type: 'bar'
// };
// let data = [trace1];
// let layout = {
//   title: title
// };
// Plotly.newPlot("plot", data, layout);