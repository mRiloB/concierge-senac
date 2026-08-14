<script setup lang="ts">
definePageMeta({ layout: 'guest' })

const { t, tm, rt } = useI18n()

interface Item { name: string, info: string, obs?: string }

const gastronomia = computed(() => tm('rules.gastronomy') as unknown as Item[])
const lazer = computed(() => tm('rules.leisure') as unknown as Item[])
const governanca = computed(() => tm('rules.housekeeping') as unknown as Item[])
</script>

<template>
  <div class="space-y-6">
    <div class="rounded-xl overflow-hidden bg-linear-to-br from-primary-700 to-primary-950 text-white p-6">
      <p class="text-2xl font-bold">
        {{ t('rules.title') }}
      </p>
      <p class="text-white/85 mt-1 max-w-lg">
        {{ t('rules.subtitle') }}
      </p>
    </div>

    <div>
      <p class="text-lg font-semibold mb-3 flex items-center gap-2">
        <UIcon
          name="i-lucide-utensils"
          class="size-5 text-primary-600"
        />
        {{ t('rules.gastronomyTitle') }}
      </p>
      <UCard>
        <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <div
            v-for="(item, index) in gastronomia"
            :key="index"
            class="py-3 first:pt-0 last:pb-0"
          >
            <p class="font-medium">
              {{ rt(item.name) }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ rt(item.info) }}
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
        {{ t('rules.leisureTitle') }}
      </p>
      <UCard>
        <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <div
            v-for="(item, index) in lazer"
            :key="index"
            class="py-3 first:pt-0 last:pb-0"
          >
            <p class="font-medium">
              {{ rt(item.name) }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ rt(item.info) }}
            </p>
            <p
              v-if="item.obs"
              class="text-xs text-amber-600 dark:text-amber-500 mt-1"
            >
              Obs: {{ rt(item.obs) }}
            </p>
          </div>
        </div>
      </UCard>
    </div>

    <div class="grid sm:grid-cols-2 gap-3">
      <UCard>
        <div class="flex items-start gap-3">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950 text-primary-600">
            <UIcon
              name="i-lucide-bell"
              class="size-5"
            />
          </div>
          <div>
            <p class="font-semibold">
              {{ t('rules.receptionTitle') }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ t('rules.receptionDescription') }}
            </p>
          </div>
        </div>
      </UCard>
      <UCard>
        <div class="flex items-start gap-3">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950 text-primary-600">
            <UIcon
              name="i-lucide-wifi"
              class="size-5"
            />
          </div>
          <div>
            <p class="font-semibold">
              {{ t('rules.wifiTitle') }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ t('rules.wifiDescription') }}
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
        {{ t('rules.housekeepingTitle') }}
      </p>
      <UCard>
        <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <div
            v-for="(item, index) in governanca"
            :key="index"
            class="py-3 first:pt-0 last:pb-0"
          >
            <p class="font-medium">
              {{ rt(item.name) }}
            </p>
            <p class="text-sm text-neutral-500">
              {{ rt(item.info) }}
            </p>
            <p
              v-if="item.obs"
              class="text-xs text-amber-600 dark:text-amber-500 mt-1"
            >
              Obs: {{ rt(item.obs) }}
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
        {{ t('rules.extrasTitle') }}
      </p>
      <UCard>
        <p class="text-sm text-neutral-500">
          {{ t('rules.extrasDescription') }}
        </p>
      </UCard>
    </div>

    <UAlert
      icon="i-lucide-cigarette-off"
      color="error"
      variant="subtle"
      :title="t('rules.noSmokingTitle')"
      :description="t('rules.noSmokingDescription')"
    />

    <p class="text-center text-sm text-neutral-500 pt-2">
      {{ t('rules.farewell1') }}<br>
      <span class="font-medium">{{ t('rules.farewell2') }}</span>
    </p>
  </div>
</template>
