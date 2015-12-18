var Wizard = React.createClass({
  getInitialState: function() {
    return {
      view: <ChooseCharacter next={this.handleCharacterChoice}/>,
      character: null,
      levels: [],
      modal: null,
      bet: 1,
      poll_interval_id: null
    }
  },
  handleCharacterChoice: function(character) {
    this.setState({
      character: character,
      view: <ChooseLevels next={this.handleLevelChoice}/>
    });
  },
  handleLevelChoice: function(levels) {
    this.setState({
      levels: levels,
      view: <ChooseBet next={this.handleBetChoice}/>
    });
  },
  handleBetChoice: function(bet) {
    var self = this;

    this.setState({
      bet: bet,
      view: <CreatingChallenge next={this.handleChallengeCreated}/>
    });

    // Create challenge here.
    var character_id = 0; // vitalik
    if (this.state.character == "satoshi") {
      character_id = 1;
    } else if (this.state.character == "nick") {
      character_id = 2;
    }

    var challenge;
    console.log(web3.toWei(bet, "ether"));
    Challenge.new(ChallengeRegistry.deployed_address, character_id, {value: web3.toWei(bet, "ether")}).then(function(c) {
      challenge = c;
      return challenge.add_levels(self.state.levels);
    }).then(function() {
      return challenge.set_gamebuilder(Gamebuilder.deployed_address);
    }).then(function() {
      self.setState({
        challenge: challenge,
        view: <WaitForChallenger next={self.handleChallenger} challenge={challenge}/>
      });
    }).catch(function(e) {
      alert("Error creating challenge! Oh no!");
      console.log(e);
    });
  },
  handleChallenger: function(_challenge) {
    var self = this;
    var challenge = _challenge? _challenge : this.state.challenge;
    var game, character;

    self.setState({
      modal: <SimpleModal title="Loading game..."/>
    });

    challenge.accept().then(function() {
      return challenge.game.call();
    }).then(function(game_address) {
      game = Game.at(game_address);
      return challenge.character.call();
    }).then(function(_character) {
      character = _character;
      self.setState({
        view: <Playgrid game={game} challenge={challenge} character={character}/>,
        modal: null
      });
    }).catch(function(e) {
      alert("Error accepting offer! Oh no!");
      console.log(e);
    });
  },
  componentDidMount: function() {
    var challenge = this.props.challenge;
    if (challenge) {
      this.handleChallenger(challenge);
    }
  },
  render: function() {
    var self = this;

    return (
      <div className="wizard">
        {self.state.view}
        {self.state.modal}
      </div>
    );
  }
});
