
// Arrow functions are a more concise syntax for writing function expressions in JavaScript. 
// They are often used for short functions and callbacks. 
// Here's an example of how to use arrow functions:

// 1. Arrow functions
function greet(username) {
  return 'Hello, ' + username;
}

// ES6 arrow function equivalent
const greetArrow = (username) => {
  return `Hello, ${username}`;
};

// Shorter version of the arrow function
const greetShort = username => `Hello, ${username}`;


//Print all three, then run the file. You should see Hello, Alex three times:
console.log(greet('Alex'));
console.log(greetArrow('Alex'));
console.log(greetShort('Alex'));

// 2. Template literals

//Add three const variables to the top of the file, then create a new message using template literals.
const testUser = 'John Doe';
const testEnvironment = 'staging';
const testCount = 5;

// Build the message the old way with + signs:
const oldMessage = 'Running ' + testCount + ' tests for user ' + testUser + ' in ' + testEnvironment;


// Build the same message the ES6 way. The backtick is the key above Tab:
const newMessage = `Running ${testCount} tests for user ${testUser} in ${testEnvironment}`;

console.log(oldMessage);
console.log(newMessage);



// Destructuring is a convenient way of extracting values from arrays or 
// properties from objects into distinct variables.

//Add a test configuration object:

// 3. Destructuring
const testConfig = {
  baseUrl: 'https://insurance.roadtoqa.com',
  timeout: 30000,
  retries: 2,
};


// The old way takes one line per value:
//const baseUrl = testConfig.baseUrl;
//const timeout = testConfig.timeout;
//const retries = testConfig.retries;
//console.log(baseUrl, timeout, retries);


//Now the ES6 way, in one line. The names must match the keys
const { baseUrl, timeout, retries } = testConfig;
console.log(baseUrl, timeout, retries);


// Spread operator allows an iterable such as an array or string to be expanded in places where zero
// or more arguments (for function calls) or elements (for array literals) are expected, 
// or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// 4. Spread operator (...)
//Merge two test lists and add one more test:
const basicTests = ['login', 'logout'];
const advancedTests = ['api test', 'performance test'];
const allTests = [...basicTests, ...advancedTests, 'security test'];
console.log(allTests);

//Copy a config and add a browser:
const defaultConfig = { timeout: 3000, retries: 3 };
const customConfig = { ...defaultConfig, browser: 'firefox' };
console.log(customConfig);

// 5. Default parameters
//Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.
// 5. Default parameters
const runTest = (testName, browser = 'chromium', timeout = 3000) =>
  `${testName} on ${browser} with ${timeout}ms timeout`;

//Call it three ways and print each one:
console.log(runTest('Login test'));
console.log(runTest('Login test', 'firefox'));
console.log(runTest('Login test', 'firefox', 6000));


// Enhanced object literals: shorter objects and methods

//Write the old way and the shorthand way:
// 6. Enhanced object literals 
const username = 'testuser';
const password = 'testpass';


const user1 = { username: username, password: password };
const user2 = { username, password };
console.log(user1);
console.log(user2);


//Write a method the old way and with method shorthand:

// Old way:
const admin1 = {
  name: 'admin',
  login: function () { return 'Logged in'; },
};

// New way (shorthand)
const admin2 = {
  name: 'admin',
  login() { return 'Logged in'; },
};
console.log(admin1.login());
console.log(admin2.login());

// PRACTICE:
//Day 22 example 
function add(a, b=0){
    return a + b; 
}

// Arrow function version
const addArrow = (a, b=0) => a + b;

console.log(add(5, 3));
console.log(addArrow(5, 3));

//Find a string from an earlier day that uses + signs. Rewrite it as a template literal.
const testperson = 'Ronald';
const browsername = 'chromium';
const result = 'passed';


// + signs version:
console.log(testperson + ' is using ' + browsername + ', and the test ' + result + '.');

// Template literal version:
const practice = (testperson, browser = 'chromium', result = 'passed') =>
  console.log(`${testperson} is using ${browser}, and the test ${result}.`);

practice(testperson, browsername, result);


//Write your own function with a default browser, like openSite(url, browser = 'chromium'). 
//Call it three ways: with no browser, with firefox and with webkit.

const openSite = (url, browser = 'chromium') => {
  console.log(`Opening ${url} in ${browser}`);
};

openSite('https://example.com');
openSite('https://example.com', 'firefox');
openSite('https://example.com', 'internet explorer');