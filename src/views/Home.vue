<template>
    <div>
        <section class="hero">
            <div class="container">
                <h1 class="hero__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </h1>
            </div>
            <img class="hero__img" :src="src" alt="Office picture">
        </section>
        <About id="about-section" :items="items"/>
        <WriteComment id="write-comment-section"/>
    </div>
</template>

<script>
import {items} from "@/constants/aboutItems";
import About from '@/components/About';
import WriteComment from '@/components/WriteComment';
import src from '@/assets/images/hero/hero_bg_office.png'

export default {
    name: 'Home',
    components: {
        About,
        WriteComment
    },
    data() {
        return {
            src,
            items
        }
    },
}
</script>

<style lang="scss">
@import '../assets/layouts/components/hero';
</style>