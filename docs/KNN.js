import MyCodeBlock from '@/components/MyCodeBlock';
import React, { useEffect } from 'react';

const KNN = ({setMyList}) => {
    const tocItems = [
        { id: 'knn_ex', title: 'Example Usage' },
        { id: 'knn_over', title: 'Overview' },
        { id: 'knn_hyper', title: 'Hyperparameters' },
        { id: 'knn_methods', title: 'Methods' },
        { id: 'knn_add', title: 'Additional Notes' },
        
      ];
      useEffect(() => {
        setMyList(tocItems);
      }, [setMyList]);
  return (
    <>
      <h1>KNN Model</h1>

      <h2 id='knn_ex'>Example Usage</h2>
      <pre>
        <MyCodeBlock lang={'python'} code={`from mltrain.supervised.KNN import KNN

# Initialize the model
model = KNN(k=3,distance='euclidean',purpose='classification')

# Train the model
model.train(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
`} /> 
      </pre>

      <h2 id='knn_over'>Overview</h2>
      <p>
        The <code>KNN</code> class implements the k-Nearest Neighbors algorithm for both classification and regression tasks. It supports two distance metrics: Euclidean and Manhattan. The class provides methods to train the model, make predictions, and evaluate performance using accuracy or mean squared error.
      </p>
      <br/>

      <h2 id='knn_hyper'>Hyperparameters</h2>
      <ul>
        <li>
          <code>k</code> (default=3): The number of nearest neighbors to consider.
        </li>
        <li>
          <code>distance_metric</code> (default='euclidean'): The distance metric to use. Options are 'euclidean' and 'manhattan'.
        </li>
        <li>
          <code>purpose</code> (default='classification'): The purpose of the model. Options are 'classification' and 'regression'.
        </li>
      </ul>
      <br/>

      <h2 id='knn_methods'>Methods</h2>
      
      <h4>
        <code>__init__(self, k=3, distance_metric='euclidean', purpose='classification')</code>
      </h4>
      <p>
        Initializes the KNN model with specified hyperparameters.
      </p>

      <h4>
        <code>predict_single(self, x)</code>
      </h4>
      <p>
        Predicts the label or value for a single input sample.
      </p>

      <h4>
        <code>predict(self, X)</code>
      </h4>
      <p>
        Predicts labels or values for multiple input samples.
      </p>

      <h4>
        <code>mean_squared_error(self, y_true, y_pred)</code>
      </h4>
      <p>
        Calculates the Mean Squared Error (MSE) between true and predicted values.
      </p>

      <h4>
        <code>accuracy(self, y_true, y_pred)</code>
      </h4>
      <p>
        Calculates the accuracy of predictions for classification tasks.
      </p>

      <h4>
        <code>confusion_matrix(self, y_true, y_pred)</code>
      </h4>
      <p>
        Computes the confusion matrix for classification tasks.
      </p>
      <br/>

      <h2 id='knn_add'>Additional Notes</h2>
      <p>
        - The <code>predict_single</code> method calculates distances between the input sample and all training samples, then selects the k nearest neighbors to make a prediction.
        <br />
        - For classification, the most common label among the k nearest neighbors is returned. For regression, the mean value of the k nearest neighbors is returned.
        <br />
        - The <code>mean_squared_error</code> and <code>accuracy</code> methods are only applicable for regression and classification tasks, respectively.
      </p>
    </>
  );
};

export default KNN;
