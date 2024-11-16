import MyCodeBlock from "@/components/MyCodeBlock";
import SideBar from "@/components/SideBar";
import Head from "next/head";
import styles from "@/styles/Home.module.css"
import { FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";


const code = `import MyCodeBlock from "@/components/MyCodeBlock";
import Head from "next/head";

export default function Home() {
  const code = " ";

  return (
    <>
      <Head>
        <title>mltrain - Home</title>
        <meta name="description" content="mltrain is a versatile machine learning package designed to simplify and accelerate your ML training processes. Perfect for both beginners and professionals."/>
        <meta name="keywords" content="mltrain, machine learning, ML package, ML training, deep learning, ML tools, Abdul Faatih Siddiqui, abfa's project"/>
        <meta name="author" content="Abdul Faatih Siddiqui"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{width: '25vw'}}>
        <MyCodeBlock lang={'python'} code={'print("hello world")'}/>
      </div>
    </>
  );
}
`;

export default function Home() {
  const router = useRouter()
  function handleClick(e){
    e.preventDefault()
    router.push('/docs/introduction')
  }
  return (
    <>
      <Head>
        <title>mltrain - Home</title>
        <meta name="google-site-verification" content="oaSTgfkm7CEek0H-bkCZJx43I-JlZ81A5vNdYCDooDQ" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico/" type="image/x-icon" />
      </Head>
      <div style={{height: '87vh'}}>
        <div style={{display: 'flex',justifyContent: 'center'}}>
      <Image src={'/logo.png'} height={180} width={180} style={{margin: 'auto',textAlign: 'center'}}/></div>
      <h1 className={`${styles.mltrain}`}>mltrain</h1>
      <h2 className={`${styles.subpara}`}>Machine Learning in Python</h2>

      <div className={`${styles.flexDiv}`} style={{display: 'flex',margin: 'auto',textAlign: 'center',justifyContent: 'center',alignContent: 'center'}}>
      <div style={{width: '200px', margin: '10px'}}><MyCodeBlock code={`pip install mltrain`} lang={'bash'}/></div>
      <button onClick={handleClick} className={`${styles.read}`}><FaBookOpen size={20} style={{marginRight: '7px'}}/>Read Docs</button>
      </div>
      <p style={{textAlign: "center",marginTop: '20px',marginBottom: '20px'}}>Simple Inspiration from Scikit Learn
        You can now use Both Supervised and Unsupervised Learning Models with better functionality.
      </p>
      </div>



      
    </>
  );
}
