// Made by lapide with an example!
var cn = document.querySelector("#main-frame-error > div.runner-container > canvas");
var h =cn.getContext('2d');
function op() {
h.filter='opacity(20%)'
}
var main2D = document.querySelector("#main-frame-error > div.runner-container > canvas").getContext('2d');
var tRexName = "Ohe"
var main = document.querySelector("#main-frame-error > div.runner-container > canvas")
function showXY() {
alert('Press F12 To make this work.');
main2D.clearRect(Runner.instance_.tRex.xPos,Runner.instance_.tRex.yPos,90,90);
main2D.fillStyle='black';
main2D.fillText(`Y: ${Runner.instance_.tRex.yPos}  X: ${Runner.instance_.tRex.xPos}           NAME: ${tRexName}`, Runner.instance_.tRex.xPos,Runner.instance_.tRex.yPos + 15,90,90);
requestAnimationFrame(showXY);
}
// h.rotate(50);
function lag(){
h.filter = 'brightness(50%)'
}
function light() {
	h.filter="brightness(0%)"
}
function dark() {
	h.filter="brightness(500%)"
}

// h.canvas.offsetParent.remove();
// h.canvas.offsetParent.style.background="red"
function fg() {
h.fillRect(50,50,50,50);
}
// h.canvas.offsetParent.title="DINO";
var r = document.createElement('div')
document.body.prepend(r);
function followBox() {
var x = 0;
var y = 0;
var g = document.createElement('div');
g.style.height = '100px';
g.style.background = 'red'
g.style.width = '100px';
g.style.position = 'fixed';
function hg(e) {
x = e.clientX;
y = e.clientY;
g.style.left = x+"px";
g.style.top = y+"px";
}
document.body.onmousemove = hg;
document.body.prepend(g);
}
r.innerHTML='<button onclick="lag()">Lag</button><button onclick="op()">Low OP</button><button onclick="followBox();">Box To Cursor</button><button onclick="showXY();">Kinda ESP</button><button onclick="light()">Light</button><button onclick="fg()">Box</button><button onclick="spec()">Rainbow Sky</button><button onclick="dark()">Dark</button>'
function getLine() {
h.fillText('Element Console',50,50);
h.clearRect(50,50,20,20);
}
getLine();
h.canvas.style.transition='2s';
function spec() {
setTimeout(function(){h.canvas.style.background="green";},1000);
setTimeout(function(){h.canvas.style.background="darkblue";},2000);
setTimeout(function(){h.canvas.style.background="darkgreen";},3000);
setTimeout(function(){h.canvas.style.background="lime";},4000);
setTimeout(function(){h.canvas.style.background="lightgreen";},5000);
setTimeout(function(){h.canvas.style.background="white";},6000);
setTimeout(function(){h.canvas.style.background="black";},7000);
setTimeout(function(){h.canvas.style.background="lightred";},8000);
setTimeout(function(){h.canvas.style.background="lightblue";},9000);
setTimeout(function(){h.canvas.style.background="blue";},10000);
setTimeout(function(){h.canvas.style.background="red";},20000);
setTimeout(function(){spec();},30000);
}
var r = document.createElement('div');
function godmode() {
var e = document.createElement('button');
	e.innerText='Godmode';
  var l = document.getElementById('goddec');
l.innerText="Disable Godmode";
  l.addEventListener('click', function(){
        l.innerText="Disable Godmode";
      
Runner.instance_.gameOver=Runner.prototype.gameOver;
l.replaceWith(e);
  });
    e.addEventListener('click', function(){
       e.innerText='Godmode';
 Runner.instance_.gameOver=function(){}
 
        e.replaceWith(l);
    });
}
function skinMaker() {
	/*
var e = document.createElement('button');
	e.innerText='Disable ESP';
  var l = document.getElementById('esp');
l.innerText="ESP - Not working";
  l.addEventListener('click', function(){
        l.innerText="ESP";
      
document.querySelector("#offline-resources-2x").src="https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/hitbox.png?raw=true";
document.querySelector("#offline-resources-1x").src="https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/hitbox.png?raw=true";
l.replaceWith(e);
//https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/e.png?raw=true
  });// https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/hitbox.png?raw=true
    e.addEventListener('click', function(){
       e.innerText='Disable ESP';
 document.querySelector("#offline-resources-2x").src="https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/e.png?raw=true";
 document.querySelector("#offline-resources-1x").src="https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/e.png?raw=true";
        e.replaceWith(l);
    });
    */
	console.log('Not working.');
}
function unstop() {
    this.setPlayStatus(true);
    this.paused = false;
}
function Close() {
	r.replaceWith('')
}
function hide() {
	var hider = document.createElement('button');
	r.replaceWith(hider);
	hider.innerText="Open";
    hider.addEventListener('click', function(){
         hider.replaceWith(r);
    });
}
function loopkill() {
setInterval(function(){Runner.instance_.gameOver=Runner.prototype.gameOver;Runner.instance_.gameOver()}, 1);
    }
