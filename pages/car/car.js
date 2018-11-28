// page/component/new-pages/cart/cart.js
Page({
  data: {
    cars: [],               // 购物车列表
    hasList: false,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: true,    // 全选状态，默认全选
    obj: {
      name: "hello"
    }
  },
  onShow() {
    this.setData({
      hasList: true,
      cars: [
        { id: 1, name: '黄金香蕉', image: '/img/xiangjiao1.jpg', num: 4, price: 122.50, selected: true },
        { id: 2, name: '红玛瑙草莓', image: '/img/caomei1.jpg', num: 1, price: 10.08, selected: true }
      ]
    }),
    this.getTotalPrice();
  },


  // 选中当前商品
  selectThis(e) {
    const index = e.currentTarget.dataset.index;
    let car = this.data.cars;
    // const selected = car[index].selected;
    car[index].selected = !car[index].selected;
    this.setData({
      cars: car
    });
    this.getTotalPrice();
  },
  // 全选商品事件
  selectAll(e) {
    const selectAllStatus = !this.data.selectAllStatus;
    console.log(selectAllStatus);
    let car = this.data.cars;
    for(let i = 0;i<car.length;i++){
        car[i].selected = selectAllStatus;
    }
    this.setData({
      cars:car,
      selectAllStatus:selectAllStatus
    })
    this.getTotalPrice();
  },

  /**
 * 绑定加数量事件
 */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let car = this.data.cars;
    car[index].num = ++car[index].num;
    this.setData({
      cars: car
    });
    this.getTotalPrice();
  },  
  
/**
 * 绑定商品数量减少事件
 * */ 
  jian(e){
    const index = e.currentTarget.dataset.index;
    let car = this.data.cars;
    if (car[index].num <= 1) {
      return false;
    }
    car[index].num = --car[index].num;
    this.setData({
      cars: car
    });
    this.getTotalPrice();
  },
  // 删除商品事件
  del(e){
    const index = e.currentTarget.dataset.index;
    let car = this.data.cars;
    car.splice(index,1);
    this.setData({
      cars: car
    });
    this.getTotalPrice();
    if(!car.length){
      this.setData({
        hasList: false
      })
    }
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let car = this.data.cars;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < car.length; i++) {         // 循环列表得到每个数据
      if (car[i].selected) {                     // 判断选中才会计算价格
        total += car[i].num * car[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      cars: car,
      totalPrice: total.toFixed(2)
    });
  }

})