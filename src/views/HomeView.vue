<template>
  <div class="movie" v-for="(item,index) in movieList" :key="index">
    <MovieList v-bind:propsdata="item" />
  </div>
  <button class="gotop" ref="gotop" @click="moveTop"><i class="fas fa-chevron-up"></i></button>
</template>

<script>
  import {
    computed,onUpdated, onMounted, ref
  } from '@vue/runtime-core'
  import {
    useStore
  } from 'vuex'
  import MovieList from '../components/MovieList.vue'
  export default {
    components: {
      MovieList
    },
    setup(props, context) {
      const store = useStore();
      // 처음에는 computed 가 결과가 없는 상태
      const movieList = computed(() => store.getters.getMovieList);
      // html 태그의 속성으로 ref 를 활용하여 선택
      const gotop = ref(null);

    onMounted( () => {
    })

      // axios 실행 > vuex :mutation 실행
      onUpdated( () => {
        // 내용물이 최종 업데이트가 되었다면 App으로
        // intro 사라지라고 신호를 보낸다.
        let delay = setTimeout(()=>{
          clearTimeout(delay);
          context.emit('hide');
        },800)
      });

      const moveTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }

      return {
        movieList,
        gotop,
        moveTop
      }
    }
  }
</script>

<style scoped>
  .movie {
    position: relative;
    display: block;
    width: 49%;
    background: #fff;
    margin-bottom: 70px;
    border-radius: 5px;
    color: #adaeb9;
    padding: 20px;
    box-shadow: 
      0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 
      0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    cursor: pointer;
  }

  .gotop {
    position: fixed;
    right: 50px;
    bottom: 100px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #fff;
    cursor: pointer;
    z-index: 9;
    border: 1px solid #adaeb9;
    border-radius: 10px;
  }

  .fa-chevron-up {
    font-size: 30px;
    padding-top: 8px;
  }

  @media screen and (max-width: 1000px) {
    .movie {
      width: 95%;
    }
  }
</style>