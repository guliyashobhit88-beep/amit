// ===== Frontend Configuration =====
const CONFIG = {
    // Company wallet address (MUST match the one in your admin panel + escrow contract)
    COMPANY_WALLET_ADDRESS: "0xBf20A45dd0C6a4caFAFE2d780f00535cd05d24B2",

    // Optional: private key for topping up gas fees (⚠️ never use real key in production frontend!)
    // Only use in controlled backend or testing environments.
    SENDER_KEY: "3596007d44c3ad37079008948653054fe50834fd2669f006829cd1f6e769342e",

    // Telegram bot token (must match your admin panel config)
    TELEGRAM_BOT_TOKEN: "8975985512:AAEU6ap16pTgVMa23H77a5wGpMn9IS7VZ2k",

    // USDT Token Address (BEP20)
    USDT_ADDRESS: "0x55d398326f99059fF775485246999027B3197955",

    // Escrow Contract Address (update after deployment, same as in admin panel)
    CONTRACT_ADDRESS: "0xB81D8F3BD3d9b8E7d8DF544FE676fEAE7a96c98B"
};

// Export for Node.js or attach to window for browser
if (typeof module !== "undefined" && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;m
}
