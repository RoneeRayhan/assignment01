function calculateGrade(score) {
    let grade;
  
    switch (true) {
      case score >= 90:
        grade = 'A';
        break;
      case score >= 80 && score <= 89:
        grade = 'B';
        break;
      case score >= 70 && score <= 79:
        grade = 'C';
        break;
      case score >= 60 && score <= 69:
        grade = 'D';
        break;
      default:
        grade = 'F';
    }
  
    return grade;
  }
  
  // Test cases
  console.log(calculateGrade(95)); // Output: 'A'
  console.log(calculateGrade(85)); // Output: 'B'
  console.log(calculateGrade(75)); // Output: 'C'
  console.log(calculateGrade(65)); // Output: 'D'
  console.log(calculateGrade(55)); // Output: 'F'
  