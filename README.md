# Calculator

## Web aplication build in Angular
Link: [https://tonimitrevski.github.io/calculator/](https://tonimitrevski.github.io/calculator/)

#### Implementation path of Calculator Module
src/components/calculator

### Coding standards
https://angular.io/guide/styleguide

### Development
#### Instal npm modules
```
npm install
```
#### Development
```
npm run start
```
#### Production build
```
npm run build
```
#### Run Unit Test
```
npm run test
```
#### CI/CD
 - Github Action
 - Jenkins
 
#### Run with Docker
 - Build
 ```
    docker build -t calculator .
 ``` 
 - Run
 ```
    docker run -it --rm --name calculator-container -p 5555:80 calculator
 ```
<p>And if you now enter http://localhost:5555/ you’ll see that it’s running!</p>
