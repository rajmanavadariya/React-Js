const fs=require("fs")

fs.writeFileSync("hello.txt","Intro my self")
fs.appendFileSync("hello.txt","Append file")

const a=fs.readFileSync("hello.txt")
console.log(a.toString())

fs.renameSync("hello.txt","welcome.txt");
