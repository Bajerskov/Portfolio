import ArticleHead from '../../components/article/ArticleHead'
import ArticleBrief from '../../components/article/ArticleBrief'
import ArticleDescription from '../../components/article/ArticleDescription'
import ArticleStats from '../../components/article/ArticleStats'
import ArticleSplash from '../../components/article/ArticleSplash'
import ArticleShowcase from '../../components/article/ArticleShowcase'
import Trisplit from '../../components/TriSplit'
import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, GetStaticPaths} from 'next'
import { infoTileType } from '../../models/infoTile.prop'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { getSingle, getPosts } from '../../lib/api'
import { ProjectType, ArticleContents } from '../../models/project.prop'

type props = {
    articleData:ProjectType;
    tiles: ProjectType[];
}

export default function Project(props:props) {

    const articleData = props.articleData;
    const tiles = props.tiles;
    

    //Build html with these 'Building blocks' coded into the 'articleData' response
    const contentMapper = (item:ArticleContents, index:number) => {
        switch (item.type.toLowerCase()) {
            case "heading":
                return <ArticleHead key={index} data={item} />
            
            case "brief":
                return <ArticleBrief key={index} data={item} />

            case "description":
                return <ArticleDescription key={index} data={item} />

            case "stats":
                return <ArticleStats key={index} data={item} />
            
            case "splash":
                return <ArticleSplash key={index} data={item} />
            
            case "showcase":
                return <ArticleShowcase key={index}  data={item} />
            
            default:
                //Error log
                console.log("\"",item.type,"\" is not a valid type for automatic page construction");
            break;
            
        }
    }
   
    if(!articleData) {
        return <>
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
                <DefaultErrorPage statusCode={404} />
              </>
    } else {

        const articleContent:ArticleContents[] = articleData.content;


    return <> 
        <Head>
            <title> Anders Fejerskov Portfolio - {articleData.title}</title>
            <meta property="og:title" content="Anders Fejerskov Portfolio - `${articleData.title}`" key="title" />
        </Head>
        <article>
            { articleContent.map((item, index:number) => contentMapper(item, index)) }
        </article>
    
        { (tiles && tiles?.length > 0) &&  <Trisplit tiles={tiles} title='Here are some other cool projects🔥' />  }
        </>

    }

}

export const getStaticPaths: GetStaticPaths = async (context) => {
    return {
        paths: [
            { params: { slug: 'greenshare-urban-gardening' } }, 
            { params: { slug: 'carpool-commuting-stress-relief' } }
        ],
        fallback: false
    };
  }


export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const slug:unknown = context.params?.slug;
    //error handle like this https://github.com/vercel/next.js/discussions/12652
    if(typeof slug !== "string") {
        return { props: { articleData: null, tileData: null}};
    } 

    //needs try/catch /error handling
    let articleData:ProjectType | null = await getSingle(slug);

    let tileData:ProjectType[] | null = await getPosts({limits: "limit:3"});

    return { props: { articleData, tileData } }
}