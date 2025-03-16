export enum LOGIN_TEXT {
    login = "Login",
    logout = "Logout",
}
export enum BUTTON_TEXT {
    search = "Search",
    addNewCourse = "Add new course",
    showCourse = "Show course",
    createCourse = "Create course",
    createAuthor = "Create author",
    addAuthor = "Add author",
    deleteAuthor = "Delete author",
    registration = "Registration",
    login = "Login",
}
export enum PLACEHOLDER {
    enterTitle = "Enter course name",
    enterDescription = "Enter description",
    enterAuthor = "Enter author name",
    enterDuration = "Enter duration in minutes",
    enterName = "Enter name",
    enterEmail = "Enter email",
    enterPassword = "Enter password"
}
export enum TEXT {
    authorEmpty = "Author list is empty"
}
export enum COURSE_INFO {
    duration = "Duration",
    creationDate = "Creation date",
    authors = "Authors",
    courseAuthors = "Course authors",
}
export enum LABEL_TEXT {
    title = "Title",
    description = "Description",
    authorName = "Author name",
    duration = "Duration",
}

export enum ROUTES {
    home = "/",
    courses = "/create-courses",
    registration = "/registration",
    login = "/login",
}

export enum REGISTRATION_LABEL {
    name = "Name",
    email = "Email",
    password = "Password"
}

export const MAIN_URL = "http://localhost:4000/";
export const TOKEN  = "access_token";

export enum MESSAGE_TEXT {
    LOGIN_SUCCESS = "You have successfully logged in!",
    LOGIN_ERROR = "Invalid login credentials",
    NETWORK_ERROR = "An error occurred. Please check your connection.",
    LOGIN_FAILED = "Login failed. Please try again.",
  }