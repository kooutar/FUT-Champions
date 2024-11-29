let players = [
    {
      name: "Lionel Messi",
      photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
      position: "RW",
      nationality: "Argentina",
      flag: "https://cdn.sofifa.net/flags/ar.png",
      club: "Inter Miami",
      logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
      rating: 93,
      pace: 85,
      shooting: 92,
      passing: 91,
      dribbling: 95,
      defending: 35,
      physical: 65
    },
    {
      name: "Cristiano Ronaldo",
      photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
      position: "ST",
      nationality: "Portugal",
      flag: "https://cdn.sofifa.net/flags/pt.png",
      club: "Al Nassr",
      logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
      rating: 91,
      pace: 84,
      shooting: 94,
      passing: 82,
      dribbling: 87,
      defending: 34,
      physical: 77
    },
    {
      name: "Kevin De Bruyne",
      photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
      position: "CM",
      nationality: "Belgium",
      flag: "https://cdn.sofifa.net/flags/be.png",
      club: "Manchester City",
      logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
      rating: 91,
      pace: 74,
      shooting: 86,
      passing: 93,
      dribbling: 88,
      defending: 64,
      physical: 78
    },
    {
      name: "Kylian Mbappé",
      photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
      position: "ST",
      nationality: "France",
      flag: "https://cdn.sofifa.net/flags/fr.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 92,
      pace: 97,
      shooting: 89,
      passing: 80,
      dribbling: 92,
      defending: 39,
      physical: 77
    },
    {
      name: "Virgil van Dijk",
      photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
      position: "CB",
      nationality: "Netherlands",
      flag: "https://cdn.sofifa.net/flags/nl.png",
      club: "Liverpool",
      logo: "https://cdn.sofifa.net/meta/team/8/120.png",
      rating: 90,
      pace: 75,
      shooting: 60,
      passing: 70,
      dribbling: 72,
      defending: 92,
      physical: 86
    },
    {
      name: "Antonio Rudiger",
      photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
      position: "CB",
      nationality: "Germany",
      flag: "https://cdn.sofifa.net/flags/de.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 88,
      pace: 82,
      shooting: 55,
      passing: 73,
      dribbling: 70,
      defending: 86,
      physical: 86
    },
    {
      name: "Neymar Jr",
      photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
      position: "LW",
      nationality: "Brazil",
      flag: "https://cdn.sofifa.net/flags/br.png",
      club: "Al-Hilal",
      logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
      rating: 90,
      pace: 91,
      shooting: 83,
      passing: 86,
      dribbling: 94,
      defending: 37,
      physical: 61
    },
    {
      name: "Mohamed Salah",
      photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
      position: "RW",
      nationality: "Egypt",
      flag: "https://cdn.sofifa.net/flags/eg.png",
      club: "Liverpool",
      logo: "https://cdn.sofifa.net/meta/team/8/120.png",
      rating: 89,
      pace: 93,
      shooting: 87,
      passing: 81,
      dribbling: 90,
      defending: 45,
      physical: 75
    },
    {
      name: "Joshua Kimmich",
      photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
      position: "CM",
      nationality: "Germany",
      flag: "https://cdn.sofifa.net/flags/de.png",
      club: "Bayern Munich",
      logo: "https://cdn.sofifa.net/meta/team/503/120.png",
      rating: 89,
      pace: 70,
      shooting: 75,
      passing: 88,
      dribbling: 84,
      defending: 84,
      physical: 81
    },
    {
      name: "Jan Oblak",
      photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
      position: "GK",
      nationality: "Slovenia",
      flag: "https://cdn.sofifa.net/flags/si.png",
      club: "Atletico Madrid",
      logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
      rating: 91,
      diving: 89,
      handling: 90,
      kicking: 78,
      reflexes: 92,
      speed: 50,
      positioning: 88
    },
    {
      name: "Luka Modrić",
      photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
      position: "CM",
      nationality: "Croatia",
      flag: "https://cdn.sofifa.net/flags/hr.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 88,
      pace: 74,
      shooting: 78,
      passing: 89,
      dribbling: 90,
      defending: 72,
      physical: 65
    },
    {
      name: "Vinicius Junior",
      photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
      position: "LW",
      nationality: "Brazil",
      flag: "https://cdn.sofifa.net/flags/br.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 89,
      pace: 91,
      shooting: 88,
      passing: 85,
      dribbling: 94,
      defending: 39,
      physical: 61
    },
    {
      name: "Brahim Diáz",
      photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
      position: "LW",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 82,
      pace: 85,
      shooting: 74,
      passing: 78,
      dribbling: 85,
      defending: 31,
      physical: 56
    },
    {
      name: "Karim Benzema",
      photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
      position: "ST",
      nationality: "France",
      flag: "https://cdn.sofifa.net/flags/fr.png",
      club: "Al-Ittihad",
      logo: "https://cdn.sofifa.net/meta/team/476/120.png",
      rating: 90,
      pace: 77,
      shooting: 90,
      passing: 83,
      dribbling: 88,
      defending: 40,
      physical: 78
    },
    {
      name: "Erling Haaland",
      photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
      position: "ST",
      nationality: "Norway",
      flag: "https://cdn.sofifa.net/flags/no.png",
      club: "Manchester City",
      logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
      rating: 91,
      pace: 89,
      shooting: 94,
      passing: 74,
      dribbling: 83,
      defending: 36,
      physical: 91
    },
    {
      name: "N'Golo Kanté",
      photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
      position: "CM",
      nationality: "France",
      flag: "https://cdn.sofifa.net/flags/fr.png",
      club: "Al-Ittihad",
      logo: "https://cdn.sofifa.net/meta/team/476/120.png",
      rating: 87,
      pace: 77,
      shooting: 66,
      passing: 75,
      dribbling: 82,
      defending: 88,
      physical: 82,
    },
    {
      name: "Alphonso Davies",
    photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
    position: "LB",
    nationality: "Canada",
    flag: "https://cdn.sofifa.net/flags/ca.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 84,
    pace: 96,
    shooting: 68,
    passing: 77,
    dribbling: 82,
    defending: 76,
    physical: 77,
    },
    {
      name: "Yassine Bounou",
      photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
      position: "GK",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "Al-Hilal",
      logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
      rating: 84,
      diving: 81,
      handling: 82,
      kicking: 77,
      reflexes: 86,
      speed: 38,
      positioning: 83,
    },
    {
      name: "Bruno Fernandes",
    photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
    position: "CM",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 88,
    pace: 75,
    shooting: 85,
    passing: 89,
    dribbling: 84,
    defending: 69,
    physical: 77,
    },
    {
      name: "Jadon Sancho",
      photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
      position: "LW",
      nationality: "England",
      flag: "https://cdn.sofifa.net/flags/gb-eng.png",
      club: "Manchester United",
      logo: "https://cdn.sofifa.net/meta/team/14/120.png",
      rating: 84,
      pace: 85,
      shooting: 74,
      passing: 78,
      dribbling: 88,
      defending: 34,
      physical: 63,
    },
    {
      name: "Alexander-Arnold",
      photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
      position: "RB",
      nationality: "England",
      flag: "https://cdn.sofifa.net/flags/gb-eng.png",
      club: "Liverpool",
      rating: 87,
      pace: 76,
      shooting: 66,
      passing: 89,
      dribbling: 80,
      defending: 79,
      physical: 71,
    },
    {
      name: "Achraf Hakimi",
      photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
      position: "RB",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "Paris Saint-Germain",
      logo: "https://cdn.sofifa.net/meta/team/591/120.png",
      rating: 84,
      pace: 91,
      shooting: 76,
      passing: 80,
      dribbling: 80,
      defending: 75,
      physical: 78,
    },
    {
      name: "Youssef En-Nesyri",
      photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
      position: "ST",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "Fenerbahçe",
      logo: "https://cdn.sofifa.net/meta/team/88/120.png",
      rating: 83,
      pace: 82,
      shooting: 82,
      passing: 63,
      dribbling: 77,
      defending: 36,
      physical: 80,
    },
    {
      name: "Noussair Mazraoui",
      photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
      position: "LB",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "Manchester United",
      logo: "https://cdn.sofifa.net/meta/team/14/120.png",
      rating: 81,
      pace: 78,
      shooting: 66,
      passing: 77,
      dribbling: 83,
      defending: 77,
      physical: 71,
    },
    {
      name: "Ismael Saibari",
      photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
      position: "CM",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "PSV",
      logo: "https://cdn.sofifa.net/meta/team/682/120.png",
      rating: 83,
      pace: 89,
      shooting: 78,
      passing: 80,
      dribbling: 86,
      defending: 55,
      physical: 84,
    },
    {
      name: "Gianluigi Donaruma",
      photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
      position: "GK",
      nationality: "Italy",
      flag: "https://cdn.sofifa.net/flags/it.png",
      club: "Paris Saint-Germain",
      logo: "https://cdn.sofifa.net/meta/team/591/120.png",
      rating: 89,
      diving: 88,
      handling: 84,
      kicking: 75,
      reflexes: 90,
      speed: 50,
      positioning: 85,
    },
    
  ];




