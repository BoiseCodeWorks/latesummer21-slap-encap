import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GamesService.js";

function _draw(){
  let fighter = ProxyState.fighter
  document.getElementById('health').innerText = fighter.health.toString()
  document.getElementById('fighter').innerHTML =  ` <h3>${fighter.name}</h3><hr/><img src="${fighter.imgUrl}" alt="">`
}



export default class GamesController{
  constructor(){
    _draw()
  }

slap(){
  // console.log('slap, from controller')
  gamesService.slap()
  _draw()
}

attack(type){
  // console.log('slap, from controller')
  gamesService.attack(type)
  _draw()
}

}