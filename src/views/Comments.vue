<template>
    <section class="comments">
        <div class="container">
            <h1 class="comments__heading">Comments</h1>
        </div>
        <CommentItem :comments="comments"/>
        <BackPage/>
    </section>
</template>

<script>
import CommentItem from '@/components/CommentItem';
import {comments} from '@/constants/commentList';
import BackPage from '@/components/BackPage';

export default {
    name: 'Comments',
    components: {
        CommentItem,
        BackPage
    },
    data() {
        return {
            comments
        }
    },
}
</script>

<style lang="scss">
.comments {
    &__heading {
        font-size: 7rem;
        font-weight: var(--font-weight-semi-bold);
        color: var(--color-primary);
        line-height: 7rem;
        margin-bottom: 12.1rem;
    }
}
</style>