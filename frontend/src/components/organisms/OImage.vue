<template>
  <section class="section">
    <input
    class="range-slider w-full"
    type="range"
    min="1"
    max="4"
    v-model="selectedImageIndex"
    id="imgRange"
    />
    <ImageSlider :currentImage="getImageSource(selectedImageIndex)" />
  </section>
</template>

<script setup lang="ts">
import ImageSlider from '@/components/molekules/ImageSlider.vue';
import { image1, image2, image3, image4 } from '@/helpers/HImages';
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const selectedImageIndex = ref(1)

const images = [image1, image2, image3, image4]

const getImageSource = (index: number) => {
  return images[index - 1]
}
onMounted(() => {
  const tl = gsap.timeline({ duration: 3, repeat: 0 })
  tl.fromTo('.sectionCard', { opacity: 0 }, { opacity: 1 })
})
</script>

<style scoped>
.section {
  background-color:rgba(26, 26, 26, 0.176);
  display:flex;
  flex-direction: column;
  justify-content:space-around;
}

input[type='range'] {
  font-size: 1.5rem;
  width: 100%;
}

input[type='range'] {
  color: #002626;
  --thumb-height: .8125em;
  --track-height: 0.125em;
  --track-color: rgb(255, 255, 255);
  --brightness-hover: 180%;
  --brightness-down: 80%;
  --clip-edges: 0.125em;
}

input[type='range'].win10-thumb {
  color: #ffffff;
  --thumb-height: 1.375em;
  --thumb-width: 5em;
  --clip-edges: 0.0125em;
}

@media (prefers-color-scheme: dark) {

  input[type='range'] {
    color: #f07167;
    --track-color: rgba(255, 255, 255, 0.1);
  }

  input[type='range'].win10-thumb {
    color: #3a86ff;
  }
}

/* === range commons === */
input[type='range'] {
  position: relative;
  background: #fff0;
  overflow: hidden;
}

input[type='range']:active {
  cursor: grabbing;
}

input[type='range']:disabled {
  filter: grayscale(1);
  opacity: 0.3;
  cursor: not-allowed;
}

/* === WebKit specific styles === */
input[type='range'],
input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  transition: all ease 100ms;
  height: var(--thumb-height);
}

input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-webkit-slider-thumb {
  position: relative;
}
input[type='range']::-webkit-slider-thumb {
  --thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
  --clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
  --clip-bottom: calc(var(--thumb-height) - var(--clip-top));
  --clip-further: calc(100% + 1px);
  --box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax currentColor;

  width: var(--thumb-width, var(--thumb-height));
  background: linear-gradient(currentColor 0 0) scroll no-repeat left center / 50%
    calc(var(--track-height) + 1px);
  background-color: currentColor;
  box-shadow: var(--box-fill);
  border-radius: var(--thumb-width, var(--thumb-height));

  filter: brightness(100%);
  clip-path: polygon(
    100% -1px,
    var(--clip-edges) -1px,
    0 var(--clip-top),
    -100vmax var(--clip-top),
    -100vmax var(--clip-bottom),
    0 var(--clip-bottom),
    var(--clip-edges) 100%,
    var(--clip-further) var(--clip-further)
  );
}

input[type='range']:hover::-webkit-slider-thumb {
  filter: brightness(var(--brightness-hover));
  cursor: grab;
}

input[type='range']:active::-webkit-slider-thumb {
  filter: brightness(var(--brightness-down));
  cursor: grabbing;
}

input[type='range']::-webkit-slider-runnable-track {
  background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center / 100%
    calc(var(--track-height) + 1px);
}

input[type='range']:disabled::-webkit-slider-thumb {
  cursor: not-allowed;
}

/* === Firefox specific styles === */
input[type='range'],
input[type='range']::-moz-range-track,
input[type='range']::-moz-range-thumb {
  appearance: none;
  transition: all ease 100ms;
  height: var(--thumb-height);
}

input[type='range']::-moz-range-track,
input[type='range']::-moz-range-thumb,
input[type='range']::-moz-range-progress {
  background: rgba(245, 234, 234, 0);
}

input[type='range']::-moz-range-thumb {
  background: currentColor;
  border: 0;
  width: var(--thumb-width, var(--thumb-height));
  border-radius: var(--thumb-width, var(--thumb-height));
  cursor: grab;
}

input[type='range']:active::-moz-range-thumb {
  cursor: grabbing;
}

input[type='range']::-moz-range-track {
  width: 100%;
  background: var(--track-color);
}

input[type='range']::-moz-range-progress {
  appearance: none;
  background: currentColor;
  transition-delay: 30ms;
}

input[type='range']::-moz-range-track,
input[type='range']::-moz-range-progress {
  height: calc(var(--track-height) + 1px);
  border-radius: var(--track-height);
}

input[type='range']::-moz-range-thumb,
input[type='range']::-moz-range-progress {
  filter: brightness(100%);
}

input[type='range']:hover::-moz-range-thumb,
input[type='range']:hover::-moz-range-progress {
  filter: brightness(var(--brightness-hover));
}

input[type='range']:active::-moz-range-thumb,
input[type='range']:active::-moz-range-progress {
  filter: brightness(var(--brightness-down));
}

input[type='range']:disabled::-moz-range-thumb {
  cursor: not-allowed;
} </style>
