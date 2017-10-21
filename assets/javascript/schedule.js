
var config = {
  apiKey: "AIzaSyCYbwDL_ql92hgw4vwvxtk7Ch4iFlfa0rE",
  authDomain: "trainschedule-5647d.firebaseapp.com",
  databaseURL: "https://trainschedule-5647d.firebaseio.com",
  projectId: "trainschedule-5647d",
  storageBucket: "",
  messagingSenderId: "21653785481"
};
firebase.initializeApp(config);

var database = firebase.database();


var trainName;
var trainDestination;
var firstTrainDepart;
var trainFrequency;
var nextTrainArrives;
var timeUntilNextTrain;

// 2. Button for adding Employees
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  trainName = $("#trainName-input").val().trim();
  trainDestination = $("#destination-input").val().trim();
  firstTrainDepart = $("#firstTrain-input").val().trim();
  // var firstTrainTime = moment($("#firstTrain-input").val().trim(), "HH:mm").format("X");
  trainFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrainInfo = {
    name: trainName,
    destination: trainDestination,
    firstTrain: firstTrainDepart,
    frequency: trainFrequency
  };
  console.log(newTrainInfo);
  // Uploads employee data to the database
  database.ref().push(newTrainInfo);
  alert("train added!")
  $("#trainName-input").val("");
  $("#destination-input").val("");
  $("#firstTrain-input").val("");
  $("#frequency-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
console.log("-----------------------");
//console.log(childSnapshot.val());

// will use this to show user
var dbTrainName = childSnapshot.val().name;
// will use this to show user
var dbTrainDestination = childSnapshot.val().destination;
var dbFirstTrainDepart = childSnapshot.val().firstTrain;
// will use this to show user
var dbTrainFrequency = childSnapshot.val().frequency;

console.log("Train Name: " + dbTrainName);
console.log("Train Destination: " + dbTrainDestination);
//console.log(dbFirstTrainDepart);
console.log("Train Frequency: " + dbTrainFrequency);

var specTrainDepart = moment(dbFirstTrainDepart, "HH:mm").subtract(1, "years");
//console.log("Specific Train Departs: " + specTrainDepart);

var currentTime = moment();
console.log("current time: " + currentTime.format("HH:mm"));

var diffInTime = moment().diff(moment(specTrainDepart), "minutes");
//console.log("difference in train times: " + diffInTime)

var timeRemain = diffInTime % dbTrainFrequency;
//console.log("difference in time to frequency: " + timeRemain);


//** will need this one to show user
var minTillNextTrain = dbTrainFrequency - timeRemain;
console.log("Time till Next Train: " + minTillNextTrain);

//** will need this one to show user
var nextTrainTime = moment().add(minTillNextTrain, "minutes");
console.log("Next train comes at: " + moment(nextTrainTime).format("hh:mm"));
var arrivalTime = moment(nextTrainTime).format("hh:mm");



  $("#train-table > tbody").append("<tr><td>" + dbTrainName + "</td><td>" + dbTrainDestination + "</td><td>" +
dbTrainFrequency + "</td><td>" + arrivalTime + "</td><td>" + minTillNextTrain + "</td></tr>");
 });

//console.log(childSnapshot.val());

  // Store everything into a variable.
  // var trainName = childSnapshot.val().name;
  // var trainDestination = childSnapshot.val().destination;
  // var firstTrainDepart = childSnapshot.val().firstTrain;
  // var trainFrequency = childSnapshot.val().frequency;
  // var nextTrainArrives;
  // var timeUntilNextTrain;

//_____________*****************_______________*****************________________***************
//***************_____________*****************_______________*****************________________***************
// Assumptions
    //var tFrequency = 
    //$("#frequency-input").val().trim();

    // Time is 3:30 AM
    //var firstTimeConverted = moment($("#firstTrain-input").val().trim(), "HH:mm").subtract(1, "years");
    //console.log("firstTime: " + firstTime);
    // First Time (pushed back 1 year to make sure it comes before current time)
    //var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    //console.log(firstTimeConverted);

    // Current Time




    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log("tRainder= " + tRemainder);

    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

//_____________*****************_______________*****************________________***************
//************_____________*****************_______________*****************________________***************

//   // Prettify the employee start
//var firstTrainDepartPretty = moment.unix(firstTrainDepart).format("HH:mm");
//console.log(firstTrainDepartPretty);
//console.log("first train departs: " + moment.unix(firstTrainDepart).format("HH:mm"));
//   // Calculate the months worked using hardcore math
//   // To calculate the months worked
//   var empMonths = moment().diff(moment.unix(empStart, "X"), ",months");
//   console.log(empMonths);
//var  = Math.abs(moment().diff(moment.unix(empStart, "X"), ",minutes"));
//console.log("time now: " + moment().format("HH:mm"));
//var minPastTrain = (parseInt(firstTrainDepart) - moment().format()) % parseInt(trainFrequency);;
//var minTillNextTrain = parseInt(trainFrequency) - parseInt(minPastTrain);
// console.log("min till next train: " + minTillNextTrain);

//var currentTime = moment("HH:mm");
//var pleasework = moment().diff(moment.unix(firstTrainDepart, "X"), ",minutes")
//console.log("pleasework: "  + pleasework)
//console.log("current time: " + currentTime);
//var nextArrival = currentTime + parseInt(minTillNextTrain);
//console.log(minTillNextTrain);
//   // Calculate the total billed rate
//   var empBilled = empMonths * empRate;
//   console.log(empBilled);

//   // Add each train's data into the table
// $("#employee-table > tbody").append("<tr><td>" + trainName + "</td><td>" + empRole + "</td><td>" +
// empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
//  });

