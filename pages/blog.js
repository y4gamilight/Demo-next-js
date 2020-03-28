
import Layout from '../components/mylayout'
import Link from 'next/link'

function getPosts() {
    return [ 
        {id: "hello-nodejs", title: "Hello Next.js" },
        {id: "learn-nextjs", title: "Learn Next.js" },
        {id: "deploy-nextjs", title: "Deploy app Next.js" } 
    ];
}
const PostLink = ({post}) => (
    <li>
        <Link href={`/p/[id}]`} as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx> {`
    li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}  </style>
    </li>
   
)

export default function Blog() {
    return (
        <div>
            <Layout>
                <h1>My Blog</h1>
                <ul>
                    {getPosts().map(post => (
                      <PostLink key={post.id} post={post} />
                    ))}
                </ul> 
                <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

    
      `}</style>
            </Layout>
            
        </div>
    )
}