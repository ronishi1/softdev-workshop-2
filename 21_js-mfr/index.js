// Ray Onishi
// SoftDev2 pd7
// K21 -- Onions, Bell Peppers, and Celery, Oh My!
// 2019-04-29

// Percentage of asians in the school system in the year 2011-2012
var recentData = data.filter(
  function(school){
    return(school.schoolyear == 20112012)
  }
)

var asians = recentData.map(
  function(school){
    return school.asian_num;
  }
)

// To get rid of strings that occasionally pop up in the asian_nums
var asianNums = asians.filter(
  function(num){
    return(typeof num == 'number');
  }
)

var asianPop = asianNums.reduce(
  function(x,y){
    return x + y
  }
)

var total = recentData.map(
  function(school){
    return school.total_enrollment;
  }
)

var totalPop = total.reduce(
  function(x,y){
    return x+y
  }
)

var percentAsian = asianPop/totalPop * 100

document.getElementById("asian").innerHTML = "The percentage of asians in the school system in the school year 2011 to 2012 is <strong>" + Math.round(percentAsian * 100)/100+ "%</strong>";
// Schools with total enrollment greater than 2500 in the school year 2011-2012
var bigSchools = recentData.filter(
  function(school){
    return(school.total_enrollment > 2500);
  }
)

document.getElementById("big").innerHTML = "The number of schools with total enrollment greater than 2500 in the school year 2011 to 2012 is <strong>" + bigSchools.length + "</strong>";

console.log(bigSchools);

// Schools with mostly equal percentage of male and female in the school year 2011-2012
var genderEqual = recentData.filter(
  function(school){
    return(school.male_per > 49 && school.male_per < 51);
  }
)

document.getElementById("gender").innerHTML = "The number of schools with mostly equal percentages of male and female (+- 1%) in the school year 2011 to 2012 is <strong>" + genderEqual.length + "</strong>";
