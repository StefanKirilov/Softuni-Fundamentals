function extractFile(data){
let dataArr = data.split("\\");
let file = dataArr[dataArr.length - 1];
let fileArr = file.split(".");
let extension = fileArr[fileArr.length - 1];
let fileName = file.split(`.${extension}`)


console.log(`File name: ${fileName[0]}`);
console.log(`File extension: ${extension}`);


}
extractFile('C:\\Internal\\training-internal\\Template.pptx')