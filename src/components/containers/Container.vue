<template>
    <div class="content">
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main-content">
            <slot></slot>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Container"
}
</script>

<style lang="scss">
.content {
    display: flex;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    min-height: 100vh;
}

.main-content {
    flex: 1 0 auto;
}
</style>