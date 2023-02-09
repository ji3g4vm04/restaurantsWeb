import restaurants from '../../restaurant.json' assert { type : 'json'  };
import { restaurantResult } from '../interface/restaurant.js'
interface restaurantContent{
  type : string;
  keyword : string;
}


class restaurantFilter {
    type : string;
    keyword : string;
    restaurants : any[] = restaurants.results as unknown as any[];
  constructor(content : restaurantContent){
    this.type = content.type;
    this.keyword = content.keyword;
  }
  restaurantSearch() : any[]{
    if(!this.keyword){
      // 關鍵字為空，直接回傳所有餐廳
      return this.restaurants;
    }
    // 判斷搜尋餐廳名或餐廳類型
    return this.restaurants.filter((item) => {
      if(this.type === 'name'){
        return item[this.type].toLowerCase().includes(this.keyword.toLowerCase());
      }
      return item[this.type].includes(this.keyword);
    })
  }
  // 取得特定餐廳資料，故直接使用static 即可避免帶入新的class
  static restaurantInfo(id : number) : restaurantResult {
    return restaurants.results.filter((item) => {
      return item.id === id;
    })[0]
  }
}

export default restaurantFilter;
