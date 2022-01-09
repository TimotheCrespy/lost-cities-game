export default {
  getMockedData(mockedData: unknown): Promise<unknown> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockedData)
      }, import.meta.env.VITE_MOCKING_DELAY_MS)
    })
  }
}
