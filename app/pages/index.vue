<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const page = ref<HTMLElement | null>(null)
usePageMotion(page)
useSeoMeta({
  title: () => t('design.seo_title'),
  description: () => t('design.seo_description'),
  ogTitle: () => `Jude Mpoyo | ${t('design.seo_title')}`,
  ogDescription: () => t('design.seo_description'),
  twitterTitle: () => `Jude Mpoyo | ${t('design.seo_title')}`,
  twitterDescription: () => t('design.seo_description'),
})
</script>

<template>
  <div ref="page">
    <section class="hero shell" aria-labelledby="hero-title">
      <div class="hero-topline annotation"><span><span class="location-mark" aria-hidden="true"></span> Kolwezi, {{
        t('design.country') }} / UTC+2</span><span>{{ t('design.edition') }}</span></div>
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">{{ t('design.hero_role') }}</p>
          <h1 id="hero-title">{{ t('design.hero_line_1') }}<br /><span>{{ t('design.hero_line_2') }}</span><br />{{
            t('design.hero_line_3') }}<span class="hero-period">.</span></h1>
          <p class="hero-description">{{ t('hero.description_2') }}</p>
          <div class="hero-actions">
            <NuxtLink :to="localePath('/') + '#contact'" class="button-primary">{{ t('hero.cta_connect') }} <span
                aria-hidden="true">↗</span></NuxtLink>
            <NuxtLink :to="localePath('/') + '#projects'" class="text-link">{{ t('hero.cta_services') }} <span
                aria-hidden="true">↓</span></NuxtLink>
          </div>
          <p class="hero-proof annotation">{{ t('hero.social_proof') }}</p>
        </div>
        <div class="hero-aside">
          <div class="infrastructure-plate" :aria-label="t('design.diagram_label')" role="group">
            <div class="plate-heading annotation"><span>JM / KWZ</span><span>{{ t('design.field_note') }}</span></div>
            <span class="delivery-packet" aria-hidden="true"></span>
            <div class="plate-route">
              <div class="route-node"><span class="node-square" aria-hidden="true"></span><span>{{ t('design.build')
                  }}<small>Laravel · Nuxt / Vue</small></span></div>
              <div class="route-wire" aria-hidden="true"><span></span></div>
              <div class="route-node route-node-offset"><span class="node-square" aria-hidden="true"></span><span>{{
                t('design.deploy') }}<small>Docker · Miabi</small></span></div>
              <div class="route-wire route-wire-offset" aria-hidden="true"><span></span></div>
              <div class="route-node"><span class="node-square node-solid" aria-hidden="true"></span><span>{{
                t('design.operate') }}<small>{{ t('design.own_infrastructure') }}</small></span></div>
            </div>
            <div class="plate-footer annotation"><span>{{ t('design.diagram_note') }}</span><button type="button"
                class="replay-motion" :aria-label="t('design.replay')">↻</button></div>
          </div>
          <NuxtLink class="go-note" :to="localePath('/') + '#golang'"><span class="go-lettering"
              aria-hidden="true">Go<span>↗</span></span><span class="go-note-copy"><span class="annotation">Golang /
                DevOps</span><strong>{{ t('design.go_title') }}</strong><span>{{ t('design.go_status') }}</span></span>
          </NuxtLink>
        </div>
      </div>
      <div class="hero-baseline"><span class="annotation">{{ t('hero.engagement') }}</span><span
          class="hero-stack">Laravel <span>/</span> Vue <span>/</span> TypeScript <span>/</span> Docker <span>/</span>
          <a href="#golang">Go ↗</a></span><a href="#projects" class="scroll-link annotation">{{ t('design.scroll') }}
          ↓</a></div>
    </section>
    <SectionsProjects />
    <SectionsOperations />
    <SectionsAbout />
    <SectionsTools />
    <SectionsContact />
  </div>
</template>
