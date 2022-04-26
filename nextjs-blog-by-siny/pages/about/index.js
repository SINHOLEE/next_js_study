import Link from 'next/link'
import React from 'react';
import GoHome from "../../GoHome";

const ids = [1, 2, 3, 4, 5]
const INDEX = [123,'about','Capital','posts','한글']
const About = () => {

    return (
        <div>
            <ul>
                {ids.map(id => <li key={id}>
                    <Link href={`${id}`}>
                        <a>{id}로 가는 법</a>
                    </Link>
                </li>)}
            </ul>
            <ul>
                {INDEX.map(id => <li key={id}>
                    <Link href={`/${encodeURIComponent(id)}`}>
                        <a>{id}로 가기</a>
                    </Link>
                </li>)}
            </ul>
            <GoHome/>
        </div>
    );
};

export default About;