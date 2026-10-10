<script setup lang="ts">
const { t } = useI18n()
const activeStep = ref(0)
const section = ref<HTMLElement | null>(null)
let manualSelection = false
const chooseStep = (index: number) => { manualSelection = true; activeStep.value = index }
const followStage = (event: Event) => {
  if (!manualSelection) activeStep.value = (event as CustomEvent<number>).detail
}
onMounted(() => section.value?.addEventListener('production-stage', followStage))
onBeforeUnmount(() => section.value?.removeEventListener('production-stage', followStage))
const steps = ['contribute', 'install', 'operate'] as const
</script>

<template>
  <section ref="section" id="operations" class="operations-section" aria-labelledby="operations-title">
    <div class="operations-progress" aria-hidden="true"><span></span></div>
    <div class="shell operations-layout">
      <div class="operations-intro" data-reveal>
        <p class="eyebrow">02 / {{ t('design.production_journal') }}</p>
        <h2 id="operations-title">{{ t('design.operations_title') }}</h2>
        <p>{{ t('design.operations_intro') }}</p><span class="journal-stamp annotation">Kolwezi → {{
          t('design.own_infrastructure') }}</span>
      </div>
      <div class="operations-content" data-reveal>
        <div class="pipeline-header annotation"><span>Miabi / {{ t('design.field_note') }}</span><span>{{
          t('design.interactive') }} ↙</span></div>
        <div class="pipeline" :aria-label="t('design.pipeline_label')"><button v-for="(step, index) in steps"
            :key="step" type="button" :aria-pressed="activeStep === index" aria-controls="pipeline-note"
            @click="chooseStep(index)"><span class="pipeline-node" aria-hidden="true">{{ String(index + 1).padStart(2,
              '0') }}</span><span>{{ t(`design.pipeline.${step}.title`) }}</span></button></div>
        <div id="pipeline-note" class="pipeline-note" aria-live="polite" aria-atomic="true">
          <Transition name="note" mode="out-in">
            <div :key="activeStep">
              <h3>{{ t(`design.pipeline.${steps[activeStep]}.heading`) }}</h3>
              <p>{{ t(`design.pipeline.${steps[activeStep]}.body`) }}</p>
            </div>
          </Transition>
        </div>
        <details class="incident-note">
          <summary><span><span class="annotation">{{ t('design.incident_label') }}</span><strong>{{
            t('design.incident_title') }}</strong></span><span class="incident-toggle" aria-hidden="true">+</span>
          </summary>
          <ol>
            <li v-for="step in ['symptom', 'intervention', 'result']" :key="step"><strong>{{
              t(`design.incident.${step}.title`) }}</strong>
              <p>{{ t(`design.incident.${step}.body`) }}</p>
            </li>
          </ol>
          <p class="incident-caveat annotation">{{ t('design.incident_caveat') }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
