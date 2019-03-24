<template>
  <div
    class="movable"
    :style="style"
    :width="width"
    :height="height"
    v-movable
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      types: Number,
      default: 400
    },
    height: {
      types: Number,
      default: 400
    }
  },
  computed: {
    style: function () {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }
  },
  methods: {
    test: function () {
      console.log('test')
    }
  }
}
</script>

<style lang="scss" scoped>
.movable {
  position: relative;
  border: 1px solid black;
}
</style>
