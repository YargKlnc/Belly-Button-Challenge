// Storing url in variable for json data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Creating a init function to display dropdown, bar chart, bubble chart with each dataset
function init() {
    // fetch json data and logging to console
    d3.json(url).then(function(data) {

        // creating dropdown menu with list of sample ids
        let dropdown = d3.select("#selDataset");
        // receiving all sample ids from names in data file
        let sampleids = data.names;
        // getting each sample id and appending to dropdown
        sampleids.forEach(function(id) {
            dropdown.append("option").text(id).property("value");
        });
        // another way to get each sample id and appending to dropdown
        // for (let i = 0; i < sampleids.length; i++) {
        //     dropdown.append("option").text(sampleids[i]).property("value", sampleids[i]);
        // }
        // pass first sample id and call functions to plot bar chart and bubble chart

        // calling functions when first sample id is selected
        allchartvalues(sampleids[0]);
        demographicinfo(sampleids[0]);
    });
};

// creating a function when id is changed by user
function optionChanged(passedid) {
    // calling functions when sample id is changed
    allchartvalues(passedid);
    demographicinfo(passedid);
};

// adding init() to check if sample id selection is working at this step
// init();

// creating a function to be used for demographic info and charts
function allchartvalues(passedid) {
    // fetching json data
    d3.json(url).then(function(data) {
        // getting samples data
        let samples = data.samples;
        // filtering data for selected id
        let filtereddata = samples.filter(sample => sample.id == passedid);
        // getting data for charts
        let sample_values = filtereddata[0].sample_values;
        let otu_ids = filtereddata[0].otu_ids;
        let otu_labels = filtereddata[0].otu_labels;
        // calling functions to plot charts
        allcharts(sample_values, otu_ids, otu_labels);
    });
};

// function for bar and bubble charts
function allcharts(sample_values, otu_ids, otu_labels) {
    // fetching json data
    d3.json(url).then(function(data) {
        
        // getting data for both bar and bubble charts
        let top10sample_values = sample_values.slice(0, 10).reverse();
        let top10otu_ids = otu_ids.slice(0, 10).reverse();
        let top10otu_labels = otu_labels.slice(0, 10).reverse();
        
        // creating trace for bar chart
        let trace = {
            x: top10sample_values,
            y: top10otu_ids.map(id => `OTU ${id}`),
            text: top10otu_labels,
            type: "bar",
            orientation: "h"
        };
        // creating data for bar chart
        let bardata = [trace];
        // creating layout for bar chart
        let layout = {
            title: "Top 10 OTUs",
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU IDs" }
        };
        // plotting bar chart
        Plotly.newPlot("bar", bardata, layout);
        
        // creating trace for bubble chart
        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids
            }
        };
        // creating data for bubble chart
        let bubbledata = [trace1];
        // creating layout for bubble chart
        let layout1 = {
            title: "OTU IDs vs Sample Values",
            xaxis: { title: "OTU IDs" },
            yaxis: { title: "Sample Values" }
        };
        // plotting bubble chart
        Plotly.newPlot("bubble", bubbledata, layout1);
    });
};

// adding init() to check if sample id selection is working at this step
// init();

// creating a function to display demographic info
function demographicinfo(passedid) {
    // fetching json data
    d3.json(url).then(function(data) {
        // getting metadata
        let metadata = data.metadata;
        // getting data for demographic info
        let filtereddata = metadata.filter(sample => sample.id == passedid);
        // getting first element from filtered data
        let result = filtereddata[0];
        // clearing panel before displaying new data
        let panel = d3.select("#sample-metadata");
        panel.html("");
        // getting key value pairs from result and changing to uppercase for a better view
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
};

// adding init() to check if sample id selection is working at this step
// init();

// dont forget to activate <script src="./static/js/bonus.js"></script> in html at this step
// creating a function to display gauge chart using https://plotly.com/javascript/gauge-charts/
var data = [
    {
        type: "indicator",
        mode: "gauge+number",
        value: 4,
        title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
        gauge: {
            axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkblue" },
            bar: { color: "darkblue" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
                { range: [0, 1], color: "cyan" },
                { range: [1, 2], color: "lightcyan" },
                { range: [2, 3], color: "lightblue" },
                { range: [3, 4], color: "deepskyblue" },
                { range: [4, 5], color: "dodgerblue" },
                { range: [5, 6], color: "royalblue" },
                { range: [6, 7], color: "mediumblue" },
                { range: [7, 8], color: "darkblue" },
                { range: [8, 9], color: "navy" }
            ],
            threshold: {
                line: { color: "red", width: 4 },
                thickness: 0.75,
                value: 4.9
            }
        }
    }
];

var layout = {
    width: 500,
    height: 400,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "lavender",
    font: { color: "darkblue", family: "Arial" }
};

Plotly.newPlot('gauge', data, layout);

init();


// Advanced Challenge Assignment (Optional)
// Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
// You will need to modify the example gauge code to account for values ranging from 0 through 9.
// Update the chart whenever a new sample is selected.

// Use console.log inside of your JavaScript code to see what your data looks like at each step.

// Refer to the Plotly.js documentation when building the plots.

