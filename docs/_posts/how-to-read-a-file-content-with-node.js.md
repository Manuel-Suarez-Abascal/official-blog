---
author: Manuel Abascal
date: 2021-01-24
location: Montreal
tag:
  - JavaScript
  - Node.js
  - Modules
---

### How to read a file's content with Node.js

Let's say when we want to create a `script` to read a file's content & store its value on it a `variable`. We can accomplish this by using the [`readFileSync`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options) method from the [`fs`](https://nodejs.org/api/fs.html#fs_file_system) built-in module which enables you to interact with the file system in [Node.js](https://nodejs.org/en/).

Let's create two files. The file named `file1.js` will contain some basic maths `functions` & we'll use it to have some content to read from. 

 ```js
 // file1.js
 const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};
 ```
The file `read-file-content.js` will contain the `script` to read other file's content.

```js
// we import the built-in fs module
const fs = require('fs');

// calling the method readFileSync 
// first param is the file's path we wish to read
// second param is the character encoding type
const fileContent = fs.readFileSync('./file1.js', 'utf8');

console.log(fileContent); // should print file1.js's content
```
 
As you can see, it's quite simple to accomplish this. However, our code is not very [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) & if we wish to reuse this `function` we need to duplicate it elsewhere in our codebase which it is not ideal.
 
So we can refactor this into a `function` & export it to be used elsewhere in our codebase like so: 

```js
const fs = require('fs');

/**
 * Method to read a file's content
 * Returns another a string representing the file's content
 * @param {str} - filePath - a passed string representing the file's path we want to read
 */
const readFileContent = filePath => fs.readFileSync(filePath, 'utf-8');

const fileContent = readFileContent('./file1.js');

module.exports = readFileContent;
```

Now, we just need to import it whenever we want to use in our codebase like this:

```
const readFileContent = require('<path-to-the-read-file.js>');

const fileContent = readFileContent('<file-path-you-want-to-read>');

console.log(fileContent) // prints file's content
```

I hope you found this tutorial useful! :rocket:

