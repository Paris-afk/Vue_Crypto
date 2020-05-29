<template>
  <div>
    <div class="row">
      <pacman-loader :loading="isLoading" :color="'yellow'" :size="150" />
      <div class="col-4" v-if="!isLoading">
        <img
          :src="
            `https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`
          "
          :alt="asset.name"
          class="w-20 h-20 mr-5"
        />
        <h3>{{ asset.name + " " + asset.symbol }}</h3>
      </div>
      <div class="col-4 table">
        <ul class="list-group">
          <li class="list-group-item">
            Ranking
            <span>{{ asset.rank }}</span>
          </li>
          <li class="list-group-item">
            Prix actuel
            <span>{{ asset.priceUsd | dollar }}</span>
          </li>

          <li class="list-group-item">
            Variation 24h
            <span class="mod">{{ asset.changePercent24Hr | percent }}</span>
          </li>
        </ul>
      </div>
      <div class="col-4">
        <button class="btn btn-light">Cambiar</button>
      </div>
    </div>
    <div class="col-12">
      <table class="table table-hover">
        <tbody>
          <tr v-for="m in markets" :key="`${m.exchangeId}-${m.priceUsd}`">
            <th scope="row">{{ m.exchangeId }}</th>
            <td>{{ m.priceUsd | dollar }}</td>
            <td>{{ m.baseSymbol }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "CoinDetail",
  data() {
    return {
      isLoading: false,
      asset: {},
      markets: [],
    };
  },

  created() {
    const id = this.$route.params.id;
    //est permite que cada vez que el documento se cree llame al metodo
    this.getCoin();
    this.getTheMarkets(id);
  },

  methods: {
    getCoin() {
      this.isLoading = true;
      //aqui saco el id de la url
      //este nombre de id está definido en la ruta dinamica en el router
      const id = this.$route.params.id;
      api
        .getAsset(id)
        .then((asset) => (this.asset = asset))
        .finally(() => (this.isLoading = false));
    },

    getTheMarkets(id) {
      api.getMarkets(id).then((markets) => (this.markets = markets));
    },

    getWebSite(exchange) {
      return api.getExchange(exchange.exchangeId).then((res) => {
        exchange.url = res.exchangeUrl;
      });
    },
  },
};
</script>

<style scoped>
.table li {
  color: gray;
  font-weight: bold;
}
.table li span {
  margin-left: 3%;
  color: black;
  font-weight: bold;
}
</style>
