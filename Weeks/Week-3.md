# Week 2
---
## 🔴 Monday
### 1) 
``` js
function likes(names) {
  // TODO
  if(names.length === 0){
    return 'no one likes this';
  }else if(names.length == 1){
    return names[0] +' like this'
  }
  else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this` 
  }
  else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this` 
  }
  else if(names.length >= 4){
    return `${names[0]}, ${names[1]} and others like this` 
  }
}
```
### 2) 
``` js
var countBits = function(n) {
  // Program Me
  return n.toString(2).replace(/0/g, "").length;
};
```
### 3) 
``` js
decodeMorse = function(morseCode){
  //your code here
    let msg = '';
    let words = morseCode.trim().split("   ");
    for(let word of words){
        let characters = word.split(" ")
        for(let character of characters){
            msg += MORSE_CODE[character];
        }
        msg += ' ';
    }
    return msg.trim();
}
```

## 🔴 Tuesday
### 1) 
``` js
function order(words){
    let t = words.split(" ");
    let result = []; 
    let position = 0;
    for(let i of t){
        position = i.replace(/[a-zA-Z]/g, "");
        result[position] = i;
    }

    result += " ";
    return result.trim();
}

```
### 2) 
``` js
function duplicateCount(text){
    text = text.toLowerCase();
    let count = 0;
    while(text){
        let finds = text.match(new RegExp(text[0], "g"));
        if(finds && finds.length > 1){ 
            count = count + 1;
        }
        text = text.replace(new RegExp(text[0], "g"),'');
    }
    return count;
}
```
### 3) 
``` js
function pigIt(str){
    str = str.toLowerCase();
    str = str.split(" ");
    var l;
    for(let i = 0; i< str.length; i++){
        if(str[i].match(/[a-z]/g)){
            l = str[i][0];
            str[i] = str[i].slice(1);
            str[i] += l + "ay";
        }
    }
    return str.join(" ");
}
```

## 🔴 Wednesday
### 1) 
``` js
function validParentheses(parens) {
    if(parens === "") return true;
    if(parens.length % 2 !== 0) return false;
    if(parens[0] === ')' || parens[parens.length-1] === '(') return false;
    let open = 0, closed = 0;
    for(let x of parens){
        if(x === '(') open++;
        if(x === ')') closed++;
        if(closed > open) return false;
    }
    if(open === closed) return true;
    return false;
}
```
### 2) 
``` js
function toCamelCase(str){
    return str.split(/-|_/).map((word, i) =>{
        if(word.length === 0) return "";
        if(i===0) return word;
        return word[0].toUpperCase() + word.slice(1);
    }).join("");
}
```
### 3) 
``` js
var uniqueInOrder=function(iterable){
    let res = [] 
    let prev = '';
    for(let x of iterable){
        if(x !== prev) res.push(x);
        prev = x;
    }
    return res;
}
```

## 🔴 Thursday
### 1) 
``` js
function foldArray(array, runs){
    let aux = array;
    let res = [];
    let l = 0; 
    let add = 0;

    while(runs > 0){
        res = [];
        l = Math.trunc(aux.length / 2)
        add = aux.length-1;

        for(let i = 0; i < l; i++){
            res.push(aux[i]+aux[add]);
            add--;
        }

        if(aux.length % 2 === 1) res.push(aux[l]);
        aux = re;
        runs--;
    }

    return res;
}
```
### 2) 
``` js
var encryptThis = function(text) { 
    //to do...
    return text.split(" ").map((word) => {
        if(word.length === 1) return '' + word.charCodeAt();
        if(word.length === 2) return word.charCodeAt(0) + word[1];
        return word.charCodeAt(0) + word[word.length-1] + word.slice(2,-1) + word[1];
    }).join(" ");
}
```
### 3) 
``` js
function list(names){
    if(names.length === 0){
        return '';
    }else{
        let res = names[0].name;
        for(let i = 1; i < names.length; i++){
            i + 1 === names.length ? res += ' & ' + names[i].name : res += ', ' + names[i].name
        }
    }
    return res;
}
```
---
