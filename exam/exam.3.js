function chatLogger(arr){
    let command = arr.shift();
    let newArr =[];


    while(command !== "end"){
        let token = command.split(" ");
        let activity = token.shift();

        switch (activity){
            case "Chat":
                let msg = token.shift();
                newArr.push(msg);

            break;

            case "Delete":
                let deleteMsg = token.shift();
               if(newArr.includes(deleteMsg)){
               newArr.splice(newArr.indexOf(deleteMsg) , 1)
               }

            break;

            case "Edit":
                let changeMsg = token.shift();
                let newMsg = token.shift();
               if(newArr.includes(changeMsg)){
               newArr.splice(newArr.indexOf(changeMsg) , 1 , newMsg);
               }

            break;

            case "Pin":
                let pinMsg = token.shift();
                if(newArr.includes(pinMsg)){
                    newArr.splice(newArr.indexOf(pinMsg) , 1)
                    newArr.push(pinMsg);
                }

            break;

            case "Spam":
                for (let i = 0 ; i < token.length; i++){
                    newArr.push(token[i]);
                }
                

            break;
        }
        command = arr.shift();
    }
    console.log(newArr.join("\n"));

}
chatLogger(["Chat Hello", "Chat darling", "Edit darling Darling", "Spam how are you", "Delete Darling", "end"])