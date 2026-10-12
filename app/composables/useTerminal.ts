export interface TerminalLink {
  label: string
  href: string
}
export interface TerminalEntry {
  command: string
  text: string
  links?: TerminalLink[]
}

export const useTerminal = () => {
  const terminalOpen = useState('terminal-open', () => false)
  const terminalMinimized = useState('terminal-minimized', () => false)
  const terminalExpanded = useState('terminal-expanded', () => false)
  const terminalHistory = useState<TerminalEntry[]>('terminal-history', () => [])
  const commandHistory = useState<string[]>('terminal-command-history', () => [])
  return {
    terminalOpen,
    terminalMinimized,
    terminalExpanded,
    terminalHistory,
    commandHistory,
    openTerminal: () => { terminalOpen.value = true; terminalMinimized.value = false },
    closeTerminal: () => { terminalOpen.value = false; terminalMinimized.value = false },
  }
}
