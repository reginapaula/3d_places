/*
File: 				main.js
Author:   			Regina Cachuela
Dependencies:
Called From:       	../index.html
Description: 		http://www.webglearth.org/ API calls



*/

// init
function initialize() {
        
    var earth = new WE.map('earth_div');
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

    var marker = WE.marker([34.0286, -117.8103]).addTo(earth);
    marker.bindPopup("<b><span style='font-size:20px'>Hi Ate Yvonne!</span></b><br><span style='font-size:15px'>I see you in Diamond Bar</span><br /><span style='font-size:10px;color:#999'>Love, Reeg</span>", {maxWidth: 300, closeButton: true}).openPopup();

    var marker2 = WE.marker([33.6103, -117.7253]).addTo(earth);
    //marker2.bindPopup("<b>Cairo</b><br>Yay, you found me!", {maxWidth: 300, closeButton: false});
    marker2.bindPopup("<b><span style='font-size:20px'>Mike is HERE!!</span></b><br><span style='font-size:15px'>in Laguna Woods.</span><br /><span style='font-size:10px;color:#999'>Love, Reeg</span>", {maxWidth: 300, closeButton: true});

    // custom marker 
    //var markerCustom = WE.marker([50, -9], '/img/logo-webglearth-white-100.png', 100, 24).addTo(earth);
   //var markerCustom = WE.marker([50, -9], 'http://examples.webglearth.com/img/logo-webglearth-white-100.png', 100, 24).addTo(earth);

    //earth.setView([51.505, 0], 6);
    earth.setView([34.0286, -117.8103], 5);
}	


