function play() {
var audio = new Audio('https://rr4---sn-npoeens7.googlevideo.com/videoplayback?expire=1666427523&ei=IlZTY57uOYr6vATm374w&ip=180.242.199.5&id=o-AA8W_H-ROLWFlao8hftXv_gah8g9fLpPUqog4ThPbqZt&itag=18&source=youtube&requiressl=yes&gcr=id&spc=yR2vpxpLSyJIpZw-m6ORRCk8xeAQmUo&vprv=1&mime=video%2Fmp4&ns=DNPB6jM82IVrC-pLwBBM34UI&cnr=14&ratebypass=yes&dur=55.751&lmt=1661326827829564&fexp=24001373,24007246&c=WEB&txp=5318224&n=bJljlqwdWGsz6w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIhAIvJRXNWsSix9rCaEhF2T1cLKbf2EbjEDKH1OgrznOO2Ah9ZAthx-fO-KLl9NPRjQJO04LP8j_fVu4gdfIwgHPZ1&rm=sn-2uuxa3vh-cuie76,sn-npo6r7l&req_id=9cf8e95b255ba3ee&redirect_counter=3&cm2rm=sn-xmjxajvh-jb3zz7s&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=db&mip=140.213.0.85&mm=30&mn=sn-npoeens7&ms=nxu&mt=1666405723&mv=m&mvi=4&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgbrQBmeYA9SbD4CjIV-WW-oumSisxdE4ei0TZDB6t2zYCIFasNNxuujKMQsInI9AqzxRxCEZCaxpHJZK3EOCjyGET');audio.play();}
function nonFt() {document.getElementById('foto').style.display = "none";} function showFt() {document.getElementById('foto').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style.display = "none";} function showDiv() {document.getElementById('Content').style.display = "block";}
  function trm() {document.getElementById('trm').style.margin = "0";}
  function whs() {document.getElementById('whs').style.margin = "12px 12px 12px 0";document.getElementById('trm').style.display = "none";}
  function iloveu() {if(u==text2.length){document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";}}
  function fotoKt() {document.getElementById('ftKm').style.margin = "0 110px 0 0";document.getElementById('ftAk').style.opacity = "1";document.getElementById('ftAk').style.margin = "0 0 0 60px";
  var e1 = document.getElementById('ftKm');e1.classList.add("degdeg");var e2 = document.getElementById('ftAk');e2.classList.add("degdeg");}
  
  function ketik() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(ketik,100);
    }
    if(i==text.length){
    ketikk();}
  }
  function ketikk() {
    if(u<text2.length){
      document.getElementById("text2").innerHTML += text2.charAt(u);
      u++;
      setTimeout(ketikk,200);
    }
    if(u==text2.length){
    trm();}
  }
  function siap() {
    if(o<text3.length){
      document.getElementById("text3").innerHTML += text3.charAt(o);
      o++;
      setTimeout(siap,80);
    }
    if(o==text3.length){
    document.getElementById('sp2').style.display = "none";document.getElementById('sp3').style.display = "block";
    duar();}
  }
  function duar() {
    if(a<text4.length){
      document.getElementById("text4").innerHTML += text4.charAt(a);
      a++;
      setTimeout(duar,200);
    }
    if(a==text4.length){
    fotoKt();}
    }
