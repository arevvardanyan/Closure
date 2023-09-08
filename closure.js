// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1
const createCounter = function(){
    let i = 0;

    return function(){
        i++
        return i
    }
}


const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter());


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2
const privateVariable = function(num){
    let numVal = num
        const get = function(){
            return numVal
        }
        const set = function(value){
            numVal = value
            return numVal
        }

        return {
            get,
            set
        }
    
}


// const secretValue = privateVariable(42); 
// console.log(secretValue.get()); // Output: 42 
// secretValue.set(1005); 
// console.log(secretValue.get());


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 3
// const createCachingFunction = function(){
//     let cache  = [];
//     console.log(cache)
//     return function(num){

//         let multi = num * 2;

//             if(cache.length === 0){
//                 cache.push(num)
//                 return `${multi} (calculated)`
//             }else{
//                 for(let i = 0; i< cache.length; i++){
//                     if(!(cache.includes(num))){
//                         cache.push(num)
//                         return `${multi} (calculated)`
//                     }else{
//                         cache.push(num)
//                         return `${multi} (cached)`
//                     }
            
    
//                 }
//             }
         
//     }
     
// }


const createCachingFunction = function(){
    let obj = {}
    return function(num){
        let multi = num * 2
        if(obj.length === 0){
            obj[num] = num
            return `${multi} (calculated)`
        }else{
            if(num in obj){
                return `${multi} (cached)`
            }else{
                
                obj[num] = num
                return `${multi} (calculated)`
            }
            
        }

    }
}


const cachedCalculation = createCachingFunction(); 
// console.log(cachedCalculation(5)); // Output: 10 (calculated)
// console.log(cachedCalculation(6));
// console.log(cachedCalculation(5));



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 4

const createPerson = function(name,age){
    let nameSet = name;
    let ageSet = age
    const getName = function(){
        return nameSet
    }
    const getAge = function(){
        return ageSet
    }
    const setName = function(name){
        nameSet = name
        return nameSet
    }
    const setAge = function(age){
        ageSet = age
        return ageSet
    }

    return {
        getName,
        getAge,
        setName,
        setAge
    }
}

// const person = createPerson("Alice", 30); 
// console.log(person.getName()); // Output: "Alice"
// console.log(person.getAge()); // Output: 30 
// person.setName("Bob"); 
// person.setAge(25); 
// console.log(person.getName()); // Output: "Bob"
// console.log(person.getAge());


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 5


// function add(a = 0, b = 0, c = 0) { 
//     return a + b + c; 
// } 
// function partial(foo,num){
//     return function(a,b){
//         return foo(num,a,b) 
//     }
// }
// const add5 = partial(add,5);
// console.log(add5(10,20))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 6




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 7

function createCalculator(str){

    switch(str){
        case "add":
            return function(a,b){
                return a+b
        };
        case "multiply":
            return function(a,b){
                return  a * b
        }
    }
        
    
}

const multiply = createCalculator("add"); 
// console.log(multiply(2,8))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 8


function add(a , b , c ) { 
    return a + b + c; 
} 

const curry = function(foo){
    return function(...a){
        let sum1;
        if(a.length === 3){
            return foo(...a)
        }else{
            sum1 = [...a]
        }
       return function(...b){

        if(sum1.length === 2){
            return sum1[0] + sum1[1] + b[0]
        }
        
            return function(...c){
                return foo(a[0],b[0],c[0])
            }
       }
    } 
}
const curriedAdd = curry(add); 
// console.log(curriedAdd(1)(2)(3));
// console.log(curriedAdd(1,2)(3));
// console.log(curriedAdd(1,2,3));