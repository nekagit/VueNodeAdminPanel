<script setup lang="ts">

</script>

<template>
<a class="glassIco" href="#">baklava<i class="fab fa-facebook-f"></i></a>
<a class="glassIco" href="#"><i class="fab fa-instagram"></i></a>
<a class="glassIco" href="#"><i class="fab fa-linkedin-in"></i></a>
<a class="glassIco" href="#"><i class="fab fa-whatsapp"></i></a>
</template>

<style scoped lang="scss">
@mixin flex-center { display: flex; justify-content: center; align-items: center; }

.glassIco {
  --width: 100px;
  &, & * { box-sizing: border-box; transition: 200ms; }
  width: var(--width);
  height: var(--width);
  color: #fff;
  font-size: 30px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  margin: 20px;
  overflow: hidden;
  @include flex-center;
  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    filter: blur(0px);
    transition: 400ms;
    transform: skewX(45deg) translateX(calc(var(--width) + 50%));
  }
  &:hover {
    transform: translateY(-20px);
    &:before {
      transform: skewX(45deg) translateX(calc(var(--width) * -1 - 50%))
    }
  }
  & > * { opacity: 0.8; }
}
</style>