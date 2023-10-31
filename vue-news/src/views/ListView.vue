<template>
    <div>
        <ListItem :items="newsItem"></ListItem>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListItem from '../components/ListItem.vue';
import { fetchNews, NewsItem } from '@/api';

export default Vue.extend({
    components: {
        ListItem,
    },
    data() {
        return {
            newsItem: [] as NewsItem[],
        };
    },
    methods: {
        async fetchNewItems() {
            const response = await fetchNews();
            this.newsItem = response.data;
        },
    },
    created() {
        this.fetchNewItems();
    },
});
</script>

<style></style>