const formcarde=document.querySelector('#formcarde')
const modaleAdd=document.querySelector('#modalAjout');
const closeBte=document.querySelectorAll('.closeBte');
const carde=document.querySelectorAll('.carde');
const bteAddPlayer=document.querySelector('#bteAddPlayer');
const statistique=document.querySelector('#statistique');
const bgCarde=document.querySelector('#bgCarde');
const closeBteForListPlayers=document.querySelector('#closeBteForListPlayers')
// const divImage=document.querySelector('#divImage');
const divstatistique=document.querySelector('#divstatistique')
const bteOuvrireModalAjout=document.querySelector('#bteOuvrireModalAjout');
const namePlayer=document.querySelector('#namePlayer');
const imagPlayer=document.querySelector('#imagPlayer')
const positionPlayer=document.querySelector('#positionPlayer');
const flag=document.querySelector('#flag');
const clubLogo=document.querySelector('#clubLogo');
const statusPlayer=document.querySelector('#status');
// *****************************************************

// *************************************************
const containerChangement=document.querySelector('#containerChangement')
let tab=[];
let arrayListePrincipale=[]
// fermeture de modal

// ouverture de modal
bteOuvrireModalAjout.addEventListener('click',()=>{
    modaleAdd.classList.remove('hidden')
})
closeBteForListPlayers.addEventListener('click',()=>{
    formcarde.classList.add('hidden')
})
closeBte.forEach((closeBte)=>{
    closeBte.addEventListener('click',()=>{
        modaleAdd.classList.add('hidden');
    })
});
// 
carde.forEach((carde)=>{
    carde.addEventListener('click',()=>{ 
      if(carde.id=="LST"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        tab=players.filter(players=> players.position == "ST")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="GK"){
        bgCarde.innerHTML=``
        console.log(carde.id)
         tab=players.filter(players=> players.position == "GK")
        for(i=0;i<tab.length;i++)
        {
        styleCarde(bgCarde, tab[i],carde)
        }
        formcarde.classList.remove('hidden')
       } if(carde.id=="RST"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        tab=players.filter(players=> players.position =="ST")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="RW"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        tab=players.filter(players=> players.position == "RW")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="RCM"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        tab=players.filter(players=> players.position == "CM")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="LCM"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        tab=players.filter(players=> players.position == "CM")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="LW"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        tab=players.filter(players=> players.position == "LW")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="RB"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        tab=players.filter(players=> players.position == "RB")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="RCB"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        tab=players.filter(players=> players.position == "CB")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="LCB"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        tab=players.filter(players=> players.position == "CB")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="LB"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        tab=players.filter(players=> players.position == "LB")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }
    })
})

  // fct style carde
  function styleCarde(parentDiv, player,carde)
  {
    
    if(player.position=="GK")
      {
       parentDiv.innerHTML+=`
           <div class="cardeajout flex justify-center" id="${player.name}">
     <div class="flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[220px] items-center pt-4  " style="background-image: url('images/gold84.png');">
         <div class="flex flex-col ">
             <div class="flex">
                 <div class=" top-[310px] flex flex-col mt-4">
                 <p class="">${player.rating}</p>
                  <p>${player.position}</p>
               </div>
             <img src="${player.photo}" class="h-[100px] w-24 relative">
            </div>
             <h6 class="text-center text-sm">${player.name}</h6>
         </div>
         <div class="flex justify-center gap-1">
           <div class="flex flex-col">
             <p class="text-[9px]">DIV</p>
             <p class="text-[9px]">${player.diving}</p>
           </div>
           <div class="flex flex-col">
             <p class="text-[9px]">HAN</p>
             <p class="text-[9px]">${player.handling}</p>
           </div>
           <div class="flex flex-col">
             <p class="text-[9px]">KIC</p>
             <p class="text-[9px]">${player.kicking}</p>
           </div>
           <div class="flex flex-col">
             <p class="text-[9px]">REF</p>
             <p class="text-[9px]">${player.reflexes}</p>
           </div>
           <div class="flex flex-col">
             <p class="text-[9px]">SPE</p>
             <p class="text-[9px]">${player.speed}</p>
           </div>
           <div class="flex flex-col">
             <p class="text-[9px]">POS</p>
             <p class="text-[9px]">${player.positioning}</p>
           </div>
           </div>
            <div class="flex gap-4">
                 <img src="${player.flag}" alt="" srcset="" class="w-4">
                 <img src="${player.logo}" alt="" srcset="" class="w-4">
             </div>
               </div>
 </div>
 
       `
      }else{
       parentDiv.innerHTML+=`
          <div class="cardeajout flex justify-center" id="${player.name}">
     <div class="flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[220px] items-center pt-4 " style="background-image: url('images/gold84.png');">
         <div class="flex flex-col">
             <div class="flex">
                 <div class="top-[310px] flex flex-col mt-4">
                     <p class="">${player.rating}</p>
                     <p>${player.position}</p>
                 </div> <!-- Fermeture de la div "absolute top-[310px] flex flex-col" -->
                 <img src="${player.photo}" class="h-[100px] w-24 relative">
             </div>
             <h6 class="text-center text-sm">${player.name}</h6>
         </div>
         
         <div class="flex justify-center gap-2">
             <div class="flex flex-col">
                 <p class="text-[9px]">PAC</p>
                 <p class="text-[9px]">${player.pace}</p>
             </div>
             <div class="flex flex-col">
                 <p class="text-[9px]">SHO</p>
                 <p class="text-[9px]">${player.shooting}</p>
             </div>
             <div class="flex flex-col">
                 <p class="text-[9px]">DRI</p>
                 <p class="text-[9px]">${player.dribbling}</p>
             </div>
             <div class="flex flex-col">
                 <p class="text-[9px]">DEF</p>
                 <p class="text-[9px]">${player.defending}</p>
             </div>
             <div class="flex flex-col">
                 <p class="text-[9px]">PHY</p>
                 <p class="text-[9px]">${player.physical}</p>
             </div> 
         </div>
         <div class="flex gap-4">
                 <img src="${player.flag}" alt="" srcset="" class="w-4">
                 <img src="${player.logo}" alt="" srcset="" class="w-4">
             </div>
     </div>
 </div>
       `
      }
      ajoutToTerrain(carde)
  }

