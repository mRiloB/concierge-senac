import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', {
  persist: true,
  state: () => ({
    apartamento: '' as string
  }),
  actions: {
    definirApartamento(numero: string) {
      this.apartamento = numero.trim()
    }
  }
})
