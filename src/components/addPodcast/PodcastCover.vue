<template>
    <div class="d-inline">
        <input type="file" ref="file" class="d-none" @change="onFileChange" />

        <div class="cover" @click="imagePath ? () => {} : $refs.file.click()">
            <img
                v-if="imagePath"
                :src="imagePath"
                alt=""
                class="w-100 h-100 cover-img"
            />
            <div class="container h-100 text-center" style="padding: 12px;">
                <div
                    class="row h-100 justify-content-center align-items-center"
                >
                    <img
                        src="../../assets/images/image_icon.png"
                        alt=""
                        class="img-icon"
                        v-if="imagePath == ''"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imagePath: ""
            }
        },
        methods: {
            onFileChange(e) {
                const file = e.target.files[0];
                this.imagePath = URL.createObjectURL(file);
                this.$emit("imageChanged", file)
            }
        }
    }
</script>

<style scoped>
    .cover {
        height: 72px;
        width: 72px;
        color: #4986cc;
        background: #f2f3f5;
        border: 0.5px solid rgba(0, 0, 0, 0.12);
        border-radius: 10px;
    }

    .cover-img {
        z-index: 100;
        object-fit: cover;
        border-radius: 10px;
    }

    .img-icon {
        width: 22px;
        height: 22px;
    }
</style>