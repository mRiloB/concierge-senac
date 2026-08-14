<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const gastronomia = [
  { nome: 'Café da Manhã', info: 'Servido no Restaurante das 06h às 10h.' },
  { nome: 'Almoço Executivo', info: 'Servido de segunda a quinta das 12h às 16h.' },
  { nome: 'Sexta da Moqueca', info: 'Às sextas-feiras das 12h às 15h.' },
  { nome: 'Feijoada de Sábado', info: 'Aos sábados das 12h às 16h.' },
  { nome: 'Domingo Italiano', info: 'Aos domingos das 12h às 16h.' },
  { nome: 'Serviço à la carte', info: 'Diariamente das 12h às 22h.' },
  { nome: 'Room Service 24h', info: 'Cardápio no QR Code próximo ao frigobar. Ramal 258 ou 257.' },
  { nome: 'Piano Bar', info: 'Aberto diariamente das 18h às 22h.' }
]

const lazer = [
  {
    nome: 'Piscina',
    info: 'Disponível para uso das 09h às 20h. Para maior comodidade, também dispomos de toalhas na Recepção.',
    obs: 'Após o uso, devolução na Recepção até às 20h do mesmo dia.'
  },
  {
    nome: 'Trilha Ecológica e Píer',
    info: 'Funcionamento das 08h às 19h. Trilha Ecológica com escadas até Píer exclusivo com vista para a baía de Vitória. O Píer possui acesso à Curva da Jurema, próximo ao Shopping Vitória.'
  },
  {
    nome: 'Sauna e Academia',
    info: 'Localizadas no 1º andar, com acesso pelo elevador. Academia: das 06h às 22h. Sauna: das 14h às 22h.',
    obs: 'Solicitar à recepção para ligar a sauna com 30min de antecedência.'
  },
  { nome: 'Quadra de Tênis', info: 'Consulte a disponibilidade e agendamento com a Recepção.' }
]

const governanca = [
  {
    nome: 'Limpeza das acomodações',
    info: 'Diariamente das 8h às 15h.',
    obs: 'Caso não deseje arrumação, favor utilizar a placa Não Perturbe.'
  },
  {
    nome: 'Lavanderia',
    info: 'Solicite o recolhimento da peça até às 10h. É necessário o preenchimento da comanda, indicar o tipo de serviço e deixar as roupas dentro da sacola destinada ao serviço. Disponível de segunda a sábado (exceto feriados). Na recepção dispomos de ferro e tábua de passar.'
  }
]
</script>

<template>
  <div class="space-y-6">
    <div class="rounded-xl overflow-hidden bg-linear-to-br from-primary-700 to-primary-950 text-white p-6">
      <p class="text-2xl font-bold">
        Bem-vindos!
      </p>
      <p class="text-white/85 mt-1 max-w-lg">
        Informações e regras do hotel para tornar sua estadia ainda mais tranquila.
      </p>
    </div>

    <div>
      <p class="text-lg font-semibold mb-3 flex items-center gap-2">
        <UIcon
          name="i-lucide-utensils"
          class="size-5 text-primary-600"
        />
        Gastronomia
      </p>
      <UCard>
        <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <div
            v-for="item in gastronomia"
            :key="item.nome"
            class="py-3 first:pt-0 last:pb-0"
          >
            <p class="font-medium">
              {{ item.nome }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ item.info }}
            </p>
          </div>
        </div>
      </UCard>
    </div>

    <div>
      <p class="text-lg font-semibold mb-3 flex items-center gap-2">
        <UIcon
          name="i-lucide-waves"
          class="size-5 text-primary-600"
        />
        Lazer
      </p>
      <UCard>
        <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <div
            v-for="item in lazer"
            :key="item.nome"
            class="py-3 first:pt-0 last:pb-0"
          >
            <p class="font-medium">
              {{ item.nome }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ item.info }}
            </p>
            <p
              v-if="item.obs"
              class="text-xs text-amber-600 dark:text-amber-500 mt-1"
            >
              Obs: {{ item.obs }}
            </p>
          </div>
        </div>
      </UCard>
    </div>

    <div class="grid sm:grid-cols-2 gap-3">
      <UCard>
        <div class="flex items-start gap-3">
          <div
            class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950 text-primary-600"
          >
            <UIcon
              name="i-lucide-bell"
              class="size-5"
            />
          </div>
          <div>
            <p class="font-semibold">
              Recepção
            </p>
            <p class="text-sm text-neutral-500">
              Estamos à disposição para melhor te atender. Disponível nos ramais 250 ou 251.
            </p>
          </div>
        </div>
      </UCard>
      <UCard>
        <div class="flex items-start gap-3">
          <div
            class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950 text-primary-600"
          >
            <UIcon
              name="i-lucide-wifi"
              class="size-5"
            />
          </div>
          <div>
            <p class="font-semibold">
              Wi-Fi
            </p>
            <p class="text-sm text-neutral-500">
              Conecte-se à rede Senac, clique em HÓSPEDE e realize o acesso conforme indicado.
            </p>
          </div>
        </div>
      </UCard>
    </div>

    <div>
      <p class="text-lg font-semibold mb-3 flex items-center gap-2">
        <UIcon
          name="i-lucide-shirt"
          class="size-5 text-primary-600"
        />
        Serviço de Governança e Lavanderia
      </p>
      <UCard>
        <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <div
            v-for="item in governanca"
            :key="item.nome"
            class="py-3 first:pt-0 last:pb-0"
          >
            <p class="font-medium">
              {{ item.nome }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ item.info }}
            </p>
            <p
              v-if="item.obs"
              class="text-xs text-amber-600 dark:text-amber-500 mt-1"
            >
              Obs: {{ item.obs }}
            </p>
          </div>
        </div>
      </UCard>
    </div>

    <div>
      <p class="text-lg font-semibold mb-3 flex items-center gap-2">
        <UIcon
          name="i-lucide-credit-card"
          class="size-5 text-primary-600"
        />
        Consumos Extras
      </p>
      <UCard>
        <p class="text-sm text-neutral-500">
          Pagamento no atendimento ou no check-out (para esta última opção, é necessário realizar
          o cadastro do cartão de crédito na recepção). Consumo de frigobar será acertado no check-out.
        </p>
      </UCard>
    </div>

    <UAlert
      icon="i-lucide-cigarette-off"
      color="error"
      variant="subtle"
      title="Hotel 100% não fumante"
      description="Em caso de desrespeito, será aplicada taxa referente a uma diária de tarifa balcão."
    />

    <p class="text-center text-sm text-neutral-500 pt-2">
      Desejamos uma ótima hospedagem,<br>
      <span class="font-medium">Equipe Hotel Senac Ilha do Boi</span>
    </p>
  </div>
</template>
