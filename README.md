# Belly-Button-Challenge

UofT Data Analytics - Belly Button Challenge by YK

**Click the link to explore the interactive charts: https://yargklnc.github.io/Belly-Button-Challenge/**


![image](https://github.com/YargKlnc/Belly-Button-Challenge/assets/142269763/0933e906-7380-4677-bc90-3255a7e70d35)


### Background

**An interactive dashboard was built to explore the Belly Button Biodiversity dataset that links to an external site,  which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.**

NOTE: The new repository was deployed to GitHub Pages.


### Instructions

Completed steps in this assignment:

1.	D3 library was used to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2.	A horizontal bar chart was created with a dropdown menu to display the top 10 OTUs found in that individual.

    o	Sample_values were used as the values for the bar chart.

    o	Otu_ids were used as the labels for the bar chart.

    o	Otu_labels were used as the hovertext for the chart.

![image](https://github.com/YargKlnc/Belly-Button-Challenge/assets/142269763/a577260b-cb42-47e4-a594-ee4fd14b116a)


3.	A bubble chart was created that displays each sample.

    o	Otu_ids were used for the x values.

    o	Sample_values were used for the y values.

    o	Sample_valueswere used for the marker size.

    o	Otu_ids were used for the marker colors.

    o	Otu_labels were used for the text values.

![image](https://github.com/YargKlnc/Belly-Button-Challenge/assets/142269763/cd68a284-a9f0-4220-aec7-377311083a92)


4.	Displayed the sample metadata, i.e., an individual's demographic information.

5.	Displayed each key-value pair from the metadata JSON object somewhere on the page.

![image](https://github.com/YargKlnc/Belly-Button-Challenge/assets/142269763/62893b98-4413-4996-ad2d-60607a4fa84d)


6.	Updated all the plots when a new sample is selected. Additionally, a layout was created for the dashboard. 

![image](https://github.com/YargKlnc/Belly-Button-Challenge/assets/142269763/365f0bb8-9d82-4070-b652-2a5421e64f12)



7.	Deployed the app to GitHub Pages a free static page hosting service. Submitted the links to the deployment and GitHub repo. 


** Advanced additional tasks completed:

    •	Adapted the Gauge Chart from https://plot.ly/javascript/gauge-charts/ site. to plot the weekly washing frequency of the individual.

    •	The example gauge code was modified to account for values ranging from 0 through 9.

    •	Updated the chart whenever a new sample is selected.

![image](https://github.com/YargKlnc/Belly-Button-Challenge/assets/142269763/4341ab96-2faf-4084-bbc5-78840a808fbe)


 
** Details:

    •	Console.log was used inside of JavaScript code to see what the data looks like at each step.

    •	Referred to the Plotly.js documentation to built the plots.


### References

Belly button photo rights belongs to: https://robdunnlab.com/projects/belly-button-biodiversity/

Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/

Plotly JavaScript Open Source Graphing Library was referred for building plots

D3 library was used to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
