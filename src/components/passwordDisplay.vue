<template>
  <section class="container">
    <div class="password_display_block">
      <p v-if="showCopyMessage" class="copy_message">{{ $t("message.copy") }}</p>
      <p v-if="showPasswordText" class="password_text">{{ password }}</p>
    </div>
    <div class="copy_password_btn" @click="passwordCopy">
      <img class="copy_icon" src="../assets/svg/copy-icon.svg" alt="Copy icon" />
    </div>
  </section>
</template>

<script>
export default {
  name: "VuePasswordDisplay",
  props: {
    password: { type: String },
  },
  data() {
    return {
      showCopyMessage: false,
      showPasswordText: true,
    };
  },
  methods: {
    passwordCopy() {
      const el = document.createElement("textarea");
      el.value = this.password;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      this.showCopyMessage = true;
      this.showPasswordText = false;

      setTimeout(() => {
        this.showCopyMessage = false;
        this.showPasswordText = true;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.container {
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;

  .password_display_block {
    width: 440px;
    height: 35px;

    padding: 7px 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);

    display: flex;
    justify-content: center;
    align-items: center;

    .copy_message,
    .password_text {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
    }
  }

  .copy_password_btn {
    min-width: 35px;
    min-height: 35px;

    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
