<template>
    <div class="back-page">
        <h3 class="back-page__heading">Lorem Ipsum is text of the typesetting industry</h3>
        <router-link class="back-page__btn" :to="{name: 'Home', hash: 'header-section'}">Back to homepage</router-link>
    </div>
</template>

<script>
export default {
    name: "BackPage"
}
</script>

<style lang="scss">
.back-page {
    width: 100%;
    max-width: 52rem;
    text-align: center;
    margin: 0 auto 10rem;

    &__heading {
        opacity: 0.5;
        font-size: 24px;
        font-weight: 600;
        color: #111518;
        margin-bottom: 4rem;
    }

    &__btn {
        display: inline-block;
        font-size: 16px;
        padding: 12px 36px;
        font-weight: 400;
        color: #1d1e25;
        border: 1px solid #60e3a1;
        border-radius: 3px;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            top: 18px;
            left: 15px;
            background: url('../assets/images/arrow.png') top center no-repeat;
            background-size: cover;
            width: 10px;
            height: 12px;
        }
    }
}
</style>