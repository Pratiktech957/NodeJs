const fs = require('fs');

fs.writeFileSync('data.txt', 'Hello, File System!');
console.log('File created successfully.');

const content = fs.readFileSync('data.txt', 'utf-8');
console.log(content);

// Append to file add data to file
fs.appendFile('file.txt',"new line added",(err)=>{
if (err) throw error;
console.log('Data Appended')



}
) 
