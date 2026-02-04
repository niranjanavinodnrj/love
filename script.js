

const message = `Enik nine nthoram istham ahn enn engne express chynm enn enik arinjuda. Kazhinja 2-3 varsham aayittu enik ninte koode nadakkan bhayankara ishtam ahn. Ni ollappo njn bhayankara happy ahn.Pakshe last 1 yr enik bhayankara ishtamolla oru yr aarn karanm dhoore ahnellum ni ondallo and enik ath mathi.Ni ollappo enik vere bestfriend inte avishyam ondo muthumaniye...Ni pore..Ni alle oll enik nthum parayan..gossip adikkan.Enik last 2-3 yr aayittu olla ah ni lifelong venm(by the way practical aayittu chinthichallum enik ithe parayan ollu)<br>
I love You❤️`;

let index = 0;

function startLove() {
  // show message box
  const song = document.getElementById("loveSong");
  const box = document.getElementById("messageBox");
  const textElement = document.getElementById("text");
  box.classList.remove("hidden");
  text.innerHTML="";
  index=0;
 
  sond.play().catch(err => console.log(err));
  
  const typing = setInterval(()=>{
   if (index < message.length){
    text.innerHTML +=message.charAt(index);
    index++;
    }else{ 
     clearInterval(typing);
    }
   },60);
  }