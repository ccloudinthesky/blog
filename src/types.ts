// Type definitions for the website

export interface Article {
    id: string;
    title: string;
    date: string;
}

export interface Project {
    id: string;
    title: string;
    date: string;
    tag: string | string[];
    image: string;
    body?: string | string[];
    subtitle?: string;
    media?: string;
    links?: Array<{ url: string; label: string }>;
    github?: string;
    demo?: string;
}

export interface Post {
    title: string;
    date: string;
    tag: string;
    image: string;
    body: string | string[];
}

export interface ArticlesData {
    [key: string]: {
        title: string;
        date: string;
        tag: string;
        image: string;
        body: string | string[];
    };
}

export interface ProjectsData {
    [key: string]: {
        title: string;
        date: string;
        tag: string;
        image: string;
        body: string | string[];
    };
}

export interface YearFilterEvent extends Event {
    target: HTMLElement;
}

export interface NavToggleEvent extends Event {
    target: HTMLButtonElement;
}
