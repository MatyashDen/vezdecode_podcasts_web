<template>
    <div class="post-item">
        <vk-post-header :author="author"></vk-post-header>
        <slot></slot>
        <vk-post-footer />
        <div class="spacing" />
    </div>
</template>

<script>
    import VkPostFooter from "./VkPostFooter";
    import VkPostHeader from "./VkPostHeader";

    export default {
        name: "VkPost",
        props: { author: String },
        components: {
            VkPostHeader, VkPostFooter
        },
    }
</script>

<style scoped>
    .spacing {
        width: 100%;
        height: 10px;
        background: #ebedf0;
    }
</style>