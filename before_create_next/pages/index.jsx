import {useId, useState} from "react"

const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']


export default function HomePage() {
    return (
        <div>
            <Header title="asd"/>
            <Names/>
            <SearchBox/>
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


function SearchBox() {
    const LIST = ['시니', '테네', '헤더스', '마크', '훈', '챔', '시후']
    const SEARCH_ID = useId()
    const [searchValue, setSearchValue] = useState('')

    return (
        <form onSubmit={e => {
            e.preventDefault()
            console.log(searchValue)
        }
        }>

            <input list={SEARCH_ID} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <datalist id={SEARCH_ID} style={{backgroundColor: 'red', fontSize: '50px'}}>
                {LIST.map((name) => <div style={{backgroundColor:'red'}}>

                        <option key={name} value={name}>{name}</option>
                    </div>
                )}
            </datalist>

        </form>

    )

}

