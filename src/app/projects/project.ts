export interface IProject {
    id: number;
    title: string;
    technologies: INamedPath[];
    imagePath: string;
    year: number;
    blogPath: string;
    url: string;
}

export interface INamedPath {
    name: string;
    path: string;
}
