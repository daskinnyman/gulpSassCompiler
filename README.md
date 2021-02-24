# gulpSassCompiler

A gulp project that takes [webcompiler](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebCompiler) config file to compile scss files. 

# How to use it?

1. Put this folder into your project.

2. Create a .env file in this project folder root (where contains gulpfile.js,  and define variables below:
    
```javascript
// Note: The path is related to the gulpfile.js in this project 
// The folder and file path you want to watch for change
WATCH_PATH="../foo/**/*.scss"
// The file path to your compilerConfig.json.defaults
DEFAULT_CONFIG_PATH ="../foo/compilerConfig.json.defaults"
// The file path to your compilerConfig.json
CUSTOM_CONFIG_PATH ="../foo/compilerConfig.json"
```

3. Install gulp globally using `npm i -g gulp`.

4. Install npm dependencies using `npm i `.

5. Start sass:watch with `npm run watch` or you can compile sass file once using `npm run start`.

6. Edit your scss in the folder you just configed, you'll see the compiled css file.