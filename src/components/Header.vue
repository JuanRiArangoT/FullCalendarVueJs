
<template>

    <header>
        <div class="div_Titulo">
            <h1 class="h1_Titulo"><a href="#" class="a_Titulo"> {{ $route.meta.title }}</a></h1>
        </div>
        <div class="div_ContButtonDark">
            <div class="div_Hover">
            <font-awesome-icon class="fa_Sun" :icon="['fas', 'sun']" />
            <div class="div_ButtonDark">
                <label id="change">
                    <div class="div_Line"></div>
                    <div id="div_Circle" class=""></div>
                    <input type="checkbox" id="dark-Mode">
                </label>
            </div>
            <font-awesome-icon class="fa_Moon" :icon="['fas', 'moon']" />
        </div>
        </div>
    </header>

</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    return {
      route
    }
  }
})
</script>

<style>
@import url(../assets/css/header.css);
</style>