<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const { openTerminal } = useTerminal()
const links = [
  { id: 'projects', key: 'projects', number: '01' },
  { id: 'about', key: 'about', number: '02' },
  { id: 'tools', key: 'tools', number: '03' },
]
let desktop: MediaQueryList | undefined
const closeMenu = () => {
  if (!menuOpen.value) return
  menuOpen.value = false
  menuButton.value?.focus()
}
const followLink = async (id: string) => {
  menuOpen.value = false
  await nextTick()
  const section = document.getElementById(id)
  section?.setAttribute('tabindex', '-1')
  section?.focus({ preventScroll: true })
}
const launchTerminal = () => { closeMenu(); openTerminal() }
const closeOnDesktop = () => { if (desktop?.matches) menuOpen.value = false }
watch(() => route.fullPath, () => { menuOpen.value = false })
onMounted(() => {
  desktop = window.matchMedia('(min-width: 961px)')
  desktop.addEventListener('change', closeOnDesktop)
})
onBeforeUnmount(() => desktop?.removeEventListener('change', closeOnDesktop))
</script>

<template>
  <header class="site-header" @keydown.esc="closeMenu">
    <div class="shell header-inner">
      <NuxtLink :to="localePath('/')" class="wordmark" aria-label="Jude Mpoyo">
        <span class="monogram" aria-hidden="true">jm<span>.</span></span>
        <span class="wordmark-name">Jude Mpoyo<span>{{ t('design.header_role') }}</span></span>
      </NuxtLink>
      <nav class="desktop-nav" :aria-label="t('design.navigation')">
        <NuxtLink :to="localePath('/') + '#projects'">{{ t('nav.projects') }}</NuxtLink>
        <NuxtLink :to="localePath('/') + '#tools'">{{ t('nav.tools') }}</NuxtLink>
        <NuxtLink :to="localePath('/') + '#about'">{{ t('nav.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/') + '#contact'">{{ t('nav.contact') }} <span aria-hidden="true">↗</span></NuxtLink>
      </nav>
      <div class="header-tools">
        <button class="terminal-trigger" type="button" @click="openTerminal">
          <span aria-hidden="true">&gt;_</span><span class="terminal-trigger-label">{{ t('terminal.open') }}</span>
          <span class="sr-only terminal-mobile-label">{{ t('terminal.open') }}</span>
        </button>
        <LanguageSelector />
        <ToggleTheme />
        <button ref="menuButton" class="mobile-toggle" :class="{ 'is-open': menuOpen }" type="button"
          :aria-expanded="menuOpen" aria-controls="mobile-navigation" @click="menuOpen = !menuOpen">
          <span>{{ menuOpen ? t('design.close') : t('common.menu') }}</span>
          <span class="menu-toggle-icon" aria-hidden="true"><span></span><span></span></span>
        </button>
      </div>
    </div>
    <Transition name="mobile-panel">
      <div v-if="menuOpen" class="mobile-menu-layer">
        <button class="mobile-menu-backdrop" type="button" tabindex="-1" :aria-label="t('design.close')"
          @click="closeMenu"></button>
        <nav id="mobile-navigation" class="mobile-navigation" :aria-label="t('design.navigation')">
          <div class="mobile-menu-heading"><span class="annotation">{{ t('mobile_menu.explore') }}</span><span
              class="annotation">Kolwezi / UTC+2</span></div>
          <NuxtLink v-for="link in links" :key="link.id" class="mobile-nav-link" :to="localePath('/') + `#${link.id}`"
            @click="followLink(link.id)">
            <span class="mobile-link-index" aria-hidden="true">{{ link.number }}</span>
            <span class="mobile-link-copy"><strong>{{ t(`nav.${link.key}`) }}</strong><span>{{
              t(`mobile_menu.descriptions.${link.key}`) }}</span></span>
            <span class="mobile-link-arrow" aria-hidden="true">↗</span>
          </NuxtLink>
          <NuxtLink class="mobile-contact-link" :to="localePath('/') + '#contact'" @click="followLink('contact')">{{
            t('hero.cta_connect') }} <span aria-hidden="true">↗</span></NuxtLink>
          <div class="mobile-menu-footer"><button type="button" @click="launchTerminal"><span
                aria-hidden="true">&gt;_</span> {{ t('terminal.open') }}</button><span class="annotation">{{
                  t('mobile_menu.optional') }}</span></div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
