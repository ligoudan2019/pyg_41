$(function () {
  // 先截取 location.search 里面的id
  let id = location.search.substring(4);
  // 到数组里面把对应id的数据获取出来
  // 这样做是可以获取到对应的数据的 —— 但是太麻烦了
  // phoneData.forEach(e=>{
  //   if(e.pID == id){
  //     console.log(e);
  //   }
  // })

  // 讲解一个新的数组的获取指定条件元素的方法
  let target = phoneData.find(e => {
    // 返回你的条件
    return e.pID == id;
  });

  // 就可以把数据动态的渲染到结构里面
  // 把价格修改
  $('.summary-price em').text(`¥${target.price}`);
  // 改名字
  $('.sku-name').text(target.name);
  // 改图片
  $('.preview-img>img').attr('src',target.imgSrc);
  // 如果还有别的地方要改(数据要支持)，继续修改


  /// ----------------------------
  // 第四天的代码
  // 点击加入购物车
  $('.addshopcar').on('click',function(){
    // 把件数和商品的信息存储到本地数据里面
    // 商品的数据会有很多，所以需要往本地数据里面存储的是一个数组
    // 先从本地数据中读取出一个指定的键 - 键是你自己定义的
    let arr = kits.loadData('cartListData');
    // console.log(arr);
    // 有了数组了，可以向里面存储东西了
  })
});
