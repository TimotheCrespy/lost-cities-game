import createGameMockedData from "@/services/mockedData/createGame.json"
import joinGameMockedData from "@/services/mockedData/joinGame.json"
import GameService from "@/services/GameService"
import helpers from "@/composables/useHelpers"

const isMockingApi = import.meta.env.VITE_IS_MOCKING_API == "true"

const useGameService = function (): {
  createGame: () => Promise<Game>,
  joinGame: (gameCode: string) => Promise<Game>,
} {
  const createGame = async function (): Promise<Game> {
    if (isMockingApi) return helpers.getMockedData(createGameMockedData) as Promise<Game>
    try {
      const response: { data: Game } = await GameService.createGame()
      return response.data
    } catch (error) {
      throw new Error("Unable to retrieve game code.")
    }
  }
  const joinGame = async function (gameCode: string): Promise<Game> {
    if (isMockingApi) return helpers.getMockedData(joinGameMockedData) as Promise<Game>
    try {
      const response: { data: Game } = await GameService.joinGame(gameCode)
      return response.data
    } catch (error) {
      throw new Error("Unable to join game.")
    }
  }

  return {
    createGame,
    joinGame,
  }
}

export default useGameService()
