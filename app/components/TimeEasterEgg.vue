<script setup lang="ts">
const { t } = useI18n()
const showNotification = ref(false)
const showPhoto = ref(false)
const { onTimeReached } = useTimeTracker()
let dismissTimer: ReturnType<typeof setTimeout> | undefined
onMounted(() => onTimeReached(() => {
  showNotification.value = true
  dismissTimer = setTimeout(() => { showNotification.value = false }, 10000)
}))
onBeforeUnmount(() => clearTimeout(dismissTimer))
const reveal = () => { showNotification.value = false; showPhoto.value = true }
</script>

<template>
  <PhotoModal v-model:show="showPhoto" />
  <Teleport to="body">
    <Transition name="note">
      <aside v-if="showNotification" class="easter-notification">
        <div><span class="annotation">{{ t('design.easter_title') }}</span><button type="button"
            :aria-label="t('design.close')" @click="showNotification = false">×</button></div>
        <p>{{ t('design.easter_body') }}</p><button type="button" class="text-link" @click="reveal">{{
          t('design.easter_action') }} ↗</button>
      </aside>
    </Transition>
  </Teleport>
</template>
