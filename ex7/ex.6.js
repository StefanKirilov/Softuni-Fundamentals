function companyUsers(input){

    let list = {};

    for (let line of input) {
        let [name , id] = line.split(" -> ");
        if (!list.hasOwnProperty(name)){
        list[name] = [];
        }
        list[name].push(id);
    }
    sortCompany = Object.keys(list).sort((a,b) => a.localeCompare(b));

    for (const key of sortCompany) {
        console.log(`${key}`);
        let set = new Set(list[key]);
        for (const number of set) {
            console.log(`-- ${number}`);
        }
        
    }


}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])