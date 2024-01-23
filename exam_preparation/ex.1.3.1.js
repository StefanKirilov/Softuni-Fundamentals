function heroes(input){
    let n = Number(input.shift());
    let allHeroes = [];

    for (let i = 0 ; i < n ; i++){
        let token = input.shift().split(' ');
        let name = token[0];
        let hp = Number(token[1]);
        let mana = Number(token[2]); 

        allHeroes.push({
            name,
            hp,
            mana
        })
    }
    
       for (let i = 0; i < input.length; i++){
        let line = input[i];
        if (line === 'End'){
            break;
        };
        let token = line.split(' - ');
        let command = token[0];
        let hero = token[1];
        if(command === 'CastSpell'){
            let manaNeed = Number(token[2]);
            let spellNeed = token[3];
            for (x = 0 ; x < allHeroes.length ; x++){
                let currentHero = allHeroes[x];
                if (currentHero.name === hero){
                    if (currentHero.mana >= manaNeed){
                        currentHero.mana -= manaNeed;
                        console.log(`${hero} has successfully cast ${spellNeed} and now has ${currentHero.mana} MP!`);
                    }
                    else {
                        console.log(`${hero} does not have enough MP to cast ${spellNeed}!`);
                    }
                }
            }

        }
        else if (command === 'TakeDamage'){
            let damage = Number(token[2]);
            let attacker = token[3];
            for (x = 0 ; x < allHeroes.length ; x++){
                let currentHero = allHeroes[x];
                if (currentHero.name === hero){
                    if (currentHero.hp > damage){
                        currentHero.hp -= damage;
                        console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${currentHero.hp} HP left!`);
                    }
                    else {
                        console.log(`${hero} has been killed by ${attacker}!`);
                        allHeroes.splice(x,1);
                    }
                }
            }

        }
        else if (command === 'Recharge'){
            let amount = Number(token[2]);
            for (x = 0 ; x < allHeroes.length ; x++){
                let currentHero = allHeroes[x];
                if (currentHero.name === hero){
                    let oldMana = currentHero.mana;
                    currentHero.mana += amount;
                    if (currentHero.mana > 200){
                        currentHero.mana = 200;
                    }
                    let amountRecovered = currentHero.mana - oldMana;
                        console.log(`${hero} recharged for ${amountRecovered} MP!`);
                }
            }

        }
        else if (command === 'Heal'){
            let amount = Number(token[2]);
            for (x = 0 ; x < allHeroes.length ; x++){
                let currentHero = allHeroes[x];
                if (currentHero.name === hero){
                    let oldHp = currentHero.hp;
                    currentHero.hp += amount;
                    if (currentHero.hp > 100){
                        currentHero.hp = 100;
                    }
                    let amountRecovered = currentHero.hp - oldHp;
                        console.log(`${hero} healed for ${amountRecovered} HP!`);
                }
            }
        }

       }
            

       for (let i = 0 ; i < allHeroes.length ; i++){
        let currentHero = allHeroes[i];
        console.log(`${currentHero.name}`);
        console.log(`  HP: ${currentHero.hp}`);
        console.log(`  MP: ${currentHero.mana}`);
       }
        
    
}
heroes(['2',
'Solmyr 85 120',
'Kyrre 99 50',
'Heal - Solmyr - 10',
'Recharge - Solmyr - 50',
'TakeDamage - Kyrre - 66 - Orc',
'CastSpell - Kyrre - 15 - ViewEarth','End'])