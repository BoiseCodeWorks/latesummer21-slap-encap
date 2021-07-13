import { ProxyState } from '../AppState.js'


class GamesService{
  attack(type) {
  ProxyState.fighter.health -= ProxyState.fighter.attacks[type]
  }

  slap(){
    ProxyState.fighter.health--
    // console.log('slapped, from the service', ProxyState.fighter.health)
  }

}

// NOTE this creates the 'single' instance of gamesService for your app (singleton)
export const gamesService = new GamesService()

// const gamesService = new GamesService()
// export default gamesService