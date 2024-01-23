function register(arr){

    let newArr = [];
    

    for (let i = 0; i<arr.length ; i++){
        let lines = arr[i].split(', ');

        let token = lines[2].split(': ');
        let score = Number(token[1]);

        if (score >= 3.00){
            newArr.push(arr[i]);

        }
    }

    let secondArr =[];

    for (let i = 0 ; i < newArr.length ; i++){

        

        let lines = newArr[i].split(', ');
        let obj = {};
        
        for (let j = 0 ; j < lines.length ; j++){
            let token = lines[j].split(': ');
            let key = token[0];
            let prop = token[1];
            
            obj[key] = prop;

        }
        secondArr.push(obj);
        
    }
    let sorted = secondArr.sort((a,b) => {
        return a.Grade - b.Grade;
    });


    let firstStudent = secondArr[0];
    

    
    let nextGrade = 0;
    let start = 0;

    for (let i = 1 ; i < secondArr.length; i++) {
        let student = secondArr[i];
        if (firstStudent.Grade === student.Grade){
            nextGrade = Number(student.Grade) + 1;
            if (i === secondArr.length - 1){
                studentsArr = secondArr.slice(start,i+1);
                let average = 0;
                let studentsName = [];
            let studentAverage = [];
            for (let student of studentsArr) {
                studentsName.push(student[`Student name`]);
                studentAverage.push(student[`Graduated with an average score`]);
            }
            for (let score of studentAverage) {
                average += Number(score);  
            }
            average = average / Number(studentAverage.length);

            console.log(`${nextGrade} Grade`);
            console.log(`List of students: ${studentsName.join(', ')}`);
            console.log(`Average annual score from last year: ${average.toFixed(2)}`);
            console.log(``);
            }  
        }
        else {
            
            studentsArr = secondArr.slice(start,i);
            let average = 0;
            start = i;

            let studentsName = [];
            let studentAverage = [];
            for (let student of studentsArr) {
                studentsName.push(student[`Student name`]);
                studentAverage.push(student[`Graduated with an average score`]);
            }
            for (let score of studentAverage) {
                average += Number(score);  
            }
            average = average / Number(studentAverage.length);

            console.log(`${nextGrade} Grade`);
            console.log(`List of students: ${studentsName.join(', ')}`);
            console.log(`Average annual score from last year: ${average.toFixed(2)}`);
            console.log(``);


           
        }
        firstStudent = student;
        
    }

}
register(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75","Student name: Ethan, Grade: 9, Graduated with an average score: 5.66","Student name: George, Grade: 8, Graduated with an average score: 2.83","Student name: Steven, Grade: 10, Graduated with an average score: 4.20","Student name: Joey, Grade: 9, Graduated with an average score: 4.90","Student name: Angus, Grade: 11, Graduated with an average score: 2.90","Student name: Bob, Grade: 11, Graduated with an average score: 5.15","Student name: Daryl, Grade: 8, Graduated with an average score: 5.95","Student name: Bill, Grade: 9, Graduated with an average score: 6.00","Student name: Philip, Grade: 10, Graduated with an average score: 5.05","Student name: Peter, Grade: 11, Graduated with an average score: 4.88","Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);