

export default class Fighter {
  constructor(name, health, imgUrl, slap, punch, kick){
    this.name = name
    this.health = health
    this.imgUrl = imgUrl || 'https://thiscatdoesnotexist.com'
    this.attacks = {
      slap: slap,
      punch: punch,
      kick: kick,
    }
  }
}