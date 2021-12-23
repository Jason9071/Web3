const Web3 = require('web3');
const rpcURL = "HTTP://127.0.0.1:7545"

const web3 = new Web3(rpcURL);

const main = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    web3.eth.sendTransaction({
        from: accounts[0],
        to: accounts[1],
        value: '1000000000000000000'
    }).then((receipt)=>{
        console.log(receipt);
    });

    web3.eth.getBalance(accounts[0])
    .then(console.log);
    
    web3.eth.getBalance(accounts[1])
    .then(console.log);
}

main();

