const Web3 = require('web3')

const web3 = new Web3('http://localhost:8545')

const private_key = `0x128029115a76f8d35572b5759682270aa9c21a74736cffea43fa8857dd462df5`

const myAccount = web3.eth.accounts.wallet.add(private_key)

console.log(myAccount)

module.exports = {
    web3: web3,
    myAccount: myAccount
}