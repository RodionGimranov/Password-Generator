<template>
  <main class="main_container">
    <VueMainHeading />
    <VueChangeLanguage />
    <VuePasswordDisplay :password="passwordText" />
    <section class="setting_container">
      <VueUppercases
        :uppercasesArray="handleUppercasesArray"
        @toggle-uppercase="toggleIncludeUppercases"
      />
      <VueLowercases
        :lowercasesArray="handleLowercasesArray"
        @toggle-lowercases="toggleIncludeLowercases"
      />
      <VueNumbers :numbersArray="handleNumbersArray" @toggle-numbers="toggleIncludeNumbers" />
      <VueSymbols :symbolsArray="handleSymbolsArray" @toggle-symbols="toggleIncludeSymbols" />
      <VuePasswordLength @password-length="handlePasswordLength" />
    </section>
    <VueGenerateButton @click="generatePassword" />
  </main>
</template>

<script>
import VueMainHeading from "./components/VueMainHeading.vue";
import VueChangeLanguage from "./components/VueChangeLanguage.vue";
import VuePasswordDisplay from "./components/VuePasswordDisplay.vue";
import VueUppercases from "./components/VueUppercases.vue";
import VueLowercases from "./components/VueLowercases.vue";
import VueNumbers from "./components/VueNumbers.vue";
import VueSymbols from "./components/VueSymbols.vue";
import VuePasswordLength from "./components/VuePasswordLength.vue";
import VueGenerateButton from "./components/VueGenerateButton.vue";

export default {
  name: "App",  
  components: {
    VueMainHeading,
    VueChangeLanguage,
    VuePasswordDisplay,
    VueUppercases,
    VueLowercases,
    VueNumbers,
    VueSymbols,
    VuePasswordLength,
    VueGenerateButton,
  },
  data() {
    return {
      passwordText: "",
      passwordLength: 8,
      handleUppercasesArray: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"],
      handleLowercasesArray: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"],
      handleNumbersArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      handleSymbolsArray: ["!", "@", "#", "$", "%", "^", "&", "*", "-", "", "+", "<", ">"],
    };
  },
  methods: {
    handlePasswordLength(length) {
      this.passwordLength = length;
    },
    toggleIncludeUppercases(chekMark) {
      this.includeUppercases = chekMark;
    },
    toggleIncludeLowercases(chekMark) {
      this.includeLowercases = chekMark;
    },
    toggleIncludeNumbers(chekMark) {
      this.includeNumbers = chekMark;
    },
    toggleIncludeSymbols(chekMark) {
      this.includeSymbols = chekMark;
    },
    generatePassword() {
      const minLength = 8;
      const maxLength = 32;
      let length = minLength;
      const userPasswordLength = this.passwordLength;

      if (userPasswordLength >= minLength && userPasswordLength <= maxLength) {
        length = userPasswordLength;
      }

      let combinedArray = [];

      if (this.includeUppercases) {
        combinedArray = combinedArray.concat(this.handleUppercasesArray);
      }

      if (this.includeLowercases) {
        combinedArray = combinedArray.concat(this.handleLowercasesArray);
      }

      if (this.includeNumbers) {
        combinedArray = combinedArray.concat(this.handleNumbersArray);
      }

      if (this.includeSymbols) {
        combinedArray = combinedArray.concat(this.handleSymbolsArray);
      }

      function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }

      const shuffledArray = shuffleArray(combinedArray);
      const passwordArray = shuffledArray.slice(0, length);
      const passwordText = passwordArray.join("");
      this.passwordText = passwordText;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

body {
  min-width: 320px;
  height: 100dvh;

  padding: 20px;
  background: #000212;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.main_container {
  position: relative;
  width: 1000px;
  height: 500px;

  padding: 20px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  background: rgba(131, 131, 131, 0.1);
  border: 2px rgba(255, 255, 255, 0.2) solid;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.setting_container {
  width: 480px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
}

@import "./styles/media-queries.scss";
</style>
