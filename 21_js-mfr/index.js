// Ray Onishi
// SoftDev2 pd7
// K21 -- Onions, Bell Peppers, and Celery, Oh My!
// 2019-04-29

// Schools with asian percentage of school over 50% in the school year 2011-2012
var asianPopulation = data.filter(
  function(school) {
    return (school.asian_per > 50 && school.schoolyear == 20112012);
  }
)

console.log(asianPopulation);

// Schools with total enrollment greater than 2500 in the school year 2011-2012
var bigSchools = data.filter(
  function(school){
    return(school.total_enrollment > 2500 && school.schoolyear == 20112012);
  }
)

console.log(bigSchools);

// Schools with mostly equal percentage of male and female in the school year 2011-2012
var genderEqual = data.filter(
  function(school){
    return(school.male_per > 49 && school.male_per < 51 && school.schoolyear == 20112012);
  }
)

console.log(genderEqual);
