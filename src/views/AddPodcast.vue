<template>
    <div class="container">
        <PodcastCover
            @imageChanged="setImage"
            class=" mt-4 mr-2 float-left"
        ></PodcastCover>

        <InputLayout
            class="float-right"
            title="Podcast title"
            placeholder="Podcast title"
            v-model="title"
        ></InputLayout>

        <InputLayout
            title="Podcast Description"
            placeholder=""
            class="w-100"
            v-model="description"
        ></InputLayout>

        <div class="text-center mb-5 mt-4">
            <div class="upload-title">Upload your podcast</div>
            <div class="text-muted upload-subtitle mb-4 mt-2">
                Select the finished audio file from your phone and add it
            </div>
            <CommonButton text="Upload file"></CommonButton>
        </div>

        <hr />

        <div class="form-check my-2">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input text-muted" />
                Inappropriate content
            </label>
        </div>

        <div class="form-check my-2">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input text-muted" />
                Exclude episode from export
            </label>
        </div>

        <div class="form-check my-2">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input text-muted" />
                Podcast Trailer
            </label>
        </div>

        <Button
            title="Continue"
            class="w-100"
            @click.native="addPodcast"
        ></Button>
    </div>
</template>
<script>
    import InputLayout from "../components/addPodcast/InputLayout"
    import eventBus from "../eventBus"
    import PodcastCover from "../components/addPodcast/PodcastCover"
    import Button from "../components/common/BottomButton"
    import CommonButton from "../components/vk-ui/VkButton"

    export default {
        props: { isRegular: Boolean },

        components: {
            InputLayout,
            PodcastCover,
            Button,
            CommonButton
        },
        created() {
            eventBus.setPageTitle("New podcast")
        },
        data() {
            return {
                image: null,
                title: null,
                description: null
            }
        },
        methods: {
            setImage(newImage) {
                this.image = newImage
            }
        }
    }
</script>
<style scoped>
    .upload-title {
        font-family: "SFProDisplay-Semibold";
        font-size: 20px;
    }
    .upload-subtitle {
        font-size: 16px;
        font-family: "SFProText-Regular";
    }
</style>