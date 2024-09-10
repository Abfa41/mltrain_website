import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import fs from 'fs';
import path from 'path';
import { useEffect, useState } from 'react';
import SideBar from '@/components/SideBar';
import TableOfContents from '@/components/TableOfContents';
import Head from 'next/head';
import Loader  from '@/components/Loader';
import styles from '@/styles/Home.module.css'




// Create a mapping of slugs to components with a loading indicator
const componentMap = {
  introduction: dynamic(() => import('@/docs/introduction'), { loading: () => <Loader /> }),
  linearregression: dynamic(() => import('@/docs/LinearRegression'), { loading: () => <Loader /> }),
  logisticregression: dynamic(() => import('@/docs/LogisticRegression'), { loading: () => <Loader /> }),
  knn: dynamic(() => import('@/docs/KNN'), { loading: () => <Loader /> }),
  kernelsvm: dynamic(() => import('@/docs/KernelSVM'), { loading: () => <Loader /> }),
  decisiontree: dynamic(() => import('@/docs/DecisionTree'), { loading: () => <Loader /> }),
  randomforest: dynamic(() => import('@/docs/RandomForest'), { loading: () => <Loader /> }),
  naivebayes: dynamic(() => import('@/docs/NaiveBayes'), { loading: () => <Loader /> }),
  pca: dynamic(() => import('@/docs/PCA'), { loading: () => <Loader /> }),
  kmeans: dynamic(() => import('@/docs/KMeans'), { loading: () => <Loader /> }),
  dbscan: dynamic(() => import('@/docs/DBSCAN'), { loading: () => <Loader /> }),
  // Add more mappings as needed
};

const titleMap = {
  introduction: 'Introduction',
  linearregression: 'LinearRegression',
  logisticregression: 'LogisticRegression',
  knn: 'KNN',
  kernelsvm: 'KernelSVM',
  decisiontree: 'DecisionTree',
  randomforest: 'RandomForest',
  naivebayes: 'NaiveBayes',
  pca: 'PCA',
  kmeans: 'K-Means',
  dbscan: 'DBSCAN',
  // Add more mappings as needed
};

export default function DocPage({ content }) {
  const [myList, setMyList] = useState([
    { id: 'intro', title: 'Introduction' },
  ]);
  const router = useRouter();
  const { slug } = router.query;

  // Dynamically load the component based on the slug
  const ComponentToRender = componentMap[slug] || (() => <p>Component not found</p>);
  const [height,setHeight] = useState(false)
  function CheckIfMobile(){
    setHeight(window.innerWidth<916)
  }
  useEffect(() => {
    CheckIfMobile()
    
  }, [height]);

  return (

    <>
    <Head>
      <title>mltrain - {titleMap[slug]}</title>
    </Head>
    <div className='container' style={{ backgroundColor: 'white',display: 'flex', justifyContent: 'space-around', alignContent: 'space-between' }}>
      <SideBar />
      <div className={`${styles.compo_body} markdown-body`} style={{ marginLeft: '3vh', marginTop: '3vh', overflowY: 'scroll', scrollBehavior: 'smooth' }}>
        <ComponentToRender setMyList={setMyList} />
        <br />
      </div>
      <TableOfContents myList={myList} />
    </div>
    </>
  );
}

// Fetch data for the page at build time
export async function getStaticProps({ params }) {
  const { slug } = params;

  return {
    props: {
      content: '' // You can pass data or props needed by your component here
    }
  };
}

// Generate paths for static generation
export async function getStaticPaths() {
  const componentsDirectory = path.join(process.cwd(), 'docs');
  const filenames = fs.readdirSync(componentsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.js$/, '').toLowerCase()
    }
  }));

  return {
    paths,
    fallback: false
  };
}