// fct ajouter palyer a terrain
function ajoutToTerrain(carde){

  const cardeAjoutTerrain=document.querySelectorAll('.cardeajout');
  cardeAjoutTerrain.forEach(carte=>{
    carte.addEventListener('click',()=>{
      carte.classList.remove('cardeAjoutTerrain')
      carde.classList.add('hidden') 
       carde.parentElement.appendChild(carte)
        formcarde.classList.add('hidden')
        carte.addEventListener('click',()=>{
        formcarde.classList.remove('hidden')
        ajoutToTerrain(carte);
      })
    })
  })
}



// afficher les champs pour calculer statique selon position
positionPlayer.addEventListener('change',()=>{
    if(positionPlayer.value=="GK")
    {
        statistique.innerHTML=`
        
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for=""class="text-white">Diving</label>
                <input id="Diving" type="text" placeholder="diving" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for=""class="text-white">handling</label>
                <input id="handling" type="text" placeholder="handling" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
       </div>
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">kicking</label>
                <input id="kicking" type="text" placeholder="kicking" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">reflexes</label>
                <input id="reflexes" type="text" placeholder="reflexes" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
       </div>
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">speed</label>
                <input id="speed" type="text" placeholder="speed" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">positioning</label>
                <input id="positioning" type="text" placeholder="positioning" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
       </div>
        `
    }else{
        statistique.innerHTML=
        `
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">pace</label>
                <input id="pace"type="text" placeholder="pace" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">shooting</label>
                <input id="shooting" type="text" placeholder="shooting" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
       </div>
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">passing</label>
                <input id="passing" type="text" placeholder="passing" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for=""class="text-white">dribbling</label>
                <input id="dribbling" type="text" placeholder="dribbling" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
       </div>
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for=""class="text-white">defending</label>
                <input id="defending" type="text" placeholder="defending" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for=""class="text-white">physical</label>
                <input id="physical" type="text" placeholder="physical" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300  ">
            </div>
       </div>
        `  
    }
})
// fct add player

  
  players.forEach(player => {
    showPlayer(player)
    
  });

