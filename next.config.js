    const path = require('path');
    module.exports = {
      webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
          test: /\.(png|svg|jpg|gif|pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        },{
          test: /\.node$/,
          use: [
            {
              loader: 'node-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        });
        return config;
      },
    };

// Path: next.config.js
   