/**
 * @file
 * @author 何文林
 * @date 17/3/23
 */
module.exports = {
  base: 'https://api.douban.com/',
  sub: {
    hot: '/v2/movie/in_theaters', // 热映
    top: '/v2/movie/top250', // 排行
    come: '/v2/movie/coming_soon', // 预告
    detail: '/v2/movie/subject/' // 后面是id
  }
};

