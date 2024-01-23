function partyTime(input){

   let viplist = [];
   let simplelist = [];
   

   let command = input.shift();
   

   while (command !== "PARTY"){
    let firstChar = command[0];
    if (isNaN(firstChar)){
        simplelist.push(command);
    }
    else{
        viplist.push(command);
    }
    
    command = input.shift();
    
   }
   let list = viplist.concat(simplelist);
   for (const guest of input) {
    if (list.includes(guest)){
        list.splice(list.indexOf(guest) , 1);
    }
    
   }

console.log(list.length);
list.forEach(guest => console.log(guest));


}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'])