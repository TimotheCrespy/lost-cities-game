import { generateUniqueCode } from '../utils.js'

export default class Game {
  code

  constructor() { }

  generateCode(existingGameCodes) {
    this.code = generateUniqueCode(existingGameCodes)
  }
}