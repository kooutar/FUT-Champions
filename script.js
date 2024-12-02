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
const statistique=document.querySelector('#statistique');
const bgCarde=document.querySelector('#bgCarde');
const closeBteForListPlayers=document.querySelector('#closeBteForListPlayers')
const bteOuvrireModalAjout=document.querySelector('#bteOuvrireModalAjout');
const namePlayer=document.querySelector('#namePlayer');
const imagPlayer=document.querySelector('#imagPlayer')
const positionPlayer=document.querySelector('#positionPlayer');
const flag=document.querySelector('#flag');
const clubLogo=document.querySelector('#clubLogo');

// *****************************************************
  const nationality=document.querySelector('#nationality');
  const club=document.querySelector('#club');
// *************************************************
const containerChangement=document.querySelector('#containerChangement')
let FiltredPlayers=[];
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
// 
carde.forEach(carde => {
  carde.addEventListener('click', () => {
    const positionObjet= {
      LST: "ST",
      GK: "GK",
      RST: "ST",
      RW: "RW",
      RCM: "CM",
      LCM: "CM",
      LW: "LW",
      RB: "RB",
      RCB: "CB",
      LCB: "CB",
      LB: "LB"
    };
    if (positionObjet[carde.id]) {
      recuperePlayersPosition(carde, positionObjet[carde.id]);
    }
  });
});
// 
function recuperePlayersPosition(carde, position) {
  bgCarde.innerHTML = ``; 
  console.log(carde.id); 

  const filteredPlayers = players.filter(player => player.position === position); 

  
  filteredPlayers.forEach(player => {
    styleCarde(bgCarde, player);
    ajoutToTerrain(carde);
  });

  formcarde.classList.remove('hidden'); 

}



  // fct style carde
  function styleCarde(parentDiv, player)
  {
    
    if(player.position=="GK")
      {
       parentDiv.innerHTML+=`
       <div class="cardeajout flex" id="${player.name}">
           <div class="flex justify-center" >
     <div class="cursor-pointer flex flex-col bg-cover bg-center bg-no-repeat  w-16 h-24 pl-2 pt-2 lg:w-24 lg:h-36 items-center pt-4  " style="background-image: url('images/gold84.png');">
         <div class="flex flex-col ">
             <div class="flex">
                 <div class=" top-[310px] flex flex-col ">
                 <p  class="text-[10px] lg:text-sm">${player.rating}</p>
                  <p class=" text-[10px] lg:text-sm">${player.position}</p>
               </div>
             <img src="${player.photo}" class="w-8">
            </div>
             <p id="namePlayer" class="text-center text-[8px] lg:text-sm">${player.name}</p>
         </div>
         <div class="flex justify-center gap-[3x] lg:gap-[0.8px]">
           <div class="flex flex-col">
             <p class="text-[4px] lg:text-[8px]">DIV</p>
             <p class="text-[4px] lg:text-[8px]">${player.diving}</p>
           </div>
           <div class="flex flex-col">
             <p class="text-[4px] lg:text-[8px]">HAN</p>
             <p class="text-[4px] lg:text-[8px]">${player.handling}</p>
           </div>
           <div class="flex flex-col">
             <p class="text-[4px] lg:text-[8px]">KIC</p>
             <p class="text-[4px] lg:text-[8px]">${player.kicking}</p>
           </div>
           <div class="flex flex-col">
             <p class="text-[4px] lg:text-[8px]">REF</p>
             <p class="text-[4px] lg:text-[8px]">${player.reflexes}</p>
           </div>
           <div class="flex flex-col">
             <p class="text-[4px] lg:text-[8px]">SPE</p>
             <p class="text-[4px] lg:text-[8px]">${player.speed}</p>
           </div>
           <div class="flex flex-col">
             <p class="text-[4px] lg:text-[8px]">POS</p>
             <p class="text-[4px] lg:text-[8px]">${player.positioning}</p>
           </div>
           </div>
            <div class="flex gap-4">
                 <img src="${player.flag}" alt="" srcset="" class="w-2">
                 <img src="${player.logo}" alt="" srcset="" class="w-2">
             </div>
               </div>
 </div>
 <img id="echangeIcone" src="images/png-clipart-computer-icons-raypa-r-espinar-s-l-icon-design-replacement-miscellaneous-blue-removebg-preview.png" alt="" srcset="" class="echangeIcone hidden w-4 h-2 md:w-8 h-8 cursor-pointer">
 </div>
       `
      }else{
       parentDiv.innerHTML+=`
       <div class="flex cardeajout " id="${player.name}" >
          <div class="flex justify-center ">
     <div class="cursor-pointer flex flex-col  pl-2 pt-2 w-16 h-24 lg:w-24 lg:h-36 bg-cover bg-center bg-no-repeat  items-center" style="background-image: url('images/gold84.png');">
         <div class="flex flex-col">
             <div class="flex">
                 <div class="top-[310px] flex flex-col ">
                     <p class="text-[10px] lg:text-sm">${player.rating}</p>
                     <p class="text-[10px] lg:text-sm">${player.position}</p>
                 </div> 
                 <img src="${player.photo}" class="w-8">
             </div>
             <p id="namePlayer" class="text-center text-[8px] lg:text-sm">${player.name}</p>
         </div>
         
         <div class="flex justify-center gap-1 lg:gap-[0.8px]">
             <div class="flex flex-col">
                 <p class="text-[4px] lg:text-[8px]">PAC</p>
                 <p class="text-[4px] lg:text-[8px]">${player.pace}</p>
             </div>
             <div class="flex flex-col">
                 <p class="text-[4px] lg:text-[8px]">SHO</p>
                 <p class="text-[4px] lg:text-[8px]">${player.shooting}</p>
             </div>
             <div class="flex flex-col">
                 <p class="text-[4px] lg:text-[8px]">DRI</p>
                 <p class="text-[4px] lg:text-[8px]">${player.dribbling}</p>
             </div>
             <div class="flex flex-col">
                 <p class="text-[4px] lg:text-[8px]">DEF</p>
                 <p class="text-[4px] lg:text-[8px]">${player.defending}</p>
             </div>
             <div class="flex flex-col">
                 <p class="text-[4px] lg:text-[8px]">PHY</p>
                 <p class="text-[4px] lg:text-[8px]">${player.physical}</p>
             </div> 
         </div>
         <div class="flex gap-2">
                 <img src="${player.flag}" alt="" srcset="" class="w-2">
                 <img src="${player.logo}" alt="" srcset="" class="w-2">
             </div>
     </div>
 </div>
 
 </div>
       `
      }
     
  }

