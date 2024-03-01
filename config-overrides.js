const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin('@babel/plugin-proposal-optional-chaining')
  // Thêm các plugin và loader khác tại đây nếu cần
);
