var React = require("react");

var Stage = React.createClass({
	displayName : "Stage",
	render      : function() {
		return (
			<div className="stage">
				<TokenDrawer     tokens={this.props.tokens} />
				<PromptFormatIn                             />
				<PromptFormatOut                            />
			</div>
		);
	}
});

var Token = React.createClass({
	displayName : "Token",
	render      : function() {
		var token = this.props.token;
		return (
			React.createElement("span",
				{
					className       : "token",
					style           : {
						backgroundColor : token.color     ,
						color           : token.textColor
					},
					contentEditable : "false",
					onClick         : this.props.onClick
				},
				token.escapeChar
			)
		);
	}
});

var TokenInDrawer = React.createClass({
	displayName  : "TokenInDrawer",
	clickHandler : function() {
		//var fld = document.getElementById("PromptFormatIn");
	},
	render       : function() {
		var token = this.props.token;
		return (<Token token={token} onClick={this.clickHandler} />);
	}
});

var TokenDrawer = React.createClass({
	displayName : "TokenDrawer",
	render      : function() {
		var tokens = this.props.tokens.map(function(token)
		{
			return (<TokenInDrawer key={token.escapeChar} token={token} />);
		});

		return (
			<div className="panel tokens-drawer">
				<h1>Tokens</h1>
				{tokens}
			</div>
		);
	}
});

var PromptFormatIn = React.createClass({
	displayName : "PromptFormatIn",
	render      : function()
	{
		return (<div className="tokens-field" contentEditable="true"></div>);
	}
});

var PromptFormatOut = React.createClass({
	displayName : "PromptFormatOut",
	render      : function()
	{
		return (<div className="panel output"></div>);
	}
});

module.exports = {
	Stage : Stage
};
