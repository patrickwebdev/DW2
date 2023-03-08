function recall_current_date_time(){
    // Refresh each 1000 milli seconds
    mytime=setTimeout('current_date_time()',1000)
}

function current_date_time() {

    //Create an array of day and month names
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //Create an object of the class Date to read the date and time
    var d = new Date()
    //Retrieve the date and match it to its name
    var theDay = d.getDay();
    var nameOfToday = dayNames[theDay];
    //Retrieve the month and match it to its name
    var theMonth = d.getMonth();
    var nameOfThisMonth = monthNames[theMonth];
    //Retrieve the year
    var theYear = d.getFullYear()

    //Combine the data retrieve and created 
    var full_date = nameOfToday + " " + nameOfThisMonth + " " + d.getDate() + ", " + theYear;
    //Make the full date avalaible for use outside of the function
    document.getElementById('current-date-from-js').innerHTML = full_date;

    //Retrieve the current times
    var currentHours = d.getHours();
    var currentMinutes = d.getMinutes();
    var currentSeconds = d.getSeconds();
    //Conditional to always add 2 digits HH:MM:SS
    if (currentHours < 10) 
        currentHours = "0" + currentHours ;
    if (currentMinutes < 10) 
        currentMinutes = "0" + currentMinutes ;
    if (currentSeconds < 10) 
        currentSeconds = "0" + currentSeconds ;
    //Conditional to identify AM/PM
    var amplitude_modulation;
    if (currentHours>=12)
        amplitude_modulation = "PM";
    else
        amplitude_modulation = "AM";
    //Combine the data retrieve and created 
    var full_time = currentHours +":"+ currentMinutes +":"+ currentSeconds +" "+ amplitude_modulation;
    //Make the full date avalaible for use outside of the function
    document.getElementById('current-time-from-js').innerHTML = full_time ;


    //Call the function to refresh the date continuously
    recall_current_date_time();
}

