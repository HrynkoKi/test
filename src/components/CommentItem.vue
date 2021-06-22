<template>
    <div class="comment comment__container">
        <div class="comment__row">
            <div class="comment__box" v-for="(comment, index) in comments" :key="index">
                <div class="comment__item">
                    <h2 class="comment__title">{{comment.heading}}</h2>
                    <p class="comment__text">{{comment.text}}</p>
                    <router-link :to="{name: 'Comment'}" class="comment__btn">{{comment.button}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommentItem",
    props: {
        comments: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
@import '../assets/layouts/components/comment';
</style>