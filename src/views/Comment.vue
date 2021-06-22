<template>
    <div class="comment-page">
        <div class="comment-page__container">
            <div class="comment-page__btn">
                <router-link :to="{name: 'Comments'}">Back to Comments</router-link>
            </div>
            <h1 class="comment-page__title">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </h1>
            <div class="comment-page__text">
                <p class="comment-page__desc--1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p class="comment-page__desc--2">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from
                    a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                    amet..", comes from a line in section.
                </p>
            </div>
        </div>
        <BackPage/>
    </div>
</template>

<script>
import BackPage from '@/components/BackPage';

export default {
    name: "Comment",
    components: {
        BackPage
    }
}
</script>

<style lang="scss">
.comment-page {
    &__container {
        width: 100%;
        max-width: 76.6rem;
        margin: 0 auto;
    }

    &__btn {
        width: 100%;
        max-width: 14rem;
        margin-left: 2.4rem;
        border-bottom: 1px solid black;
        margin-bottom: 4.7rem;

        position: relative;

        &::after {
            content: '';
            position: absolute;
            top: 5px;
            left: -2.4rem;
            background: url('../assets/images/arrow.png') top center no-repeat;
            background-size: cover;
            width: 1rem;
            height: 1.2rem;
        }
    }

    &__title {
        font-size: 4.8rem;
        line-height: 1.2;
        font-weight: var(--font-weight-bold);
        margin-bottom: 3.8rem;
    }

    &__text {
        font-size: 1.6rem;
        line-height: 2.8rem;
        margin-bottom: 18.4rem;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -9.1rem;
            width: 100%;
            max-width: 77.4rem;
            height: 1px;
            opacity: 0.1;
            background-color: #4a4d5e;
        }
    }

    &__desc--1 {
        margin-bottom: 2.7rem;
    }

    &__desc--2 {
        max-width: 76.5rem;
    }
}
</style>