<script setup lang="ts">
type BreadcrumbItem = {
    title: string,
    href?: string,
    to?: string,
    disabled?: boolean
}
const props = defineProps<{items: BreadcrumbItem[]}>();
</script>
<template>
    <v-breadcrumbs
        :items="items"
    >
    </v-breadcrumbs>
</template>
<style scoped>
.v-breadcrumbs {
    font-size:14pt;
    padding-left:0;
}
</style>
