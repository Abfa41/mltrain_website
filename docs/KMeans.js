import MyCodeBlock from '@/components/MyCodeBlock';
import React, { useEffect } from 'react';

const KMeans = ({setMyList}) => {
    const tocItems = [
        { id: 'km_ex', title: 'Example Usage' },
        { id: 'km_over', title: 'Overview' },
        { id: 'km_hyper', title: 'Hyperparameters' },
        { id: 'km_attri', title: 'Attributes' },
        { id: 'km_methods', title: 'Methods' },
        
      ];
      useEffect(() => {
        setMyList(tocItems);
      }, [setMyList]);
  return (
    <>
      <h1>K-Means Clustering</h1>

      <h2 id='km_ex'>Example Usage</h2>
      <pre>
        <MyCodeBlock lang={'python'} code={`from mltrain.unsupervised.KMeans import KMeans

# Initialize the model
model = KMeans(k=3, epochs=100)

# Train the model
cluster_labels = model.train(X_train)

# The centroids can be accessed with
centroids = model.centroids
`}/>
      </pre>

      <h2 id='km_over'>Overview</h2>
      <p>
        The <code>KMeans</code> class implements the K-Means clustering algorithm. This algorithm partitions the dataset into <code>k</code> clusters, where each data point belongs to the cluster with the nearest centroid. The centroids are updated iteratively until convergence or until the maximum number of iterations is reached.
      </p>
      <br/>

      <h2 id='km_hyper'>Hyperparameters</h2>
      <ul>
        <li>
          <code>k</code> (default=3): The number of clusters to form.
        </li>
        <li>
          <code>epochs</code> (default=100): The maximum number of iterations for the algorithm.
        </li>
      </ul>
      <br/>

      <h2 id='km_attri'>Attributes</h2>
      <ul>
        <li>
          <code>centroids</code> (numpy.ndarray): The coordinates of the centroids after training.
        </li>
      </ul>
      <br/>

      <h2 id='km_methods'>Methods</h2>

      <h4>
        <code>__init__(self, k=3, epochs=100)</code>
      </h4>
      <p>
        Initializes the KMeans model with the specified parameters.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>k</code> (int): The number of clusters to form.
            </li>
            <li>
              <code>epochs</code> (int): The maximum number of iterations for the algorithm.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>euclidean(self, x1, x2)</code>
      </h4>
      <p>
        Computes the Euclidean distance between two points.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>x1</code> (numpy.ndarray): The first data point.
            </li>
            <li>
              <code>x2</code> (numpy.ndarray): The second data point.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>float</code>: The Euclidean distance between <code>x1</code> and <code>x2</code>.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>get_cluster_labels(self, clusters, X)</code>
      </h4>
      <p>
        Assigns labels to each data point based on the cluster it belongs to.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>clusters</code> (list of lists): A list of clusters, where each cluster is a list of indices of the data points.
            </li>
            <li>
              <code>X</code> (numpy.ndarray): The dataset.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: An array of cluster labels for each data point in <code>X</code>.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>closest_centroid(self, x1)</code>
      </h4>
      <p>
        Finds the index of the closest centroid to the given data point.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>x1</code> (numpy.ndarray): The data point.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>int</code>: The index of the closest centroid.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>create_clusters(self, X)</code>
      </h4>
      <p>
        Creates clusters by assigning each data point to the closest centroid.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The dataset.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>list of lists</code>: A list of clusters, where each cluster is a list of indices of the data points.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>create_new_centroids(self, clusters, X)</code>
      </h4>
      <p>
        Updates the centroids by calculating the mean of all data points in each cluster.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>clusters</code> (list of lists): A list of clusters, where each cluster is a list of indices of the data points.
            </li>
            <li>
              <code>X</code> (numpy.ndarray): The dataset.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: An array of updated centroids.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>train(self, X)</code>
      </h4>
      <p>
        Trains the KMeans model by repeatedly assigning data points to the closest centroid and updating the centroids.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The dataset.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: An array of cluster labels for each data point in <code>X</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default KMeans;
