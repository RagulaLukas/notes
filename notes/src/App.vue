<template>
	<h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>
<script setup lang="ts">
import { useNotesStore } from "./stores/modules/stores/notes.store";
const nostesStore = useNotesStore();
</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>