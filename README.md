# 📊 Pro Trading Terminal V2

A high-performance, aesthetically premium trading cockpit designed for professional traders and quants. This dashboard consolidates multi-market data, heatmaps, and financial analysis tools into a unified, high-density terminal interface.

## 🚀 Quick Start (Required)

Modern browsers block component loading (like the sidebar) when opening files directly (`file://`). To ensure the terminal works perfectly, you **must** run it through a local web server.

### 1. Start the Server
Open your terminal in the project directory and run:

```bash
python3 -m http.server 8000
```

### 2. Launch the Cockpit
Navigate to: 👉 **[http://localhost:8000](http://localhost:8000)**

---

## 💎 Premium Features

### 1. **Command Center Architecture**
- **Collapsible Sidebar**: A space-saving navigation rail that stays icon-only (60px) and expands on hover to reveal labels.
- **Unified Global Header**: Persistently displays your market session clocks (LIS, NYC, SHA, TOK) with "LED" status dots (Open, Closed, Pre/Post).
- **Universal Ticker Tape**: A real-time price tape synced across every page of the terminal, keeping you updated on the macro pulse regardless of which tool you are using.

### 2. **Professional Aesthetics**
- **Glassmorphism UI**: High-density "Glass" cards with subtle glowing borders on hover.
- **Precision Typography**: Optimized using **Inter** for UI clarity and **JetBrains Mono** for technical data reading.
- **Electric Orange Theme**: High-contrast `#ff8000` accents against a deep `#0a0f1a` charcoal background for reduced eye strain during long sessions.

### 3. **High-Density Monitoring**
- **Macro Overview**: Integrated S&P 500 Pulse, Crypto Heatmaps, and Global Forex Matrix on a single screen.
- **Multi-Chart Grids**: Specialized grids for Indices and Forex optimized to fit exactly 9 charts per viewport (3x3) with minimal dead space.
- **Integrated Portals**: Direct, styled access to external alpha sources like Capitol Trades, Coinglass, and specialized GSheets.

---

## 📂 Navigation Map
- **Home (`index.html`)**: The main Command Center with Macro Heatmaps and Screener.
- **Indices (`charts_index.html`)**: 3x3 Daily chart grid for Equity Indices, Gold, and DXY.
- **Forex (`charts_fx.html`)**: 3x3 Hourly chart grid for major FX pairs.
- **Stablecoins (`stablecoins.html`)**: Real-time stablecoin flow monitoring.
- **Coinglass (`coinglass.html`)**: Crypto liquidation data portal.
- **Capitol Trades (`capitol_trades.html`)**: Real-time tracking of congressional stock trades.
- **GSheets (`gsheets.html`)**: Specialized Market Overview and 50DMA analysis sheets.

---

## 🛠 Tech Stack
- **Engine**: Native HTML5, CSS3 Grid/Flexbox, Vanilla JS
- **Libraries**: jQuery (Bootstrap only), Moment.js (Timezones)
- **Data**: TradingView Advanced Widgets & Multi-Market APIs
