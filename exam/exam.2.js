function friendList (arr){
    let list = arr.shift().split(", ");
    let command = arr.shift();
    let blacklistedNames = 0;
    let lostNames = 0;
    


    while (command !== "Report"){
        let token = command.split(" ");
        let commands = token.shift();

        switch (commands){
        
            case "Blacklist" :
                let name = token.shift();
                if (list.includes(name)){
                    console.log(`${name} was blacklisted.`);
                    list.splice(list.indexOf(name), 1 , "Blacklisted")
                    blacklistedNames++;
                }
                else {
                    console.log(`${name} was not found.`);
                }
            break;
            case "Error" :
                let index = Number(token.shift());
                if (index < list.length){
                    if (list[index] !== "Blacklisted" && list[index] !== "Lost" ){
                        let searchName = list[index];
                        list.splice(index , 1 , "Lost")
                        console.log(`${searchName} was lost due to an error.`);
                    lostNames++;
                    }
                }
            break;
            case "Change" :
                let searchIndex = Number(token.shift());
                let newName = token.shift();
                if (searchIndex < list.length){
                    let searchName = list[searchIndex];

                    list.splice(searchIndex, 1 , newName);
                        console.log(`${searchName} changed his username to ${newName}.`);
                    
                    }
            break;
        }
        command = arr.shift();
       
    }
    console.log(`Blacklisted names: ${blacklistedNames}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(list.join(" "));

}
friendList(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]);