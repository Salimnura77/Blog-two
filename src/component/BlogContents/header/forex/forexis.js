import React, { useEffect } from 'react';
import "./forex1.css";

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
    script.async = true;

    // Set the configuration object for the TradingView widget
    script.text = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "isTransparent": false,
        "showSymbolLogo": true,
        "colorTheme": "light",
        "locale": "en"
      }
    `;

    document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);

    return () => {
      document.getElementsByClassName('tradingview-widget-container__widget')[0].removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" />
    </div>
  );
};

export default TradingViewWidget;
