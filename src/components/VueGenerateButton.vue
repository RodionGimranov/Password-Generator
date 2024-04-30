<template>
  <div class="geneate_password_btn">
    {{ $t("message.generate") }}
    <svg
      class="btn_icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 21.236L6.755 14.745L0.264 11.5L6.755 8.255L10 1.764L13.245 8.255L19.736 11.5L13.245 14.745M18 21L19.5 24L21 21L24 19.5L21 18L19.5 15L18 18L15 19.5M19.333 4.667L20.5 7L21.667 4.667L24 3.5L21.667 2.333L20.5 0L19.333 2.333L17 3.5"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "VueGenerateButton",
};
</script>

<style lang="scss">
.geneate_password_btn {
  width: 480px;

  margin-top: 50px;
  padding: 6px 10px;
  border-radius: 8px;
  transition: 0.2s;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  font-size: 20px;
  font-weight: 500;
  color: #dfdfdf;

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .btn_icon {
    fill: #dfdfdf;
    transition: 0.2s;
  }

  &:hover {
    color: #fff;

    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    border: 1px solid transparent;
    // think about this sheet!!
    background: transparent;

    .btn_icon {
      fill: #fff;
    }
  }
}
</style>
