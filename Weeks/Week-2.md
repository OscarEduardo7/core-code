# Week 2
---
## 🔴 Tuesday
### 1) 
``` js
function multiply(a,b){
  return a*b;
}
```
### 2) 
``` js
function unitotal (string) {
  var total;
  for(let x of string){
    total.append += x.charCodeAt(0);
  }
  return total;
}
```
### 3) 
``` js
function getChar(c){
  return String.fromCharCode(c);
}
```
### 4) 
``` js
function addBinary(a,b) {
  let add = a + b;
  let binary = add.toString(2);
  result = String(binary)
  return result;
}
```
### 5) 
``` js
function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 && projects >= 5) return 90;
  if(exam > 50 && projects >= 2) return 75;
  return 0;
}
```
## 🔴 Wednesday
### 1) 
``` js
function dutyfree(normPrice, discount, hol) {
  return Math.trunc(hol/(normPrice*(discount/100)));
}
```
### 2) 
``` js
function twiceAsOld(dadYearsOld, sonYearsOld) {
  result = Math.abs(dadYearsOld - sonYearsOld *2); 
  return result;
}
```
### 3) 
``` js
function validSpacing(s) {
  if(s.length === 0){
    return true;
  }
  if(s[0] === ' ' || s[s.length-1] === ' '){
    return false;
  }
  
  for(let i = 0; i < s.length; i++){
    if(s[i] === ' ' && s[i+1] === ' ') {
        return false;
    }else{
        return true;
    }
  }

}
```
### 4) 
``` js
function fakeBin(x){
  let result;
  for(let d of x)
    Number(d)<5 ? result += 0 : result += 1;
  return result;
}
```

## 🔴 Thursday
### 1) 
``` js
function remove (string) {  
  let result = string;
  while(result[result.length -1] === "!")
    result = result.substr(0, result.length-1);
  return result;
}
```
### 2) 
``` js
function shortcut (string) {
  return string.replace(/[aeiou]/g, "");
}
```
### 3) 
``` js
const rps = (p1, p2) => {
  if(p1 == p2) return "Draw!";
  if(p1 == "paper" && p2 == "rock") return "Player 1 won!";
  if(p1 == "scissors" && p2 == "paper") return "Player 1 won!";
  if(p1 == "rock" && p2 == "scissors") return "Player 1 won!";
  else
  return "Player 2 won!";
}
```
### 4) 
``` js
function persistence(num) {
  let count = 0, result;
  while(num > 9){
    result = 1;
    for(let x of String(num))
      result *= Number(x);
    num = result;
    count++;
  }
  return count;
}
```
---

