<script>
export default {
  props: {
    pictures: []
  },
  data() {
    return {
      selectedPictureIndex: 0,
    }
  },
  methods: {
    selectPicture(index) {
      return this.selectedPictureIndex = index;
    },
    getClass(index) {
      return index === this.selectedPictureIndex ? 'selected' : '';
    },
  }
}
</script>

<template>
  <div class="pictures">
    <div class="picture">
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
