var $            = require("jquery")          ;
var React        = require("react")           ;
var ReactDOM     = require("react-dom")       ;
var ReactClasses = require("./react-classes") ;
var tokenDefs    = require("./token-defs")    ;

window.React = React;

var tokensField, tokensDrawer, output;

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

//	tokensDrawer = $(".tokens-drawer") ;
//	output       = $(".output")        ;
//	tokensField  = $(".tokens-field")  ;
//		.attr("contenteditable", "true")
//		.keyup(tokensFieldUpdated);

//	Token           : Token           ,
//	TokenDrawer     : TokenDrawer     ,
//	PromptFormatIn  : PromptFormatIn  ,
//	PromptFormatOut : PromptFormatOut


	ReactDOM.render(
		React.createElement( ReactClasses.Stage, {tokens : tokenDefs} ),
		document.getElementById("Stage")
	);
});