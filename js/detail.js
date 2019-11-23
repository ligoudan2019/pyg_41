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
});
