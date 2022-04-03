// objects
// A JavaScript object is just a collection of properties.
// A property is a "key: value" pair.
// where the key is always a string, and value can be any data type.

// syntax
/* objectName = {
    key1: value1,
    key2: value2,
} */

var employee = {
    name: "Badusha Vali",
    age : 28,
    gender:"male",
}
console.log('employee', employee);

var employee2 = {
    name: 'arzain',
    age : 23,
    gender : 'male',
}
console.log('employee2', employee2);


//Json -- Javascript object notation

var staff = [
    {
        name: "Badusha Vali",
        age : 28,
        gender:"male",
    },
    {
        name: 'arzain',
        age : 23,
        gender : 'male',
    }
];

console.log('staff', staff);

// Accessing the objects properties
// object.key
// object["key"]

console.log(employee.name);
console.log(employee.age);
console.log(employee2["name"]);
console.log(employee2["age"]);

// Adding a new property  or updating existing property

// adding property by using the dot notation
// syntax
// objectName.keyName = value;
     employee.place   = 'bangalore'; // here adding new property with dot notation

console.log('employee', employee);

// adding property by using the [] notation
// syntax
// objectName[""];
    employee["country"] = 'India'; // here adding new property with [] notation

    console.log('employee', employee);

//updating value by using the dot notation

employee.place = 'hyderabad'; 
console.log(employee);

// updating value by using [] notation

employee2["place"] = 'Mumbai';
console.log(employee2);




