var React = require("react");

var Token = React.createClass({
	displayName : 'Token',
	render      : function() {
		var token = this.props.token;
		return (
			React.createElement('span',
				{
					className : "token",
					style     : {
						backgroundColor : token.color     ,
						color           : token.textColor
					}
				},
				token.escapeChar
			)
		);
	}
});

var TokenDrawer = React.createClass({
	displayName : 'TokenDrawer',
	render      : function() {
		var tokens = this.props.tokens.map(function(token)
		{
			return (<Token key={token.escapeChar} token={token} />);
		});

		return (
			<div>
				<h1>Tokens</h1>
				{tokens}
			</div>
		);
	}
});

module.exports = {
	Token       : Token       ,
	TokenDrawer : TokenDrawer
};
