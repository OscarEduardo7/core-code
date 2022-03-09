![Core Code](/Weeks/images/corecode2.png)
# Week 9
---
## 🔴 Monday
### 1) 
Watch this video: ✅✅

### 2) 
Watch this video: ✅✅

### 3) 
React kata - List of EasterEggs - 

``` js
import React from 'react';

export const EggList = (props) => {
  const eggs = props.eggs;
  
  return(
    <ul>
      { eggs.map((n, i)=>{
        return <EasterEgg key={i} name={n}/>
      })}
    </ul>
  );
};

export const EasterEgg = (props) => {
  const name = props.name;
  
  return(
    <li>{name}</li>
  );
  
};
```

## 🔴 Tuesday
### 1) 
Read the following resources about Node.JS and explain what's Node.JS in your own words:
- Resource 1 ✅✅
- Resource 2 ✅✅

🔊 Answer: It is an open source environment to be able to run different applications on many platforms, it allows us to have many connections at the same time and create scalable applications.

### 2) 
Answer the question: What is the V8 Javascript Engine? (Use your own words)

🔊 Answer:It is the interpreter created by google for browsers and is currently also used in the backend as the NodeJs series.

### 3) 
Answer the question: What is NVM and Why is it useful for Node.JS developers?

🔊 Answer: Node Version Manager is a bash script used to manage multiple released versions of Node. js. Allows to perform operations such as install, uninstall, change version of Node.js

### 4)
Learn about the Node.JS module system, you can start here. ✅✅

### 5)
Read about the different types of Node.JS modules ✅✅

### 6)
Explain the differences between ESModules and CommonJS modules

🔊 Answer: The main difference is that CommonJs allows modules to be loaded synchronously, while ESModules allows modules to be loaded synchronously and asynchronously.

### 7)
Create your own Local Node.JS module. The module must contain a function that calculates
the sum of two numbers. Use the previously created function in another file in any way.

My module:
``` js
exports.Sum = function(a,b){
    console.log("This is a sum.");
    return a + b;
}
```
My publish module:

 ![Publish_Module](/Weeks/Week-9/npm1.png)

Install my module:

![Install_Module](/Weeks/Week-9/npm3.png)

Test my module:
``` js
var mymodule = require('own-local')
console.log(mymodule.Sum(10,10));
```

![Install_Module](/Weeks/Week-9/npm2.png)



### 8)
Watch this video about the Client-Server architecture.


## 🔴 Wednesday
### 1) 

### 2) 

### 3) 

---
