import base from '../webpack.config.babel.js';
import Copy from 'copy-webpack-plugin';

export default {
  ...base,
  plugins: [
    new Copy([
      { from: 'src/index.html' },
    ]),
  ],
  devServer: {
    ...base.devServer,
    port: 9999,
    hot: false,
  },
};
