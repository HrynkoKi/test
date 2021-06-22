<template>
        <section id="write-comment" class="write-comment">
            <div class="container">
                <div class="write-comment__row">
                    <div class="write-comment__label">
                        <h2 class="write-comment__heading">
                            Write comment
                        </h2>
                    </div>
                    <form class="write-comment__form">
                        <div class="write-comment__input">
                            <input type="text" placeholder="Title">
                        </div>
                        <div class="write-comment__textarea">
                            <textarea class="write-comment__area" placeholder="Your comment"></textarea>
                        </div>
                        <button class="write-comment__btn">Send</button>
                    </form>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: "WriteComment"
}
</script>

<style lang="scss">
@import '../assets/layouts/components/write-comment';
</style>