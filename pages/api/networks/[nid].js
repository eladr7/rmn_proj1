// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const {
    query: { nid },
  } = req

  res.status(200).json({
    "provider": {
      "name": "Pharma Media",
      "logo": "https://novisign.com/pharma/logo.png",
      "description": "The only out-of-home digital network dedicated to retail pharmacies and is now in more than 100 locations in Israel."
    },
    "locations": [{
      "id": 1,
      "name": "All Locations",
    }, {
      "id": 2,
      "name": "Netanya",
    }, {
      "id": 3,
      "name": "Tel Aviv",
    }]
  });
}
