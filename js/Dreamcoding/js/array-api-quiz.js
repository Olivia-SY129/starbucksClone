// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const newString = fruits.reduce((x, y) => x + y);
    const joined = fruits.join(', ');
    console.log(newString);
    console.log(joined);
}

  // Q2. make an array out of a string**
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const arr = fruits.split(',');
    // const arr = Array.from(fruits);
    // arr.splice(1,2);
    // arr.splice(2,2);
    // arr.splice(3,2);
    console.log(arr);
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
}

  // Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const newArr = array.slice(2);
    console.log(newArr);
    console.log(array);

    // splice changes the original array
    // array.splice(0,2);
    // console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
console.log(students);
  // Q5. find a student with the score 90
{
    const elites = students.filter(student => student.score === 90);
    const score90 = students.find(student => student.score === 90);
    console.log(elites);
    console.log(elites.map(student => student.name));
    console.log(score90);

}

  // Q6. make an array of enrolled students
{
    const enrolled = students.filter(student => student.enrolled === true);
    console.log(enrolled);
    console.log(enrolled.map(student => student.name));

}

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
{
    const scores = students.map(student => student.score);
    console.log(scores)
}

  // Q8. check if there is a student with the score lower than 50
{   // if one of them satisfies the condition
    const doBetter1 = students.some(student => student.score < 50);

    // alternative
    // every value must satisfy the condition
    const doBetter2 = !students.every(student => student.score < 50);

    console.log(doBetter1);
    console.log(doBetter2); 
}

  // Q9. compute students' average score
{
    const sum = students.map(student => student.score);
    const avg = sum.reduce((x,y) => x + y) / students.length
    console.log(avg);

    // must return current value
    // const result = students.reduce((prev, curr) => {
    //   console.log('----------');
    //   console.log(prev);
    //   console.log(curr);
    //   return curr;
    // });
    
    // alternative
      const result = students.reduce((prev, curr) => {
        return prev + curr.score;
      }, 0);
      console.log(result / students.length);
      
    

}

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{
    const scores = students.map(student => student.score);
    const scoreString = scores.join(', ');
    console.log(scoreString);

    // more concise way
    const result = students
      .map((students) => students.score)
      .join(', ');
    console.log(result);
}

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
{
    const scores = students.map(student => student.score);
    const sorted = scores.sort();
    const scoreString = sorted.join(', ');
    console.log(scoreString);

    // concept of sort
    const result = students
      .map((student) => student.score)
      .sort((a, b) => a - b) // ascending order (a is smaller then b)
      .sort((a, b) => b - a) // decending order (b is smaller then a); the returen is negative
      .join(', ');
    console.log(result);
}