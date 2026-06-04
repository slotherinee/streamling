<template>
  <div class="min-h-screen bg-background text-foreground flex flex-col">
    <!-- Minimal header -->
    <header class="flex items-center justify-center h-16 border-b border-border/50">
      <NuxtLink to="/" aria-label="Streamly — go to home" class="flex items-center gap-2 group">
        <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span class="text-xl font-bold tracking-tight">Streamly</span>
      </NuxtLink>
    </header>

    <!-- Content -->
    <main class="flex-1 flex items-center justify-center px-4 py-12">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="py-6 text-center">
      <p class="text-xs text-muted-foreground">© 2024 Streamly. All rights reserved.</p>
    </footer>
  </div>
</template>
