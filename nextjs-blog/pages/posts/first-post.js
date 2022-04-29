import Link from 'next/link'
import Image from 'next/image'
import  profilePic from '../../public/images/프로필사진.png'
import  largePic from '../../public/images/large_pic.png'
const styles = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'2px'

}
const myLoader =(index) =>({ src, width, quality }) => {
    return `https://picsum.photos/200?image=${index}`
}

const SRC ='https://random.imagecdn.app/500/150'
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>

        <picture style={{...styles,display:"flex",flexWrap:'wrap'}}>
            <img src='/images/profile.jpeg' alt='프로필사진'/>
            <picture style={{width:200, height:200, position:'relative'}}>

                <Image  src={profilePic} placeholder={"blur"} alt='프로필사진2' layout={"fill"} />
            </picture>
            <Image  priority src={'/images/large_pic.png'} placeholder={"blur"}  blurDataURL={'/images/large_pic.png'} alt='프로필사진2'  layout={"fixed"}  width={100} height={100}/>
        </picture>

        {Array(1000).fill(undefined).map((a,i)=> <Image key={i}   src={`https://picsum.photos/200?image=${Math.floor(Math.random()*100 +1)}`} loading={'lazy'} layout={'intrinsic'} width={200} height={200} />)}
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
