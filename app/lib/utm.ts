/**
 * UTM and tracking parameter capture utility
 * Captures UTM params, click IDs, and other attribution data from URL
 */

export interface TrackingParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  fbclid?: string
  gclid?: string
  msclkid?: string
  ref?: string
  [key: string]: string | undefined
}

/**
 * Get tracking parameters from URL
 * Call this on page load and store in state or pass to form submission
 */
export function getTrackingParams(): TrackingParams {
  if (typeof window === 'undefined') return {}
  
  const params = new URLSearchParams(window.location.search)
  const tracking: TrackingParams = {}
  
  // UTM parameters
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  utmParams.forEach(param => {
    const value = params.get(param)
    if (value) tracking[param] = value
  })
  
  // Click IDs (ad platforms)
  const clickIds = ['fbclid', 'gclid', 'msclkid', 'ttclid', 'li_fat_id']
  clickIds.forEach(param => {
    const value = params.get(param)
    if (value) tracking[param] = value
  })
  
  // Referral
  const ref = params.get('ref')
  if (ref) tracking.ref = ref
  
  return tracking
}

/**
 * Store tracking params in sessionStorage for persistence across page navigation
 */
export function storeTrackingParams(): void {
  if (typeof window === 'undefined') return
  
  const params = getTrackingParams()
  if (Object.keys(params).length > 0) {
    // Merge with existing (don't overwrite if already have attribution)
    const existing = getStoredTrackingParams()
    const merged = { ...params, ...existing }
    sessionStorage.setItem('hh_tracking', JSON.stringify(merged))
  }
}

/**
 * Get stored tracking params from sessionStorage
 */
export function getStoredTrackingParams(): TrackingParams {
  if (typeof window === 'undefined') return {}
  
  try {
    const stored = sessionStorage.getItem('hh_tracking')
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

/**
 * Get all tracking params (current URL + stored)
 * Use this when submitting forms
 */
export function getAllTrackingParams(): TrackingParams {
  const current = getTrackingParams()
  const stored = getStoredTrackingParams()
  // Current URL params take precedence
  return { ...stored, ...current }
}

/**
 * Format tracking params for inclusion in form submission source field
 */
export function formatTrackingSource(baseSource: string): string {
  const params = getAllTrackingParams()
  const parts = [baseSource]
  
  if (params.utm_source) parts.push(`src:${params.utm_source}`)
  if (params.utm_medium) parts.push(`med:${params.utm_medium}`)
  if (params.utm_campaign) parts.push(`cmp:${params.utm_campaign}`)
  if (params.fbclid) parts.push('fb:1')
  if (params.gclid) parts.push('ggl:1')
  if (params.ref) parts.push(`ref:${params.ref}`)
  
  return parts.join('|')
}
