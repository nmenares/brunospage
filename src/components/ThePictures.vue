<script>
export default {
  props: {
    pictures: [],
  },
  data() {
    return {
      selectedPictureIndex: 0,
      xDown: null,
      yDown: null,
    }
  },
  computed: {
    rightPictureIndex() {
      if (this.selectedPictureIndex <  this.pictures.length - 1) {
        return this.selectedPictureIndex + 1;
      }
      return 0;
    },
    leftPictureIndex() {
      if (this.selectedPictureIndex === 0) {
        return this.pictures.length - 1;
      }
      return this.selectedPictureIndex - 1;
    },
  },
  methods: {
    selectPicture(index) {
      return this.selectedPictureIndex = index;
    },
    getClass(index) {
      return index === this.selectedPictureIndex ? 'selected' : '';
    },
    getTouches(e) {
      return e.touches || encodeURI.originalEvent.touches;
    },
    handleTouchStart(e) {
      const firstTouch = this.getTouches(e)[0];
      this.xDown = firstTouch.clientX;
      this.yDown = firstTouch.clientY;
    },
    handleTouchMove(e) {
      if ( !this.xDown || !this.yDown ) {
        return;
      }

      var xUp = e.touches[0].clientX;
      var yUp = e.touches[0].clientY;

      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/

        if ( xDiff > 0 ) {
          this.selectPicture(this.rightPictureIndex);
        } else {
          this.selectPicture(this.leftPictureIndex);
        }

      }

      this.xDown = null;
      this.yDown = null;
    },
  },
  mounted() {
    document.getElementById('pic').addEventListener( 'touchstart', this.handleTouchStart, false );
    document.getElementById('pic').addEventListener( 'touchmove', this.handleTouchMove, false );
  },
}
</script>

<template>
  <div class="pictures">
    <div id="pic" class="picture">
      <img :src=pictures[selectedPictureIndex].path>
    </div>
    <div class="all-pictures">
      <img
        v-for="(picture, index) in pictures"
        :key=picture.name+index
        :src=picture.path
        :alt=picture.name
        :class=getClass(index)
        @click=selectPicture(index)
        >
    </div>
  </div>
</template>

<style scoped>
.pictures {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.picture {
  width: 100%;
}
.picture > img {
  width: 100%;
  border-radius: 0.3rem;
}
.all-pictures {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.all-pictures > img {
  padding: 0.1rem;
  width: calc(100% - 0.1rem);
  cursor: pointer;
}

.selected {
  opacity: 0.9;
  border: 1px solid #000000;
}

</style>
