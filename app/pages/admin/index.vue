<script setup lang="ts">
definePageMeta({ layout: 'admin' })

const { t } = useAdminT()
const requests = useRequestsStore()
const satisfaction = useSatisfactionStore()

const filtro = ref<'todos' | 'pendente' | 'em_atendimento' | 'concluido'>('todos')

const filtros = computed(() => [
  { label: t('admin.filters.all'), value: 'todos' },
  { label: t('admin.filters.pending'), value: 'pendente' },
  { label: t('admin.filters.inProgress'), value: 'em_atendimento' },
  { label: t('admin.filters.done'), value: 'concluido' }
])

const categoriaLabel = computed<Record<string, string>>(() => ({
  quarto: t('admin.category.quarto'),
  manutencao: t('admin.category.manutencao'),
  checkout: t('admin.category.checkout')
}))

const respostaLabel = computed<Record<string, string>>(() => ({
  sim: t('form.answers.yes'),
  parcial: t('form.answers.partial'),
  nao: t('form.answers.no')
}))

const listaFiltrada = computed(() => {
  const all = requests.ordenadas
  if (filtro.value === 'todos') return all
  return all.filter(r => r.status === filtro.value)
})

function formatarHora(d: Date) {
  return new Date(d).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
}

const statusOptions = computed(() => [
  { label: t('admin.status.pendente'), value: 'pendente' },
  { label: t('admin.status.em_atendimento'), value: 'em_atendimento' },
  { label: t('admin.status.concluido'), value: 'concluido' }
])

const columns = computed(() => [
  { accessorKey: 'titulo', header: t('admin.columns.request') },
  { accessorKey: 'apartamento', header: t('admin.columns.apartment') },
  { accessorKey: 'criadoEm', header: t('admin.columns.datetime') },
  { accessorKey: 'status', header: t('admin.columns.status') }
])
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between flex-wrap gap-3">
      <p class="text-lg font-semibold">
        {{ t('admin.requestsTitle') }}
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
        :columns="columns"
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
        {{ t('admin.emptyList') }}
      </p>
    </UCard>

    <div>
      <p class="text-lg font-semibold mb-3">
        {{ t('admin.satisfactionTitle') }}
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
                {{ t('admin.columns.apartment') }} {{ r.apartamento }}
              </p>
              <p class="text-neutral-400 text-xs">
                {{ formatarHora(r.criadoEm) }}
              </p>
            </div>
            <div class="flex gap-4 text-xs text-neutral-500 mt-1">
              <span>{{ t('admin.cleanliness') }}: {{ respostaLabel[r.limpo] }}</span>
              <span>{{ t('admin.comfort') }}: {{ respostaLabel[r.confortavel] }}</span>
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
          {{ t('admin.satisfactionEmpty') }}
        </p>
      </UCard>
    </div>
  </div>
</template>
