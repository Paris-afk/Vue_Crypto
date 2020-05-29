<template>
  <div>
    <pacman-loader :loading="isLoading" :color="'yellow'" :size="150" />
    <TableList v-if="!isLoading" v-bind:assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import TableList from "@/components/TableList.vue";
export default {
  name: "Home",
  components: { TableList },

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
