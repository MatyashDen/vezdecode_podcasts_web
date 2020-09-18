<template>
    <div class="snippet-progress">
        <vk-progress
                :title="`${podcastModel.progressTitle} ${podcastModel.podcastReal}`"
                :percentage="progressPercentage"
                class="vk-progress"/>
        <vk-button class="help-btn" text="Помочь" @click.native="handleHelpClick"/>
    </div>
</template>

<script>
    import VkButton from "../vk-ui/VkButton";
    import VkProgress from "../vk-ui/VkProgress";

    export default {
        name: "SnippetProgress",
        components: {
            VkButton, VkProgress
        },
        props: {
            podcastModel: {
                type: Object,
                required: true
            }
        },
        computed: {
            progressPercentage() {
                return (this.podcastModel.podcastReal * 100) / this.podcastModel.podcastAll
            }
        },
        methods: {
            handleHelpClick() {
                this.$router.push(`/podcast/${this.podcastModel.id}`)
            }
        }
    }
</script>

<style scoped>
.snippet-progress {
    display: flex;
}
.vk-progress {
    width: 65%;
}
.help-btn {
    width: 30%;
    margin-left: 5%;
    align-self: center;
}
</style>