<template>
  <div class="main_heading">
    <h1 class="title">{{ $t("message.passwordGenerator") }}</h1>
    <h3 class="subtitle">{{ $t("message.generateSecurePassword") }}</h3>
  </div>
</template>

<script>
export default {
  name: "VueMainHeading",
};
</script>

<style lang="scss">
.main_heading {
  margin-bottom: 20px;
  user-select: none;
  -webkit-user-select: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.title {
  font-size: 32px;
  font-weight: 500;
  color: #fff;
}

.subtitle {
  font-size: 22px;
  font-weight: 400;
  color: #b8b8b8;
}
</style>
