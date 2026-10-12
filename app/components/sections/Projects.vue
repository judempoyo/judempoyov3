<script setup lang="ts">
const { projects } = useProjects()
const { t } = useI18n()
</script>

<template>
  <section id="projects" class="work-section shell" aria-labelledby="work-title">
    <div class="section-heading" data-reveal>
      <p class="eyebrow">01 / {{ t('nav.projects') }}</p>
      <h2 id="work-title">{{ t('design.work_title') }}</h2>
      <p>{{ t('design.work_intro') }}</p>
    </div>
    <div class="project-list">
      <ProjectSheet v-for="(project, index) in projects" :key="project.id" :project="project" :index="index" />
    </div>
    <div class="work-footnote annotation"><span>{{ t('design.work_note') }}</span><a href="https://github.com/judempoyo"
        target="_blank" rel="noopener noreferrer" class="text-link">GitHub ↗</a></div>
  </section>
</template>
