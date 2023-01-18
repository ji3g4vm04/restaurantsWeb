import restaurants from '../../restaurant.json' assert { type : 'json'  };

interface restaurantContent{
  type? : string;
  keyword? : string;
  id? : number;
}
class restaurantFilter {
    type : string;
    keyword : string;
    id : number;
    restaurants : any[] = restaurants.results as unknown as any[];
  constructor(content : restaurantContent){
    this.type = content.type;
    this.keyword = content.keyword;
    this.id = content.id;
  }
  restaurantSearch() : any[]{
    if(!this.keyword){
      return this.restaurants;
    }
    return this.restaurants.filter((item) => {
      if(this.type === 'name'){
        return item[this.type].toLowerCase().includes(this.keyword.toLowerCase());
      }
      return item[this.type].includes(this.keyword);
    })
  }
  restaurantInfo() : {} {
    return restaurants.results.filter((item) => {
      return item.id === this.id;
    })[0]
  }
}

export default restaurantFilter;
