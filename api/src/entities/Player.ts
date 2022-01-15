export default class Player {
  username: string

  constructor(username: string) {
    this.username = username
  }
  setUsername(username: string) {
    this.username = username.charAt(0).toUpperCase() + username.slice(1);
  }
}
