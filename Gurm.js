// Made by lapide with an example!
var dino = {
    changeSkin: function(url) {
        dino.modules.downloadSkinManager();
        skin1.src = url;
        skin2.src = url;
    },
    skinChanger: {
        normalSkin:function(){
            dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/NONE%20COLORED/dino.png?raw=true');
        },
       noHead:function(){ dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/NONE%20COLORED/HeadLessDino(NO%20BLOOD%20VERSION).png?raw=true');
                        },
      blockHead: function(){
dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/NONE%20COLORED/ChromeCraft.png?raw=true');
},
colorful: {
        coloredDinos: function() {
            dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true');
        },
        dinoExe: function() {
dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/COLORED/Horror%20Pack/DinoExe.png?raw=true');
        },
        pikachu: function() {                           dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/COLORED/Pikachu%20Skin%20NOT%20MINES.png?raw=true');
        }
    }
},
    msgModules: {
    success: function(msg) {
        console.log('%c'+msg+'','color: green')
    }
},
   modules: {
        downloadSkinManager: function() {
        dino.msgModules.success('installed packages: skin1, skin2')
            var g =         document.querySelector("#offline-resources-1x");
var g1 =         document.querySelector("#offline-resources-2x");
window.skin1 = g;
window.skin2 = g1;
        
        },
        downloadDescription: function() {
            dino.msgModules.success('installed packages: errorCode, descHeader, descTry, descOption1, descOption2')
            var descHeader = document.querySelector("#main-message > h1 > span");
var descTry = document.querySelector("#suggestions-list > p");
var descOption1 = document.querySelector("#suggestions-list > ul > li:nth-child(1)");
var descOption2 = document.querySelector("#suggestions-list > ul > li:nth-child(2)");
var errorCode = document.querySelector("#error-information-popup-content > div.error-code");
window.errorCode = errorCode;
window.descHeader = descHeader;
window.descTry = descTry;
window.descOption1 = descOption1;
window.descOption2 = descOption2;
},
        downloadCanvas: function() {
            dino.msgModules.success('install packages: main, main2D')
            var main = document.querySelector("#main-frame-error > div.runner-container > canvas");
var main2D = main.getContext('2d');
            window.main = main;
            window.main2D = main2D;
        },
        installModmenus: function() {
            function firstModmenu(){
                /**
 Keycodes
 * http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * Version : 2.01.B
 * By Binny V A
 * License : BSD
 */
shortcut = {
	'all_shortcuts':{},//All the shortcuts are stored in this array
	'add': function(shortcut_combination,callback,opt) {
		//Provide a set of default options
		var default_options = {
			'type':'keydown',
			'propagate':false,
			'disable_in_input':false,
			'target':document,
			'keycode':false
		}
		if(!opt) opt = default_options;
		else {
			for(var dfo in default_options) {
				if(typeof opt[dfo] == 'undefined') opt[dfo] = default_options[dfo];
			}
		}

		var ele = opt.target;
		if(typeof opt.target == 'string') ele = document.getElementById(opt.target);
		var ths = this;
		shortcut_combination = shortcut_combination.toLowerCase();

		//The function to be called at keypress
		var func = function(e) {
			e = e || window.event;
			
			if(opt['disable_in_input']) { //Don't enable shortcut keys in Input, Textarea fields
				var element;
				if(e.target) element=e.target;
				else if(e.srcElement) element=e.srcElement;
				if(element.nodeType==3) element=element.parentNode;

				if(element.tagName == 'INPUT' || element.tagName == 'TEXTAREA') return;
			}
	
			//Find Which key is pressed
			if (e.keyCode) code = e.keyCode;
			else if (e.which) code = e.which;
			var character = String.fromCharCode(code).toLowerCase();
			
			if(code == 188) character=","; //If the user presses , when the type is onkeydown
			if(code == 190) character="."; //If the user presses , when the type is onkeydown

			var keys = shortcut_combination.split("+");
			//Key Pressed - counts the number of valid keypresses - if it is same as the number of keys, the shortcut function is invoked
			var kp = 0;
			
			//Work around for stupid Shift key bug created by using lowercase - as a result the shift+num combination was broken
			var shift_nums = {
				"`":"~",
				"1":"!",
				"2":"@",
				"3":"#",
				"4":"$",
				"5":"%",
				"6":"^",
				"7":"&",
				"8":"*",
				"9":"(",
				"0":")",
				"-":"_",
				"=":"+",
				";":":",
				"'":"\"",
				",":"<",
				".":">",
				"/":"?",
				"\\":"|"
			}
			//Special Keys - and their codes
			var special_keys = {
				'esc':27,
				'escape':27,
				'tab':9,
				'space':32,
				'return':13,
				'enter':13,
				'backspace':8,
	
				'scrolllock':145,
				'scroll_lock':145,
				'scroll':145,
				'capslock':20,
				'caps_lock':20,
				'caps':20,
				'numlock':144,
				'num_lock':144,
				'num':144,
				
				'pause':19,
				'break':19,
				
				'insert':45,
				'home':36,
				'delete':46,
				'end':35,
				
				'pageup':33,
				'page_up':33,
				'pu':33,
	
				'pagedown':34,
				'page_down':34,
				'pd':34,
	
				'left':37,
				'up':38,
				'right':39,
				'down':40,
	
				'f1':112,
				'f2':113,
				'f3':114,
				'f4':115,
				'f5':116,
				'f6':117,
				'f7':118,
				'f8':119,
				'f9':120,
				'f10':121,
				'f11':122,
				'f12':123
			}
	
			var modifiers = { 
				shift: { wanted:false, pressed:false},
				ctrl : { wanted:false, pressed:false},
				alt  : { wanted:false, pressed:false},
				meta : { wanted:false, pressed:false}	//Meta is Mac specific
			};
                        
			if(e.ctrlKey)	modifiers.ctrl.pressed = true;
			if(e.shiftKey)	modifiers.shift.pressed = true;
			if(e.altKey)	modifiers.alt.pressed = true;
			if(e.metaKey)   modifiers.meta.pressed = true;
                        
			for(var i=0; k=keys[i],i<keys.length; i++) {
				//Modifiers
				if(k == 'ctrl' || k == 'control') {
					kp++;
					modifiers.ctrl.wanted = true;

				} else if(k == 'shift') {
					kp++;
					modifiers.shift.wanted = true;

				} else if(k == 'alt') {
					kp++;
					modifiers.alt.wanted = true;
				} else if(k == 'meta') {
					kp++;
					modifiers.meta.wanted = true;
				} else if(k.length > 1) { //If it is a special key
					if(special_keys[k] == code) kp++;
					
				} else if(opt['keycode']) {
					if(opt['keycode'] == code) kp++;

				} else { //The special keys did not match
					if(character == k) kp++;
					else {
						if(shift_nums[character] && e.shiftKey) { //Stupid Shift key bug created by using lowercase
							character = shift_nums[character]; 
							if(character == k) kp++;
						}
					}
				}
			}
			
			if(kp == keys.length && 
						modifiers.ctrl.pressed == modifiers.ctrl.wanted &&
						modifiers.shift.pressed == modifiers.shift.wanted &&
						modifiers.alt.pressed == modifiers.alt.wanted &&
						modifiers.meta.pressed == modifiers.meta.wanted) {
				callback(e);
	
				if(!opt['propagate']) { //Stop the event
					//e.cancelBubble is supported by IE - this will kill the bubbling process.
					e.cancelBubble = true;
					e.returnValue = false;
	
					//e.stopPropagation works in Firefox.
					if (e.stopPropagation) {
						e.stopPropagation();
						e.preventDefault();
					}
					return false;
				}
			}
		}
		this.all_shortcuts[shortcut_combination] = {
			'callback':func, 
			'target':ele, 
			'event': opt['type']
		};
		//Attach the function with the event
		if(ele.addEventListener) ele.addEventListener(opt['type'], func, false);
		else if(ele.attachEvent) ele.attachEvent('on'+opt['type'], func);
		else ele['on'+opt['type']] = func;
	},

	//Remove the shortcut - just specify the shortcut and I will remove the binding
	'remove':function(shortcut_combination) {
		shortcut_combination = shortcut_combination.toLowerCase();
		var binding = this.all_shortcuts[shortcut_combination];
		delete(this.all_shortcuts[shortcut_combination])
		if(!binding) return;
		var type = binding['event'];
		var ele = binding['target'];
		var callback = binding['callback'];

		if(ele.detachEvent) ele.detachEvent('on'+type, callback);
		else if(ele.removeEventListener) ele.removeEventListener(type, callback, false);
		else ele['on'+type] = false;
	}
}
 /*  _____         _______                      
  / ____|       |__   __|                     
 | (___   ___ _ __ | |_ __ ___ _ __ ___   ___ 
  \___ \ / _ \ '_ \| | '__/ _ \ '_ ` _ \ / _ \
  ____) |  __/ |_) | | | |  __/ | | | | |  __/
 |_____/ \___| .__/|_|_|  \___|_| |_| |_|\___|
             | |                              
             |_|
             
             
             [
             ALL RIGHTS GO TO LAPIDE
             ]
             [info]: [This is the "BEST" MOD MENU for chrome:dino]
             
             [patch log]: []
             
             [updates]: [Added speed soon close and open!]
             Xtreme is with us!
*/                                                                                           //                                                             Free!?!?!?!            

// How to use
/*
     Click INJECT!
     [another CREATOR menu is comming!]
     HOW TO MAKE:
     "TO" make a menu we will add in a "creator mod menu" for hack creators!
     Includes javascript, html.
     DONT WORRY IF YOU DONT KNOW "ANY" JAVASCRIPT OR HTML JUST GO TO THE FOLDER CALLED "How To"
     THEN "ModMenuMaking"
     COPY "tutorial1.js" AND PASTE IT TO THE DEV CONSOLE!
     After that:
     Go back to "How To" <-- ORIGINAL
     Go to "CODES" <-- FOR ORIGINAL!
     Copy and paste it on the "<button onclick="HERE!"></button>"
     To get more codes go to the "Cheats" then go to the "Codes" Then go to "DEVCONSOLE" <-- Coming soon (;
     Copy and paste them! and you are done....
     WE WILL RELEASE A VIDEO OUT SOON!
*/
function makeBox(size, append, color) {
    var box = document.createElement('div');
    box.style.height=size+'px';
    box.style.background=color;
    box.style.width=size+'px';
    append.insertBefore(box, append.firstChild);
}
var msgPrint = document.createElement('div');
msgPrint.innerHTML='<div><font color="#ff0000">M</font><font color="#ff2a00">a</font><font color="#ff5500">d</font><font color="#ff7f00">e</font><font color="#ffaa00"> </font><font color="#ffd400">W</font><font color="#ffff00">i</font><font color="#bfff00">t</font><font color="#80ff00">h</font><font color="#40ff00"> </font><font color="#00ff00">X</font><font color="#00ff55">t</font><font color="#00ffaa">r</font><font color="#00ffff">e</font><font color="#00aaff">m</font><font color="#0055ff">e</font><font color="#0000ff">!</font></div><div></div><div><font color="#ff0000">+</font><font color="#ff2a00">S</font><font color="#ff5500">e</font><font color="#ff7f00">p</font><font color="#ffaa00">T</font><font color="#ffd400">r</font><font color="#ffff00">e</font><font color="#bfff00">m</font><font color="#80ff00">e</font></div>';
document.body.prepend(msgPrint);
msgPrint.style.right='50px';
msgPrint.style.top='585px';
msgPrint.style.fontWeight='bold';
msgPrint.style.position='absolute';
function makeTextBox(height, width, append, color, background, placeholder) {
    var box = document.createElement('input');
    box.style.height=height+'px';
    box.placeholder=placeholder;
    box.style.color=color;
      box.style.background=background
    box.style.width=width+'px';
     box.innerText=text;
    append.insertBefore(box, append.firstChild);
}
function makeButton(height, width, append, color, background, text) {
      var box = document.createElement('button');
    box.style.height=height+'px';
    box.style.color=color;
      box.style.background=background
    box.style.width=width+'px';
     box.innerText=text;
    append.insertBefore(box, append.firstChild);
}
console.log('MADE WITH XTREME!');
var Xtreme = {
    Credits: function credits() {
       console.log('Creator: Lapide');
 },
    SuccesLog: function sec(msg) {
        console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: lightgreen;', 'color: green', 'color: darkgreen', 'color: green;', 'color: lightgreen'); 
},
   ErrorLog: function e(msg) {
      console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: red;', 'color: red', 'color: darkred', 'color: red;', 'color: red'); 
},
  WarningLog: function f(msg) {
      console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: yellow;', 'color: yellow', 'color: darkgreen', 'color: yellow;', 'color: yellow'); 
},
 CustomLog: function(msg, firstcolor, corner1color, middlecolor, cornercolor, lastcolor) {
       console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: '+firstcolor, 'color: '+corner1color, 'color: '+middlecolor, 'color: '+cornercolor, 'color: '+lastcolor); 
},
 MoreSpeed: function e() {
        ++Runner.instance_.currentSpeed
},
 MoreMoreSpeed: function e() {
       Runner.instance_.setSpeed(100);
},
 SetSpeed: function e(speed) {
     Runner.instance_.setSpeed(speed);
},
  GodMode: function e() {
        Runner.instance_.gameOver=function(){}
},
 DisableGodMode: function e() {
       var main = Runner.prototype.gameOver
       Runner.instance_.gameOver=main
},
 gravity: function e(gravity) {
    Runner.instance_.config.GRAVITY=gravity
},
 customSkin: function e(skinID) {
     document.querySelector("#offline-resources-1x").src=skinID;
     document.querySelector("#offline-resources-2x").src=skinID;
},
 colorFullSkin: function e(){ document.querySelector("#offline-resources-1x").src="https://github.com/nonumbershere/Skinz4ChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true";document.querySelector("#offline-resources-2x").src="https://github.com/nonumbershere/Skinz4ChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true"
                            },
 killChrome: function e(){ location.href=''
                         }
}
// Will update soon!
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'cursor: pointer'
].join(';');

console.log('%cMade with xtreme!', styles);
    /*let e=document;var ea = document.body;var g=document.body.append;var gt=document.body.insertBefore;var gta=document.body.prepend;*/let brown="brown";let red="red";let blue="blue";let green = "green";let yellow = "yellow";var menu = document.createElement('menuhack');var dis=Runner.prototype;let r=dis.gameOver;let c=Runner.instance_;menu.innerHTML=('<button onclick="Runner.instance_.gameOver=function(){}">GodMode</button><button onclick="Runner.instance_.setSpeed(0);">0 Speed</button><button onclick="Runner.instance_.gameOver=r">Disable Godmode</button><p>speedrunner:</p><button onclick="c.setSpeed(100);">Set Speed</button>');document.body.prepend(menu);
shortcut.add('ctrl+x', function() {
    msgPrint.remove();
});
/*
  SHORCUT KEYS:
 ctrl-x = Removes the CREATED WITH! msg!
*/
            }
            window.installSeptremeModmenu = firstModmenu;
        }
    }
}
var dino = {
    changeSkin: function(url) {
        dino.modules.downloadSkinManager();
        skin1.src = url;
        skin2.src = url;
    },
    skinChanger: {
        normalSkin:function(){
            dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/NONE%20COLORED/dino.png?raw=true');
        },
       noHead:function(){ dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/NONE%20COLORED/HeadLessDino(NO%20BLOOD%20VERSION).png?raw=true');
                        },
      blockHead: function(){
dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/NONE%20COLORED/ChromeCraft.png?raw=true');
},
colorful: {
        coloredDinos: function() {
            dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true');
        },
        dinoExe: function() {
dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/COLORED/Horror%20Pack/DinoExe.png?raw=true');
        },
        pikachu: function() {                           dino.changeSkin('https://github.com/nonumbershere/SkinsForChromeDino/blob/master/COLORED/Pikachu%20Skin%20NOT%20MINES.png?raw=true');
        }
    }
},
    msgModules: {
    success: function(msg) {
        console.log('%c'+msg+'','color: green')
    }
},
   modules: {
        downloadSkinManager: function() {
        dino.msgModules.success('installed packages: skin1, skin2')
            var g =         document.querySelector("#offline-resources-1x");
var g1 =         document.querySelector("#offline-resources-2x");
window.skin1 = g;
window.skin2 = g1;
        
        },
        downloadDescription: function() {
            dino.msgModules.success('installed packages: errorCode, descHeader, descTry, descOption1, descOption2')
            var descHeader = document.querySelector("#main-message > h1 > span");
var descTry = document.querySelector("#suggestions-list > p");
var descOption1 = document.querySelector("#suggestions-list > ul > li:nth-child(1)");
var descOption2 = document.querySelector("#suggestions-list > ul > li:nth-child(2)");
var errorCode = document.querySelector("#error-information-popup-content > div.error-code");
window.errorCode = errorCode;
window.descHeader = descHeader;
window.descTry = descTry;
window.descOption1 = descOption1;
window.descOption2 = descOption2;
},
        downloadCanvas: function() {
            dino.msgModules.success('install packages: main, main2D')
            var main = document.querySelector("#main-frame-error > div.runner-container > canvas");
var main2D = main.getContext('2d');
            window.main = main;
            window.main2D = main2D;
        }
    }
}
var cn = document.querySelector("#main-frame-error > div.runner-container > canvas");
var h =cn.getContext('2d');
function op() {
h.filter='opacity(20%)'
}
var main2D = document.querySelector("#main-frame-error > div.runner-container > canvas").getContext('2d');
var tRexName = "Ohe"
var main = document.querySelector("#main-frame-error > div.runner-container > canvas")
function showXY() {
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
r.innerHTML='<button onclick="lag()">Lag</button><button onclick="op()">Low OP</button><button onclick="followBox();">Box To Cursor</button><button onclick="showXY(); alert(`Press F12 To make this work.`);">Kinda ESP</button><button onclick="light()">Light</button><button onclick="fg()">Box</button><button onclick="spec()">Rainbow Sky</button><button onclick="dark()">Dark</button>'
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

/**
  * Made by: Lapide
  * For: Chrome Dino
  * Payment: false
  * Paid: false
  * free: true
  * Illegal: false
  * Legal: true
  * Created With: JAVASCRIPT
*/
// Enjoy!
// Colors
var pink = 'pink';
var olive = 'olive';
var marine = 'marine';
var emerald = 'emerald';
var lavender ='lavernder';
var grass = 'grass';
var cyan = 'cyan';
var apple = 'apple';
var magenta = 'magenta';
var purple = 'purple';
var orange = 'orange';
var darkgreen = 'darkgreen';
var lightgreen = 'lightgreen';
var red = 'red';
var blue = 'blue';
var lightblue = 'lightblue';
var darkred = 'darkred';
var darkblue='darkblue';
var yellow = 'yellow';
var green = 'green';
var darkgreen = 'darkgreen';
var lightred = 'lightred';
var white = 'white';
var black ='black';
var brown = 'brown';
var gray = 'gray';
var lime = 'lime';
// now for the HACK!
var r = document.createElement('div');
var Xtreme = {
 turnOffArcadeMode: function() {
 Runner.instance_.isArcadeMode = function(){}
Runner.instance_.setArcadeMode = function(){}
 },
 freshAlert: function(title, msg){
  function p() {
   r.style.transition = '2s';
     r.style.opacity='1';
   setTimeout(function(){r.remove(); r.style.opacity='1000'}, 9000);
}
  Runner.instance_.pa
  r.style.opacity='0';
  r.style.transition='2s';
r.innerHTML='<div style="-webkit-font-smoothing: antialiased;color: #555;font-size: 1em;line-height: 1.5;cursor: auto;box-sizing: inherit;display: flex;position: fixed;z-index: 1060;top: 0;right: 0;bottom: 0;left: 0;flex-direction: row;justify-content: center;padding: .625em;overflow-x: hidden;transition: background-color .1s;-webkit-tap-highlight-color: transparent;transition:2s;background: rgba(0,0,0,.4);align-items: center;overflow-y: auto;"><div style="height: 200px; border-radius: 8px; width: 500px; background: white; color: lightgrey; transistion: font-weight: bolder;"><h1><center>'+title+'</center></h1><h1></h1><h1></h1><center><h2>'+msg+'</h2></center><button style="weight:50px; height: 50px;position: absolute;left: 658px;background: grey; float: left;" onclick="Xtreme.p();">OK</button></div></div>';
document.body.background='red';
  setTimeout(function(){r.style.opacity=('1')}, 900);
document.body.prepend(r);
 },
 p: function p() {
  Runner.instance_.paused=false;
   r.style.transition = '2s';
r.style.opacity='0'
   setTimeout(function(){r.remove()}, 900);
   setTimeout(function(){r.style.opacity=('1')}, 1000);
},
 turnOnArcadeMode: function() {
  Runner.instance_.isArcadeMode = Runner.prototype.isArcadeMode;
Runner.instance_.setArcadeMode = Runner.prototype.setArcadeMode;
  Runner.instance_.setArcadeMode();
 },
   help: function(withwhat) {
     console.log('Help commands:');
     console.log('usePackage: Helps you to use Xtreme.usePackage!');
     console.log('usecustom: Like usePackage but it dosent customize a element. It customizes a body.')
if (withwhat == 'usecustom') {
     console.log('COMMANDS:');
    console.log('rainbow: Makes the background rainbow!');
}
if (withwhat == 'usePackage') {
    console.log('COMMANDS: ')
    console.log('basicMiscs: Adds more to Xtreme.Miscs!');
    console.log('INCLUDES: ');
    console.log('Alright, before we begin Includes are for LIKE addons for usePackage, so here: ');
    console.log('septremelog: Includes the LOG command.');
} 
},
    Credits: function credits() {
       console.log('Creator: Lapide');
 },
 MoreSpeed: function e() {
        ++Runner.instance_.currentSpeed
},
 MoreMoreSpeed: function e() {
       Runner.instance_.setSpeed(100);
},
 SetSpeed: function e(speed) {
     Runner.instance_.setSpeed(speed);
},
  GodMode: function e() {
        Runner.instance_.gameOver=function(){}
},
 DisableGodMode: function e() {
       var main = Runner.prototype.gameOver
       Runner.instance_.gameOver=main
},
 gravity: function e(gravity) {
    Runner.instance_.tRex.config.GRAVITY=gravity;
},
 customSkin: function e(skinID) {
     document.querySelector("#offline-resources-1x").src=skinID;
     document.querySelector("#offline-resources-2x").src=skinID;
},
 colorFullSkin: function e(){ document.querySelector("#offline-resources-1x").src="https://github.com/nonumbershere/Skinz4ChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true";document.querySelector("#offline-resources-2x").src="https://github.com/nonumbershere/Skinz4ChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true"
                            },
 killChrome: function e(){
document.location.href=''
                         },
 useCustom: function(type) {
        if (type == 'rainbow') {
                        function flash() {
            document.body.style.transition='2s ease 0s';
            document.body.style.background='red';
setTimeout(function(){document.body.style.background='blue';}, 1000);
setTimeout(function(){document.body.style.background='yellow';}, 2000);
setTimeout(function(){document.body.style.background='purple';}, 3000);
setTimeout(function(){document.body.style.background='green';}, 4000);
setTimeout(function(){document.body.style.background='lightgreen';}, 5000);
setTimeout(function(){document.body.style.background='brown';}, 6000);
setTimeout(function(){document.body.style.background='';}, 7000);
setTimeout(function(){document.body.style.background='black';}, 8000);
setTimeout(function(){document.body.style.background='red';}, 9000);
setTimeout(function(){flash();}, 9000);
                 }
flash();
}
},
alertBox: function alertBox(msg, title, color) {
var alertbox = document.createElement('div');
setTimeout(function(){alertbox.remove();}, 5000);
alertbox.innerHTML='<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>.alert {  padding: 20px; background-color: '+color+';  color: white;}.closebtn {  margin-left: 15px;  color: white; font-weight: bold;  float: right; font-size: 22px;  line-height: 20px;  cursor: pointer;  transition: 0.3s;}.closebtn:hover {  color: black;}</style></head><body><div class="alert"> <span class="closebtn" onclick="this.parentElement.style.display="none";">&times</span>   <h1 style="font-weight: bold;">'+title+' </h1>'+msg+'</div></body></html>';
document.body.append(alertbox);
document.querySelector("body > div > div > span").addEventListener('click',function() {
      alertbox.remove();
});
},
 removeMsgOfflineBox: function() {
      document.querySelector("#main-message").remove();  
},
 hideMsgOfflineBox: function() {
    document.querySelector("#main-message").hidden=true;
},
 showMsgOfflineBox: function() {
   document.querySelector("#main-message").hidden=false;
},
 editTitle: function(msg) {
   document.querySelector("#main-message > h1 > span").innerText=msg;
 },
  editFullDescription: function(msg) {
     document.querySelector("#error-information-popup-content").innerText=msg;
},
 editDescription1: function(msg) {
      document.querySelector("#suggestions-list > p").innerText=msg;
},
 editDescription2: function(msg) {
document.querySelector("#suggestions-list > ul > li:nth-child(1)").innerText=msg;
},
 editDescription3: function(msg) {
document.querySelector("#suggestions-list > ul > li:nth-child(2)").innerText=msg;
},
editDescription4: function(msg) {
   document.querySelector("#error-information-popup-content > div.error-code").innerText=msg;
},
  editDescription5: function(msg) {
     document.querySelector("#suggestions-list > ul").innerText=msg;
},
editTabTitle: function(newtitle) {
     document.title=newtitle;
},
turnoneditmode: function() {
    document.designMode='on';
},
turnoffeditmode: function() {
    document.designMode='off';
},
Miscs: function(){},
usePackage: function(PackageName, include) { // Just do basicMiscs for now!
  if (PackageName == 'basicMiscs') {
    Xtreme.alertBox('Unlocked Miscs Basic Package.', 'Unlocked', 'red');
    Xtreme.Miscs.Credits = function() {
      Xtreme.SuccesLog('Creator Of Package: Lapide');
      Xtreme.SuccesLog('Thank you for using packages! You may now check your Miscs package ', PackageName);
      }
      Xtreme.Misc.useMoreRunner = function(whatCommand) {
              Runner.instance_.Credits = function() {
                console.log('Hack by lapide!');
              }
      };
      Xtreme.Miscs.easterEggs = function(taskname) {
              if (taskname == 'sep true') {
                console.log('Ayy! i will add a septreme Package!')
              }
      };
      Xtreme.Miscs.gamoveover = function() {
           Runner.instance_.gameOver();
      };
      Xtreme.Miscs.Spam = function(spamMsg) {
        console.log(spamMsg);
        Xtreme.Miscs.Spam(spamMsg);
      };
      Xtreme.Miscs.RemoveCode = function(){
        delete Xtreme == true;
      };
    if (include == 'septremeLog') {
      console.log('Alerted: Succses!');
      Xtreme.Miscs.Console = function(msg, data) {
        console.log(msg, data);
      }
    }
  }
},
   customCredits: function(creator, color, size, padding, backgroundcolor) {
    console.log('%cCreator: '+creator+'', 'color: '+color+'; font-size: '+size+'; padding: '+padding+'; background-color: '+backgroundcolor+';');
 },
   help: function(withwhat) {
     console.log('Help commands:');
     console.log('usePackage: Helps you to use Xtreme.usePackage!');
     console.log('usecustom: Like usePackage but it dosent customize a element. It customizes a body.')
if (withwhat == 'usecustom') {
     console.log('COMMANDS:');
    console.log('rainbow: Makes the background rainbow!');
}
if (withwhat == 'usePackage') {
    console.log('COMMANDS: ')
    console.log('basicMiscs: Adds more to Xtreme.Miscs!');
    console.log('INCLUDES: ');
    console.log('Alright, before we begin Includes are for LIKE addons for usePackage, so here: ');
    console.log('septremelog: Includes the LOG command.');
} 
},
    Credits: function credits() {
       console.log('Creator: Lapide');
 },
 MoreSpeed: function e() {
        ++Runner.instance_.currentSpeed
},
 MoreMoreSpeed: function e() {
       Runner.instance_.setSpeed(100);
},
 SetSpeed: function e(speed) {
     Runner.instance_.setSpeed(speed);
},
  GodMode: function e() {
        Runner.instance_.gameOver=function(){}
},
 DisableGodMode: function e() {
       var main = Runner.prototype.gameOver
       Runner.instance_.gameOver=main
},
 gravity: function e(gravity) {
    Runner.instance_.tRex.config.GRAVITY=gravity;
},
 customSkin: function e(skinID) {
     document.querySelector("#offline-resources-1x").src=skinID;
     document.querySelector("#offline-resources-2x").src=skinID;
},
 colorFullSkin: function e(){ document.querySelector("#offline-resources-1x").src="https://github.com/nonumbershere/Skinz4ChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true";document.querySelector("#offline-resources-2x").src="https://github.com/nonumbershere/Skinz4ChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true"
                            },
 killChrome: function e(){
document.location.href=''
                         },
 useCustom: function(type) {
        if (type == 'rainbow') {
                        function flash() {
            document.body.style.transition='2s ease 0s';
            document.body.style.background='red';
setTimeout(function(){document.body.style.background='blue';}, 1000);
setTimeout(function(){document.body.style.background='yellow';}, 2000);
setTimeout(function(){document.body.style.background='purple';}, 3000);
setTimeout(function(){document.body.style.background='green';}, 4000);
setTimeout(function(){document.body.style.background='lightgreen';}, 5000);
setTimeout(function(){document.body.style.background='brown';}, 6000);
setTimeout(function(){document.body.style.background='';}, 7000);
setTimeout(function(){document.body.style.background='black';}, 8000);
setTimeout(function(){document.body.style.background='red';}, 9000);
setTimeout(function(){flash();}, 9000);
                 }
flash();
}
},
alertBox: function alertBox(msg, title, color) {
var alertbox = document.createElement('div');
setTimeout(function(){alertbox.remove();}, 5000);
alertbox.innerHTML='<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>.alert {  padding: 20px; background-color: '+color+';  color: white;}.closebtn {  margin-left: 15px;  color: white; font-weight: bold;  float: right; font-size: 22px;  line-height: 20px;  cursor: pointer;  transition: 0.3s;}.closebtn:hover {  color: black;}</style></head><body><div class="alert"> <span class="closebtn" onclick="this.parentElement.style.display="none";">&times</span>   <h1 style="font-weight: bold;">'+title+' </h1>'+msg+'</div></body></html>';
document.body.append(alertbox);
document.querySelector("body > div > div > span").addEventListener('click',function() {
      alertbox.remove();
});
},
 removeMsgOfflineBox: function() {
      document.querySelector("#main-message").remove();  
},
 hideMsgOfflineBox: function() {
    document.querySelector("#main-message").hidden=true;
},
 showMsgOfflineBox: function() {
   document.querySelector("#main-message").hidden=false;
},
 editTitle: function(msg) {
   document.querySelector("#main-message > h1 > span").innerText=msg;
 },
  editFullDescription: function(msg) {
     document.querySelector("#error-information-popup-content").innerText=msg;
},
 editDescription1: function(msg) {
      document.querySelector("#suggestions-list > p").innerText=msg;
},
 editDescription2: function(msg) {
document.querySelector("#suggestions-list > ul > li:nth-child(1)").innerText=msg;
},
 editDescription3: function(msg) {
document.querySelector("#suggestions-list > ul > li:nth-child(2)").innerText=msg;
},
editDescription4: function(msg) {
   document.querySelector("#error-information-popup-content > div.error-code").innerText=msg;
},
  editDescription5: function(msg) {
     document.querySelector("#suggestions-list > ul").innerText=msg;
},
editTabTitle: function(newtitle) {
     document.title=newtitle;
},
turnoneditmode: function() {
    document.designMode='on';
},
turnoffeditmode: function() {
    document.designMode='off';
},
Miscs: function(){},
usePackage: function(PackageName, include) { // Just do basicMiscs for now!
  if (PackageName == 'basicMiscs') {
    Xtreme.alertBox('Unlocked Miscs Basic Package.', 'Unlocked', 'red');
    Xtreme.Miscs.Credits = function() {
      Xtreme.SuccesLog('Creator Of Package: Lapide');
      Xtreme.SuccesLog('Thank you for using packages! You may now check your Miscs package ', PackageName);
      }
      Xtreme.Misc.useMoreRunner = function(whatCommand) {
              Runner.instance_.Credits = function() {
                console.log('Hack by lapide!');
              }
      };
      Xtreme.Miscs.easterEggs = function(taskname) {
              if (taskname == 'sep true') {
                console.log('Ayy! i will add a septreme Package!')
              }
      };
      Xtreme.Miscs.gamoveover = function() {
           Runner.instance_.gameOver();
      };
      Xtreme.Miscs.Spam = function(spamMsg) {
        console.log(spamMsg);
        Xtreme.Miscs.Spam(spamMsg);
      };
      Xtreme.Miscs.RemoveCode = function(){
        delete Xtreme == true;
      };
    if (include == 'septremeLog') {
      console.log('Alerted: Succses!');
      Xtreme.Miscs.Console = function(msg, data) {
        console.log(msg, data);
      }
    }
  }
},
choose: function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}, // Stolen from cookie clicker XD
   customCredits: function(creator, color, size, padding, backgroundcolor) {
    console.log('%cCreator: '+creator+'', 'color: '+color+'; font-size: '+size+'; padding: '+padding+'; background-color: '+backgroundcolor+';');
 },
 Points: function(anythinglessthan99999) {
     if (anythinglessthan99999 > 100000) {
      alert("Nah dude it can't be like dat XD");
     } else {
      Runner.instance_.distanceRan = anythinglessthan99999 / Runner.instance_.distanceMeter.config.COEFFICIENT
     }
 },
 scoreFlash: function(boolean) {
     console.log('Boolean, A boolean is an TRUE or FALSE. Type TRUE to get the flashy thing OR type FALSE to disable it.');
     Runner.instance_.distanceMeter.achievement=boolean;
 },
 scoreFlash2: function() {
  Runner.instance_.distanceMeter.flashHighScore()
},
breakGame: function(){
  Runner.instance_.stopListening();
},
pauseGame: function(){
     Runner.instance_.stop();
},
pauseGame2: function() {
  Runner.instance_.setPlayStatus(false);
Runner.instance_.paused = true;
cancelAnimationFrame(Runner.instance_.raqId);
Runner.instance_.raqId = 0
},
 flashBoth: function() {
  Runner.instance_.distanceMeter.flashHighScore();
  Runner.instance_.distanceMeter.achievement=true
 },
 Runner: Runner,
 RunnerPrototype: Runner.prototype,
instance: Runner.instance_,
keyboardGamePlay: function() {
  console.log('This uses the W-A-S-D keys.');
  Runner.keycodes.JUMP={32: 1, 87: 1, 38: 1}
Runner.keycodes.DUCK={40: 1, 83: 1}
Runner.keycodes.RESTART={82: 1}
},
XtremeKeyboard: function(){
  Runner.keycodes.JUMP={32: 1, 87: 1, 38: 1}
Runner.keycodes.DUCK={40: 1, 83: 1}
Runner.keycodes.RESTART={82: 1}
document.addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 37:
    --Runner.instance_.currentSpeed
   break;
   case 68:
   ++Runner.instance_.currentSpeed
   break;
   case 65:
   --Runner.instance_.currentSpeed
   break;
    case 39:
 ++Runner.instance_.currentSpeed
break;
    }
  });
},
 AFKPoints: function(){
  Runner.instance_.gameOver=function(){}
Runner.instance_.playingIntro=true;
Runner.instance_.setSpeed(100);
console.log('Press F to stop. And B to start.');
document.addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 70:
    Runner.instance_.gameOver=Runner.prototype.gameOver;
Runner.instance_.playingIntro=false;
Runner.instance_.setSpeed(5);
console.log('Done!');
   break;
   case 66:
   Runner.instance_.gameOver=function(){}
Runner.instance_.playingIntro=true;
Runner.instance_.setSpeed(100);
   break;
 }
});
},
removeGodMode: function(){},
userGodMode: Runner.prototype.gameOver,
nightMode: function(){ 
  Runner.instance_.isDarkMode=true;
  document.body.style.background='black';
  Runner.instance_.inverted=true;
},
showStart: function() {
  Runner.instance_.inverted=true;
},
hideStarts: function() {
  Runner.instance_.inverted=false;
},
dayMode: function() {
  Runner.instance_.isDarkMode=false;
document.body.style.background='white';
  Runner.instance_.inverted=false;
},
startGame: function() {
  Runner.instance_.startGame();
},
randomEvent: () =>{
     document.write(Xtreme.choose(["yo mama xD", "die die die jk.", 'runner "is gay"', 'rip yo mama', 'Facts: <h2>YOUR COOL</h2>']));
},
randomAlert: () =>{
  alert(Xtreme.choose(["Welcome, to xtreme!", 'lol xd', 'punk 1v1 me gay bword', 'jk', 'run. ', 'rip', 'rip', 'rip', 'rip', 'THIS IS A LENGENDARY TEXT!']));
},
reasonOfRandom: () =>{
  console.log('The reason of it is to piss off orteil')
},
noArcadeMode: () =>{
  Xtreme.editTabTitle('chrome://dino');
},
ArcadeMode: () =>{
  Runner.instance_.setArcadeMode(true);
},
ArcadeModeOFF: () =>{
  Runner.instance_.setArcadeMode(false);
},
Ji: function(){

},
XtremeJiLoaded: function(y) {
    if (y == 'gmer') {
      var r = document.createElement('div');
         Xtreme.alertBox('Succses!', 'Succses: ', 'green');
         Xtreme.Ji.CreatedBox = Xtreme.alertBox;
      document.body.append(r);
    }
    if (y == 'loadAssets') {
      Xtreme.Ji.XtremeLoader = function(load) {
        if(load == 'yes') {
          Xtreme.Ji.addEvents = function(boolean) {
               if (boolean == true) {
                var r = document.createElement('div');
                setTimeout(function(){r.remove()}, 7000);
                r.innerHTML='<p style="color: green; background-color: lightblue;">Made With Xtreme.</p>';
                document.body.append(r);
               } else {
                console.log('Subject Unressbolnaed-');
               }
          }
        }
        if(load == 'no') {
          alert('Example has been taken.')
        }
      }
   }
},
 activ: 0,
 null: null,
 changeJumpheight: function(jump_height, speed) {
    Runner.instance_.tRex.config.INIITAL_JUMP_VELOCITY = -jump_height;
    Runner.instance_.tRex.config.DROP_VELOCITY = -jump_height / speed
 },
 XtremeConsole: function(oldCons, data){
    return {
        log: function(text, data){
            oldCons.log(text, data);
            // Your code
        },
        info: function (text) {
            oldCons.info(text, data);
            // Your code
        },
        warn: function (text) {
            oldCons.warn(text);
            // Your code
        },
        error: function (text) {
            oldCons.error(text);
            // Your code
        },
      SuccesLog: function sec(msg) {
        console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: lightgreen;', 'color: green', 'color: darkgreen', 'color: green;', 'color: lightgreen'); 
},
   ErrorLog: function e(msg) {
      console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: red;', 'color: red', 'color: darkred', 'color: red;', 'color: red'); 
},
  WarningLog: function f(msg) {
      console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: yellow;', 'color: yellow', 'color: darkgreen', 'color: yellow;', 'color: yellow'); 
},
 CustomLog: function(msg, firstcolor, corner1color, middlecolor, cornercolor, lastcolor) {
       console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: '+firstcolor, 'color: '+corner1color, 'color: '+middlecolor, 'color: '+cornercolor, 'color: '+lastcolor); 
}
}(window.console)
},
randomNumber: function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Credits to CHROME://DINO
},
addXtremePackets: function(packetName) {
  if(packetName == 'JAVASCRIPT') {
           Xtreme.JAVASCRIPT = {
            morePackets: function() {
              console.log('JAVASCRIPT, and more.')
            },
            reUseData: function(argument) {
              // body...
            }
           }
  }
  console.log(packetName+" loaded.")
},
removeRunner: function(){
 Runner = function(){ console.log('removed.') }
},
annoyingJumpingAudio: function(){
  var r = document.createElement('div');
r.innerHTML='<audio controls id="p"><source src="horse.ogg" type="audio/ogg" id="f"><source  id="m" src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3" type="audio/mpeg"></audio>';
document.body.prepend(r);
r.hidden=true;
var l = r.children.p;
document.addEventListener('keydown',function(e) {
   switch(e.keyCode) {
       case 32:
l.play();
break;
}
});
},
/*
addTimeStampTrueOrFalse: function(show_true_or_false) {
  if(show_true_or_false == true) {
var e = 0;
var r = document.createElement('div');
r.innerHTML='<p id="id1">0</p>';
var l = r.children.id1;
function e2() {
   e = e + 1;
setTimeout(function(){e2()}, 1000);
r.innerHTML='<p id="id1">'+e+'</p>';
};
e2();
document.body.insertBefore(r, document.body.firstChild);
r.style.borderRadius='10%';
r.style.background='red';
r.style.color='blue';
r.style.width='50px';
}
if (show_true_or_false == false) {
  document.querySelector("#t > div:nth-child(1)").replaceWith('');
}
}, // took sometime ngl*/
addTimeStamp: function() {
  Xtreme.removeTimeStamp =function() {
    Xtreme.removeTimeStamp = function(){  }
    document.querySelector("#t > div:nth-child(1)").replaceWith('');
}
var e = 0;
var r = document.createElement('div');
r.innerHTML='<p id="id1">0</p>';
var l = r.children.id1;
function e2() {
   e = e + 1;
setTimeout(function(){e2()}, 1000);
r.innerHTML='<p id="id1">'+e+'</p>';
};
e2();
document.body.insertBefore(r, document.body.firstChild);
r.style.borderRadius='10%';
r.style.background='blue';
r.style.color='red';
r.style.width='50px';
},
addTimeStampByColor: function(backgroundColor, fontColor, fontsize, width, height) {
  Xtreme.removeTimeStamp =function() {
    Xtreme.removeTimeStamp = function(){  }
    document.querySelector("#t > div:nth-child(1)").replaceWith('');
}
var e = 0;
var r = document.createElement('div');
r.innerHTML='<p id="id1">0</p>';
var l = r.children.id1;
function e2() {
   e = e + 1;
setTimeout(function(){e2()}, 1000);
r.innerHTML='<p id="id1">'+e+'</p>';
};
e2();
document.body.insertBefore(r, document.body.firstChild);
r.style.borderRadius='10%';
r.style.width = height;
var ewer = width + height;
console.log(ewer + fontsize);
r.style.height = width;
r.style.fontSize=fontsize;
r.style.background=backgroundColor;
r.style.color=fontColor;
r.style.width='50px';
},
/*
removeTimeStampTrueOrFalse: function(show_true_or_false) {
  if(show_true_or_false == true) {
document.querySelector("#t > div:nth-child(1)").remove();
  }
  if(show_true_or_false == false) {
    console.log('Set as false.');
  }
},
*/
veiwXtremeData: function() {
  return Xtreme;
  console.log(Xtreme);
},
 changeJumpheight: function(jump_height) {
    this.config.INIITAL_JUMP_VELOCITY = -jump_height;
    this.config.DROP_VELOCITY = -jump_height / 10
 }
}
Xtreme.XtremeJiLoaded('gmer');
Xtreme.XtremeJiLoaded('loadAssets');
Xtreme.Ji.XtremeLoader('yes');
Xtreme.Ji.addEvents(true);
var MadeHack
Xtreme.Miscs.RunnerInstance = Runner.instance_
var XtremeRunner = {
  name: "Yo ",
  middleName: "Mama ",
  lastName: "XD",
  doConsole: function() {
   console.log(XtremeRunner.name, XtremeRunner.middleName, XtremeRunner.lastName);
  XtremeRunner.doConsole();
 }
 }
/*
choose([
        
      ])
*/
clear();
function l() {
  alert('Succses!');
}
Xtreme.Miscs.Runner=Runner;
console.log('loadAssets has been found.');
console.log('Ji.XtremeLoader added with yes.');
console.log('Created TRUE');
console.log('Ji addEvenets added.');
setTimeout(function(){console.log('Done!');}, 2000);
clear();
clear();
clear();
clear();
clear();
clear();      
