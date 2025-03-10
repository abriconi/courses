import { AuthorsPicked, AuthorType, CourseType } from "./interfaces";

export const durationFormatter = (duration: number): string => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${formattedHours}:${formattedMinutes}`;
};


export const dateFormatter = (input: string): string => {
    const date = new Date(input);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

export const createDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are 0-based, so adding 1
    const year = today.getFullYear();

    return `${month}/${day}/${year}`;
}

export const getAuthorNames = (authorIds: string[], authors: AuthorType[]): string => 
    authorIds
        .map(id => authors.find(author => author.id === id)?.name || "Unknown")
        .join(", ");

export const findByTitle = <T extends { title: string }>(title: string, itemsList: T[]): T[] => {
    return itemsList.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
    );
};

export const findAuthor = (id: string, authors: AuthorType[]): string => {
    const author =  authors.find((author) => author.id === id );
    return author?  author.name : "";
};

export const filterAuthorsById = (authorIds: AuthorsPicked[], authors: { id: string, name: string }[]): { id: string, name: string }[] => {    
    const ids = authorIds.map(author => author.authorId);
    return authors.filter(author => ids.includes(author.id));    
}