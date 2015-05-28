
QUnit.test( "n2a initilize test", function( assert ) {
	assert.ok( Native2Ascii != null, "Passed!");
});

QUnit.test( "n2a single word test", function( assert ) {
	var target = 'あ';
	var result = Native2Ascii.n2a(target);
	assert.equal(  result, "\\u3042", target + ":Passed!");
});

QUnit.test( "n2a multi word test", function( assert ) {
	var target = 'なんてことだ？';
	var result = Native2Ascii.n2a(target);
	assert.equal(  result, "\\u306a\\u3093\\u3066\\u3053\\u3068\\u3060\\uff1f", target + ":Passed!");
});

QUnit.test( "a2n single word test", function( assert ) {
	var target = '\\u3042';
	var result = Native2Ascii.a2n(target);
	assert.equal( result, "あ", result + ":Passed!");
});

QUnit.test( "a2n multi word test", function( assert ) {
	var target = "\\u306a\\u3093\\u3066\\u3053\\u3068\\u3060\\uff1f";
	var result = Native2Ascii.a2n(target);
	assert.equal( result, "なんてことだ？", result + ":Passed!");
});
