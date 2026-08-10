import { defineStore } from 'pinia'

export interface SatisfactionResponse {
  id: string
  apartamento: string
  limpo: 'sim' | 'parcial' | 'nao'
  confortavel: 'sim' | 'parcial' | 'nao'
  observacoes?: string
  criadoEm: Date
}

export const useSatisfactionStore = defineStore('satisfaction', {
  state: () => ({
    respostas: [] as SatisfactionResponse[]
  }),
  actions: {
    adicionar(input: Omit<SatisfactionResponse, 'id' | 'criadoEm'>) {
      this.respostas.push({
        id: crypto.randomUUID(),
        criadoEm: new Date(),
        ...input
      })
    }
  }
})
