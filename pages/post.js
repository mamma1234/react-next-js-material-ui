import Router from 'next/router';
import Link from 'next/link';

export default (props) => {
    return (
        <div>
            First post page
            <div>
                <button onClick={() => Router.push('/?history=post')}>Home</button>
                <button onClick={() => Router.push('/?history=post', '/')}>Home (hidden query)</button>
                <Link href="/?history=post" as="/">Home</Link>
            </div>
        </div>  
    );
}