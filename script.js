let q = 1;
let touchedSecondWife = false;
let clicked50 = false;

function startGame(){
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  document.getElementById("bgMusic").play();
  loadQuestion();
}

function normalize(text){
  return text.toLowerCase().trim();
}

function loadQuestion(){
  let bg = document.getElementById("background");
  if(q<=3) bg.className="night";
  else if(q<=6) bg.className="bridge";
  else if(q<=9) bg.className="rain";
  else if(q<=12) bg.className="forest";
  else bg.className="neon";

  let c = document.getElementById("content");

  if(q==1){
    c.innerHTML=`<h2>1. Our 1st bike ride?</h2>
    <input id="ans"><button onclick="check1()">Check</button>`;
  }

  else if(q==2){
    c.innerHTML=`<h2>2. 1st trip we went together?</h2>
    <input id="ans"><button onclick="check2()">Check</button>`;
  }

  else if(q==3){
    c.innerHTML=`<h2>3. 1st night out?</h2>
    <input id="ans"><button onclick="check3()">Check</button>`;
  }

  else if(q==4){
    c.innerHTML=`<h2>4. Weird food moment?</h2>
    <input id="ans"><button onclick="check4()">Check</button>`;
  }

  else if(q==5){
    c.innerHTML=`<h2>5. Food we ate many times?</h2>
    <input id="ans"><button onclick="check5()">Check</button>`;
  }

  else if(q==6){
    c.innerHTML=`<h2>6. 1st Movie?</h2>
    <input id="ans"><button onclick="check6()">Check</button>`;
  }

  else if(q==7){
    c.innerHTML=`<h2>7. 1st interlocked hand?</h2>
    <input id="ans"><button onclick="check7()">Check</button>`;
  }

  else if(q==8){
    c.innerHTML=`<h2>8. Favourite shirt colour?</h2>
    <button onclick="chooseColor('pink')">Pink shades</button>
    <button onclick="chooseColor('black')">Black</button>
    <button onclick="chooseColor('blue')">Blue</button>
    <button onclick="chooseColor('brown')">Brown</button>`;
  }

  else if(q==9){
    c.innerHTML=`<h2>9. Friend / Lover / Wife?</h2>
    <input id="ans"><button onclick="check9()">Check</button>`;
  }

  else if(q==10){
    c.innerHTML=`<h2>10. If u want 2nd wife touch box</h2>
    <div onclick="touchSecond()" style="border:2px solid white; padding:20px;">Touch here</div>
    <button onclick="skipSecond()">Skip</button>`;
  }

  else if(q==11){
    c.innerHTML=`<h2>11. Send me Rs.50 to pass 😜</h2>
    <button onclick="next50()">Next</button>
    <button onclick="click50()" style="position:absolute;bottom:10px;right:10px;font-size:8px;">50</button>`;
  }

  else if(q==12){
    c.innerHTML=`<h2>12. You are my poru__ 🔑</h2>
    <input id="ans"><button onclick="wrongAlways()">Check</button>
    <button onclick="hiddenKey()" style="position:absolute;top:5px;left:5px;font-size:10px;">🔑</button>`;
  }

  else if(q==13){
    c.innerHTML=`<h2>13. Am your Amm__</h2>
    <input id="ans"><button onclick="check13()">Check</button>
    <button style="position:absolute;top:20px;">U</button>
    <button style="position:absolute;left:20px;">U</button>
    <button style="position:absolute;right:20px;">U</button>`;
  }

  else if(q==14){
    c.innerHTML=`<h2>14. If today was special what day is it?</h2>
    <input id="ans"><button onclick="check14()">Check</button>`;
  }
}

function next(){ q++; loadQuestion(); }

function check1(){
  let a=normalize(ans.value);
  if(a.includes("may 9")) next();
  else alert("Wrong 😏");
}

function check2(){
  let a=normalize(ans.value);
  if(a.includes("pond")) next();
  else alert("Wrong 😏");
}

function check3(){
  let a=normalize(ans.value);
  if(a.includes("feb") && a.includes("28")) next();
  else alert("Wrong 😏");
}

function check4(){
  let a=normalize(ans.value);
  if(a.includes("shawarma")) next();
  else alert("Wrong 😏");
}

function check5(){
  let a=normalize(ans.value);
  if(a.includes("fried rice")) next();
  else alert("Wrong 😏");
}

function check6(){
  let a=normalize(ans.value);
  if(a.includes("agh")) next();
  else alert("Wrong 😏");
}

function check7(){
  let a=normalize(ans.value);
  if(a.includes("feb") && a.includes("28")) next();
  else alert("Wrong 😏");
}

function chooseColor(color){
  if(color=="black") next();
  else alert("Wrong 😏");
}

function check9(){
  let a=normalize(ans.value);
  if(a.includes("all") || a.includes("everything")) next();
  else alert("Wrong 😏");
}

function touchSecond(){
  touchedSecondWife=true;
  alert("How dare you 😡😤");
}

function skipSecond(){
  if(!touchedSecondWife) alert("My love 😘");
  else alert("Can't able to handle one Wife thinking about 2nd one 😏");
  next();
}

function next50(){
  if(!clicked50) alert("U cheater u didn't send 50 yet 😒");
  else next();
}

function click50(){
  clicked50=true;
  alert("You escaped 😂");
}

function wrongAlways(){
  alert("Wrong.");
}

function hiddenKey(){
  next();
}

function check13(){
  let a=normalize(ans.value);
  if(a=="u") {
    alert("Yes am your Ammu 🫂😘");
    next();
  } else alert("Wrong 😏");
}

function check14(){
  let a=normalize(ans.value);
  if(a.includes("birthday")) {
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("finalScreen").classList.remove("hidden");
  } else alert("Wrong 😏");
}
