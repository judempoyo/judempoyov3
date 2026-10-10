<script setup lang="ts">
import type { Project } from '~/composables/useProjects'
const { t } = useI18n()
defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article :id="`project-${project.id}`" class="project-row" :class="{ 'project-featured': project.id === 'miabi' }"
    data-reveal>
    <span class="project-reveal-rule" aria-hidden="true"></span>
    <div class="project-number annotation" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }} /</div>
    <div class="project-identity">
      <p class="eyebrow">{{ t(`design.project_types.${project.id}`) }}</p>
      <h3>{{ t(project.titleKey) }}</h3>
      <ul class="project-stack" :aria-label="t('design.platform_stack')">
        <li v-for="item in project.stack" :key="item">{{ item }}</li>
      </ul><a :href="project.liveUrl || project.docsUrl" class="project-visit text-link" target="_blank"
        rel="noopener noreferrer">{{ t(project.isLive ? 'projects.cta_live' : 'projects.cta_docs') }} <span
          aria-hidden="true">↗</span></a>
    </div>
    <div class="project-story">
      <p class="project-description">{{ t(project.descriptionKey) }}</p>
      <p class="project-role"><span>{{ t('projects.role_label') }}</span>{{ t(project.roleKey) }}</p>
      <p class="project-proof"><span class="proof-mark" aria-hidden="true">↳</span>{{ t(project.resultKey) }}</p>
      <details v-if="project.contributions?.length" class="contribution-details">
        <summary>{{ t('design.explore_contributions') }}<span aria-hidden="true">+</span></summary>
        <ul>
          <li v-for="contribution in project.contributions" :key="contribution.number"><a :href="contribution.url"
              target="_blank" rel="noopener noreferrer">{{ t(contribution.descriptionKey) }} <span
                aria-hidden="true">↗</span></a></li>
        </ul>
      </details>
      <details v-else-if="project.detailsKey" class="contribution-details">
        <summary>{{ t('projects.details_label') }}<span aria-hidden="true">+</span></summary>
        <p>{{ t(project.detailsKey) }}</p>
      </details>
    </div>
  </article>
</template>
