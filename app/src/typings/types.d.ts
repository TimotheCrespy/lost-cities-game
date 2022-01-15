interface Player extends Record<string, string> {
  username: string
}

interface Game extends Record<string, string | Player | undefined> {
  code: string,
  creator: Player,
  opponent?: Player,
}
