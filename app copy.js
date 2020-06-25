// Loop over all of the colleges
var nameArray = [];
var typeArray = [];
var avgScoreArray = [];

var reachArray = [];
var reachAvgScoreArray = [];
var targetArray = [];
var targetAvgScoreArray = [];
var safetyArray = [];
var safetyAvgScoreArray = [];

var reach1 = "";
var reach2 = "";
var reach3 = "";
var reach4 = "";
var target1 = "";
var target2 = "";
var safety1 = "";
var safety2 = "";

var reach1Score = 0.0;
var reach2Score = 0.0;
var reach3Score = 0.0;
var reach4Score = 0.0;
var target1Score = 0.0;
var target2Score = 0.0;
var safety1Score = 0.0;
var safety2Score = 0.0;


function initProcess(){

  let userGPA = document.getElementById('userGPA').value;
  let userScore = document.getElementById('userScore').value;
  let uChoice = document.getElementById('userChoice');
  let uLocation = document.getElementsByClassName('checks');
  let userChoice = uChoice.options[uChoice.selectedIndex].text;
  var userLocationArray = [];

  for (i = 0; i < 4; i++){

    if (uLocation[i].checked == true){
      userLocationArray.push(uLocation[i].value);
    }
  }

  if (userGPA === "" || userScore === "" || userLocationArray.length == 0){

    alert("Error: Please fill in all fields");

  } else if (userChoice == "SAT" && userScore > 1600){

    alert("Error: SAT Score is too high");

  } else if (userChoice == "ACT" && userScore > 36){

    alert("Error: ACT Score is too high");

  } else if ( userGPA > 4.5){

    alert("Error: GPA is too high");

  } else {

    db.collection('colleges').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        check(doc);
      })
      printTheList();
    })

    alert("Scroll down to see results!");
  }
}

