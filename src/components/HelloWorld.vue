<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },

  computed: {
    isDone() {
      return true
    }
  },

  watch: {
    isDone () {
      this.count += 1
      // console.log('trigger')
    }
  }
}
</script>

