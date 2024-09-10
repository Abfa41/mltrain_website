import MyCodeBlock from '@/components/MyCodeBlock';
import React, { useEffect } from 'react';

const PCA = ({setMyList}) => {
    const tocItems = [
        { id: 'pca_ex', title: 'Example Usage' },
        { id: 'pca_over', title: 'Overview' },
        { id: 'pca_hyper', title: 'Hyperparameters' },
        { id: 'pca_attri', title: 'Attributes' },
        { id: 'pca_methods', title: 'Methods' },

        
      ];
      useEffect(() => {
        setMyList(tocItems);
      }, [setMyList]);
  return (
    <>
      <h1>PCA (Principle Component Analysis)</h1>

      <h2 id='pca_ex'>Example Usage</h2>
      <pre>
        <MyCodeBlock lang={'python'} code={`from mltrain.unsupervised.PCA import PCA
import numpy as np

# Initialize the model
pca = PCA(n_components=2)

# Fit the model and transform the data and plot graph too.
transformed_X = pca.train_transform(X_train, plot_graph=True)

# Get the principal components
principal_components = pca.pc


`}/>
      </pre>

      <h2 id='pca_over'>Overview</h2>
      <p>
        The <code>PCA</code> class implements Principal Component Analysis (PCA), a technique for dimensionality reduction. PCA transforms data into a new coordinate system where the axes (principal components) are ordered by the amount of variance they capture from the data.
      </p>
      <br/>

      <h2 id='pca_hyper'>Hyperparameters</h2>
      <ul>
        <li>
          <code>n_components</code> (int, default=2): The number of principal components to retain after dimensionality reduction.
        </li>
      </ul>
      <br/>

      <h2 id='pca_attri'>Attributes</h2>
      <ul>
        <li>
          <code>pc</code> (numpy.ndarray): The principal components (eigenvectors) after fitting the model.
        </li>
        <li>
          <code>mean</code> (numpy.ndarray): The mean of the features in the original data.
        </li>
      </ul>
      <br/>

      <h2 id='pca_methods'>Methods</h2>

      <h4>
        <code>__init__(self, n_components=2)</code>
      </h4>
      <p>
        Initializes the PCA model with the specified number of components.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>n_components</code> (int): Number of principal components to retain.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>train(self, X)</code>
      </h4>
      <p>
        Fits the PCA model to the input data.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The input data to perform PCA on, with shape (n_samples, n_features).
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: The principal components after fitting the model.
            </li>
          </ul>
        </li>
        <li>
          <strong>Raises</strong>:
          <ul>
            <li>
              <code>ValueError</code>: If the number of components is greater than the number of features.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>transform(self, X)</code>
      </h4>
      <p>
        Applies the dimensionality reduction on the input data.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The input data to transform, with shape (n_samples, n_features).
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: The data transformed into the principal component space.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>train_transform(self, X, plot_graph=False)</code>
      </h4>
      <p>
        Fits the PCA model and transforms the input data in one step. Optionally, plots the data in the reduced principal component space.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The input data to fit and transform, with shape (n_samples, n_features).
            </li>
            <li>
              <code>plot_graph</code> (bool, optional): Whether to plot the transformed data. Only works for 1, 2, or 3 components.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: The data transformed into the principal component space.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default PCA;
