(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function Asteroid(){
    Asteroids.MovingObject.apply(this, arguments);
    this.color = 'blue';
  }


  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.prototype.randomAsteroid = function(dimX, dimY){
    var center = [Math.random()*dimX, Math.random()*dimY];
    var radius = (Math.random()*60) + 10;
    var vel = [(Math.random() - .5)*7.5,(Math.random() - .5 )*7.5];
    return new Asteroid(center, vel, radius)
  }

  Asteroid.prototype.multiply = function(){
    var asteroid = this;
    var vel = [(Math.random() - .5)*7.5,(Math.random() - .5 )*7.5];
    var toProduce = Math.random() *5 ;
    var array = [];
    var startPos = [asteroid.pos[0]+5, asteroid.pos[1]+7]

    for(var i =0 ; i < toProduce; i++ ){
      vel = [(Math.random() - .5)*7.5,(Math.random() - .5 )*7.5];
      array.push(new Asteroid(startPos, vel, asteroid.radius - 4))
      debugger
      }
    return array
  }




})(this);