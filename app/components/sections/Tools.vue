<script setup lang="ts">
const { t } = useI18n()
const { groups } = useToolGroups()
</script>

<template>
  <section id="tools" class="tools-section shell" aria-labelledby="tools-title">
    <div class="section-heading" data-reveal>
      <p class="eyebrow">04 / {{ t('nav.tools') }}</p>
      <h2 id="tools-title">{{ t('tools.title') }}</h2>
      <p>{{ t('tools.intro') }}</p>
    </div>
    <div class="tools-directory">
      <div v-for="group in groups" :key="group.id" class="tool-category"
        :class="{ 'tool-philosophy': group.id === 'philosophy' }" data-reveal>
        <h3>{{ t(`tools.categories.${group.id}`) }}</h3>
        <ul>
          <li v-for="tool in group.tools" :key="tool.name">
            <a v-if="tool.href" :href="tool.href" target="_blank" rel="noopener noreferrer">{{ tool.name }} <span
                aria-hidden="true">↗</span></a>
            <span v-else>{{ tool.name }}</span>
            <span v-if="tool.learning" class="tool-learning-note">{{ t('tools.learning') }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
