import MyCodeBlock from '@/components/MyCodeBlock';
import React, { useEffect } from 'react';

const DBSCAN = ({setMyList}) => {
    const tocItems = [
        { id: 'dbscan_ex', title: 'Example Usage' },
        { id: 'dbscan_over', title: 'Overview' },
        { id: 'dbscan_hyper', title: 'Hyperparameters' },
        { id: 'dbscan_attri', title: 'Attributes' },
        { id: 'dbscan_methods', title: 'Methods' },
        
      ];
      useEffect(() => {
        setMyList(tocItems);
      }, [setMyList]);
  return (
    <>
      <h1>DBSCAN Clustering</h1>

      <h2 id='dbscan_ex'>Example Usage</h2>
      <pre>
        <MyCodeBlock lang={'python'} code={`from mltrain.unsupervised.DBSCAN import DBSCAN

# Initialize the model
model = DBSCAN(epsilon=0.5, min_points=5)

# Train the model
cluster_labels = model.train(X_train)

# Get the assigned labels
labels = model.get_labels()
`}/>
      </pre>

      <h2 id='dbscan_over'>Overview</h2>
      <p>
        The <code>DBSCAN</code> class implements the DBSCAN (Density-Based Spatial Clustering of Applications with Noise) algorithm. DBSCAN groups together points that are closely packed and marks points that lie alone in low-density regions as outliers or noise.
      </p>
      <br/>

      <h2 id='dbscan_hyper'>Hyperparameters</h2>
      <ul>
        <li>
          <code>epsilon</code> (default=0.5): The maximum distance between two samples for one to be considered as in the neighborhood of the other.
        </li>
        <li>
          <code>min_points</code> (default=5): The number of samples in a neighborhood for a point to be considered as a core point.
        </li>
      </ul>
      <br/>

      <h2 id='dbscan_attri'>Attributes</h2>
      <ul>
        <li>
          <code>labels</code> (numpy.ndarray): The labels assigned to each point in the dataset after training. A label of -1 indicates noise.
        </li>
        <li>
          <code>cluster_id</code> (int): The current cluster ID used during the clustering process.
        </li>
      </ul>
      <br/>

      <h2 id='dbscan_methods'>Methods</h2>

      <h4>
        <code>__init__(self, epsilon=0.5, min_points=5)</code>
      </h4>
      <p>
        Initializes the DBSCAN model with the specified parameters.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>epsilon</code> (float): The maximum distance between two samples for one to be considered as in the neighborhood of the other.
            </li>
            <li>
              <code>min_points</code> (int): The number of samples in a neighborhood for a point to be considered as a core point.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>train(self, X)</code>
      </h4>
      <p>
        Trains the DBSCAN model using the provided dataset.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The input data points.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: The labels assigned to each point in the dataset. A label of -1 indicates noise.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>compute_distance_matrix(self, X)</code>
      </h4>
      <p>
        Computes the pairwise distance matrix for the dataset.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The input data points.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: A distance matrix where the entry (i, j) represents the distance between point i and point j.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>region_query(self, i, distance_matrix)</code>
      </h4>
      <p>
        Finds all points within epsilon distance from point <code>i</code>.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>i</code> (int): The index of the point to query.
            </li>
            <li>
              <code>distance_matrix</code> (numpy.ndarray): The precomputed distance matrix.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: An array of indices of all points within epsilon distance from point <code>i</code>.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>append_cluster(self, i, neighbours, visited_samples, distance_matrix, cluster_id)</code>
      </h4>
      <p>
        Expands the cluster by adding all density-reachable points.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>i</code> (int): The index of the initial core point.
            </li>
            <li>
              <code>neighbours</code> (numpy.ndarray): The initial set of neighbors within epsilon distance.
            </li>
            <li>
              <code>visited_samples</code> (numpy.ndarray): A boolean array indicating whether each point has been visited.
            </li>
            <li>
              <code>distance_matrix</code> (numpy.ndarray): The precomputed distance matrix.
            </li>
            <li>
              <code>cluster_id</code> (int): The current cluster id to assign to points.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>get_labels(self)</code>
      </h4>
      <p>
        Returns the labels assigned to the data points after training.
      </p>
      <ul>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: An array of labels where each label corresponds to a cluster id, or -1 for noise.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default DBSCAN;
