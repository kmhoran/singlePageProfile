export interface ICv {
    name: string;
    title: string;
    phone: string;
    email: string;
    linkedIn: string;
    portfolio: string;
    imagePath: string;
    resumePath: string;
    objective: string;
    bio: string;
    employment: IEmployment[];
    education: ISchool[];
    skills: ISkill[];
    languages: ILanguage[];
    personalInterests: string[];
}

export interface IEmployment {
    position: string;
    company: string;
    dates: string;
    overview: string[];
}

export interface ISchool{
    school: string;
    degree: string;
    Overview: string[];
}

export interface ISkill{
    name: string;
    rating: number;
}

export interface ILanguage{
    name: string;
    level: string;
    rating: number;
}
