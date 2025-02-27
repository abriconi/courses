import { AuthorType } from "./interfaces";

export const durationFormatter= (duration: number): string  => {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60
    return `${hours}:${minutes} hours`;
}

export const dateFormatter = (input: string): string => {
    const date = new Date(input);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

export const getAuthorNames = (authorIds: string[], authors: AuthorType[]): string => 
    authorIds
        .map(id => authors.find(author => author.id === id)?.name || "Unknown")
        .join(", ");
