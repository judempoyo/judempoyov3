<script setup lang="ts">
const { t } = useI18n()
const { whatsapp } = useContactLinks()
</script>

<template>
  <section id="contact" class="contact-section" aria-labelledby="contact-title">
    <div class="shell contact-layout" data-reveal>
      <div>
        <p class="eyebrow">05 / {{ t('nav.contact') }}</p>
        <h2 id="contact-title">{{ t('design.contact_line_1') }}<br /><span>{{ t('design.contact_line_2') }}</span><span
            class="contact-arrow" aria-hidden="true">↗</span></h2>
        <p>{{ t('contact.description') }}</p><a class="contact-email"
          href="mailto:mpoyojude0@gmail.com">mpoyojude0@gmail.com <span aria-hidden="true">↗</span></a>
      </div>
      <aside class="contact-aside"><span class="annotation">{{ t('design.next_step') }}</span>
        <p>{{ t('design.contact_note') }}</p>
        <div class="contact-socials"><a v-if="whatsapp" class="text-link whatsapp-link" :href="whatsapp" target="_blank"
            rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a><a class="text-link"
            href="https://www.linkedin.com/in/judempoyo" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a
            class="text-link" href="https://github.com/judempoyo" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div><span class="annotation">{{ t('hero.engagement') }}</span>
      </aside>
    </div>
  </section>
</template>