function showPlayer(player){
  if(player.position=='GK'){
  containerChangement.innerHTML+=`
         <div class="flex justify-center" id="${player.name}">
   <div class="cardeAjoutTerrain cursor-pointer flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[220px] items-center pt-4  " style="background-image: url('images/gold84.png');">
       <div class="flex flex-col ">
           <div class="flex">
               <div class=" top-[310px] flex flex-col mt-4">
               <p class="">${player.rating}</p>
                <p>${player.position}</p>
             </div>
           <img src="${player.photo}" class="h-[100px] w-24 relative">
          </div>
           <h6 class="text-center text-sm">${player.name}</h6>
       </div>
       <div class="flex justify-center gap-1">
         <div class="flex flex-col">
           <p class="text-[9px]">DIV</p>
           <p class="text-[9px]">${player.diving}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">HAN</p>
           <p class="text-[9px]">${player.handling}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">KIC</p>
           <p class="text-[9px]">${player.kicking}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">REF</p>
           <p class="text-[9px]">${player.reflexes}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">SPE</p>
           <p class="text-[9px]">${player.speed}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">POS</p>
           <p class="text-[9px]">${player.positioning}</p>
         </div>
         </div>
          <div class="flex gap-4">
               <img src="${player.flag}" alt="" srcset="" class="w-4">
               <img src="${player.logo}" alt="" srcset="" class="w-4">
           </div>
             </div>
</div>

     `
    }else{
      
      containerChangement.innerHTML+=`
       <div class="flex justify-center" id="${player.name}">
   <div class="cardeAjoutTerrain cursor-pointer flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[220px] items-center pt-4  " style="background-image: url('images/gold84.png');">
       <div class="flex flex-col ">
           <div class="flex">
               <div class=" top-[310px] flex flex-col mt-4">
               <p class="">${player.rating}</p>
                <p>${player.position}</p>
             </div>
           <img src="${player.photo}" class="h-[100px] w-24 relative">
          </div>
           <h6 class="text-center text-sm">${player.name}</h6>
       </div>
       <div class="flex justify-center gap-1">
         <div class="flex flex-col">
           <p class="text-[9px]">PAC</p>
           <p class="text-[9px]">${player.pace}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">SHO</p>
           <p class="text-[9px]">${player.passing}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">KIC</p>
           <p class="text-[9px]">${player.dribbling}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">REF</p>
           <p class="text-[9px]">${player.defending}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">SPE</p>
           <p class="text-[9px]">${player.physical}</p>
         </div>
         
         </div>
          <div class="flex gap-4">
               <img src="${player.flag}" alt="" srcset="" class="w-4">
               <img src="${player.logo}" alt="" srcset="" class="w-4">
           </div>
             </div>
</div>
     `
    }
  }

