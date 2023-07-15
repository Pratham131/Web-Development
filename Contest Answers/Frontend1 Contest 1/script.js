let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function (element, index, list) {
        if(element.profession === 'developer'){
            console.log(element);
        }
    } )
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function (element, index, list) {
        if (element.profession === "developer") {
            console.log(element);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newData = {
        id:4,
        name:"susan",
        age:"20",
        profession:"intern"
    }
    arr.push(newData);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const updatedArr = arr.filter( function(element, index, list) {
        return element.profession !== "admin";
    })
    console.log(updatedArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 5, name: "deshmukh", age: "28", profession: "doctor" },
        { id: 6, name: "navin", age: "23", profession: "engineer" },
        { id: 7, name: "ramanujan", age: "39", profession: "teacher" },
    ];

    const concatenateArray = arr.concat(newArr);
    console.log(concatenateArray);
  }