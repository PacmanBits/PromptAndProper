var $         = require("jquery")    ;
var tokenDefs = require("./token-defs") ;

var tokensField, tokensDrawer, output;

function makeToken(tokenName)
{
	var token = tokenDefs[tokenName];

	if(!token)
		throw "No such token";

	var tokenEl = $(document.createElement("span"))
		.addClass("token")
		.text(token.escapeChar)
		.data("escapeChar", token.escapeChar)
		.attr("contenteditable", "false");

	if(token.color)
		tokenEl.css("background-color", token.color);

	if(token.textColor)
		tokenEl.css("color", token.textColor);

	if(token.tooltip)
		tokenEl.attr("title", token.tooltip);
	else
		tokenEl.attr(tokenName);

	return tokenEl;
}

function makeDrawerToken(tokenName)
{
	return makeToken(tokenName)
		.click(function()
		{
			var tokenEl = makeToken(tokenName);

			tokensField.append(tokenEl);
			tokensFieldUpdated();
		})
		.css({
			"margin" : "0.5em" ,
			"cursor" : "pointer"
		});
}

function tokensFieldUpdated()
{
	var str = "";
	
	tokensField.contents().each(function()
	{
		var el = $(this);
		if(el.is(".token"))
			str += "\\" + el.data("escapeChar");
		else
		{
			str += el.text().replace(/\\/g, "\\\\");
		}

		return str;
	});

	output.text(str);
}

$(function()
{

	tokensDrawer = $(".tokens-drawer");
	output       = $(".output");
	tokensField  = $(".tokens-field")
		.attr("contenteditable", "true")
		.keyup(tokensFieldUpdated);


	for(var t in tokenDefs)
	{
		tokensDrawer.append(makeDrawerToken(t));
	}
});