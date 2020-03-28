import Link from 'next/link';
const linkStyle = {
    marginRight:15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/blog">
            <a style={linkStyle}>Blog</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/post">
            <a style={linkStyle}>Post</a>
        </Link>
        <Link href="/quote">
            <a style={linkStyle}>Quote</a>
        </Link>
        <Link href="/agent">
            <a style={linkStyle}>Agent</a>
        </Link>
    </div>
) 

export default Header;