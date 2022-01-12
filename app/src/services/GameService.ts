import apiClient from "@/services/apiClient"

export default {
  createGame(): Promise<{ data: Game }> {
    return apiClient().post(`/game`)
  },
  joinGame(gameCode: string): Promise<{ data: Game }> {
    return apiClient().put(`/game`, { gameCode })
  },
}
