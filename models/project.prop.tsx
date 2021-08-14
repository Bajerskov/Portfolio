export type ProjectType = {
    readonly title: string; //Title of project. 1 line
    readonly slug: string; //project slug, used as url link and file system path. 
    readonly thumbnailUrl: string; // file url, no path. eg. thumbnail.jpg
    content: ArticleContents[]; //all the content of the project article, jsonfied
    readonly details: string; // Short 1 line description of project.
    readonly heroIntro: string; //Hero intro is like details, but more CTA. 
    readonly heroImageUrl: string; // file url, no path.
    readonly heroColor: string; // rgb or hex
}

export interface ProjectProps {
    data: ProjectType;
}

//Basic projectprop
export interface ProjectProp {
    readonly title: string; //Title of project. 1 line
    readonly slug: string; //project slug, used as url link and file system path. 
    readonly thumbnailUrl: string; // file url, no path. eg. thumbnail.jpg
    readonly content: string; //all the content of the project article, jsonfied
    readonly details: string; // Short 1 line description of project.
    readonly herointro:string; //Hero intro is like details, but more CTA. 
    readonly heroImageUrl:string; // file url, no path.
    readonly heroColor:string; // rgb or hex
}

export type ArticleContents = {
    readonly type: string;
    readonly title?: string;
    readonly subtitle?: string;
    readonly text?: string;
    readonly slug?:  string;
    readonly imgUrl?: String;
}

export interface ArticleProp {
    readonly data: ArticleContents;
}

export type query = {
    limits?: string;
    filters?: string;
    orderBy?:string;
    select?:string;
  } 