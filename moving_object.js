(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject =  function (pos, vel, radius, color) {
      this.pos = pos;
      this.vel = vel;
      this.radius = radius;
      this.color = color;
	  this.deg = 0
    }

    MovingObject.prototype.move = function(){
      var that = this
      var arr = [0,1];
      arr.forEach(function(i){
        that.pos[i] += that.vel[i];
      })
    }

    MovingObject.prototype.draw = function(ctx){
      ctx.strokeStyle = this.color;
      ctx.beginPath();
	  
	  ctx.moveTo( this.pos[0] , this.pos[1] );
  

	  // ctx.lineTo(
	  // 		  (this.pos[0] + ( Math.sin(this.deg) ) ),
	  // 		  (this.pos[1] + ( Math.cos(this.deg) ) )
	  // );
	  // 	
	  this.deg += 0.1;

  	  // ctx.moveTo( this.pos[0] , this.pos[1] );
  // 	  
      // ctx.arc(
 //        this.pos[0],
 //        this.pos[1],
 //        this.radius,
 //        0,
 //        2*Math.PI,
 //        false
 //      );
   
      ctx.stroke();
	  for (var i = 0; i < 25; i++ ){
		   ctx.moveTo( this.pos[0] , this.pos[1] );
		   ctx.lineTo(this.pos[0] + Math.cos(this.deg*i)*this.radius,
		   this.pos[1] + Math.sin(this.deg*i)*this.radius)
		   ctx.stroke()
         }
    };

    MovingObject.prototype.isCollidedWith = function(otherObject){
      var operandX = Math.pow((this.pos[0] - otherObject.pos[0]), 2);
      var operandY = Math.pow((this.pos[1] - otherObject.pos[1]), 2);
      var distance = Math.sqrt(operandX + operandY)
      if (distance <= (this.radius + otherObject.radius)){
        return true;
      }
      return false;
    }

    Function.prototype.inherits = function(klass){

      function Surrogate(){};

      Surrogate.prototype = klass.prototype;
      this.prototype = new Surrogate();
    }




})(this);