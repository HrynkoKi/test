<template>
    <div class="header__container container-fluid">
        <div class="header__row">
            <div class="logo">
                <router-link :to="{name: 'Home'}">
                    <img :src="src" alt="logo">
                </router-link>
            </div>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item" v-for="({name, path, hash, index}) in navbarList" :key="index">
                        <router-link :to="{path, hash}">{{ name }}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/images/logo/logo.png'
import {menuList} from "@/constants/menuLinks";

export default {
    name: "Header",
    components: {},
    data() {
        return {
            src: logo,
            navbarList: menuList
        }
    },
}
</script>

<style lang="scss">
.header {
    margin-top: 4.7rem;
    margin-bottom: 7.3rem;

    &__row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
}

.logo img {
    max-width: 12rem;
    max-height: 6.6rem;
}

.nav {
    flex: 0 1 36.2rem;

    &__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__item {
        a {
            font-size: 1.4rem;
            font-weight: var(--font-weight-medium);
            text-transform: uppercase;
            letter-spacing: 0.07rem;
            position: relative;

            &:hover {
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: -23px;
                    width: 100%;
                    height: 2px;
                    background: var(--color-yellow);
                }
            }
        }
    }
}
</style>
