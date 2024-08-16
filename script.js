// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        let pickedPlanet = pickPlanet(listedPlanets);
        
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star,
            pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    })
    
    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function(event) {
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
        event.preventDefault();
    });
    
 });