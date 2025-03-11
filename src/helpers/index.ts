import { AuthorsPicked, AuthorType } from "./interfaces";
import { v4 as uuidv4 } from 'uuid';

export const durationFormatter = (duration: number | undefined): string => {
    if (duration === undefined || duration < 0) {
        return "00:00";
    };

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
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    return `${month}/${day}/${year}`;
}

export const getAuthorNames = (authorIds: string[], authors: AuthorType[]): string => {
    const authorNames = authorIds
    .map(id => authors.find(author => author.id === id)?.name)
    .join(", "); 
    return authorNames;
}

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

export const generateId = (): string => {
    return uuidv4();
}

export const transformAuthorArray = (authors: { authorId: string }[]): string[] => {
    return authors.map((author) => author.authorId);
  };
