export const TIERS = {
  free: 0,
  silver: 1,
  gold: 2,
  platinum: 3
}

export const getTierColor = (tier) => {
  const colors = {
    free: 'bg-slate-200 text-slate-700',
    silver: 'bg-gray-400 text-white',
    gold: 'bg-yellow-400 text-yellow-800',
    platinum: 'bg-purple-500 text-purple-100'
  }
  return colors[tier] || colors.free
}

export const canAccessEvent = (userTier, eventTier) => {
  return TIERS[userTier] >= TIERS[eventTier]
}