<script>
import ThePictures from './ThePictures.vue'

export default {
  props: {
    info: {},
    instagram: {},
    pictures: [],
    warnings: [],
  },
  components: {
    ThePictures,
  },
}
</script>

<template>
  <div class="wrapper">
    <ThePictures :pictures=pictures />
    <div class="info">
      <div class="contact-container">
        <h4 v-for="(item, key) in info" :key=key>
          <span class="highlight">{{ key }}:</span> {{ item }}
        </h4>
      </div>
      <div class="warning-container">
        <h4 v-for="(warn, index) in warnings" :key=index><span class="warning">&#9708;</span> {{ warn }}</h4>
      </div>
      <div class="social-container">
        <a class="instagram-link" :href=instagram.url target=”_blank”
          >
          <img src="/instagram.png" alt="Pet's instagram"/>
          {{ instagram.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  font-size: 1rem;
}
.contact-container, .warning-container, .social-container {
  padding: 1.5rem;
  background-color:#afe9ff;
  font-size: 1.5rem;
  border-radius: 5px;
}
.warning-container {
  background-color:#affffc;
  margin-top: 0.5rem;
}
.social-container {
  background-color:#ffafe4;
  margin-top: 0.5rem;
}
.highlight {
  font-weight: bold;
}

.warning {
  font-weight: bold;
  color: #f5afff;
  font-size: 2rem;
}

.instagram-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

img {
  height: 3rem;
}

@media only screen and (max-width: 800px)  {
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

</style>
