<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col"></th>
        <th
          :class="{ up: this.sortOrder === 1, down: this.sortOrder === -1 }"
          scope="col"
          @click="changeSortOrder()"
        >
          Ranking
        </th>
        <th scope="col">Nom</th>
        <th scope="col">Prix</th>
        <th scope="col">Cap de Marché</th>
        <th scope="col">Variation 24h</th>
        <th scope="col">
          <form class="form-inline">
            <input
              v-model="filter"
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="a in filterdAssets" :key="a.id">
        <td>
          <img
            :src="
              `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
            "
            :alt="a.name"
          />
        </td>
        <td>
          <b>#{{ a.rank }}</b>
        </td>
        <!-- aqui voy a meter el filtro declarado en main y hecho en filter.js -->
        <td>
          <router-link :to="{ name: 'coin-detail', params: { id: a.id } }">
            <span>{{ a.name }}</span>
          </router-link>
          <small class="ml-1">{{ a.symbol }}</small>
        </td>
        <td>{{ a.priceUsd | dollar }}</td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td :class="a.changePercent24Hr.includes('-') ? 'red' : 'green'">
          {{ a.changePercent24Hr | percent }}
        </td>
        <td>
          <router-link :to="{ name: 'coin-detail', params: { id: a.id } }">
            <button class="btn btn-info ">Aller</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableList",
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    filterdAssets() {
      const altOrder = this.sortOrder === 1 ? -1 : 1;
      return this.assets
        .filter(
          (a) =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder;
          }
          return altOrder;
        });
    },
  },
  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },
  methods: {
    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    },
  },
};
</script>

<style scoped>
img {
  height: 25px;
  width: 25px;
}

.red {
  color: red;
  font-weight: bold;
}

.green {
  color: green;
  font-weight: bold;
}

small {
  color: gray;
}

span {
  color: gray;
  font-weight: bold;
  text-decoration: none !important;
}

.up::before {
  content: "👆";
  cursor: pointer;
}

.down::before {
  content: "👇";
  cursor: pointer;
}
</style>
