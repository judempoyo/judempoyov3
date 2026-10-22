export const usePublicAsset = () => {
  const config = useRuntimeConfig()
  return (filename: string) => `${config.app.baseURL.replace(/\/?$/, '/')}${filename.replace(/^\/+/, '')}`
}