r.id="modmenu";
r.innerHTML='<style>.btu1 {color: white; background: black}</style><button class="btu1" id="goddec" onclick="godmode();">Godmode</button><button class="btu1" onclick="Runner.instance_.stop();">Pause Dino</button><button class="btu1" onclick="++Runner.instance_.currentSpeed">+Speed</button><button class="btu1" onclick="--Runner.instance_.currentSpeed">-Speed</button><button class="btu1" onclick="unstop();">Unpause Dino</button><button onclick="window.close();">Close ChromeDine</button><button onclick="--Runner.instance_.tRex.config.GRAVITY">-Gravity</button><button onclick="hide();">Hide</button><button onclick="++Runner.instance_.tRex.config.GRAVITY">+Gravity</button><button id="esp" onclick="skinMaker()">ESP</button><button onclick="Close()">Close</button><button onclick="++Runner.instance_.tRex.config.INIITAL_JUMP_VELOCITY">-Jump height</button><button onclick="--Runner.instance_.tRex.config.INIITAL_JUMP_VELOCITY">+Jump height</button><p style="color: red;">Made by lapide</p><button onclick="Runner.instance_.horizon.addCloud();">Add cloud</button><button onclick="Runner.instance_.horizon.removeFirstObstacle();">Remove first OBS</button><button onclick="++Runner.instance_.horizon.cloudSpeed">+Cloud speed</button><button onclick="--Runner.instance_.horizon.cloudSpeed">-Cloud speed</button><button onclick="Runner.instance_.config.MAX_CLOUDS=0">Remove clouds</button><button onclick="--Runner.instance_.config.MAX_CLOUDS">Remove 1 cloud</button><button onclick="++Runner.instance_.config.MAX_CLOUDS">Add 1 cloud</button><button onclick=Runner.instance_.horizon.obstacles=[]"">Remove nearby clouds</button><button onclick="Runner.instance_.horizon.spritePos.CACTUS_LARGE=(0);Runner.instance_.horizon.spritePos.CACTUS_SMALL=(0);Runner.instance_.horizon.spritePos.PTERODACTYL=(0);Runner.instance_.horizon.spritePos.TEXT_SPRITE=(0);Runner.instance_.horizon.spritePos.CLOUD=0;Runner.instance_.gameOver=function(){}">Sandbox Mode</button><button onclick="Runner.instance_.horizon.spritePos.CACTUS_LARGE=(0);Runner.instance_.horizon.spritePos.CACTUS_SMALL=(0);Runner.instance_.horizon.spritePos.PTERODACTYL=(0);Runner.instance_.gameOver=function(){}">Remove all OBS</button><button onclick="Runner.instance_.horizon.spritePos.CACTUS_LARGE=(0);Runner.instance_.horizon.spritePos.CACTUS_SMALL=(0);Runner.instance_.horizon.spritePos.PTERODACTYL=(0);">Inv OBS</button><button onclick="setInterval(function(){Runner.instance_.horizon.addCloud()}, 1);">cloudmaker</button><button onclick="Runner.instance_.distanceRan = Runner.instance_.distanceRan + 1000 / Runner.instance_.distanceMeter.config.COEFFICIENT">Increases score</button><button onclick="Runner.instance_.distanceRan = Runner.instance_.distanceRan - 1000 / Runner.instance_.distanceMeter.config.COEFFICIENT">Decrease score</button><button onclick="Runner.instance_.gameOver=Runner.prototype.gameOver;Runner.instance_.gameOver();">Die</button><button onclick="loopkill();">Loop Die</button>';
document.body.prepend(r);
document.querySelector("#modmenu").style.background='black';
document.querySelector("#modmenu").style.height='120px';
document.querySelector("#modmenu").style.borderRadius='10px';
document.querySelector("#modmenu").style.position='absolute';
document.querySelector("#modmenu").style.top='500px';
// https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/hitbox.png?raw=true
