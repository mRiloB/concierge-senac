import { defineStore } from 'pinia'

export type RequestCategory = 'quarto' | 'manutencao' | 'checkout'
export type RequestStatus = 'pendente' | 'em_atendimento' | 'concluido'

export interface ServiceRequest {
  id: string
  categoria: RequestCategory
  titulo: string
  apartamento: string
  detalhe?: string
  criadoEm: Date
  status: RequestStatus
}

const STATUS_LABEL: Record<RequestCategory, Record<RequestStatus, string>> = {
  quarto: {
    pendente: 'Recebido',
    em_atendimento: 'Em atendimento',
    concluido: 'Concluído'
  },
  manutencao: {
    pendente: 'Aguardando manutenção',
    em_atendimento: 'Em atendimento',
    concluido: 'Concluído'
  },
  checkout: {
    pendente: 'Em análise',
    em_atendimento: 'Em avaliação',
    concluido: 'Confirmado'
  }
}

const STATUS_COLOR: Record<RequestStatus, 'info' | 'warning' | 'success'> = {
  pendente: 'info',
  em_atendimento: 'warning',
  concluido: 'success'
}

// Seed data so the admin panel has something to show on first load,
// mirroring the example table from the requirements doc.
function seed(): ServiceRequest[] {
  const now = Date.now()
  return [
    { id: crypto.randomUUID(), categoria: 'quarto', titulo: 'Toalha extra', apartamento: '204', criadoEm: new Date(now - 1000 * 60 * 40), status: 'concluido' },
    { id: crypto.randomUUID(), categoria: 'quarto', titulo: 'Ferro de passar roupas', apartamento: '318', criadoEm: new Date(now - 1000 * 60 * 25), status: 'em_atendimento' },
    { id: crypto.randomUUID(), categoria: 'manutencao', titulo: 'Problema no ar-condicionado', apartamento: '112', criadoEm: new Date(now - 1000 * 60 * 12), status: 'pendente' },
    { id: crypto.randomUUID(), categoria: 'checkout', titulo: 'Late Check-out', apartamento: '410', criadoEm: new Date(now - 1000 * 60 * 5), status: 'pendente' }
  ]
}

export const useRequestsStore = defineStore('requests', {
  persist: true,
  state: () => ({
    items: seed() as ServiceRequest[]
  }),
  getters: {
    ordenadas: state => [...state.items].sort((a, b) => b.criadoEm.getTime() - a.criadoEm.getTime()),
    pendentesCount: state => state.items.filter(r => r.status !== 'concluido').length
  },
  actions: {
    adicionar(input: { categoria: RequestCategory, titulo: string, apartamento: string, detalhe?: string }) {
      this.items.push({
        id: crypto.randomUUID(),
        criadoEm: new Date(),
        status: 'pendente',
        ...input
      })
    },
    atualizarStatus(id: string, status: RequestStatus) {
      const item = this.items.find(r => r.id === id)
      if (item) item.status = status
    },
    statusLabel(r: ServiceRequest) {
      return STATUS_LABEL[r.categoria][r.status]
    },
    statusColor(r: ServiceRequest) {
      return STATUS_COLOR[r.status]
    }
  }
})
