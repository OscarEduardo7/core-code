# Week 4
---
## 🔴 Tuesday
### 2) 
``` ts
export interface User{
    name: string;
    age: number;
    occupation: string;
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(User: User) {
    console.log(` - ${User.name}, ${User.age}`);
}

console.log('Users:');
users.forEach(logPerson);
```
### 4) 
``` ts
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```

### 5) 
``` ts
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
```

### 6)
```js
function findOdd(A) {
  //happy coding!
  let numbers = A.sort();
  console.log("numbers: " + numbers);
  if(A.length === 1){
    return A[0];
  }else{
    let count = 1;
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] === numbers[i+1]){
        count = count + 1;
      }else{
        if( (count % 2) !== 0){
          return numbers[i]; 
        }else{
          count = 1;
        }
      }
    }
  }
}
```

### 7)
```ts
function spinWords(string){
  myWords = string.split(' ');
  let result = ' ';
  for(let i = 0; i < myWords.length; i++){
    if(myWords[i].length >= 5){
      myWords[i] = myWords[i].split('').reverse().join('');
      result += myWords[i]+' ';
    }else{
      result += myWords[i]+' ';
    } 
  } 
  return result.trim();
}
```

## 🔴 Wednesday
### 1) 
``` js
function arrayDiff(a, b) {
  result = a.filter(number => !b.includes(number));
  return result;
}
```
### 2) 
``` js
function createPhoneNumber(numbers){
  let result = `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,).join('')}`;
  return result;
}
```
## 🔴 Thursday
### 1) 
``` js
wait for me...
```
### 2) 
``` js
wait for me...
```
### 3) 
``` js
wait for me...
```

### 4) 
``` js
wait for me...
```
### 5) 
``` js
wait for me...
```
---
