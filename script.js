async function fetchPrice() {
  const search = document.getElementById("search").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (!search) {
    resultDiv.innerHTML = "<p>⚠️ Please enter a cryptocurrency name.</p>";
    return;
  }

  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${search}&vs_currencies=usd`);
    const data = await response.json();

    if (data[search]) {
      const price = data[search].usd;
      resultDiv.innerHTML = `<h2>💲 ${search.toUpperCase()}</h2><p>Current Price: <strong>$${price}</strong></p>`;
    } else {
      resultDiv.innerHTML = "<p>❌ Cryptocurrency not found. Try again.</p>";
    }
  } catch (error) {
    resultDiv.innerHTML = "<p>⚠️ Error fetching data. Please try later.</p>";
  }
}