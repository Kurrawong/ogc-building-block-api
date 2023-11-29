<script setup>
import { ref } from 'vue';
import config from '~/config';
import { tpl } from '~/helpers/str';
const route = useRoute();
const id = ref(route.params.id);
const collectionId = ref(route.params.collectionId);
</script>

<template>
  <CommonBreadcrumbs :items="[
    {title: tpl('{{!bc}}Home'), to: '/'},
    {title: tpl('{{!bc}}Catalogs'), to: '/catalogs'},
    {title: `${id}`, to: `/catalogs/${id}`},
    {title: tpl('{{!bc}}Collections'), to: `/catalogs/${id}/collections`},
    {title: `${collectionId}`, to: `/catalogs/${id}/collections/${collectionId}`},
    {title: tpl('{{!bc}}Items'), to: route.path, disabled: true}
  ]" />

  <ContainersList 
    header-title="{{ header.label }} collection"
    :data-url="config.API_BASE_URL + route.path"
    :fields="['rdfs:label', 'dcterms:identifier', 'iri']"
  />
</template>
