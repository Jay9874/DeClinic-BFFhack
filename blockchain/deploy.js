const { web3, myAccount } = require('./utils')

const { bytecode } = require('./contractArtifacts')

console.log(web3, myAccount, bytecode);


async function deploy () {
  await web3.eth.sendTransaction({
      from: myAccount.address,
      value: "1000000000000000",
      gas: 800000,
      data: bytecode
    })
    .on('receipt', console.log)
}

deploy()