function  addPlayer()
{
  if(positionPlayer.value=="GK")
    {
      
      let ratingGk=(parseInt(document.querySelector('#Diving').value)+parseInt(document.querySelector('#handling').value)+parseInt(document.querySelector('#kicking').value)+parseInt(document.querySelector('#reflexes').value)+parseInt(document.querySelector('#speed').value)+parseInt(document.querySelector('#positioning').value))/6
      createObjetPayerGK(ratingGk,document.querySelector('#Diving').value,document.querySelector('#handling').value,document.querySelector('#kicking').value,document.querySelector('#reflexes').value,document.querySelector('#speed').value,document.querySelector('#positioning').value)
      containerChangement.innerHTML+=`
         <div class="flex justify-center">
   <div class="cardeAjoutTerrain cursor-pointer flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[220px] items-center pt-4  " style="background-image: url('images/gold84.png');">
       <div class="flex flex-col ">
           <div class="flex">
               <div class=" top-[310px] flex flex-col mt-4">
               <p class="">${ratingGk}</p>
                <p>${positionPlayer.value}</p>
             </div>
           <img src="${imagPlayer.value}" class="h-[100px] w-24 relative">
          </div>
           <h6 class="text-center text-sm">${namePlayer.value}</h6>
       </div>
       <div class="flex justify-center gap-1">
         <div class="flex flex-col">
           <p class="text-[9px]">DIV</p>
           <p class="text-[9px]">${document.querySelector('#Diving').value}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">HAN</p>
           <p class="text-[9px]">${document.querySelector('#handling').value}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">KIC</p>
           <p class="text-[9px]">${document.querySelector('#kicking').value}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">REF</p>
           <p class="text-[9px]">${document.querySelector('#reflexes').value}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">SPE</p>
           <p class="text-[9px]">${document.querySelector('#speed').value}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">POS</p>
           <p class="text-[9px]">${document.querySelector('#positioning').value}</p>
         </div>
         </div>
          <div class="flex gap-4">
               <img src="${flag.value}" alt="" srcset="" class="w-4">
               <img src="${clubLogo.value}" alt="" srcset="" class="w-4">
           </div>
             </div>
</div>

     `
    }else{
      let ratingNonGk=(parseInt(document.querySelector('#pace').value)+parseInt(document.querySelector('#shooting').value)+parseInt(document.querySelector('#passing').value)+parseInt(document.querySelector('#dribbling').value)+parseInt(document.querySelector('#defending').value)+parseInt(document.querySelector('#physical').value))/6
      createObjetPayer(ratingNonGk,document.querySelector('#pace').value,document.querySelector('#shooting').value,document.querySelector('#passing').value,document.querySelector('#dribbling').value,document.querySelector('#defending').value,document.querySelector('#physical').value)
      containerChangement.innerHTML+=`
        <div class="flex justify-center">
   <div class="cardeAjoutTerrain cursor-pointer flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[220px] items-center pt-4 " style="background-image: url('images/gold84.png');">
       <div class="flex flex-col">
           <div class="flex">
               <div class="top-[310px] flex flex-col mt-4">
                   <p class="">${ratingNonGk}</p>
                   <p>${positionPlayer.value}</p>
               </div> <!-- Fermeture de la div "absolute top-[310px] flex flex-col" -->
               <img src="${imagPlayer.value}" class="h-[100px] w-24 relative">
           </div>
           <h6 class="text-center text-sm">${namePlayer.value}</h6>
       </div>
       
       <div class="flex justify-center gap-2">
           <div class="flex flex-col">
               <p class="text-[9px]">PAC</p>
               <p class="text-[9px]">${document.querySelector('#pace').value}</p>
           </div>
           <div class="flex flex-col">
               <p class="text-[9px]">SHO</p>
               <p class="text-[9px]">${document.querySelector('#shooting').value}</p>
           </div>
           <div class="flex flex-col">
               <p class="text-[9px]">pas</p>
               <p class="text-[9px]">${document.querySelector('#passing').value}</p>
           </div>
            <div class="flex flex-col">
               <p class="text-[9px]">DRI</p>
               <p class="text-[9px]">${document.querySelector('#dribbling').value}</p>
           </div>
           <div class="flex flex-col">
               <p class="text-[9px]">DEF</p>
               <p class="text-[9px]">${document.querySelector('#defending').value}</p>
           </div>
           <div class="flex flex-col">
               <p class="text-[9px]">PHY</p>
               <p class="text-[9px]">${document.querySelector('#physical').value}</p>
           </div> 
       </div>
       <div class="flex gap-4">
               <img src="${flag.value}" alt="" srcset="" class="w-4">
               <img src="${clubLogo.value}" alt="" srcset="" class="w-4">
           </div>
   </div>
</div>
     `
    }

   modaleAdd.classList.add('hidden')
}

