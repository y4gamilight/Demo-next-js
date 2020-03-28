import {useRouter} from "next/router"
import Layout from "../components/mylayout";
import Markdown from 'react-markdown';  

const Content = () => { 
    const router = useRouter();
    return (
        <div>
            <h1>{router.query.title}</h1>
            <p>This is post blog content</p>
            <div className="markDown">
                <Markdown
                      source={`
                      This is our blog post.
                      Yes. We can have a [link](/link).
                      And we can have a title as well.
                      
                      ### This is a title
                      
                      And here's the content.`}
                />
            </div>
            <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
        </div>
    )
}

const Page = () => {
    return (
        <Layout>
            <Content/>
        </Layout>
    )
}

export default Page;