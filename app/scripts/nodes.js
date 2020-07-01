"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
	ETH: "ETH",
	ETC: "ETC",
	Ropsten: "ROPSTEN ETH",
	Kovan: "KOVAN ETH",
	Rinkeby: "RINKEBY ETH",
	EXP: "EXP",
	UBQ: "UBQ",
	POA: "POA",
	TOMO: "TOMO",
	ELLA: "ELLA",
	ETSC: "ETSC",
	EGEM: "EGEM",
	CLO: "CLO",
	MUSIC: "MUSIC",
	GO: "GO",
	EOSC: "EOSC",
	AKA: "AKA",
	ESN: "ESN",
	PIRL: "PIRL",
	ETHO: "ETHO",
	ATH: "ATH",
	ILT: "ILT",
	WEB: "WEB",
	MIX: "MIX",
	REOSC: "REOSC",
	THUNDERCORE: "TT",
	EtherCore: "ERE",
	Custom: "CUSTOM EtherCore"
};
nodes.ensNodeTypes = [];
nodes.ensSubNodeTypes = [];
nodes.domainsaleNodeTypes = [];
nodes.customNodeObj = {
	name: "CUS",
	blockExplorerTX: "",
	blockExplorerAddr: "",
	type: nodes.nodeTypes.Custom,
	eip155: false,
	chainId: "",
	tokenList: [],
	abiList: [],
	service: "Custom",
	lib: null
};
nodes.nodeList = {
	ethercore: {
		name: "EtherCore Mainchain",
		blockExplorerTX: "https://explorer.ethercore.io/tx/[[txHash]]",
		blockExplorerAddr: "https://explorer.ethercore.io/address/[[address]]",
		type: nodes.nodeTypes.EtherCore,
		eip155: true,
		chainId: 496,
		tokenList: require("./tokens/ethercoreTokens.json"),
		abiList: require("./abiDefinitions/ethercoreAbi.json"),
		estimateGas: true,
		service: "ethercore.io",
		lib: new nodes.customNode("https://rpc.ethercore.io", "")
	},
	ethercore_sidechain: {
		name: "EtherCore Sidechain",
		blockExplorerTX: "https://sidechain-explorer.ethercore.io/tx/[[txHash]]",
		blockExplorerAddr: "https://sidechain-explorer.ethercore.io/address/[[address]]",
		type: nodes.nodeTypes.EtherCore,
		eip155: true,
		chainId: 497,
		tokenList: require("./tokens/ethercoreSidechainTokens.json"),
		abiList: require("./abiDefinitions/ethercoreSidechainAbi.json"),
		estimateGas: true,
		service: "sidechain.ethercore.io",
		lib: new nodes.customNode("https://sidechain-rpc.ethercore.io", "")
	},
	ethercore_testnet: {
		name: "EtherCore Testnet",
		blockExplorerTX: "https://testnet-explorer.ethercore.io/tx/[[txHash]]",
		blockExplorerAddr: "https://testnet-explorer.ethercore.io/address/[[address]]",
		type: nodes.nodeTypes.EtherCore,
		eip155: true,
		chainId: 498,
		tokenList: require("./tokens/ethercoreTestnetTokens.json"),
		abiList: require("./abiDefinitions/ethercoreTestnetAbi.json"),
		estimateGas: true,
		service: "testnet.ethercore.io",
		lib: new nodes.customNode("https://testnet-rpc.ethercore.io", "")
	}
};

nodes.ethPrice = require("./nodeHelpers/ethPrice");
module.exports = nodes;
