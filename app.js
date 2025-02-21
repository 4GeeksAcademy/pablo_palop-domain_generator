let pronoun = ['the', 'your']
let adj = ['great', 'big', 'awesome']
let color = ['red', 'blue', 'yellow']
let object = ['door', 'window', 'table']


const domainGenerator = () => {
    pronoun.forEach(item1 => {
        adj.forEach(item2 => {
            color.forEach(item3 => {
                object.forEach(item4 => {
                    console.log(`${item1}${item2}${item3}${item4}.com`);
                    return(item1+item2+item3+item4+".com")

                });
            });
        });
    });
}

domainGenerator()