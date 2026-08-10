<script setup lang="ts">
definePageMeta({ layout: 'admin' })

const requests = useRequestsStore()
const satisfaction = useSatisfactionStore()

const filtro = ref<'todos' | 'pendente' | 'em_atendimento' | 'concluido'>('todos')

const filtros = [
  { label: 'Todos', value: 'todos' },
  { label: 'Pendentes', value: 'pendente' },
  { label: 'Em atendimento', value: 'em_atendimento' },
  { label: 'Concluídos', value: 'concluido' }
]

const categoriaLabel: Record<string, string> = {
  quarto: 'Serviço de Quarto',
  manutencao: 'Manutenção',
  checkout: 'Late Check-out'
}

const listaFiltrada = computed(() => {
  const all = requests.ordenadas
  if (filtro.value === 'todos') return all
  return all.filter(r => r.status === filtro.value)
})

function formatarHora(d: Date) {
  return new Date(d).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
}

const statusOptions = [
  { label: 'Pendente', value: 'pendente' },
  { label: 'Em atendimento', value: 'em_atendimento' },
  { label: 'Concluído', value: 'concluido' }
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between flex-wrap gap-3">
      <p class="text-lg font-semibold">
        Solicitações
      </p>
      <UTabs
        v-model="filtro"
        :items="filtros"
        :content="false"
        size="sm"
      />
    </div>

    <UCard>
      <UTable
        :data="listaFiltrada"
        :columns="[
          { accessorKey: 'titulo', header: 'Solicitação' },
          { accessorKey: 'apartamento', header: 'Apartamento' },
          { accessorKey: 'criadoEm', header: 'Data/Hora' },
          { accessorKey: 'status', header: 'Status' }
        ]"
      >
        <template #titulo-cell="{ row }">
          <div>
            <p class="font-medium">
              {{ row.original.titulo }}
            </p>
            <p class="text-xs text-neutral-400">
              {{ categoriaLabel[row.original.categoria] }}
            </p>
            <p
              v-if="row.original.detalhe"
              class="text-xs text-neutral-400 mt-0.5 max-w-xs truncate"
            >
              {{ row.original.detalhe }}
            </p>
          </div>
        </template>
        <template #apartamento-cell="{ row }">
          {{ row.original.apartamento }}
        </template>
        <template #criadoEm-cell="{ row }">
          {{ formatarHora(row.original.criadoEm) }}
        </template>
        <template #status-cell="{ row }">
          <USelect
            :model-value="row.original.status"
            :items="statusOptions"
            size="xs"
            :color="requests.statusColor(row.original)"
            @update:model-value="(v) => requests.atualizarStatus(row.original.id, v)"
          />
        </template>
      </UTable>

      <p
        v-if="!listaFiltrada.length"
        class="text-center text-neutral-400 text-sm py-6"
      >
        Nenhuma solicitação nesta categoria.
      </p>
    </UCard>

    <div>
      <p class="text-lg font-semibold mb-3">
        Pesquisas de Satisfação
      </p>
      <UCard v-if="satisfaction.respostas.length">
        <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <div
            v-for="r in satisfaction.respostas"
            :key="r.id"
            class="py-3 first:pt-0 last:pb-0"
          >
            <div class="flex items-center justify-between text-sm">
              <p class="font-medium">
                Apartamento {{ r.apartamento }}
              </p>
              <p class="text-neutral-400 text-xs">
                {{ formatarHora(r.criadoEm) }}
              </p>
            </div>
            <div class="flex gap-4 text-xs text-neutral-500 mt-1">
              <span>Limpeza: {{ r.limpo }}</span>
              <span>Conforto: {{ r.confortavel }}</span>
            </div>
            <p
              v-if="r.observacoes"
              class="text-sm mt-1"
            >
              "{{ r.observacoes }}"
            </p>
          </div>
        </div>
      </UCard>
      <UCard v-else>
        <p class="text-center text-neutral-400 text-sm py-2">
          Nenhuma resposta recebida ainda.
        </p>
      </UCard>
    </div>
  </div>
</template>
