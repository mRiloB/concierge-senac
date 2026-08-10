<script setup lang="ts">
definePageMeta({ layout: 'guest' })
</script>

<template>
  <div class="space-y-4">
    <div>
      <p class="text-xl font-bold">
        Transportes Coletivos
      </p>
      <p class="text-neutral-500 text-sm">
        Informações sobre os meios de transporte público disponíveis.
      </p>
    </div>

    <UCard>
      <div class="flex items-center gap-3 mb-2">
        <UIcon
          name="i-lucide-bus"
          class="size-5 text-primary-600"
        />
        <p class="font-semibold">
          Ônibus
        </p>
      </div>
      <p class="text-sm text-neutral-600 dark:text-neutral-300">
        Consulte os horários no link abaixo. Lembre-se de que a utilização dos ônibus é realizada
        exclusivamente mediante o Cartão GV, emitido nos Terminais de Integração.
      </p>
      <template #footer>
        <UButton
          to="https://ceturb.es.gov.br"
          target="_blank"
          icon="i-lucide-external-link"
          variant="soft"
          block
        >
          Consultar horários
        </UButton>
      </template>
    </UCard>

    <UCard>
      <div class="flex items-center gap-3 mb-2">
        <UIcon
          name="i-lucide-ship"
          class="size-5 text-primary-600"
        />
        <p class="font-semibold">
          Aquaviário
        </p>
      </div>
      <p class="text-sm text-neutral-600 dark:text-neutral-300">
        O transporte aquaviário pode ser utilizado por meio do Cartão GV ou pagamento por cartões de
        crédito e débito por aproximação, conforme disponibilidade do sistema.
      </p>
      <ul class="text-sm text-neutral-500 mt-2 space-y-1">
        <li class="flex items-center gap-1.5">
          <UIcon
            name="i-lucide-clock"
            class="size-3.5"
          />
          Horários das embarcações disponíveis no link oficial
        </li>
        <li class="flex items-center gap-1.5">
          <UIcon
            name="i-lucide-map-pin"
            class="size-3.5"
          />
          Terminal mais próximo: Terminal Ilha do Príncipe
        </li>
      </ul>
      <template #footer>
        <UButton
          to="https://ceturb.es.gov.br"
          target="_blank"
          icon="i-lucide-external-link"
          variant="soft"
          block
        >
          Consultar horários
        </UButton>
      </template>
    </UCard>
  </div>
</template>
