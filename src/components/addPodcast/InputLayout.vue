<template>
    <div>
        <div class="text-muted input-title mb-1">{{ title }}</div>
        <textarea
            :type="type"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            placeholder: String,
            value: String,
            height: Number
        }
    }
</script>

<style scoped>
    .input-title {
        font-family: "SFProText-Regular";
        font-size: 14px;
    }

    textarea {
        background: #f2f3f5;
        border: 0.5px solid rgba(0, 0, 0, 0.12);
        padding: 12px;
        border-radius: 10px;
        font-family: "SFProText-Regular";
        font-size: 16px;
        outline: none;
        width: 100%;
    }
</style>