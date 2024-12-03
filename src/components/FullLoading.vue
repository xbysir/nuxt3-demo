<template>
  <div
    class="fixed z-[99] flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-900"
  >
    <div
      class="relative h-12 w-12 rotate-[165deg] before:absolute before:left-2/4 before:top-2/4 before:block before:h-[.5em] before:w-[.5em] before:-translate-x-1/2 before:-translate-y-2/4 before:animate-[loaderBefore_2s_infinite] before:rounded before:content-[''] after:absolute after:left-2/4 after:top-2/4 after:block after:h-[.5em] after:w-[.5em] after:-translate-x-1/2 after:-translate-y-2/4 after:animate-[loaderAfter_2s_infinite] after:rounded after:content-['']"
    />
  </div>
</template>
<style>
@keyframes loaderBefore {
  0% {
    width: 0.5em;
    box-shadow:
      1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }

  35% {
    width: 2.5em;
    box-shadow:
      0 -0.5em rgba(225, 20, 98, 0.75),
      0 0.5em rgba(111, 202, 220, 0.75);
  }

  70% {
    width: 0.5em;
    box-shadow:
      -1em -0.5em rgba(225, 20, 98, 0.75),
      1em 0.5em rgba(111, 202, 220, 0.75);
  }

  100% {
    box-shadow:
      1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}

@keyframes loaderAfter {
  0% {
    height: 0.5em;
    box-shadow:
      0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }

  35% {
    height: 2.5em;
    box-shadow:
      0.5em 0 rgba(61, 184, 143, 0.75),
      -0.5em 0 rgba(233, 169, 32, 0.75);
  }

  70% {
    height: 0.5em;
    box-shadow:
      0.5em -1em rgba(61, 184, 143, 0.75),
      -0.5em 1em rgba(233, 169, 32, 0.75);
  }

  100% {
    box-shadow:
      0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}
</style>
