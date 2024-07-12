<template>
  <div class="password_length_block">
    <p classs="block_title">{{ $t("message.length") }}</p>
    <input
      class="slider_password_length"
      type="range"
      min="8"
      max="32"
      v-model="slider_value"
      @input="passwordLength"
    />
    <p class="password_length_counter">{{ slider_value }}</p>
  </div>
</template>

<script>
export default {
  name: "VuePasswordLength",
  data() {
    return {
      slider_value: 8,
    };
  },
  methods: {
    passwordLength() {
      this.$emit("password-length", this.slider_value);
    },
  },
};
</script>

<style lang="scss">
.password_length_block {
  width: 100%;

  padding: 6px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .block_title {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .slider_password_length {
    width: 311px;
    height: 3px;

    background: #b8b8b8;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    outline: none;

    &::-webkit-slider-thumb {
      width: 14px;
      height: 14px;

      background: #fff;
      border-radius: 100%;
      cursor: pointer;
      appearance: none;
      -webkit-appearance: none;
    }
  }

  .password_length_counter {
    width: 19px;
    height: 19px;

    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-align: center;
  }
}
</style>