function createObjetPayerGK(ratingGk,diving,handling,kicking,kicking,reflexes,speed,positioning)
{
 const  newPlayer={
     name:namePlayer.value,
     photo:imagPlayer.value,
     position:positionPlayer.value,
     nationality:document.querySelector('#nationality').value,
     flag:flag.value,
     club:document.querySelector('#club').value,
     logo:clubLogo.value,
     rating:ratingGk,
     diving:parseInt(diving),
     handling:parseInt(handling),
     kicking:parseInt(kicking),
     reflexes:parseInt(reflexes),
     speed:parseInt(speed),
     positioning:parseInt(positioning),
 }
 players.push(newPlayer)
}
function createObjetPayer(rating,diving,handling,kicking,kicking,reflexes,speed,positioning)
{
 const  newPlayer={
     name:namePlayer.value,
     photo:imagPlayer.value,
     position:positionPlayer.value,
     nationality:document.querySelector('#nationality').value,
     flag:flag.value,
     club:document.querySelector('#club').value,
     logo:clubLogo.value,
     rating:rating,
     pace:parseInt(diving),
     shooting:parseInt(handling),
     passing:parseInt(kicking),
     dribbling:parseInt(reflexes),
     defending:parseInt(speed),
     physical:parseInt(positioning),
 }
 players.push(newPlayer)
}

