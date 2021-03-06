(function(window) {
  "use strict";
    
    //devProtect
/*    var spt = window.document.createElement("script");
    spt.src = "http://localhost:4000/check";
    window.document.body.insertBefore(spt,null);
*/
  var Trefoil = function() {  
    console.log("hello Trefoil");
    
    this.t = 0;
    
    this.rotate = document.getElementById("rotate-anim");
    this.Theta;

    this.horz = document.getElementById("horz-anim");
    this.x;
    this.vert = document.getElementById("vert-anim");
    this.y;
    this.scale = document.getElementById("scale-anim");
    this.s;
  
    this.setParamsBound = this.setParams.bind(this);
    this.transBound = this.trans.bind(this);

    this.on = false;
    this.turnOnOffBound = this.turnOnOff.bind(this);
  
    //for demo
    this.turnOnOffBound();
  };

  Trefoil.prototype.turnOnOff = function() {
    
    this.on = !this.on;

    if(this.on){
      this.setParamsInterval = setInterval(() => {
        this.setParamsBound();
      }, 14);
    } else {
      clearInterval(this.setParamsInterval);
    };
  };

  Trefoil.prototype.setParams = function() {
    this.t += 0.06;
    this.tt = this.t % (2 * Math.PI); // will need to change this constant after sleep
    this.x = 150 * Math.cos(this.tt);
    this.y = 550 * Math.sin(this.tt);
    this.s = 0.5 * Math.sin(2 * (this.tt + Math.PI / 2)) + 1;
    this.Theta = ( 360 / (3 * 2 * Math.PI ) ) * this.t;

    window.requestAnimationFrame(this.transBound);
  };

  Trefoil.prototype.trans = function() {
    this.horz.style.transform = "translateX(" + this.x + "%)";
    this.vert.style.transform = "translateY(" + this.y + "%)";
    this.scale.style.transform = "scale(" + this.s + ")";
    
    //console.log(this.Theta);
    this.rotate.style.transform = "rotate(" + this.Theta + "deg)";
  };

  var goodInterval = setInterval( () => {
    if(window.good && window.good === "good") {
      window.Trefoil = new Trefoil;
      clearInterval(goodInterval);
    } else if (window.good && window.good !== "good") {
      clearInterval(goodInterval); 
    };
  }, 10);

})(window);
