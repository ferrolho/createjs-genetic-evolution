{
	Substance.RADIUS = 8;
	Substance.Type = ['A', 'B', 'C', 'D', 'E'];

	function Substance() {
		this.speed = randomBetweenFloats(0, 1);
		this.type = randomBetween(0, Substance.Type.length);

		var headingDeg = randomBetween(0, 360);
		this.heading = new Victor(Math.cos(deg2rad(headingDeg)), Math.sin(deg2rad(headingDeg)));

		this.rotation = randomBetween(-2, 2);

		this.initShape(randomBetween(0, canvas.width), randomBetween(0, canvas.height));
	}

	Substance.prototype.initShape = function(x, y) {
		this.shape = new createjs.Shape();

		this.shape.x = x;
		this.shape.y = y;

		switch (this.type) {
			case 0:
			this.shape.graphics.beginFill('rgba(200, 200, 0, 0.5)');
			break;

			case 1:
			this.shape.graphics.beginFill('rgba(0, 140, 0, 0.5)');
			break;

			case 2:
			this.shape.graphics.beginFill('rgba(200, 0, 0, 0.5)');
			break;

			case 3:
			this.shape.graphics.beginFill('rgba(200, 0, 200, 0.5)');
			break;

			case 4:
			this.shape.graphics.beginFill('rgba(0, 0, 200, 0.5)');
			break;

			default:
			this.shape.graphics.beginFill('rgba(100, 100, 100, 0.5)');
			break;
		}

		if (this.type == 0)
			this.shape.graphics.drawCircle(0, 0, Substance.RADIUS);
		else
			this.shape.graphics.drawPolyStar(0, 0, Substance.RADIUS, this.type + 2, 0, -90);

		this.shape.snapToPixel = true;
		this.shape.cache(-Substance.RADIUS, -Substance.RADIUS, 2 * Substance.RADIUS, 2 * Substance.RADIUS);

		stage.addChild(this.shape);
	}

	Substance.prototype.update = function() {
		this.shape.rotation += this.rotation;

		this.shape.x = (this.shape.x + this.heading.x * this.speed).mod(canvas.width);
		this.shape.y = (this.shape.y + this.heading.y * this.speed).mod(canvas.height);
	}

}

console.log('Loaded: entities/Substance.js');
