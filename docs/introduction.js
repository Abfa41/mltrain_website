// components/docs/Introduction.js
import MyCodeBlock from '@/components/MyCodeBlock';
import Link from 'next/link';
import React, { useEffect } from 'react';


const Introduction = ({setMyList}) => {
  const tocItems = [
    { id: 'intro', title: 'Introduction' },

    
  ];
  useEffect(() => {
    setMyList(tocItems);
  }, [setMyList,]);
  
  return (
  
  <div>
    <h1 id='intro'>Introduction</h1>
    <p><strong>mltrain</strong> is a Machine Learning Library created by <strong>Abdul Faatih Siddiqui</strong>, designed to simplify and streamline the process of implementing machine learning models. Currently under active development, <strong>mltrain</strong> is inspired by the popular <strong>scikit-learn</strong> library and aims to provide an intuitive and easy-to-use interface for various machine learning algorithms.</p>
    
    <p>The package includes implementations for both supervised and unsupervised learning models, making it a versatile tool for data scientists and developers looking to build models for classification, regression, clustering, and more. As the package evolves, it will offer a growing collection of models, utilities, and features to assist in end-to-end machine learning workflows.</p>
    
    <p>Whether you're just getting started with machine learning or are a seasoned expert, <strong>mltrain</strong> is being crafted to offer a reliable, flexible, and powerful environment for model development and experimentation.</p>
    
    <p>You can install it using:- </p>
    
    <MyCodeBlock code={`pip install mltrain`} lang={'bash'}/>
    <br/>

    <p>You can visit our mltrain GitHub Repo: <Link href={`https://github.com/Abfa41/mltrain_python`}>mltrain-github-repo</Link></p>
    
    <p>Stay tuned as <strong>mltrain</strong> continues to grow and add more features, enhancing its capabilities to serve the needs of the machine learning community.</p>
  </div>
)};

export default Introduction;
