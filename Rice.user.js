// ==UserScript==
// @name         Rice
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://freerice.com/*
// @grant        none
// ==/UserScript==
String.prototype.hashCode = function() {
    var hash = 0, i, chr, len;
    if (this.length === 0) return hash;
    for (i = 0, len = this.length; i < len; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

evaluate = function(st) {
    var loop, lete, reg;
    st = st.replace(/x/g,'*').replace(/of/g,'*').replace(/%/g,'/100');
    var ss='',se='';
    if (st.startsWith('square root')) {
        st = st.split('square root ')[1];
        ss = 'Math.sqrt(' +ss;se+= ')';
    }
    if (st.endsWith('rounded')) {
        st = st.split(' rounded')[0];
        ss = 'Math.round(' +ss;se+= ')';
    }

    //Add parens around spaced sections
    st = st.split(' ');
    if (st.length===3 && st[1].length===1) st=st.map(function(i){ if (i.length>1 && !i.includes('(') && !i.includes(')') && !i.includes('^') ) {return '('+i+')';} return i; });
    st = st.reduce(function(i,j) {return i+j;}); 

    //Insert * between numbers and letters
    reg = st.match(/[0-9]+[A-Za-z]+/g);
    if (reg) reg.forEach(function(i){
        var j = i.indexOf(i.match(/[A-Za-z]/));
        st=st.replace(i,i.substr(0,j)+'*'+i.substr(j));
    });

    //Insert * between #(
    st = st.split(/\(/g).reduce(function(i,j){ if (i.match(/[0-9]$/)) { i+='*'; } return i+'('+j; });
    do { //Change Letters into hashes
        loop = 0;
        try { eval(st); } catch(e) { if (e.name==='ReferenceError') {
            lete = e.message.split(' ')[0];
            loop=1; st=st.replace(new RegExp(lete,'g'), lete.hashCode());
        }}
    } while (loop);

    reg = st.match(/[0-9\)\(-]+\^[0-9\)\(-]+/g);
    if (reg) reg.forEach(function(i) {
        j=i.split('^');
        st = st.replace(i,'Math.pow('+j[0]+','+j[1]+')');
    });

    st = ss+st+se;
    sta = eval(st);
    //console.log(st,'=',sta);
    return sta;
};
function run() {
	var ans, B;
    try {
        if (window.location.hash.startsWith("#/basic-math-pre-algebra/")) {
            ans = evaluate($('a.question-link b').text());
            $('#edit-list').val().split('|').some(function(a,b){
                if (Math.abs(evaluate(a)-ans) < 1e-6) { B = b; return 1; }
            });
        } else if (window.location.hash.startsWith("#/multiplication-table/")) {
            ans = eval($('a.question-link b').text().replace(/x/g,'*'));
            $('#edit-list').val().split('|').some(function(a,b){
                if (Math.abs(eval(a.replace(/x/g,'*'))-ans) < 1e-6) { B = b; return 1; }
            });
        } else { return false; }

        ExternalGame.submitAnswer(B);
    } catch (e) { return false; }
	return true;
}

function doit() {
	if (window.location.pathname==='/category') {
        if (Math.random()<0.5) {
            ans = document.querySelectorAll('div.block-item div.item-list ul li a')[6];
        } else {
            ans = document.querySelectorAll('div.block-item div.item-list ul li a')[7];
        }
		if (ans && ans.href.includes('frapi/category')) { window.open(ans.href); window.close(); }
		return;
	}
	
	if (!run()) { window.location.pathname='/category'; }
}

cheaton = function(e) { if (e && e.keyCode!==39) {return;} console.log('on'); yes = setInterval(doit,2000); this.onkeyup = cheatoff; };
cheatoff = function(e) { if (e && e.keyCode!==39) {return;} console.log('off'); clearInterval(yes); this.onkeyup = cheaton; };
document.onkeyup = cheatoff; yes = setInterval(doit,2000);