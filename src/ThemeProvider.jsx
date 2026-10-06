import { useSyncExternalStore } from 'react'
import { ConfigProvider, theme } from 'antd'

const preference = window.matchMedia('(prefers-color-scheme: dark)')
const subscribe = callback => {
  preference.addEventListener('change', callback)
  return () => preference.removeEventListener('change', callback)
}

const ThemeProvider = ({ children }) => {
  const dark = useSyncExternalStore(subscribe, () => preference.matches)
  return <ConfigProvider theme={{ algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm }}>{children}</ConfigProvider>
}

export default ThemeProvider
