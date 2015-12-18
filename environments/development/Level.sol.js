"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Level = (function (_Pudding) {
    _inherits(Level, _Pudding);

    function Level() {
      _classCallCheck(this, Level);

      _get(Object.getPrototypeOf(Level.prototype), "constructor", this).apply(this, arguments);
    }

    return Level;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Level.abi = [{ "constant": false, "inputs": [{ "name": "id", "type": "uint256" }], "name": "object_types", "outputs": [{ "name": "", "type": "uint16" }], "type": "function" }, { "constant": false, "inputs": [], "name": "num_objects", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "pay_royalty", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "finalize", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "clear", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "location", "type": "uint16" }], "name": "add_potion", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "location", "type": "uint16" }, { "name": "attack", "type": "uint16" }, { "name": "hp", "type": "uint16" }], "name": "add_monster", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_owner", "type": "address" }], "name": "set_owner", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "monster_attack", "outputs": [{ "name": "", "type": "uint16" }], "type": "function" }, { "constant": true, "inputs": [], "name": "finalized", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "monsters", "outputs": [{ "name": "", "type": "uint16" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }], "name": "object_locations", "outputs": [{ "name": "", "type": "uint16" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "monster_hp", "outputs": [{ "name": "", "type": "uint16" }], "type": "function" }, { "constant": false, "inputs": [], "name": "num_monsters", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "location", "type": "uint16" }], "name": "add_sword", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "total_royalties", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "location", "type": "uint16" }], "name": "add_shield", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "location", "type": "uint16" }], "name": "add_wall", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "location", "type": "uint16" }], "name": "add_staircase", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Level.binary = "606060405260058054600160a060020a03191633179055610a0b806100246000396000f3606060405236156100f05760e060020a60003504631d5a9f3f81146100f25780632030f7211461012e57806321970c0c146101385780634bb278f31461016b57806352efea6e146101c65780637212b67e1461023657806379216f5f146102c85780637cb97b2b146103575780638da5cb5b14610399578063a01bc729146103ab578063b3f05b97146103ff578063c0576b7314610412578063c13afa9114610466578063c368109c1461049d578063c4bd8ebc146104ee578063cc2c5453146104f9578063d6ef2b461461057c578063dd72953014610585578063e97b219014610608578063f262de8c1461068f575b005b6107126004356000600060005082815481101561000257505080526000805160206109eb83398151915281015462010000900461ffff16610498565b61072a6000545b90565b6100f06004805434908101909155600554604051600160a060020a03919091169160009182818181858883f15050505050565b6100f0600554600160a060020a03908116339190911614801561019a575060055460a060020a900460ff166000145b156101c4576005805474ff0000000000000000000000000000000000000000191660a060020a1790555b565b6100f0600554600160a060020a0390811633919091161480156101f5575060055460a060020a900460ff166000145b156101c457600060016000508181548183558181151161092e57600f016010900481600f0160109004836000526020600020918201910161092e9190610343565b6100f0600435600554600160a060020a039081163391909116148015610268575060055460a060020a900460ff166000145b15610396576040805180820190915281815260046020820152600080546001810180835582908280158290116107595781836000526020600020918201910161075991905b8082111561079757805463ffffffff191681556001016102ad565b6100f0600435602435604435600554600090600160a060020a039081163391909116148015610302575060055460a060020a900460ff1681145b156108a0575060018054808201808355909182918280158290116108a657600f016010900481600f016010900483600052602060002091820191016108a691905b808211156107975760008155600101610343565b6100f0600435600554600160a060020a0390811633919091161415610396576005805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b61073c600554600160a060020a031681565b610712600435600280548290811015610002575060008190527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601080840491909101549206026101000a900461ffff1681565b61072a60055460a060020a900460ff1681565b61071260043560018054829081101561000257506000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf66010808304919091015491066002026101000a900461ffff1681565b6107126004356000600060005082815481101561000257505080526000805160206109eb83398151915281015461ffff165b919050565b610712600435600380548290811015610002575060005260108082047fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b015491066002026101000a900461ffff1681565b61072a600154610135565b6100f0600435600554600160a060020a03908116339190911614801561052b575060055460a060020a900460ff166000145b156103965760408051808201909152818152600660208201526000805460018101808355829082801582901161075957828052610759906000805160206109eb8339815191529081019083016102ad565b61072a60045481565b6100f0600435600554600160a060020a0390811633919091161480156105b7575060055460a060020a900460ff166000145b156103965760408051808201909152818152600560208201526000805460018101808355829082801582901161075957828052610759906000805160206109eb8339815191529081019083016102ad565b6100f0600435600554600160a060020a03908116339190911614801561063a575060055460a060020a900460ff166000145b15610396576040805180820190915281815260016020820181905260008054918201808255909190829082801582901161075957828052610759906000805160206109eb8339815191529081019083016102ad565b6100f0600435600554600160a060020a0390811633919091161480156106c1575060055460a060020a900460ff166000145b156103965760408051808201909152818152600260208201526000805460018101808355829082801582901161075957828052610759906000805160206109eb8339815191529081019083016102ad565b6040805161ffff929092168252519081900360200190f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b505050815481101561000257600091825260209182902001805483519390920151620100000261ffff199290921690921763ffff0000191617905550565b5090565b505050508360016000508281548110156100025760009190915260108082047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60191066002026101000a81548161ffff0219169083021790555082600260005082815481101561000257600082905260108082047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace01929106026101000a81548161ffff021916908302179055508160036000508281548110156100025760009190915260108082047fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0191066002026101000a81548161ffff021916908302179055505b50505050565b505060028054600181018083559093509091508280158290116108ea57600f016010900481600f016010900483600052602060002091820191016108ea9190610343565b5050600380546001810180835590935090915082801582901161079b57600f016010900481600f0160109004836000526020600020918201910161079b9190610343565b50505050600060026000508181548183558181151161096e57600f016010900481600f0160109004836000526020600020918201910161096e9190610343565b5050505060006003600050818154818355818115116109ae57600f016010900481600f016010900483600052602060002091820191016109ae9190610343565b5050505060006000600050818154818355818115116109e0578183600052602060002091820191016109e091906102ad565b50506000600455505056290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563";

  if ("" != "") {
    Level.address = "";

    // Backward compatibility; Deprecated.
    Level.deployed_address = "";
  }

  Level.generated_with = "1.0.2";
  Level.contract_name = "Level";

  return Level;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Level = factory;
}