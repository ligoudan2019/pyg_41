$(function () {

  // 第一个功能： 先读取本地数据中的数据，然后动态的生成列表结构
  let arr = kits.loadData('cartListData');
  // 遍历数组，生成指定的结构
  let html = '';// 先准备一个空字符串，后面存储我们要生成的所有的结构字符串
  arr.forEach(e => {
    // 需要有一个产品的id，用于后期的一些其他操作
    html += `<div class="item" data-id="${e.pID}">
    <div class="row">
      <div class="cell col-1 row">
        <div class="cell col-1">
          <input type="checkbox" class="item-ck" checked="">
        </div>
        <div class="cell col-4">
          <img src="${e.imgSrc}" alt="">
        </div>
      </div>
      <div class="cell col-4 row">
        <div class="item-name">${e.name}</div>
      </div>
      <div class="cell col-1 tc lh70">
        <span>￥</span>
        <em class="price">${e.price}</em>
      </div>
      <div class="cell col-1 tc lh70">
        <div class="item-count">
          <a href="javascript:void(0);" class="reduce fl ">-</a>
          <input autocomplete="off" type="text" class="number fl" value="${e.number}">
          <a href="javascript:void(0);" class="add fl">+</a>
        </div>
      </div>
      <div class="cell col-1 tc lh70">
        <span>￥</span>
        <em class="computed">${e.number * e.price}</em>
      </div>
      <div class="cell col-1">
        <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
      </div>
    </div>
  </div>`;
  })
  $('.item-list').append(html);

  if (arr.length != 0) {
    // 处理一些该隐藏的效果和该显示的效果
    $('.empty-tip').hide(); // 隐藏空空如也的提示
    $('.cart-header').show(); // 显示表头
    $('.total-of').show(); // 显示用于结算的div
  }

  //第二个功能 全选和点选
  $('.pick-all').on('click',function(){
    let status = $(this).prop('checked');
    $('.item-ck').prop('checked',status);
    $('.pick-all').prop('checked',status);
  })

  // 点选 - 所有的点选的checkbox都是动态生成的，推荐使用委托离开实现
  $('.item-list').on('click','.item-ck',function(){
    // 如果勾选的个数和总个数一致 = 全选
    let ckall = $('.item-ck').length === $('.item-ck:checked').length;
    // 设置全选的状态和ckall一致就行
    $('.pick-all').prop('checked',ckall);
  })
});