import Fighter from "./Models/Fighter.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"



class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  fighter = new Fighter('Zangief', 120, 'https://www.fightersgeneration.com/np5/char/ssf2hd/zangief-hdstance.gif',1,5,10)
}


// NOTE Don't touch this
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
