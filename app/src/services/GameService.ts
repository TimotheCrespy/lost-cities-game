import apiClient from "@/services/apiClient"

export default {
  createGame(username: string): Promise<{ data: Game }> {
    return apiClient().post(`/game`, { creatorUsername: username })
  },
  joinGame(gameCode: string, username: string): Promise<{ data: Game }> {
    return apiClient().put(`/game`, { gameCode, opponentUsername: username })
  },
}
