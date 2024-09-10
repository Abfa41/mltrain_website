import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles2 from '@/styles/Sidebar.module.css'
import { useRouter } from 'next/router'

const SideBar2 = ({setIsOpen}) => {
  const router = useRouter()
  const {slug} = router.query;
  const [highlight,setHighlight] = useState('introduction')

  useEffect(() => {
    
    setHighlight(slug)
    
    return () => {
      
    };
  }, [slug]);

  const closeSideBar = (e)=>{
    setIsOpen(false)
  }

  return (
    <>
    <aside className={`${styles2.sidebar2}`}>
    <Link href={`/docs/introduction`}><h5 onClick={closeSideBar} className={`${styles2.subheading2}`} style={{textDecoration: 'none',color: `${highlight=='introduction'? "blue":"black"}`,backgroundColor: `${highlight=='introduction'? "yellow":""}`}}>Introduction</h5></Link><hr/>
        
        <h5 className={`${styles2.subheading2}`}>Supervised Models</h5><hr/>
        <ul>
            <Link href={'/docs/linearregression'}><li onClick={closeSideBar} style={{color: `${highlight=='linearregression'? "blue":"black"}`,backgroundColor: `${highlight=='linearregression'? "yellow":""}` ,marginTop: '4px' }}  className={`${styles2.item}`}>Linear Regression</li></Link>
            <Link href={'/docs/logisticregression'}><li onClick={closeSideBar}  style={{color: `${highlight=='logisticregression'? "blue":"black"}`,backgroundColor: `${highlight=='logisticregression'? "yellow":""}` }}  className={`${styles2.item}`}>Logistic Regression</li></Link>
            <Link href={'/docs/knn'}><li onClick={closeSideBar}  style={{color: `${highlight=='knn'? "blue":"black"}`,backgroundColor: `${highlight=='knn'? "yellow":""}` }}  className={`${styles2.item}`}>KNN</li></Link><br/>
            <Link href={'/docs/naivebayes'}><li onClick={closeSideBar}  style={{color: `${highlight=='naivebayes'? "blue":"black"}`,backgroundColor: `${highlight=='naivebayes'? "yellow":""}` }}  className={`${styles2.item}`}>Naive Bayes</li></Link>
            <Link href={'/docs/decisiontree'}><li onClick={closeSideBar}  style={{color: `${highlight=='decisiontree'? "blue":"black"}`,backgroundColor: `${highlight=='decisiontree'? "yellow":""}` }}  className={`${styles2.item}`}>Decision Tree</li></Link>
            <Link href={'/docs/randomforest'}><li onClick={closeSideBar}  style={{color: `${highlight=='randomforest'? "blue":"black"}`,backgroundColor: `${highlight=='randomforest'? "yellow":""}` }}  className={`${styles2.item}`}>Random Forest</li></Link>
            <Link href={'/docs/kernelsvm'}><li onClick={closeSideBar} style={{color: `${highlight=='kernelsvm'? "blue":"black"}`,backgroundColor: `${highlight=='kernelsvm'? "yellow":""}` }}  className={`${styles2.item}`}>Kernel SVM</li></Link>
            
        </ul>

        <h5 className={`${styles2.subheading2}`}>Unsupervised Models</h5><hr/>
        <ul>
            <Link href={'/docs/kmeans'}><li onClick={closeSideBar} style={{color: `${highlight=='kmeans'? "blue":"black"}`,backgroundColor: `${highlight=='kmeans'? "yellow":""}`,marginTop: '4px' }}  className={`${styles2.item}`}>K-Means Clustering</li></Link>
            <Link href={'/docs/dbscan'}><li onClick={closeSideBar}  style={{color: `${highlight=='dbscan'? "blue":"black"}`,backgroundColor: `${highlight=='dbscan'? "yellow":""}` }}  className={`${styles2.item}`}>DBSCAN Clustering</li></Link>
            <Link href={'/docs/pca'}><li onClick={closeSideBar}  style={{color: `${highlight=='pca'? "blue":"black"}`,backgroundColor: `${highlight=='pca'? "yellow":""}` }}  className={`${styles2.item}`}>PCA</li></Link>

        </ul>
    </aside>


    
    </>
  )
}

export default SideBar2;