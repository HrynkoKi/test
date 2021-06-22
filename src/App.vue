<template>
    <Container>
        <template v-slot:header>
            <Header/>
        </template>
        <main>
            <router-view/>
        </main>
        <template v-slot:footer>
            <Footer/>
        </template>
    </Container>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from "@/components/containers/Container";


export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Container
    }
}
</script>

<style lang="scss">

</style>
