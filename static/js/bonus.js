// Bonus Challenge Assignment (Optional)
// Adapting the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.

//console log to see what data looks like at this step
console.log(url);

// Creating a init function to display dropdown, bar chart, bubble chart with each dataset
function init() {
    // fetch json data and logging to console
    d3.json(url).then(function(data) {
        // console.log(data);
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
        buildgaugechart(sampleids[0]);
    });     
}

// creating a function that builds gauge chart
function buildgaugechart(passedid) {
    // fetching json data
    d3.json(url).then((data) => {
        // getting metadata
        let metadata = data.metadata;
        // filtering metadata for selected id
        let filtereddata = metadata.filter(sample => sample.id == passedid);
        // logging to console
        console.log(filtereddata);
        // getting the first item in the filtered data
        let result = filtereddata[0];
        // using object entries to get key value pairs
        let washingfreq = Object.entries(result);
        // setting up trace for gauge chart
        let gaugetrace = {
            domain: { x: [0, 1], y: [0, 1] },
            value: washingfreq[6][1],
            title: { text: "Belly Button Washing Frequency <br> Scrubs per Week" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [null, 9] },
                bar: { color: "darkblue" },
                steps: [
                    { range: [0, 2], color: "rgb(255, 255, 217)" },
                    { range: [2, 4], color: "rgb(237, 248, 217)" },
                    { range: [4, 6], color: "rgb(199, 233, 180)" },
                    { range: [6, 8], color: "rgb(127, 205, 187)" },
                    { range: [8, 10], color: "rgb(65, 182, 196)" },
                ]
            }
        };
        // setting up layout for gauge chart
        let gaugelayout = { width: 600, height: 400, margin: { t: 0, b: 0 } };
        // plotting gauge chart with plotly
        Plotly.newPlot("gauge", [gaugetrace], gaugelayout);
    });
};

init();