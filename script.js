const sqlQuestions = {
    "questions": [{
            "Q-1": "Write an SQL query to fetch “FIRST_NAME” from Worker table using the alias name as <WORKER_NAME>.",
            "answer": "SELECT FIRST_NAME AS WORKER_NAME FROM Worker;"
        },
        {
            "Q-2": "Write an SQL query to fetch “FIRST_NAME” from Worker table in upper case.",
            "answer": "SELECT UPPER(FIRST_NAME) FROM Worker;"
        },
        {
            "Q-3": "Write an SQL query to fetch unique values of DEPARTMENT from Worker table.",
            "answer": "SELECT DISTINCT DEPARTMENT FROM Worker;"
        },
        {
            "Q-5": "Write an SQL query to print the FIRST_NAME from Worker table after replacing ‘a’ with ‘A’.",
            "answer": "SELECT REPLACE(FIRST_NAME, 'a', 'A') FROM Worker;"
        },
        {
            "Q-6": "Write an SQL query to print the FIRST_NAME and LAST_NAME from Worker table into a single column COMPLETE_NAME. A space char should separate them.",
            "answer": "SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) AS COMPLETE_NAME FROM Worker;"
        },
        {
            "Q-7": "Write an SQL query to print all Worker details from the Worker table ordered by FIRST_NAME Ascending.",
            "answer": "SELECT * FROM Worker ORDER BY FIRST_NAME ASC;"
        },
        {
            "Q-8": "Write an SQL query to print all Worker details from the Worker table ordered by FIRST_NAME Ascending and DEPARTMENT Descending.",
            "answer": "SELECT * FROM Worker ORDER BY FIRST_NAME ASC, DEPARTMENT DESC;"
        },
        {
            "Q-9": "Write an SQL query to print details for Workers with the first name as “Vipul” and “Satish” from Worker table.",
            "answer": "SELECT * FROM Worker WHERE FIRST_NAME IN ('Vipul', 'Satish');"
        },
        {
            "Q-10": "Write an SQL query to print details of workers excluding first names, “Vipul” and “Satish” from Worker table.",
            "answer": "SELECT * FROM Worker WHERE FIRST_NAME NOT IN ('Vipul', 'Satish');"
        },
        {
            "Q-11": "Write an SQL query to print details of Workers with DEPARTMENT name as “Admin”.",
            "answer": "SELECT * FROM Worker WHERE DEPARTMENT LIKE 'Admin%';"
        },
        {
            "Q-12": "Write an SQL query to print details of the Workers whose FIRST_NAME contains ‘a’.",
            "answer": "SELECT * FROM Worker WHERE FIRST_NAME LIKE '%a%';"
        },
        {
            "Q-13": "Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘a’.",
            "answer": "SELECT * FROM Worker WHERE FIRST_NAME LIKE '%a';"
        },
        {
            "Q-14": "Write an SQL query to print details of the Workers whose SALARY lies between 100000 and 500000.",
            "answer": "SELECT * FROM Worker WHERE SALARY BETWEEN 100000 AND 500000;"
        },
        {
            "Q-15": "Write an SQL query to print details of the Workers who have joined in Feb’2014.",
            "answer": "SELECT * FROM Worker WHERE YEAR(JOINING_DATE) = 2014 AND MONTH(JOINING_DATE) = 2;"
        },
        {
            "Q-16": "Write an SQL query to fetch the count of employees working in the department ‘Admin’.",
            "answer": "SELECT COUNT(*) FROM Worker WHERE DEPARTMENT = 'Admin';"
        },
        {
            "Q-17": "Write an SQL query to fetch worker names with salaries >= 50000 and <= 100000.",
            "answer": "SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) AS Worker_Name, Salary FROM Worker WHERE WORKER_ID IN (SELECT WORKER_ID FROM Worker WHERE Salary BETWEEN 50000 AND 100000);"
        },
        {
            "Q-18": "Write an SQL query to print details of the Workers who are also Managers.",
            "answer": "SELECT DISTINCT W.FIRST_NAME, T.WORKER_TITLE FROM Worker W INNER JOIN Title T ON W.WORKER_ID = T.WORKER_REF_ID AND T.WORKER_TITLE IN ('Manager');"
        },
        {
            "Q-19": "Write an SQL query to show only odd rows from a table.",
            "answer": ["SELECT * FROM Worker WHERE MOD(WORKER_ID, 2) <> 0;",
                "SELECT * FROM Worker WHERE WORKER_ID%2!=0;",
            ]
        },
        {
            "Q-20": "Write an SQL query to show only even rows from a table.",
            "answer": ["SELECT * FROM Worker WHERE MOD(WORKER_ID, 2) = 0;",
                "SELECT * FROM Worker WHERE WORKER_ID%2=0;",
            ]
        },
        {
            "Q-21": "Write an SQL query to show the current date and time.",
            "answer": "SELECT NOW();"
        },
        {
            "Q-22": "Write an SQL query to show the top n (say 10) records of a table.",
            "answer": "SELECT * FROM Worker ORDER BY Salary DESC LIMIT 10;"
        },
        {
            "Q-23": "Write an SQL query to fetch the first 50% records from a table.",
            "answer": "SELECT * FROM WORKER WHERE WORKER_ID <= (SELECT COUNT(WORKER_ID)/2 FROM Worker);"
        },
        {
            "Q-24": "Write an SQL query to fetch the first row of a table.",
            "answer": "SELECT * FROM Worker WHERE WORKER_ID = (SELECT MIN(WORKER_ID) FROM Worker);"
        },
        {
            "Q-25": "Write an SQL query to fetch three max salaries from a table.",
            "answer": "SELECT DISTINCT Salary FROM Worker A WHERE 3 >= (SELECT COUNT(DISTINCT Salary) FROM Worker B WHERE A.Salary <= B.Salary) ORDER BY A.Salary DESC;"
        },
        {
            "Q-26": "Write an SQL query to fetch departments along with the total salaries paid for each of them.",
            "answer": "SELECT DEPARTMENT, SUM(Salary) FROM Worker GROUP BY DEPARTMENT;"
        }
    ]
};

let currentQuestionIndex = -1;

function askQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * sqlQuestions.questions.length);
    const randomQuestion = sqlQuestions.questions[currentQuestionIndex];
    const questionText = Object.values(randomQuestion)[0];

    document.getElementById('question-container').style.display = 'block';
    document.getElementById('question-text').innerText = `Question:\n${questionText}`;
    document.getElementById('user-answer').value = '';
    document.getElementById('result').innerText = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const randomQuestion = sqlQuestions.questions[currentQuestionIndex];
    const correctAnswer = randomQuestion.answer;

    if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
        document.getElementById('result').innerText = 'Correct! Well done!';
    } else {
        document.getElementById('result').innerText = `Incorrect. The correct answer is:\n${correctAnswer}`;
    }

}