// Storing url in variable for json data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//console log to see what data looks like at this step
console.log(url);

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
        
        // calling functions when first sample id is selected
        allchartvalues(sampleids[0]);
        demographicinfo(sampleids[0]);
        console.log(sampleids[0]);
    });
};

// creating a function when id is changed by user
function optionChanged(passedid) {
    // calling functions when sample id is changed
    allchartvalues(passedid);
    demographicinfo(passedid);
    console.log(passedid);
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
console.log(allchartvalues);
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

//console log to see what data looks like at this step
console.log(allcharts);

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
console.log(demographicinfo);
};

//console log to see what data looks like at this step
console.log(demographicinfo);

// adding init() to check if sample id selection is working at this step
// init();

// dont forget to activate <script src="./static/js/bonus.js"></script> in html at this step
// creating a function to display gauge chart using https://plotly.com/javascript/gauge-charts/

// building a gauge chart with wfreq data
var data = [
    {
        domain: { x: [0, 1], y: [0, 1] },
        value: 2,
        title: { text: "Belly Button Washing Frequency" },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [null, 9] },
            steps: [
                { range: [0, 1], color: "#f7fcfd" },
                { range: [1, 2], color: "#e0ecf4" },
                { range: [2, 3], color: "#bfd3e6" },
                { range: [3, 4], color: "#9ebcda" },
                { range: [4, 5], color: "#8c96c6" },
                { range: [5, 6], color: "#8c6bb1" },
                { range: [6, 7], color: "#88419d" },
                { range: [7, 8], color: "#810f7c" },
                { range: [8, 9], color: "#4d004b" }
            ]
        }
    }
];

var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };

Plotly.newPlot("gauge", data, layout);
    

// creating a function to display gauge chart using https://plotly.com/javascript/gauge-charts/
// function gaugechart(passedid) {
//     // fetching json data
//     d3.json(url).then(function(data) {
//         // getting metadata
//         let metadata = data.metadata;
//         // getting data for demographic info
//         let filtereddata = metadata.filter(sample => sample.id == passedid);
//         // getting first element from filtered data
//         let result = filtereddata[0];
//         // getting wfreq data
//         let wfreq = result.wfreq;
//         // building a gauge chart with wfreq data
//         var datagauge = [
//             {
//                 domain: { x: [0, 1], y: [0, 1] },
//                 value: wfreq,
//                 title: { text: "Belly Button Washing Frequency" },
//                 type: "indicator",
//                 mode: "gauge+number",
//                 gauge: {
//                     axis: { range: [null, 9] },
//                     steps: [
//                         { range: [0, 1], color: "#f7fcfd" },
//                         { range: [1, 2], color: "#e0ecf4" },
//                         { range: [2, 3], color: "#bfd3e6" },
//                         { range: [3, 4], color: "#9ebcda" },
//                         { range: [4, 5], color: "#8c96c6" },
//                         { range: [5, 6], color: "#8c6bb1" },
//                         { range: [6, 7], color: "#88419d" },
//                         { range: [7, 8], color: "#810f7c" },
//                         { range: [8, 9], color: "#4d004b" }
//                     ]
//                 }
//             }
//         ];
//         var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
//         Plotly.newPlot("gauge", datagauge, layout);
//     }).catch(function(error) {
//         console.log(error);
//     });
// }

// // Call the gaugechart function with the selected sample id
// gaugechart(passedid);

init();

// Advanced Challenge Assignment (Optional)
// Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
// You will need to modify the example gauge code to account for values ranging from 0 through 9.
// Update the chart whenever a new sample is selected.

// Use console.log inside of your JavaScript code to see what your data looks like at each step.

// Refer to the Plotly.js documentation when building the plots.

// Call the gaugechart function with the selected sample id
// gaugechart(passedid);

// Advanced Challenge Assignment (Optional)
// Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
// You will need to modify the example gauge code to account for values ranging from 0 through 9.
// Update the chart whenever a new sample is selected.

// Use console.log inside of your JavaScript code to see what your data looks like at each step.

// Refer to the Plotly.js documentation when building the plots.

