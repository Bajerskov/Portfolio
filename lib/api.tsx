/**
 *  Better error handling 
 * 
 *  https://nextjs.org/docs/advanced-features/custom-error-page
 * 
 *  https://github.com/vercel/next.js/discussions/12652
 * 
 */

import { ProjectType, query, ArticleContents } from "../models/project.prop";

type apiErrorMessage = {
  message:string;
}

const fallBackAPI = "https://api.anderslf.dk/api/";

//if no env file was specified with an API_URL use fallback.
function getAPIURL() {
  return (typeof process.env.API_URL == 'string') ? process.env.API_URL : fallBackAPI;
}

const apiquery = async (request_url:string) => {

  const headers: HeadersInit = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'application/json');

    if (process.env.AUTH_TOKEN) {
      headers.set('Authorization', `Bearer ${process.env.AUTH_TOKEN}`);
    }
    
      try {
        const url = new URL(request_url, getAPIURL());
        const data = await fetch(url.toString());
        return data;

      } catch (error) {
        console.log(error);
        return null;
      }
}

function parseParams(route:string, params:query) {

  let url:string = route;
  let urlParams:string[] = [];

  //could be prettier - less boilerplate
  if(params.limits)
    urlParams.push(`limits=${params.limits}`);
  if(params.filters)
    urlParams.push(`filters=${params.filters}`);
  if(params.orderBy)
    urlParams.push(`orderBy=${params.orderBy}`);
  if(params.select)
    urlParams.push(`select=${params.select}`);
    //combine array of search params with `&` and prepend with `?`
    return `${url}?${urlParams.join('&')}`;
}


export async function getPosts(params:query) {

  let url:string = parseParams('posts', params);

  const rawdata = await apiquery(url);
  
  let ok = await rawdata?.ok;
  let response = await rawdata?.json();

  //check if the http status code returned not ok.
  if(!ok) {
    const error:apiErrorMessage = response;
    console.log("Error: ", response);
    return null;
  }
  
  let data:ProjectType[] = response;

  //parse node json in content obj
  for (let i = 0; i < data.length; i++) {
    const post = data[i];
    if(post.content) {
      const article:ArticleContents[] = JSON.parse(post.content.toString());
      data[i].content = article;
    }
  }

  return data;
}

export async function getSingle(slug:string) {

  const rawdata = await apiquery(`posts/${slug}`);
  
  let ok = await rawdata?.ok;
  let response = await rawdata?.json();
  if(!ok) {
  
    console.log("Error: ", response);
    return null;
  }

  let data:ProjectType = response;

  const post = data.content;
  
  const article:ArticleContents[] = JSON.parse(post.toString());

  data.content = article;

  return data;
}
