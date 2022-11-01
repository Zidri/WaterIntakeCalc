function checkUnit(unit, value) {

    if (unit == "kg") {
        var lbs = value * 2.2046226218;
        console.log(value+" -> "+lbs);
        return lbs;
    }
    else if (unit == "lbs") {
        return Number(value);
    }

}

function CalcWaterIntake() {
    //get input
    var weight = document.getElementById("weight").value;
    var unit = document.getElementById("weightMeasure");
    var unitValue = unit.options[unit.selectedIndex].value;
    // var unitText = unit.options[unit.selectedIndex].text;
    var activity = document.getElementById("activity").value;
    var lbs = 0;

    if (weight != "") {
        //check weight unit
        lbs = checkUnit(unitValue, weight);
    }

    //get activity water value
    var activityWater = (activity / 30) * 12;

    //get water intake
    var water = lbs * (2 / 3);
    
    //round water to whole number
    water = Math.round(water + activityWater);


    //display water intake
    document.getElementById("waterDisplay").innerHTML = water + " oz/day";
}