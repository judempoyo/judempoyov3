export interface PortfolioTool {
  name: string
  learning?: boolean
  href?: string
}
export interface ToolGroup {
  id: string
  tools: PortfolioTool[]
}

export const useToolGroups = () => {
  const groups: ToolGroup[] = [
    { id: 'environment', tools: [{ name: 'Ubuntu' }, { name: 'VS Code' }, { name: 'tmux' }, { name: 'Zsh' }, { name: 'Bash' }] },
    { id: 'languages', tools: [{ name: 'PHP' }, { name: 'TypeScript' }, { name: 'Go / Golang', learning: true }] },
    { id: 'frameworks', tools: [{ name: 'Laravel' }, { name: 'Nuxt' }, { name: 'Vue' }] },
    { id: 'infrastructure', tools: [{ name: 'Docker' }, { name: 'Miabi' }, { name: 'Okapi', href: 'https://okapi.jkaninda.dev/', learning: true }] },
    { id: 'data', tools: [{ name: 'PostgreSQL' }, { name: 'MySQL' }] },
    { id: 'collaboration', tools: [{ name: 'Git' }, { name: 'Git Flow' }] },
    { id: 'philosophy', tools: [{ name: 'Open source', href: 'https://github.com/judempoyo' }] },
  ]
  return { groups }
}
