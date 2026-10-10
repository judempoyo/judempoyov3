export const useContactLinks = () => {
  const config = useRuntimeConfig()
  const whatsapp = computed(() => {
    const number = String(config.public.whatsappNumber || '').replace(/\D/g, '')
    return /^[1-9]\d{7,14}$/.test(number) ? `https://wa.me/${number}` : ''
  })
  return {
    email: 'mailto:mpoyojude0@gmail.com',
    github: 'https://github.com/judempoyo',
    linkedin: 'https://www.linkedin.com/in/judempoyo',
    whatsapp,
  }
}
