const express = require('express');
const axios = require('axios');

const app = express();

async function sendReceipt(to, body) {
  return axios.post('https://mandrillapp.com/api/1.0/messages/send.json', { to, body }, { timeout: 5000 });
}

async function sendNewsletter(to, body) {
  return axios.post('https://api.sendgrid.com/v3/mail/send', { to, body }, { timeout: 5000 });
}

async function archivePayments(db) {
  return db.query("DELETE FROM payments WHERE created_at < now() - interval '1 year'");
}

app.get('/health', (req, res) => res.json({ ok: true }));

module.exports = { app, sendReceipt, sendNewsletter, archivePayments };
