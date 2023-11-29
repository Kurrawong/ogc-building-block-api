<script setup lang="ts">
import config from '~/config';
import { tpl } from '~/helpers/str';
const route = useRoute();
</script>

<template>
    <CommonBreadcrumbs :items="[{title: tpl('{{!bc}}Home'), to: '/'}, {title: tpl('{{!bc}}Catalogs'), to: '/catalogs', disabled: true}]" />
    <ContainersList 
      :header-title="tpl('{{ header.label }} collection')"
      :data-url="config.API_BASE_URL + route.path"
      :fields="['dcterms:title', 'dcterms:identifier', 'iri']"
    />
</template>
