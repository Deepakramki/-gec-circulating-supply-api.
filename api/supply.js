export default function handler(req, res) {
  res.status(200).json({
    name: "Greencoin",
    symbol: "GEC",
    blockchain: "BNB Smart Chain",
    contract_address: "0xf65Fb2BFE01Bb1147816770766242f41Fc5b5410",
    circulating_supply: 100000000,
    total_supply: 1000000000,
    max_supply: 1000000000,
    self_reported: true,
    last_updated: new Date().toISOString()
  });
}
