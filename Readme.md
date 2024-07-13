# Telegram to Discord Mirror Bot

This Next.js application serves as a bot that mirrors messages from a Telegram channel to a Discord channel using webhooks.

# Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environmental variables](#environment-variables)
- [Technoligies Used](#technologies-used)
- [Contributing](#contributing)
- [Developers](#developers)
- [Support / Issues](#support)
- [Buy Me a Coffee](#-you-can-help-me-by-donating)

## Overview

A Next.js app uses server-side rendering to power a bot connecting Telegram and Discord. It fetches Telegram messages via API ([Long Pooling Method](https://en.wikipedia.org/wiki/Push_technology#Long_polling)), forwards them to Discord using webhooks, ensuring real-time sync. Seamless platform interaction without switching.

Additionally, the app features a web UI with a live dashboard for monitoring message flow and settings configuration for managing bot preferences and integrations.

## Features

- Live Dashboard & Settings
- Built-in logging with Next.js API
- 24-hour message backup on errors
- Efficient webhook integration
- Server-Side Rendering for reliable performance

## Getting Started

To deploy and run the Telegram to Discord Message Mirror Bot locally or on your server:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/shadowctrl/Telegram-Discord-Bot
   cd telegram-to-discord-bot

   ```

2. **Install Dependencies**:

   ```bash
   yarn install or npm install

   ```

3. **Configure up environment variables**:
   _edit .env.local in parent directory with approrpriate values. set NEXT_PUBLIC_Base_Url to your next application url. If not sure leave it as it is_

   ```bash
   Telegram_Token=1274727484:AHBDFHSDFH-SDFJBSDHJF-SDHBBS
   NEXT_PUBLIC_Base_Url=http://localhost:3000

   ```

4. **Start the Application**

   ```bash
   yarn dev or npm run dev

   ```

5. **Open https://localhost:3000/settings in your browser**

- Paste telegram channel ID without #.

  - Example: https://web.telegram.org/a/#-1002162160712. My Channel ID is "-1002162160712".

- Create a Discord webhook in your server and Paste the URL.
  - Example of Webhook URL: https://discord.com/api/webhooks/1423567663/dfjghuisdjghiasdghfysdgyfh
- save the settings.

6. **Go with your First message in telegram channel which should appear automaically in Discord channel via webhook.** _For any issues ([click here](https://github.com/shadowctrl/Telegram-Discord-Bot/issues)] to get support._

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. Please refer **Step 3** in [Getting Started](#getting-started)

`Telegram ID`

`Discord Webhook URL`

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework with server-side rendering.
- [Telegram API](https://core.telegram.org/bots/api) - API for interacting with Telegram bots and channels.
- [Discord Webhooks](https://discord.com/developers/docs/resources/webhook) - Webhooks for sending messages to Discord channels.

## Contributing

Contributions are always welcome!

- **Make a pull request**

## Developers

- [@shadowctrl](https://www.github.com/shadowctrl)

## Support

For support, raise a issue [here](https://github.com/shadowctrl/Telegram-Discord-Bot/issues) or email admin@shadowctrl.me.

## 💰 You can help me by Donating

[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/shadowctrl) [![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/shadowctrl)