function check(doc){

  let uMajor = document.getElementById('userMajor');
  let uSelect = document.getElementById('userSelect');
  let uBrand = document.getElementById('userBrand');
  let uChoice = document.getElementById('userChoice');

  let userGPA = document.getElementById('userGPA').value;
  let userScore = document.getElementById('userScore').value;
  let userMajor = uMajor.options[uMajor.selectedIndex].text;
  let userSelect = uSelect.options[uSelect.selectedIndex].text;
  let userBrand = uBrand.options[uBrand.selectedIndex].text;
  let userChoice = uChoice.options[uChoice.selectedIndex].text;

  let uLocation = document.getElementsByClassName('checks');
  var userLocationArray = [];

  for (i = 0; i < 4; i++){

    if (uLocation[i].checked == true){
      userLocationArray.push(uLocation[i].value);
    }
  }

  let id = doc.id;
  let name = doc.data().Name;
  let act25 = doc.data().ACT25;
  let act75 = doc.data().ACT75;
  let acceptance = doc.data().Acceptance;
  let gpa = doc.data().GPA;
  let location = doc.data().Location;
  let private = doc.data().Private;
  let rank = doc.data().Rank;
  let rank2 = doc.data().Rank2;
  let rank3 = doc.data().Rank3;
  let rank4 = doc.data().Rank4;
  let sat25 = doc.data().SAT25;
  let sat75 = doc.data().SAT25;


  var avgScore = 0;
  var gpaScore = 0;
  var scoreScore = 0;
  var userFitScore = 0;
  var programScore = 0;
  var selectScore = 0;
  var brandScore = 0;
  var categoryType = "";
  var scoreState = "";
  var gpaState = "";


function checkUserFitScore(){
    if ((userGPA - gpa) > 1.0){
     gpaScore = 10;
   } else if ((userGPA - gpa) > 0.8){
     gpaScore = 9.7;
   } else if ((userGPA - gpa) > 0.6){
     gpaScore = 9.4;
   } else if ((userGPA - gpa) > 0.4){
     gpaScore = 9.1;
   } else if ((userGPA - gpa) > 0.2){
     gpaScore = 8.8;
   } else if ((userGPA - gpa) > 0){
     gpaScore = 8.5;
   } else if ((userGPA - gpa) > -0.1){
     gpaScore = 8.2;
   } else if ((userGPA - gpa) > -0.2){
     gpaScore = 7.9;
   } else if ((userGPA - gpa) > -0.3){
     gpaScore = 7.6;
   } else if ((userGPA - gpa) > -0.4){
     gpaScore = 7.3;
   } else if ((userGPA - gpa) > -0.5){
     gpaScore = 7;
   } else if ((userGPA - gpa) > -0.6){
     gpaScore = 6.7;
   } else if ((userGPA - gpa) > -0.7){
     gpaScore = 6.4;
   } else if ((userGPA - gpa) > -0.8){
     gpaScore = 6.1;
   } else if ((userGPA - gpa) > -0.9){
     gpaScore = 5.8;
   } else if ((userGPA - gpa) > -1){
     gpaScore = 5.5;
   } else if ((userGPA - gpa) > -1.11){
     gpaScore = 5.2;
   } else if ((userGPA - gpa) > -1.12){
     gpaScore = 4.9;
   } else if ((userGPA - gpa) > -1.13){
     gpaScore = 4.6;
   } else if ((userGPA - gpa) > -1.14){
     gpaScore = 4.3;
   } else if ((userGPA - gpa) > -1.15){
     gpaScore = 4;
   } else if ((userGPA - gpa) > -1.16){
     gpaScore = 3.7;
   } else if ((userGPA - gpa) > -1.17){
     gpaScore = 3.4;
   } else if ((userGPA - gpa) > -1.18){
     gpaScore = 3.1;
   } else if ((userGPA - gpa) > -1.19){
     gpaScore = 2.8;
   } else if ((userGPA - gpa) > -1.2){
     gpaScore = 2.5;
   } else if ((userGPA - gpa) > -1.4){
     gpaScore = 2.2;
   } else if ((userGPA - gpa) > -1.6){
     gpaScore = 1.9;
   } else if ((userGPA - gpa) > -1.8){
     gpaScore = 1.6;
   } else if ((userGPA - gpa) > -2){
     gpaScore = 1.3;
   } else {
     gpaScore = 0;
   }


   if (userChoice == "ACT"){
     if ((userScore - act75) > 3){
       scoreScore = 4;
     } else if ((userScore - act75) > 2){
       scoreScore = 6;
     } else if ((userScore - act75) > 1){
       scoreScore = 8;
     } else if ((userScore - act75) > 0){
       scoreScore = 10;
     } else if ((userScore - act75) > -1){
       scoreScore = 9.5;
     } else if ((userScore - act75) > -2){
       scoreScore = 9;
     } else if ((userScore - act75) > -3){
       scoreScore = 7;
     } else if ((userScore - act75) > -4){
       scoreScore = 5;
     } else if ((userScore - act75) > -5){
       scoreScore = 3;
     }
   } else if (userChoice == "SAT"){
     if ((userScore - sat75) > 800){
       scoreScore = 4;
     } else if ((userScore - sat75) > 600){
       scoreScore = 6;
     } else if ((userScore - sat75) > 400){
       scoreScore = 8;
     } else if ((userScore - sat75) > 200){
       scoreScore = 10;
     } else if ((userScore - sat75) > 0){
       scoreScore = 9.5;
     } else if ((userScore - sat75) > -200){
       scoreScore = 9;
     } else if ((userScore - sat75) > -400){
       scoreScore = 7;
     } else if ((userScore - sat75) > -600){
       scoreScore = 5;
     } else if ((userScore - sat75) > -800){
       scoreScore = 3;
     }
   }


   userFitScore = (gpaScore + scoreScore) / 2;



  }

function checkProgramScore(whichRank){

    if (whichRank == 0){
      programScore = 0;
    } else if (whichRank < 20) {
      programScore = 10;
    } else if (whichRank < 30) {
      programScore = 9;
    } else if (whichRank < 40) {
      programScore = 8;
    } else if (whichRank < 50) {
      programScore = 7;
    } else if (whichRank < 60) {
      programScore = 6;
    } else if (whichRank < 70) {
      programScore = 5;
    } else if (whichRank < 80) {
      programScore = 4;
    } else if (whichRank < 90) {
      programScore = 3;
    } else if (whichRank < 100) {
      programScore = 2;
    } else {
      programScore = 1;
    }
  }

  function checkSelectivityScore(){
    if (userSelect == 5 || userSelect == 4){
      if (acceptance <= 15.0){
        selectScore = 10;
      } else if (acceptance <= 20.0){
        selectScore = 9;
      } else if (acceptance <= 25.0){
        selectScore = 8;
      } else if (acceptance <= 30.0){
        selectScore = 7;
      } else if (acceptance <= 35.0){
        selectScore = 6;
      } else if (acceptance <= 40.0){
        selectScore = 5;
      } else if (acceptance <= 45.0){
        selectScore = 4;
      } else if (acceptance <= 50.0){
        selectScore = 3;
      } else if (acceptance <= 55.0){
        selectScore = 2;
      } else {
        selectScore = 1;
      }
    } else if (userSelect == 3 || userSelect == 2){
      if (acceptance <= 10.0){
        selectScore = 10;
      } else if (acceptance <= 30.0){
        selectScore = 9;
      } else if (acceptance <= 50.0){
        selectScore = 8;
      } else if (acceptance <= 65.0){
        selectScore = 7;
      } else if (acceptance <= 80.0){
        selectScore = 6
      } else {
        selectScore = 5;
      }
    } else {
      selectScore = 10;
    }
  }

  function checkBrandScore(){
    if (userBrand == 5 || userBrand == 4){
      if (rank > 20) {
        brandScore = 10;
      } else if (rank < 30) {
        brandScore = 9;
      } else if (rank < 40) {
        brandScore = 8;
      } else if (rank < 50) {
        brandScore = 7;
      } else if (rank < 60) {
        brandScore = 6;
      } else if (rank < 70) {
        brandScore = 5;
      } else if (rank < 80) {
        brandScore = 4;
      } else if (rank < 90) {
        brandScore = 3;
      } else if (rank < 100) {
        brandScore = 2;
      } else {
        brandScore = 1;
      }
  } else if (userBrand == 3 || userBrand == 2){
    if (rank > 10) {
      brandScore = 10;
    } else if (rank < 35) {
      brandScore = 9;
    } else if (rank < 60) {
      brandScore = 8;
    } else if (rank < 85) {
      brandScore = 7;
    } else if (rank < 110) {
      brandScore = 6;
    } else {
      brandScore = 5;
    }
  } else {
    brandScore = 10;
  }
}

function checkType(){



  if (acceptance < 14.5 || rank < 31) {

    scoreState = "reach";

  } else if (acceptance > 50.0 || rank > 100){
    scoreState = "safety"
  } else {

    if (userChoice == "ACT"){
      if (userScore <= act25) {
        scoreState = "reach";
      } else if (userScore > act25 && userScore < act75){
        scoreState = "target";
      } else if (userScore >= act75){
        scoreState = "safety";
      }
    } else if (userChoice == "SAT"){
      if (userScore <= sat25) {
        scoreState = "reach";
      } else if (userScore > sat25 && userScore < sat75){
        scoreState = "target";
      } else if (userScore >= sat75){
        scoreState = "safety";
      }
    }
  }

  if (acceptance < 14.5 || rank < 31){

      gpaState = "reach";

  } else if (acceptance > 50.0 || rank > 100){
      gpaState = "safety";

  } else {
    if (userGPA < gpa + 0.2){
      gpaState = "reach";
    } else if (userGPA >= gpa + 0.3){
      gpaState = "safety";
    } else {
      gpaState = "target";
    }
  }


  // Combine both gpa and scores

  //6 scenarios

  if (gpaState == "reach" && scoreState == "reach"){
    categoryType = "reach";
  } else if (gpaState == "target" && scoreState == "target"){
    categoryType = "target";
  } else if (gpaState == "safety" && scoreState == "safety"){
    categoryType = "safety";
  } else if ((gpaState == "reach" && scoreState == "target") || (scoreState == "reach" && gpaState == "target")){
    categoryType = "reach";
  } else if ((gpaState == "safety" && scoreState == "target") || (scoreState == "safety" && gpaState == "target")){
    categoryType = "target";
  } else if ((gpaState == "reach" && scoreState == "safety") || (scoreState == "reach" && gpaState == "safety")){
    categoryType = "reach";
  } else {
    categoryType = "reach";
  }
}

   if (userLocationArray.includes(location) == true){

      // See if any schools match with program ranking
      if (userMajor == "STEM"){
        checkProgramScore(rank2);
      } else if (userMajor == "Business/Economics"){
        checkProgramScore(rank3);
      } else if (userMajor == "Humanities"){
        checkProgramScore(rank4);
      }

      // See if any schools match with selectivity
      checkSelectivityScore();
      checkBrandScore();
      checkType();
      checkUserFitScore();

      // Calculate average of the scores -- prioritizing the program scores
      var programScoreMultiplied = programScore * 1.2;
      var userFitScore = userFitScore * 4;
      avgScore = (programScoreMultiplied + selectScore + brandScore + userFitScore) / 4;

      nameArray.push(name);
      typeArray.push(categoryType);
      avgScoreArray.push(avgScore);

  }
}



