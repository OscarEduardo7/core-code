# Week 8
---
## 🔴 Monday
### 1) 
Watch this video: ✅✅

### 2) 
Create a webpage that prints your name to the screen.
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <h1>Oscar Mazariegos</h1>
</body>
</html>
```
### 3) 
Create a webpage and set its title to "CoreCode Bootcamp".
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Core Code Bootcamp</title>
</head>
</html>
```

### 4)
Create a webpage that prints what you like the most about programming and give it a title of your choice.
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Code code code...</title>
</head>
<body>
    <p>
        Being able to design whatever you want from an application in my own way is a unique experience. I like programming because I can solve problems that range from the simplest to the most complex needs.
    </p>
</body>
</html>
```

## 🔴 Tuesday
### 1) 
Create a webpage that prints the numbers 1 - 10, each number being a different color. (No JS/TS).
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Code code Bootcamp</title>
</head>
<body style="text-align: center;">
    <h1>Numbers 1 - 10</h1>
    <h2 style="color:blue">1</h2>
    <h2 style="color:#F0256a">2</h2>
    <h2 style="color:#F35644">3</h2>
    <h2 style="color:#332255">4</h2>
    <h2 style="color:#984511">5</h2>
    <h2 style="color:#125236">6</h2>
    <h2 style="color:#025578">7</h2>
    <h2 style="color:#542156">8</h2>
    <h2 style="color:#102015">9</h2>
    <h2 style="color:#313131">10</h2>
</body>
</html>
```

### 2) 
Create a webpage that prints two lists with any information you want. One list should be an ordered list, the other list should be an unordered list.
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Code code Bootcamp</title>
</head>
<body >
    <h1>My list</h1>
    <div style="width: 10%;">
        <ul>
            <li>Car</li>
            <li>Airplane</li>
            <li>Truck</li>
        </ul>
    </div>
    <div style="width: 10%;">
        <ol>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </ol>
    </div>
</body>
</html>
```

### 3) 
Create a webpage that prints some random paragraphs (https://loremipsum.io/es/) and give them some titles using different header sizes.
![Loemipsum page](/Weeks/images/html1.png)

## 🔴 Wednesday
### 1) 
Create some links to various search engines.
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Code code Bootcamp</title>
</head>
<body >
    <h1>Search Engines</h1>
    <div style="width: 50%;">
        <ul>
            <li><a href="https://www.google.com">Google</a></li>
            <li><a href="https://www.bing.com/">Bing</a></li>
            <li><a href="https://es.ask.com/">ASK</a></li>
            <li><a href="https://espanol.yahoo.com/">Yahoo</a></li>
        </ul>
    </div>
</body>
</html>
```

### 2) 
Display five different images. Each image should have a title.
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Code code Bootcamp</title>
</head>
<body >
    <div style="background-color: rgb(126, 118, 9); text-align: center;">
        <h1>Five Images</h1>
    </div>
    <div style="display: flex; background-color: blue; justify-content: center;">
        <div style="margin: 25px; background-color: brown; display: flex; flex-direction: column; justify-content: center;">
            <img width="200px" height="200px" src="https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg"/>
            <h2 style="text-align: center;">Dog</h2>
        </div>
        <div style="margin: 25px; background-color: brown; display: flex; flex-direction: column; justify-content: center;">
            <img width="200px" height="200px" src="https://www.thespruce.com/thmb/fXjwNQJlSaHdluinEjNwcXQ3xTI=/2081x1441/filters:fill(auto,1)/GettyImages-898377636-cb49f5c0b57140af9a7d6d3b8be1100e.jpg"/>
            <h2 style="text-align: center;">Horse</h2>
        </div>
        <div style="margin: 25px; background-color: brown; display: flex; flex-direction: column; justify-content: center;">
            <img width="200px" height="200px" src="https://c.files.bbci.co.uk/151AB/production/_111434468_gettyimages-1143489763.jpg"/>
            <h2 style="text-align: center;">Cat</h2>
        </div>
        <div style="margin: 25px; background-color: brown; display: flex; flex-direction: column; justify-content: center;">
            <img width="200px" height="200px" src="https://www.petmd.com/sites/default/files/styles/article_image/public/goldfish-swimmingtoward_285011336_0.jpg?itok=ZZaLxiFQ"/>
            <h2 style="text-align: center;">Gold Fish</h2>
        </div>
        <div style="margin: 25px; background-color: brown; display: flex; flex-direction: column; justify-content: center;">
            <img width="200px" height="200px" src="https://i.pinimg.com/originals/35/0c/fe/350cfea7c1159f61fc0ffa605b72772b.jpg"/>
            <h2 style="text-align: center;">Horse Fish</h2>
        </div>
    </div>
</body>
</html>
```
![Five Images](/Weeks/images/html2.png)

### 3) 
Display an image that when clicked will link to a website of your choice (should be opened in a new window).
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Code code Bootcamp</title>
</head>
<body >
    <div style="background-color: rgb(126, 118, 9); text-align: center;">
        <h1>Link Image</h1>
    </div>
    <div style="display: flex; background-color: blue; justify-content: center;">
        <div style="margin: 25px; background-color: brown; display: flex; flex-direction: column; justify-content: center;">
            <a href="https://www.liveaquaria.com/category/40/" target="_blank"><img width="200px" height="200px" src="https://i.pinimg.com/originals/35/0c/fe/350cfea7c1159f61fc0ffa605b72772b.jpg"/></a>
            <h2 style="text-align: center;">Horse Fish</h2>
        </div>
    </div>
</body>
</html>
```
![Link Image](/Weeks/images/html3.png)

## 🔴 Thursday
### 1) 
``` html
```

### 2) 
``` html
```

### 3) 
``` html
```

---
