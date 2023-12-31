<script>
import TheInfo from '../components/TheInfo.vue';

export default {
  data() {
    return {
      info: {
        DOB: "October 31st, 2021",
        Microchip: "98102-00432-62588",
        Class: "Canine",
        Breed: "Chihuaha Mix",
        Sex: "Male, neutered",
        Weight: "16 pounds",
        Hair: "Yellow",
        Eyes: "Hazel",
      },
      instagram: {
        name: "@ItsBrunoPerruno",
        url: "https://www.instagram.com/itsbrunoperruno/",
      },
      name: "Bruno",
      pictures: [
        {name: "Bruno 1", path: new URL("@/assets/pic1.png", import.meta.url).href},
        {name: "Bruno 2", path: new URL("@/assets/pic2.png", import.meta.url).href},
        {name: "Bruno 3", path: new URL("@/assets/pic3.png", import.meta.url).href},
        {name: "Bruno 4", path: new URL("@/assets/pic4.png", import.meta.url).href},
        {name: "Bruno 5", path: new URL("@/assets/pic5.png", import.meta.url).href},
        {name: "Bruno 6", path: new URL("@/assets/pic6.png", import.meta.url).href},
      ],
      warnings: [
        "Allergic to Chicken",
        "Water hater"
      ],
      whatsapp: "https://wa.me/+16502506864",
      email: "mailto: nataly.menares@gmail.com"
    }
  },
  components: {
    TheInfo,
  },
}
</script>

<template>
  <div class="greetings">
    <div>Hi, this is {{ name }}</div>
    <TheInfo
      :info=info
      :instagram=instagram
      :pictures=pictures
      :warnings=warnings
      :whatsapp=whatsapp
    />
    <div v-show=email class="email-wrapper">
      <a :href=email target=”_blank”>
        <img src="@/assets/email.png" alt="send email" class="email"/>
      </a>
    </div>
    <div v-show=whatsapp class="whatsapp-wrapper">
      <a :href=whatsapp target=”_blank”>
        <img src="@/assets/whatsapp.png" alt="whatsapp" class="whatsapp"/>
      </a>
    </div>
  </div>
</template>

<style scoped>
.greetings {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
}
.whatsapp-wrapper {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
.email-wrapper {
  position: fixed;
  bottom: 8rem;
  right: 2rem;
}
.whatsapp {
  width: 5rem;
}
.email {
  width: 5rem;
}
</style>
