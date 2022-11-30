const hre = require('hardhat');

const main = async () => {
  const huddleContractFactory = await hre.ethers.getContractFactory('Huddle');
  const huddleContract = await huddleContractFactory.deploy();
  await huddleContract.deployed();
  console.log('Huddle Contract deployed to:', huddleContract.address);

  const huddleTipsContractFactory = await hre.ethers.getContractFactory(
    'HuddleTips'
  );
  const huddleTipsContract = await huddleTipsContractFactory.deploy();
  await huddleTipsContract.deployed();
  console.log('Huddle Tips Contract deployed to:', huddleTipsContract.address);

  const huddleCommentsContractFactory = await hre.ethers.getContractFactory(
    'HuddleComments'
  );
  const huddleCommentsContract = await huddleCommentsContractFactory.deploy();
  await huddleCommentsContract.deployed();
  console.log(
    'Huddle Comments Contract deployed to:',
    huddleCommentsContract.address
  );
};

// Huddle Contract deployed to: 0x4354Fdd1abc992de353430B8Bb3E55f4606C2575 - verified
// Huddle Tips Contract deployed to: 0xA67843ED2701a0509d8789D2A9f509fE02bfBC3E - verified
// Huddle Comments Contract deployed to: 0xA88bAB6EA73921fc77eb903d9E3e22028a1787b4 - verified

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
