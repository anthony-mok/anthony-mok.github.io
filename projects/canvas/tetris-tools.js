function rand(lower, higher) {
	return lower + Math.ceil(Math.random()*(higher - lower + 1)) - 1;
}

function fill_array(size, init) {
	var output = [];
	for (var i = 0; i < size; i++) {
		output.push(init);
	}
	return output;
}

function fill_matrix(width, height, init) {
	var output = [];
	for (var i = 0; i < width; i++) {
		output.push([]);
		for (var j = 0; j < height; j++) {
			output[i].push(init);
		}
	}
	return output;
}

function increase_brightness(hex, percent){
    var r = parseInt(hex.substr(1, 2), 16),
        g = parseInt(hex.substr(3, 2), 16),
        b = parseInt(hex.substr(5, 2), 16);

    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}

function decrease_brightness(hex, percent){
    var r = parseInt(hex.substr(1, 2), 16),
        g = parseInt(hex.substr(3, 2), 16),
        b = parseInt(hex.substr(5, 2), 16);

    return '#' +
       ((0|(1<<8) + r * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b * percent / 100).toString(16)).substr(1);
}

function drawRoundedRect(ctx,x,y,width,height,radius,fill,stroke)
{
    ctx.save();	// save the context so we don't mess up others
    ctx.beginPath();

    // draw top and top right corner
    ctx.moveTo(x+radius,y);
    ctx.arcTo(x+width,y,x+width,y+radius,radius);

    // draw right side and bottom right corner
    ctx.arcTo(x+width,y+height,x+width-radius,y+height,radius); 

    // draw bottom and bottom left corner
    ctx.arcTo(x,y+height,x,y+height-radius,radius);

    // draw left and top left corner
    ctx.arcTo(x,y,x+radius,y,radius);

    if(fill){
	ctx.fill();
    }
    if(stroke){
	ctx.stroke();
    }
    ctx.restore();	// restore context to what it was on entry
}