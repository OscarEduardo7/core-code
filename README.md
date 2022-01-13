## Core-Code
Core Code BootCamp

---

# Week 1

## 🔴 Tuesday

### 2) Java language is compiled or interpreted?

Java language is both, because its source code is compiled into a bytes code and later this code is interpreted with the java virtual machine.

### 3) Algorithm to calculate the equivalent of your local currencty to USD.
- Start
- Take te value in Q.
- Search the value of de USD money.
- The values are Q.1 is equial to 0.13 USD.
- The value in Q.  is multiplied by 0.13 USD.
- Save the equivalente.
- Finish.

### 5) Why is pseudocode helpful?

The pseudocode is helpful because is a introduction before a write a code, is simple and they can be write with words known. It gives us an idea of what we want to program.

### 6) Create a pseudocode to calculate the aproximated age of a user base on the year they born.

- Start.
- Define variable "year".
- Define variable "age".
- Ask the user their year born.
- Save the year born in to "year" variable.
- Use the actual year and subtract the value of "year" variable.
- Save the result of subtraction in to "age" variable.
- Show "age" variable.
- Finish.

### 8)  Why are flowcharts important to us as developers?
The flowcharts are important because the representation of an algorithm or pseudocode is to easy to show or read. We can analize they process and they activities.

## 🔴 Wednesday

### 2) Translate the year you where born to binary, decimal and hexadecimal

* My birth year: 1995.
* * Binary: 11111001011
* * Hexadecimal: 7CB

### 3) Translate 51966 into hexadecimal and binary

* Binary: 1100101011111110
* Hexadecimal: CAFE

### 5.1) Create a program to add two numbers given by the user

```assembler
.data
	number1: .asciiz "\nPrimer numero: "
	number2: .asciiz "\nSegundo numero: "
    result_message: .asciiz "\nEl resultado es: "

.text
	main:
		li $v0, 4
		la $a0, number1
		syscall

		li $v0, 5
		syscall

		move $t0, $v0

		li $v0, 4
		la $a0, number2
		syscall

		li $v0, 5
		syscall

		move $t1, $v0
        add $t2, $t0, $t1

		li $v0, 4
		la $a0 result_message
		syscall

        li $v0, 1
		move $a0, $t2
		syscall
```

### 5.2) Create a program that display your name

```
.data
    message: .asciiz "\n Oscar Eduardo Mazariegos López \n"
  .text
    main:
      li $v0, 4
      la $a0, message
      syscall
```
---

