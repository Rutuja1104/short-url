const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
  const shortID = shortid();
  const body = req.body;
  console.log("body======", body);

  if (!body.url) {
    return res.status(400).json({ error: "url isrequired" });
  }

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

async function handleGetAnalystics(req, res) {
  const shortId = req.params.shortID;
  const result = await URL.findOne({ shortId });
  console.log("resultresult",result,req.params?.shortID);
  
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
  
}

module.exports = {
  handleGenerateNewShortUrl,
  handleGetAnalystics,
};
