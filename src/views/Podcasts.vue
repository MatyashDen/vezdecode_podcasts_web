<template>
    <div class="container h-100 text-center">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-10">
                <svg
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.5 0C37.7548 0 48.5 10.7452 48.5 24C48.5 37.2548 37.7548 48 24.5 48C11.2452 48 0.5 37.2548 0.5 24C0.5 10.7452 11.2452 0 24.5 0ZM24.5 3C12.902 3 3.5 12.402 3.5 24C3.5 35.598 12.902 45 24.5 45C36.098 45 45.5 35.598 45.5 24C45.5 12.402 36.098 3 24.5 3ZM24.5 12.5C25.3284 12.5 26 13.1716 26 14V22.5H34.5C35.3284 22.5 36 23.1716 36 24C36 24.8284 35.3284 25.5 34.5 25.5H26V34C26 34.8284 25.3284 35.5 24.5 35.5C23.6716 35.5 23 34.8284 23 34V25.5H14.5C13.6716 25.5 13 24.8284 13 24C13 23.1716 13.6716 22.5 14.5 22.5H23V14C23 13.1716 23.6716 12.5 24.5 12.5Z"
                        fill="#99A2AD"
                    />
                </svg>
                <div class="title my-2">Add your first podcast</div>

                <div class="text-muted mb-4">
                    Add, edit and share podcasts from your community.
                </div>
                <Button
                    title="Add podcast"
                    @click.native="goToNext"
                ></Button>
            </div>
        </div>
    </div>
</template>

<script>
    import eventBus from "./../eventBus"
    import Button from "./../components/common/CommonButton"

    export default {
        created() {
            eventBus.setPageTitle("Podcasts")
        },
        components: {
            Button
        },
        methods: {
            goToNext() {
                this.$router.push({ name: 'AddPodcast' })
            }
        }
    }
</script>
<style scoped>
    .title {
        font-family: "SFProDisplay-Semibold";
        font-size: 20px;
    }
</style>