export interface IProject {
    id: number;
    title: string;
    technologies: INamedPath[];
    imagePath: string;
    year: number;
    repositoryUrl: string;
    hostedProjectUrl: string;
    blogUrl: string;
    about: string;

}

export interface INamedPath {
    name: string;
    path: string;
}
