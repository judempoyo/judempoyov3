<template>
    <section id="contact" class="py-32 px-6 md:px-12 text-center">

        <div class="mb-12">
            <h2
                class="text-[10vw] font-black tracking-tighter leading-none hover:text-primary transition-colors cursor-pointer">
                <a href="mailto:mpoyojude0@gmail.com">{{ $t('contact.email') }} ↗</a>
            </h2>
        </div>

        <div
            class="flex flex-col md:flex-row justify-between items-center border-t border-border pt-8 text-sm font-medium uppercase tracking-widest">
            <div class="mb-4 md:mb-0">
                Jude Mpoyo &copy; {{ new Date().getFullYear() }}
            </div>

            <div class="flex gap-8">
                <a href="https://github.com/judempoyo" target="_blank"
                    class="hover:underline underline-offset-4">GitHub</a>
                <a href="https://linkedin.com/in/judempoyo" target="_blank"
                    class="hover:underline underline-offset-4">LinkedIn</a>
                <a href="https://wa.me/243975889135" target="_blank"
                    class="hover:underline underline-offset-4">WhatsApp</a>
            </div>
        </div>

    </section>
</template>
