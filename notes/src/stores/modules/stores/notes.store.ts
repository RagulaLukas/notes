import { defineStore } from "pinia";
import { INote, INotes } from "./notes.types";

export const useNotesStore = defineStore("notesStore", {
	state: (): INotes => ({
		notes: [],
		isLoading: false,
	}),

	getters: {},
	actions: {
		loadSavedNotes() {
			if (localStorage.getItem("notes")) {
				const storedNotes = localStorage.getItem("notes");

				// Check if storedNotes is not null before parsing
				if (storedNotes !== null) {
					this.notes = JSON.parse(storedNotes) as INote[];
				}
			}
		},
		saveNotes() {
			localStorage.setItem("notes", JSON.stringify(this.notes));
		},
	},
});
