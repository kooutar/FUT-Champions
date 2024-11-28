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
    }
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

let tabPlayers=[];

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
       let tab=players.filter(players=> players.position == "ST")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="GK"){
        bgCarde.innerHTML=``
        console.log(carde.id)
        let tab=players.filter(players=> players.position == "GK")
        for(i=0;i<tab.length;i++)
        {
        styleCarde(bgCarde, tab[i],carde)
        }
        formcarde.classList.remove('hidden')
       } if(carde.id=="RST"){
        bgCarde.innerHTML=``
        console.log(carde.id)
       let tab=players.filter(players=> players.position =="ST")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="RW"){
        bgCarde.innerHTML=``
        console.log(carde.id)
       let tab=players.filter(players=> players.position == "RW")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="RCM"){
        bgCarde.innerHTML=``
        console.log(carde.id)
       let tab=players.filter(players=> players.position == "CM")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="LCM"){
        bgCarde.innerHTML=``
        console.log(carde.id)
       let tab=players.filter(players=> players.position == "CM")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="LW"){
        bgCarde.innerHTML=``
        console.log(carde.id)
       let tab=players.filter(players=> players.position == "LW")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="RB"){
        bgCarde.innerHTML=``
        console.log(carde.id)
       let tab=players.filter(players=> players.position == "RB")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="RCB"){
        bgCarde.innerHTML=``
        console.log(carde.id)
       let tab=players.filter(players=> players.position == "CB")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="LCB"){
        bgCarde.innerHTML=``
        console.log(carde.id)
       let tab=players.filter(players=> players.position == "CB")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }if(carde.id=="LB"){
        bgCarde.innerHTML=``
        console.log(carde.id)
       let tab=players.filter(players=> players.position == "LB")
       for(i=0;i<tab.length;i++)
       {
        styleCarde(bgCarde, tab[i],carde)
       }
       formcarde.classList.remove('hidden')
      }
    })
})

// fct ajoute 
  function  addCriteriaPlayer(parentDiv ,playerPosition ,player,carde)
  {
     if(playerPosition=="GK")
     {
      parentDiv.innerHTML+=`
          <div class="flex justify-center">
    <div class="cardeAjoutTerrain flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[200px] items-center pt-4  " style="background-image: url('images/badge_gold.png');">
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
         <div class="flex justify-center">
    <div class="cardeAjoutTerrain  flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[200px] items-center pt-4 " style="background-image: url('images/badge_gold.png');">
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
  // fct style carde
  function styleCarde(divContainer, player,carde)
  {
    
    addCriteriaPlayer(divContainer,player.position,player,carde)
  }

// fct ajouter palyer a terrain
function ajoutToTerrain(carde){
  const cardeAjoutTerrain=document.querySelectorAll('.cardeAjoutTerrain');
  // console.log(cardeAjoutTerrain)
  cardeAjoutTerrain.forEach(carte=>{
    let countClick=0;
  
    console.log(countClick);
    carte.addEventListener('click',()=>{
      carde.classList.add('hidden')
          console.log(carte)
  
       carde.parentElement.appendChild(carte)
        formcarde.classList.add('hidden')
      countClick++
      carte.addEventListener('click',()=>{
        formcarde.classList.remove('hidden')
        ajoutToTerrain(carte)
      })

      
    })
  })
}



// afficher les champs pour calculer statique selon position
positionPlayer.addEventListener('change',()=>{
    if(positionPlayer.value=="GK")
    {
        statistique.innerHTML=`
        <label for="" >rating</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >rating</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >rating</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >rating</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >rating</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >rating</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >rating</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        `
    }else{
        statistique.innerHTML=
        `
         <label for="" >rating</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >pace</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >shooting</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >passing</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >dribbling</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >defending</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        <label for="" >physical</label>
        <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
        `  
    }
})
// fct add player
function addPlayer()
{
    const player = {
        name: namePlayer.value,
        photo:imagPlayer.value,
        position:positionPlayer.value,
        flag:flag.value,
        clubLogo:clubLogo.value,
        statusPlayer:statusPlayer.value
    };
    tabPlayers.push(player)
    window.localStorage.setItem("players",player)
}




