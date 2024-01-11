<template>
	<div
		class="w-72 min-h-56 shadow-xl block float-left mt-0 ml-0 mr-8 mb-8 p-4 relative cursor-move"
		:class="`bg-${props.note.color}-300`"
	>
		<p class="italic bg-blend-lighten">
			ID: {{ props.note.id }} -- Order: {{ props.note.order }}
		</p>
		{{ props.note.text }}
		<span
			class="text-red-600 absolute top-1 right-2 cursor-pointer"
			@click="emit('removed')"
			>X</span
		>
	</div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { INote } from "@/stores/modules/stores/notes.types";

const props = defineProps({
	note: {
		type: Object as PropType<INote>,
		required: true,
	},
});

const emit = defineEmits<{
	(e: "removed"): void;
}>();
</script>