// fct ajouter palyer a terrain
function ajoutToTerrain(carde){
  console.log('je suis a ajoutToTerrain')
  const cardeAjoutTerrain=document.querySelectorAll('.cardeajout');
  
  cardeAjoutTerrain.forEach(carte=>{
    
    carte.addEventListener('click',()=>{
      carde.classList.add('hidden')
       carte.classList.remove('cardeajout')
      arrayListePrincipale.push(players[FiltredPlayers.findIndex(player=>player.name==carte.id)])
      
       carde.parentElement.appendChild(carte)
      //  carte.classList.add('carde')
        formcarde.classList.add('hidden')
        removerPlayerFromChangement(carte)
         CreateIconChangement(carte,carde)
         
    })
  })
}
function CreateIconChangement(carte,carde){
  console.log('je suis a CreateIconChangement')
 let IconChangement=document.createElement('img')
 IconChangement.src="images/png-clipart-computer-icons-raypa-r-espinar-s-l-icon-design-replacement-miscellaneous-blue-removebg-preview.png"
 IconChangement.classList.add("mb-4","w-4","h-2", "md:w-8" ,"md:h-8" ,"cursor-pointer")
 carte.parentElement.classList.add("flex")
 carte.parentElement.appendChild(IconChangement)
 IconChangement.addEventListener('click',()=>{
  console.log('autre joueur')
 
  formcarde.classList.remove('hidden')

  Array.from(bgCarde.children).forEach(child=>{
    child.addEventListener('click',()=>{
      console.log('click child')
      carte.classList.add('hidden')
      IconChangement.classList.add('hidden')
      carde.parentElement.appendChild(child)
      formcarde.classList.add('hidden')
  
      console.log('formcarde')
    })
  })
  
 })




 
}


function removerPlayerFromChangement(player){
  Array.from(containerChangement.children).forEach(playerChngement => {
       if(player.id==playerChngement.id)
       {
            removeplayer(playerChngement)
       }
    });
  let playerIndex=FiltredPlayers.findIndex(playerFilterd=>player.name==playerFilterd.name)
    if(playerIndex!=-1)
    {
      FiltredPlayers.splice(playerIndex,1);
    }
  
}

