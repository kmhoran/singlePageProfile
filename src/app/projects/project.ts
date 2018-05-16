export interface IProject {
    id: number;
    title: string;
    technologies: INamedPath[];
    imagePath: string;
    year: number;
    repositoryUrl: string;
    blogUrl: string;
    about: string;

}

export interface INamedPath {
    name: string;
    path: string;
}
