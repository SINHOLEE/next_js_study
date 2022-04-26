import {useState} from "react"

const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']


export default function HomePage() {
    return (
        <div>
            <Header title="asd"/>
            <Names/>
            <LikeButton/>
        </div>)
}

function LikeButton() {
    const [like, setLike] = useState(0)
    const onClick = () => setLike(prev => prev + 1)

    return <button onClick={onClick}>Like: {like}</button>
}

function Header({title}) {
    return <h1>{title ? title : 'Default title'}</h1>
}

function Names() {
    return (<ul>
        {names.map((name) =>
            <Name key={name} name={name}/>)}
    </ul>)
}

function Name({name}) {
    return (<li>
        {name}
    </li>)

}


