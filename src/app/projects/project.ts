export interface IProject {
    id: number;
    title: string;
    technologies: INamedPath[];
    imagePath: string;
    year: number;
    blogPath: string;
    repositoryUrl: string;
    color: string;
}

export interface INamedPath {
    name: string;
    path: string;
}
