import ptMessages from '~/i18n/admin-pt.json'

/**
 * The admin panel is used by hotel reception staff and must always
 * display in Portuguese, regardless of the guest-facing app's locale
 * (which follows the visitor's browser/device language).
 * This reads directly from the pt.json messages, bypassing vue-i18n's
 * reactive global locale.
 */
export function useAdminT() {
  function t(key: string, params?: Record<string, string | number>) {
    const value = key.split('.').reduce<unknown>((obj, k) => {
      if (obj && typeof obj === 'object') return (obj as Record<string, unknown>)[k]
      return undefined
    }, ptMessages)

    if (typeof value !== 'string') return key
    if (!params) return value

    return Object.entries(params).reduce(
      (str, [k, v]) => str.replace(`{${k}}`, String(v)),
      value
    )
  }

  return { t }
}
