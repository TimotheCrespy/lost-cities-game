import apiClient from "@/services/apiClient"

export default {
  createGame(): Promise<{ data: Game }> {
    return apiClient().post(`/game`)
  },
}
