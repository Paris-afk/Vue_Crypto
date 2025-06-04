const url = "https://rest.coincap.io/v3";
const apiKey = process.env.VUE_APP_COINCAP_API_KEY;

function getAssets() {
  return (
    fetch(`${url}/assets?limit=20`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
      .then((res) => res.json())
      //este data es el objeto del array asi viene en la doc de coincap
      .then((res) => res.data)
  );
}

function getAsset(coin) {
  return (
    fetch(`${url}/assets/${coin}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
      .then((res) => res.json())
      //este data es el objeto del array asi viene en la doc de coincap
      .then((res) => res.data)
  );
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  })
    .then((res) => res.json())
    .then((res) => res.data);
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  })
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
};
