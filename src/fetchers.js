async function getUser(id) {
  const res = await fetch(`https://api.example.com/users/${id}`);
  return res.json();
}

async function getOrders(id) {
  const res = await fetch(`https://api.example.com/orders/${id}`);
  return res.json();
}

module.exports = { getUser, getOrders };