// afficher les champs pour calculer statique selon position
positionPlayer.addEventListener('change',()=>{
    if(positionPlayer.value=="GK")
    {
        statistique.innerHTML=`
        
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for=""class="text-white">Diving</label>
                <input id="Diving" type="number" placeholder="diving" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
                <p id="msgErrDiving" class="hidden text-red-200">Invalide number</p>
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for=""class="text-white">handling</label>
                <input id="handling" type="number" placeholder="handling" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
            </div>
       </div>
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">kicking</label>
                <input id="kicking" type="number" placeholder="kicking" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">reflexes</label>
                <input id="reflexes" type="number" placeholder="reflexes" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
            </div>
       </div>
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">speed</label>
                <input id="speed" type="number" placeholder="speed" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">positioning</label>
                <input id="positioning" type="number" placeholder="positioning" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
            </div>
       </div>
        `
    }else{
        statistique.innerHTML=
        `
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">pace</label>
                <input id="pace"type="number" placeholder="pace" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">shooting</label>
                <input id="shooting" type="number" placeholder="shooting" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
            </div>
       </div>
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for="" class="text-white">passing</label>
                <input id="passing" type="number" placeholder="passing" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for=""class="text-white">dribbling</label>
                <input id="dribbling" type="number" placeholder="dribbling" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
            </div>
       </div>
        <div class="flex gap-2">
            <div class="flex flex-col gap-1 w-1/2">
                <label for=""class="text-white">defending</label>
                <input id="defending" type="number" placeholder="defending" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
            </div>
            <div class="flex flex-col gap-1 w-1/2">
                <label for=""class="text-white">physical</label>
                <input id="physical" type="number" placeholder="physical" class="rounded-lg p-2 border-2  focus:outline-none focus:border-blue-500 hover:border-blue-300" required>
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
   <div class="cursor-pointer flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[220px] items-center pt-4  " style="background-image: url('images/gold84.png');">
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
   <div class="cursor-pointer flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[220px] items-center pt-4  " style="background-image: url('images/gold84.png');">
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







Array.from(containerChangement.children).forEach(playerChngement => {
  playerChngement.addEventListener('click', () => {
    console.log(playerChngement.id)
    modalePourSupprission(playerChngement)
    document.querySelector('#modaleremove').classList.remove('hidden')
  });
});

document.querySelector('#bteNonModalSupprission').addEventListener('click',()=>{
  console.log('clik')
   document.querySelector('#modaleremove').classList.add('hidden')
})
function modalePourSupprission(playerChngement){
document.querySelector('#bteOuiModalSupprission').addEventListener('click',()=>{
  removeplayer(playerChngement)
   document.querySelector('#modaleremove').classList.add('hidden')
  //  alert('voutre suuprission ce fait avec sussés')
})
}
function removeplayer(playerChngement) {
 
  const playerName = playerChngement.id;
  console.log(playerName)
  
  const playerIndex = players.findIndex(player => player.name == playerName);
    console.log(playerIndex)
  if (playerIndex !== -1) {
   
    players.splice(playerIndex, 1);

    
    playerChngement.remove();

   
  } else {
    console.error(`Player "${playerName}" not found `);
  }
}


namePlayer.addEventListener('blur',()=>{
  if(EstVide(namePlayer.value)||verifierInput(namePlayer.value)==false)
  {
    document.querySelector('#msgErrName').classList.remove('hidden')
    namePlayer.value="";
  }
  
})
imagPlayer.addEventListener('blur',()=>{
  if(EstVide(imagPlayer.value)||verifierImageUrl(imagPlayer.value)==false)
    {
      document.querySelector('#msgErrImage').classList.remove('hidden')
      imagPlayer.value="";
    }
  })
  nationality.addEventListener('blur',()=>{
    if(EstVide(nationality.value)||verifierInput(nationality.value)==false)
      {
        document.querySelector('#msgErrcountry').classList.remove('hidden')
        nationality.value="";
      } 
  })
  club.addEventListener('blur',()=>{
    if(EstVide(club.value)||verifierInput(club.value)==false)
      {
       document.querySelector('#msgErrclub').classList.remove('hidden')
        club.value="";
      }
  })
  flag.addEventListener('blur',()=>{
    if(EstVide(flag.value)||verifierImageUrl(flag.value)==false)
      {
       document.querySelector('#msgErrflag').classList.remove('hidden')
        flag.value="";
      }
  })
  clubLogo.addEventListener('blur',()=>{
    if(EstVide(clubLogo.value)||verifierImageUrl(clubLogo.value)==false)
      {
        document.querySelector('#msgErrclubimag').classList.remove('hidden')
        clubLogo.value="";
      }
     
      
  })
  document.querySelector('#Diving').addEventListener('blur',()=>{
    // console.log('hii')
    if(verifierInputNumber(document.querySelector('#Diving').value)==false){
     document.querySelector('#msgErrDiving').classList.remove('hidden')
    }
  })

  function verifierImageUrl(inputValue) {
    const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i; 
    if (regex.test(inputValue)) {
      console.log('Input valide : URL d\'image détectée.');
      return true;
    } else {
      console.log('Input invalide : ce n\'est pas une URL d\'image.');
      return false;
    }
  }
  

function verifierInput(inputValue) {
  const regex = /^[a-zA-Z\s]+$/; 
  if (regex.test(inputValue)) {
    console.log('Input valide : ne contient que des lettres et des espaces.');
    return true;
  } else {
    console.log('Input invalide : contient des chiffres ou des caractères spéciaux.');
    return false;
  }
}

function verifierInputNumber(inputValue) {
  // Convertir la valeur en nombre
  const value = parseFloat(inputValue);

  // Vérifier si c'est un nombre et s'il est dans la plage
  if (!isNaN(value) && value >= 0 && value <= 100) {
    console.log("La valeur est valide (entre 0 et 100).");
    return true;
  } else {
    console.log("Valeur invalide : Doit être entre 0 et 100.");
    return false;
  }
}


function  addPlayer()
{
  event.preventDefault();
  if (Exist(namePlayer.value)) {
        alert('Ce joueur existe déjà !');
      } else {
      //  console.log(Array.from(containerChangement.children)[0].id)
        console.log('***************************')
        stylerCratePourAjout()
      // console.log(Array.from(containerChangement.children)[length].id)
      }
   modaleAdd.classList.add('hidden') 
   Array.from(containerChangement.children).forEach(playerChngement => {
    playerChngement.addEventListener('click', () => {
      console.log(playerChngement)
      modalePourSupprission(playerChngement)
      document.querySelector('#modaleremove').classList.remove('hidden')
    });
  });
}

function stylerCratePourAjout()
{
  if(positionPlayer.value=="GK")
    {
      
      let ratingGk=(parseInt(document.querySelector('#Diving').value)+parseInt(document.querySelector('#handling').value)+parseInt(document.querySelector('#kicking').value)+parseInt(document.querySelector('#reflexes').value)+parseInt(document.querySelector('#speed').value)+parseInt(document.querySelector('#positioning').value))/6
      createObjetPayerGK(ratingGk,document.querySelector('#Diving').value,document.querySelector('#handling').value,document.querySelector('#kicking').value,document.querySelector('#reflexes').value,document.querySelector('#speed').value,document.querySelector('#positioning').value)
      containerChangement.innerHTML+=`
         <div class="flex justify-center" id="${namePlayer.value}">
   <div class="cursor-pointer flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[220px] items-center pt-4  " style="background-image: url('images/gold84.png');">
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
        <div class="flex justify-center" id="${namePlayer.value}">
   <div class="cursor-pointer flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[220px] items-center pt-4 " style="background-image: url('images/gold84.png');">
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
    return false
   }
}
function Exist(name)
{
  // ||(arrayListePrincipale.findIndex(player=>player.name.toLowerCase()==name.toLowerCase()))!=-1
      if(players.findIndex(player=>player.name.toLowerCase()==name.toLowerCase())!=-1)
        return true
      return false
}

function createObjetPayerGK(ratingGk,diving,handling,kicking,kicking,reflexes,speed,positioning)
{
  console.log(players.length)
 const  newPlayer={
     name:namePlayer.value,
     photo:imagPlayer.value,
     position:positionPlayer.value,
     nationality:nationality.value,
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
 console.log(players.length)
}
function createObjetPayer(rating,diving,handling,kicking,kicking,reflexes,speed,positioning)
{
 const  newPlayer={
     name:namePlayer.value,
     photo:imagPlayer.value,
     position:positionPlayer.value,
     nationality:nationality.value,
     flag:flag.value,
     club:club.value,
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