<template>
    <div class="container">
        <PodcastCover @imageChanged="setImage"></PodcastCover>

        <InputLayout
            title="Podcast title"
            placeholder="Podcast title"
            class="w-100"
            v-model="title"
        ></InputLayout>

        <InputLayout
            title="Sum in rubles"
            placeholder="How much to collect"
            class="w-100"
            v-model="podcastAll"
            type="number"
        ></InputLayout>

        <InputLayout
            title="Goal"
            placeholder="For example for human treatment"
            class="w-100"
            v-model="goal"
        ></InputLayout>

        <InputLayout
            title="Description"
            placeholder="What will the money go to and how will it help someone?"
            class="w-100"
            v-model="description"
        ></InputLayout>

        <InputLayout
            title="Where to get money"
            class="w-100"
            v-model="bill"
        ></InputLayout>

        <InputLayout
            title="Author"
            class="w-100"
            v-model="author"
        ></InputLayout>

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

    export default {
        props: { isRegular: Boolean },

        components: {
            InputLayout,
            PodcastCover,
            Button
        },
        created() {
            eventBus.setPageTitle("Target podcast")
        },
        data() {
            return {
                image: null,
                title: null,
                podcastAll: null,
                goal: null,
                description: null,
                bill: "VK Pay · 1234",
                author: "Den Matiash"
            }
        },
        methods: {
            setImage(newImage) {
                this.image = newImage
            },
            addPodcast() {
                const podcast = {
                    title: this.title,
                    podcastAll: this.podcastAll,
                    podcastReal: Math.floor(this.podcastAll / 2),
                    goal: this.goal,
                    podcastText: this.description,
                    subTitle: "Помощь нужна каждый день",
                    progressTitle: 'В сентябре собрано: ',
                    bill: this.bill,
                    author: this.author
                }

                const image = this.image

                this.$store.dispatch("uploadPodcast", { image, podcast })
            }
        }
    }
</script>