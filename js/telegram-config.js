/**
 * Telegram Bot Configuration
 *
 * LƯU Ý BẢO MẬT:
 * - File này chứa thông tin nhạy cảm (Bot Token và Chat ID)
 * - KHÔNG commit file này lên Git nếu repository là public
 * - Nên thêm file này vào .gitignore
 * - Có thể sử dụng biến môi trường hoặc server-side config cho production
 */

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '7696170315:AAHzY3ANCN23bED-vqRYC_3-49Ura_YOycA';
const TELEGRAM_CHAT_ID = '7211586401';

// Export để sử dụng trong các module khác (nếu cần)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID
  };
}

