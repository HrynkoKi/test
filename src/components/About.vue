<template>
        <section id="about" class="about">
            <div class="container">
                <div class="about__row">
                    <div class="about__item" v-for="(item, index) in items" :key="index">
                        <div class="about__icon--people">
                            <img :src="item.icon" alt="people icon">
                        </div>
                        <h2 class="about__heading">{{ item.heading }}</h2>
                        <div class="about__points">
                            <ul>
                                <li v-for="(point, index) in item.points" :key="index">
                                    <p>{{ point }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: "About",
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    components: {}
}
</script>

<style lang="scss">
@import '../assets/layouts/components/_about.scss';
</style>