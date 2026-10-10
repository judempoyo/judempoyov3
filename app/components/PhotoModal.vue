<script setup lang="ts">
import { trapDialogFocus } from '~/utils/dialogFocus'
const props = defineProps<{ show: boolean }>()
const emit = defineEmits<{ 'update:show': [value: boolean] }>()
const { t } = useI18n()
const asset = usePublicAsset()
const dialog = ref<HTMLDialogElement | null>(null)
const titleId = useId()
const imageUrl = asset('judepic.jpeg')
let previousFocus: HTMLElement | null = null
let previousOverflow = ''
const close = () => emit('update:show', false)
const restore = () => {
  document.body.style.overflow = previousOverflow
  previousFocus?.focus()
  previousFocus = null
}
watch(() => props.show, async (show) => {
  await nextTick()
  if (show && dialog.value) {
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.value.showModal()
  } else if (dialog.value?.open) {
    dialog.value.close()
    restore()
  }
})
onBeforeUnmount(() => { if (dialog.value?.open) { dialog.value.close(); restore() } })
</script>

<template>
  <dialog ref="dialog" @keydown.tab="trapDialogFocus" class="photo-dialog" :aria-labelledby="titleId"
    @cancel.prevent="close" @click="($event.target === dialog) && close()"><template v-if="show">
      <div class="photo-topline"><span class="annotation">{{ t('design.photo_label') }}</span><button type="button"
          autofocus :aria-label="t('design.close')" @click="close">×</button></div><img :src="imageUrl" alt="Jude Mpoyo"
        width="440" height="440" />
      <div class="photo-caption">
        <h2 :id="titleId">Jude Mpoyo<span class="accent">.</span></h2>
        <p>{{ t('design.photo_role') }}</p>
      </div>
    </template>
  </dialog>
</template>
