<template>
	<div class="bg-slate-50">
		<div class="container flex align-center flex-col items-center py-10 m-auto">
			<h1
				class="my-4 text-4xl font-semibold leading-none text-gray-900 md:text-5xl lg:text-6xl"
			>
				Stycky Notes
			</h1>
			<div class="flex felx-row space-x-4 items-center">
				<input
					type="text"
					v-model.trim="inputField"
					class="my-4 border rounded-sm p-2 w-[400px]"
				/>
				<span
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
					@click="addSticky"
					>Add sticky</span
				>
			</div>
			<div>
				<draggable
					v-model="nostesStore.notes"
					@start="drag = true"
					@end="drag = false"
					@change="onChange"
					item-key="note"
					class="flex flex-row flex-wrap justify-center"
				>
					<template #item="{ element }">
						<StickyNote
							:note="element"
							@removed="removeNote(element.id)"
						></StickyNote>
					</template>
				</draggable>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useNotesStore } from "./stores/modules/stores/notes.store";
import { onBeforeMount, ref } from "vue";
import StickyNote from "./components/stickyNote/StickyNote.vue";
import Draggable from "vuedraggable";
import { ColorEnum } from "./enums/colorEnums";

const nostesStore = useNotesStore();
const drag = ref(false);
const inputField = ref("");

onBeforeMount(() => {
	// check and load locaStorage if we have saved notes
	nostesStore.loadSavedNotes();
});

// add sticky note and save it to local storage
const addSticky = () => {
	if (inputField.value === "") return;
	nostesStore.notes.push({
		id: generateNoteId(),
		text: inputField.value,
		color: getRandomColor(),
		order: nostesStore.notes.length,
	});

	nostesStore.saveNotes();
};

//remove sticky note by index and save to localStorage
const removeNote = (id: number) => {
	if (id === undefined) return;
	// need to check current index in array because we can change order
	const currentIndex = nostesStore.notes.findIndex((item) => item.id === id);
	nostesStore.notes.splice(currentIndex, 1);
	recalculateOrder();
	nostesStore.saveNotes();
};

const recalculateOrder = () => {
	nostesStore.notes.forEach((note, index) => {
		note.order = index;
	});
	nostesStore.saveNotes();
};

const onChange = () => {
	// on change recalculate order and save it
	recalculateOrder();
};

// Function to get a random color
function getRandomColor(): string {
	const colors: string[] = Object.values(ColorEnum);
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

// Function to generate random ID
function generateNoteId(): string {
	const randomNumber = Math.floor(Math.random() * 10000);
	return `note_${randomNumber.toString().padStart(4, "0")}`;
}
</script>

<style scoped></style>
