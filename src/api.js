const url = "https://api.coincap.io/v2";

function getAssets() {
  return (
    fetch(`${url}/assets?limit=20`)
      .then((res) => res.json())
      //este data es el objeto del array asi viene en la doc de coincap
      .then((res) => res.data)
  );
}

function getAsset(coin) {
  return (
    fetch(`${url}/assets/${coin}`)
      .then((res) => res.json())
      //este data es el objeto del array asi viene en la doc de coincap
      .then((res) => res.data)
  );
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getExchange(id) {
  return fetch(`${url}/exchange/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
};
