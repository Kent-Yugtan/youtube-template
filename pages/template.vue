<template>
    <div class="h-100">
      <nuxt-child></nuxt-child>
    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
@Component<isWebsiteIndex>({
  name:'isWebsiteIndex',
  layout: 'isWebsite',
})

export default class  isWebsiteIndex extends Vue {

}
</script>

<style lang='scss' scoped>

</style>