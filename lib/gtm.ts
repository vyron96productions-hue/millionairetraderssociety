declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function pushDataLayer(data: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(data)
  }
}
