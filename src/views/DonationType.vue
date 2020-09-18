<template>
    <div class="h-100 p-3">
        <div class="view mb-2" @click="goToAddDonation">
            <img
                src="../assets/images/target.png"
                alt="target"
                class="left-img"
            />
            <img
                src="../assets/images/rightArrow.png"
                alt="arrow"
                class="right-img my-4"
            />
            <div class="title">Target donation</div>
            <div class="subtitle text-muted">When there is a specific goal</div>
        </div>

        <div class="view mb-2" @click="goToAddDonation">
            <img
                src="../assets/images/calendar.png"
                alt="target"
                class="left-img"
            />
            <img
                src="../assets/images/rightArrow.png"
                alt="arrow"
                class="right-img my-4"
            />
            <div class="title">Regular donation</div>
            <div class="subtitle text-muted">If you need help every month</div>
        </div>
    </div>
</template>
<script>
    import eventBus from "./../eventBus"

    export default {
        created() {
            eventBus.setPageTitle("Donation type")
        },
        methods: {
            goToAddDonation() {
                this.$router.push({ name: "AddDonation" })
            }
        }
    }
</script>

<style scoped>
    .view {
        background: #f5f5f5;
        border: 0.33px solid rgba(0, 0, 0, 0.08);
        border-radius: 10px;
    }

    .left-img {
        position: absolute;
        width: 24px;
        height: 24px;
        margin-left: 14px;
        margin-top: 14px;
    }

    .title {
        font-family: "SFProText-Semibold";
        font-size: 16px;
        margin-top: 12px;
        margin-left: 52px;
    }

    .subtitle {
        font-family: "SFProText-Regular";
        font-size: 13px;
        margin-left: 52px;
        margin-bottom: 12px;
    }

    .right-img {
        width: 9.5px;
        height: 16.5px;
        float: right;
        margin-right: 12px;
    }
</style>