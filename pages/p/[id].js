import { useRouter } from "next/router";
import Layout from "../../components/mylayout";
import fetch from "isomorphic-unfetch";

const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        {props.show.summary}
        {props.image ? <img src={props.image}/> : null}
    </Layout>
)

Post.getInitialProps = async function(context) {
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);
    return {show};
}

export default Post;