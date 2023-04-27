const ENV = {
  development: {
    router: './routes/dev.cjs', // 测试
    maxAge: 0, // 缓存时间
  },
  production: {
    router: './routes/prod.cjs', // 正式
    maxAge: 1000 * 60 * 60 * 24 * 30, // 缓存时间
  }
};

module.exports = ENV[process.env.NODE_ENV];
