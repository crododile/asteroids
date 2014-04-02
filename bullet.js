(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(){
    Asteroids.MovingObject.apply(this, arguments);
    this.color = 'green'
    this.radius = 2;
	this.startX = this.pos[0]
	this.startY = this.pos[1]
  }
  


  Bullet.inherits(Asteroids.MovingObject);


  Bullet.prototype.draw = function(ctx){
      ctx.strokeStyle = this.color;
      ctx.beginPath();
	  
	  ctx.moveTo( this.pos[0] , this.pos[1] );
      ctx.bezierCurveTo(
		  (Math.abs(this.startX-this.pos[0])*this.vel[0]*0.5),
		  (Math.abs(this.startY-this.pos[1])*this.vel[1]*0.5),
		  300,300,
		  this.startX,this.startY);
		  
	  ctx.stroke();
  }




})(this);