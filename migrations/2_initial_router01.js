const UniswapV2Router01 = artifacts.require("UniswapV2Router01");

module.exports = function (deployer) {
  deployer.deploy(UniswapV2Router01,'0x0F3ac74CD8094f5d4d36b5768d90Bb58451dF795','0x65A98D861a1E8e9E1404EF5d19C24a70e022B935');
};
