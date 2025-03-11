export interface CourseType {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
}

export interface newCourseType {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors:  {authorId: string}[];
}
export interface AuthorType {
    id: string;
    name: string;
}

export interface AuthorsPicked {
    authorId: string, 
    id: string
}