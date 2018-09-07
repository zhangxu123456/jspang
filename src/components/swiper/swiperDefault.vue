<template>
  <div >
      {{recommendGoods}}
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item, index) in recommendGoods" :key="index">
           <div class="recommend-item">
               <img :src="item.image" width="80%" />
                <div>{{item.goodsName}}</div>
                <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        props:['recommendGoods'],
        components:{swiper,swiperSlide},
        data() {
            return {
                slide: [1,2,3,4,5,6],
                swiperOption:{
                    
                    slidesPerView: 'auto',
                    freeMode:true,
                    mousewheel:true,
                    pagination:{
                        el:'.swiper-pagination'
                    }
                }
            }
        },
        
        
    }
</script>
<style lang="scss">
  .swiper-slide{
      height: 4rem;
      text-align: center;
      padding-top: 3rem;
      border-bottom: 1px solid #ccc;}
  .swiper{
      height: 300px;
      overflow: hidden;
  }
  .recommend-item{
            width:99%;
            border-right: 1px solid #eee;
            font-size: 12px;
            text-align: center;
        }
</style>