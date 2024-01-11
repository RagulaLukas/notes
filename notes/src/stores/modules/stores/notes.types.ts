export interface INotes {
	notes: INote[];
	isLoading: boolean;
}

export interface INote {
	id: string;
	text: string;
	color: string;
	order: number;
}
