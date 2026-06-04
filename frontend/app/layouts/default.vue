<template>
  <div class="min-h-screen bg-background text-foreground">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none"
    >
      Skip to main content
    </a>
    <AppNavbar />
    <main id="main-content" tabindex="-1" class="pb-16 md:pb-0">
      <slot />
    </main>
    <AppFooter />
    <AppBottomNav />
    <AppScrollTop />
  </div>
</template>
