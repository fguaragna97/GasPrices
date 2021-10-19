async function getData() {
  const APIKEY = "302496e2-6ff6-4f99-bfb8-a8cb8d26c71a";
  const response = await fetch(
    "https://api.blocknative.com/gasprices/blockprices?confidenceLevels=10&confidenceLevels=30&confidenceLevels=50&confidenceLevels=70&confidenceLevels=90",
    {
      headers: {
        Authorization: "302496e2-6ff6-4f99-bfb8-a8cb8d26c71a",
      },
    }
  );
  return await response.json();
}

window.addEventListener("load", async () => {
  try {
    const data = await getData(); // we created a variable data and an await from get data

    const maxFeePerGas = data.blockPrices[0].estimatedPrices[0].maxFeePerGas;

    const maxPriorityfeeperGas =
      data.blockPrices[0].estimatedPrices[0].maxPriorityFeePerGas;

    console.log(maxFeePerGas, maxPriorityfeeperGas);
  } catch (error) {
    console.error(error);
  }
});