function TousChampsRemplais(){
  if(EstVide(namePlayer.value)||EstVide(imagPlayer.value)||EstVide(flag.value)||EstVide(clubLogo.value)||EstVide(positionPlayer.value)|| EstVide()) 
  {
    alert("il faut remplaire Tous les champs");
  }else {
    if(positionPlayer.value=="GK")
    {
      
    }
   }
}

function EstVide(inputeValue)
{
  if(inputeValue.trim() == '' )
   {
    console.log(' conteit des espaces')
    return true
   }
   else{
    console.log(' ne contient pas des espace au debut ou fin')
   }
}

Array.from(containerChangement.children).forEach(playerChngement => {
  playerChngement.addEventListener('click', () => {
    console.log(playerChngement)
    removeplayer(playerChngement)
  });
});


function removeplayer(playerChngement) {
 
  const playerName = playerChngement.id;
  console.log(playerName)
  
  const playerIndex = players.findIndex(player => player.name == playerName);
    console.log(playerIndex)
  if (playerIndex !== -1) {
   
    players.splice(playerIndex, 1);

    // Retirer l'élément de la DOM
    playerChngement.remove();

    console.log(`Player "${playerName}" removed.`);
    console.log("Remaining players:", players);
  } else {
    console.error(`Player "${playerName}" not found in the list.`);
  }
}

