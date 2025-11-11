import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deployFn: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {

    const { deployments, ethers, getChainId, getNamedAccounts, network } = hre;

    const { deployer } = await getNamedAccounts();
	const chainId = await getChainId();

	console.log('\n\nDeploying SimpleOnboarder on network:', network.name);
	console.log('Deployer address:', `${chainId}:${deployer}`);
	console.log(
		'Deployer balance:',
		ethers.utils.formatEther(await ethers.provider.getBalance(deployer)),
	);

    const { deploy } = deployments;

	// Deploy the SimpleOnboarderShaman template (singleton)
	const simpleOnboarderTemplate = await deploy('SimpleOnboarderShaman', {
		contract: 'SimpleOnboarderShaman',
		from: deployer,
		args: [],
		log: true,
	});
	console.log('SimpleOnboarderShaman template deployed at:', simpleOnboarderTemplate.address);

	// Deploy the SimpleOnboarderShamanSummoner factory
    const summonerDeployed = await deploy('SimpleOnboarderShamanSummoner', {
		contract: 'SimpleOnboarderShamanSummoner',
		from: deployer,
		args: [simpleOnboarderTemplate.address],
		log: true,
	});
	console.log('SimpleOnboarderShamanSummoner deployment Tx ->', summonerDeployed.transactionHash);
	console.log('SimpleOnboarderShamanSummoner deployed at:', summonerDeployed.address);
};

export default deployFn;
deployFn.tags = ['SimpleOnboarder'];
