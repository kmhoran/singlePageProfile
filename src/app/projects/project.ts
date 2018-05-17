export interface IProject {
    id: number;
    title: string;
    technologies: INamedPath[];
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
