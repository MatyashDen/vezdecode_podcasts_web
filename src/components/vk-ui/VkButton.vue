<template>
    <span class="vk-button">
        {{ text }}
    </span>
</template>

<script>
    export default {
        name: "VkButton",
        props: {
            text: String
        }
    }
</script>

<style scoped>
    .vk-button {
        border-radius: 10px;
        padding: 7.5px 16px;
        font-size: 15px;

        border: 1px solid #3f8ae0;
        color: #3f8ae0;

        font-family: "SFProText-Medium";
    }

    .vk-button:active {
        background: #3f8ae0;
        color: white;
    }
</style>