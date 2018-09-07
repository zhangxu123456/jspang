<template>
    <div id="ShoppingMall">
        <div class="search-bar">
            <van-row>
                <van-col span="3"><img :src="locationIcon" width="90%" /></van-col>
                <van-col span="16"><input type="text" class="search-input"/></van-col>
                <van-col span="5"><van-button size="mini">查找</van-button></van-col>
            </van-row>
        </div>
        <div class="swiper-area">
            <van-swipe :autoplay="2000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img v-lazy="banner.image" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="type-bar">
            <div  v-for="(cate,index) in category" :key="index" >
                    <img v-lazy="cate.image" width="90%" />
                    <span>{{cate.mallCategoryName}}</span> 
            </div>
        </div>
        <div class="ad-banner">
            <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
        </div>
        <!--Recommend goods area-->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiperDefault :recommend-goods='recommendGoods'></swiperDefault>
            </div>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import swiperDefault from '../swiper/swiperDefault'
export default {
  components:{
      swiperDefault
        },
  data () {
    return {
      locationIcon: require('../../assets/images/location.png'),
      bannerPicArray:'',
      category:'',
      adBanner :'',
      recommendGoods:''
      }
  },
  
  created(){
    this.$http({
        url: 'https://www.easy-mock.com/mock/5b921f01a2468838e0378171/example/SmileVue',
        method: 'get',
    })
    .then(response => {
        console.log(response)
        if(response.status==200){
            this.category=response.data.data.category;
            this.adBanner = response.data.data.advertesPicture; //获得广告图片
            this.bannerPicArray = response.data.data.slides   //轮播图片
            this.recommendGoods = response.data.data.recommend  //推荐商品
        }
    })
    .catch((error) => {     

    })
  }
}
</script>

<style lang="scss">
  #ShoppingMall{
    .search-bar{
      height: 2.2rem;
      background-color: #e5017d;
      line-height:2.2rem;
      overflow: hidden;
    };
    .search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid 1px !important ;
      background-color: #e5017d;
      color:#fff;
    };
  .location-icon{
      padding-top: .2rem;
      padding-left: .3rem;
    }
  .swiper-area{
      width:20rem;
      clear:both;
      overflow: hidden;
    }
  .type-bar{
        background-color: #fff;
        margin:0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size:14px;
        display: flex;
        flex-direction:row;
        flex-wrap:nowrap;
    }
    .type-bar div{
        padding: .3rem;
        font-size: 12px;
        text-align: center;
        flex: 1;
        span{
            white-space: nowrap;
        }
    }
    .recommend-area{
       background-color: #fff;
       margin-top: .3rem;
    }
    .recommend-title{
        border-bottom:1px solid #eee;
        font-size:14px;
        padding:.2rem;
        color:#e5017d;
    }
    .recommend-body{
       border-bottom: 1px solid #eee;
       .recommend-item{
            width:99%;
            border-right: 1px solid #eee;
            font-size: 12px;
            text-align: center;
        }
   }
  }
</style>