function printTheList(){

  if (nameArray.length == typeArray.length && typeArray.length == avgScoreArray.length){

    let arrayLengths = nameArray.length;
    for (i = 0; i < arrayLengths; i++){

      var collegeName = "";


      // Seperate lists to reach, target, safety.
      if (typeArray[i] == "reach"){
        collegeName = nameArray[i];
        reachArray.push(collegeName);
        reachAvgScoreArray.push(avgScoreArray[i]);
      } else if (typeArray[i] == "target"){
        collegeName = nameArray[i];
        targetArray.push(collegeName);
        targetAvgScoreArray.push(avgScoreArray[i]);
      } else if (typeArray[i] == "safety"){
        collegeName = nameArray[i];
        safetyArray.push(collegeName);
        safetyAvgScoreArray.push(avgScoreArray[i]);
      }
  }
  }

  console.log(reachAvgScoreArray);
  console.log(reachArray);
  console.log(targetAvgScoreArray);
  console.log(targetArray);
  console.log(safetyAvgScoreArray);
  console.log(safetyArray);


  // Filter colleges in reach with best avg score.
  var rArray = reachAvgScoreArray;

  var r1 = checkLargestValueInArray(rArray);
  reach1 = reachArray[r1];
  reach1Score = rArray[r1];
  rArray[r1] = 0;

  var r2 = checkLargestValueInArray(rArray);
  reach2 = reachArray[r2];
  reach2Score = rArray[r2];
  rArray[r2] = 0;

  var r3 = checkLargestValueInArray(rArray);
  reach3 = reachArray[r3];
  reach3Score = rArray[r3];
  rArray[r3] = 0;

  var r4 = checkLargestValueInArray(rArray);
  reach4 = reachArray[r4];
  reach4Score = rArray[r4];
  rArray[r4] = 0;


if (targetAvgScoreArray.length == 0){
  var srray = safetyAvgScoreArray;

  var s1 = checkLargestValueInArray(srray);
  target1 = safetyArray[s1];
  target1Score = srray[s1];
  srray[s1] = 0;

  var s2 = checkLargestValueInArray(srray);
  target2 = safetyArray[s2];
  target2Score = srray[s2];
  srray[s2] = 0;

  var s3 = checkLargestValueInArray(srray);
  safety1 = safetyArray[s3];
  safety1Score = srray[s3];
  srray[s3] = 0;

  var s4 = checkLargestValueInArray(srray);
  safety2 = safetyArray[s4];
  safety2Score = srray[s4];
  srray[s4] = 0;

} else if (targetAvgScoreArray.length == 1){

  var tArray = targetAvgScoreArray;

  var t1 = checkLargestValueInArray(tArray);
  target1 = targetArray[t1];
  target1Score = tArray[t1];
  tArray[t1] = 0;

  var srray = safetyAvgScoreArray;

  var s1 = checkLargestValueInArray(srray);
  target2 = safetyArray[s1];
  target2Score = srray[s1];
  srray[s1] = 0;

  var s2 = checkLargestValueInArray(srray);
  safety1 = safetyArray[s2];
  safety1Score = srray[s2];
  srray[s2] = 0;

  var s3 = checkLargestValueInArray(srray);
  safety2 = safetyArray[s3];
  safety2Score = srray[s3];
  srray[s3] = 0;

} else {
  var tArray = targetAvgScoreArray;

  var t1 = checkLargestValueInArray(tArray);
  target1 = targetArray[t1];
  target1Score = tArray[t1];
  tArray[t1] = 0;

  var t2 = checkLargestValueInArray(tArray);
  target2 = targetArray[t2];
  target2Score = tArray[t2];
  tArray[t2] = 0;

  var sArray = safetyAvgScoreArray;

  var s1 = checkLargestValueInArray(sArray);
  safety1 = safetyArray[s1];
  safety1Score = sArray[s1];
  sArray[s1] = 0;

  var s2 = checkLargestValueInArray(sArray);
  safety2 = safetyArray[s2];
  safety2Score = sArray[s2];
  sArray[s2] = 0;

}


  console.log("Reach1: " + reach1 + "  Reach2: " + reach2 + "  Reach3: " + reach3 + "  Reach4: " + reach4 + "  Target1: " + target1 + "  Target2: " + target2 + "  Safety1: " + safety1 + " Safety2: " + safety2 + " ");


  document.getElementById('resultsh4').innerHTML = "Your Results: "
  document.getElementById('1reach').innerHTML = "Your 1st Reach is " + reach1 + " and it has a " + ((reach1Score / 25) * 100).toFixed(1) + "% match with your statistics";
  document.getElementById('2reach').innerHTML = "Your 2nd Reach is " + reach2 + " and it has a " + ((reach2Score / 25) * 100).toFixed(1) + "% match with your statistics";
  document.getElementById('3reach').innerHTML = "Your 3rd Reach is " + reach3 + " and it has a " + ((reach3Score / 25) * 100).toFixed(1) + "% match with your statistics";
  document.getElementById('4reach').innerHTML = "Your 4th Reach is " + reach4 + " and it has a " + ((reach4Score / 25) * 100).toFixed(1) + "% match with your statistics";
  document.getElementById('1target').innerHTML = "Your 1st Target is " + target1 + " and it has a " + ((target1Score / 25) * 100).toFixed(1) + "% match with your statistics";
  document.getElementById('2target').innerHTML = "Your 2nd Target is " + target2 + " and it has a " + ((target2Score / 25) * 100).toFixed(1) + "% match with your statistics";
  document.getElementById('1safety').innerHTML = "Your 1st Safety is " + safety1 + " and it has a " + ((safety1Score / 25) * 100).toFixed(1) + "% match with your statistics";
  document.getElementById('2safety').innerHTML = "Your 2nd Safety is " + safety2 + " and it has a " + ((safety2Score / 25) * 100).toFixed(1) + "% match with your statistics";


  var divShow = document.getElementById("results")

  divShow.style.display = "block";
}

function checkLargestValueInArray(tempArray){
  var maxIndex = tempArray.indexOf(Math.max(...tempArray));
  return maxIndex;
}
