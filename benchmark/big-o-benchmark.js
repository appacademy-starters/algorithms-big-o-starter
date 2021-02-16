// use this file to run your timing benchmarks


// helper function
const randomNumberArr = (max) => {
    const res = new Array();

    for (let i = 0; i < max; i++) {
        const randomNumber = Math.floor(Math.random() * Math.floor(max));

        res.push(randomNumber);
    }

    return res;
};





/****************************** Testing push ******************************/
const jsPush = (arr) => {
    const res = new Array();

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }

    return res;
};

// Write hypothesis for time complexity here

// Write tests here
// Ex:
// let randomArr = randomNumberArr(1000);
// console.time('Timer finished in');
// jsPush(randomArr);
// console.timeEnd('Timer finished in');

// Write conclusion for time complexity here






/****************************** Testing pop ******************************/
const jsPop = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr.pop()
    }
    
    return arr;
};

// Write hypothesis for time complexity here

// Write tests here

// Write conclusion for time complexity here








/**************************** Testing enumerables ****************************/
// Write testing functions here for map, filter, reduce, every, and other
// enumerables for Array's.
// Remember to write a hypothesis for the time complexity for each enumerable
// that you test. After testing, record your conclusions for time complexities.

// Write tests here







/****************************** Testing unshift ******************************/
const jsUnshift = (arr)  => {
    const res = new Array();

    for (let i = 0; i < arr.length; i++) {
        res.unshift(arr[i]);
    }
    
    return arr;
};

// Write hypothesis for time complexity here

// Write tests here

// Write conclusion for time complexity here








/****************************** Testing shift ******************************/
const jsShift = (arr)  => {
    const res = new Array();

    for (let i = 0; i < arr.length; i++) {
        arr.shift();
    }
    
    return arr;
};

// Write hypothesis for time complexity here

// Write tests here

// Write conclusion for time complexity here








