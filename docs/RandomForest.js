import MyCodeBlock from '@/components/MyCodeBlock';
import React, { useEffect } from 'react'; 

const RandomForest = ({setMyList}) => {
    const tocItems = [
        { id: 'rf_ex', title: 'Example Usage' },
        { id: 'rf_over', title: 'Overview' },
        { id: 'rf_hyper', title: 'Hyperparameters' },
        { id: 'rf_attri', title: 'Attributes' },
        { id: 'rf_methods', title: 'Methods' },

        
      ];
      useEffect(() => {
        setMyList(tocItems);
      }, [setMyList]);
  return (
    <>
      <h1>Random Forest Model</h1>

      <h2 id='rf_ex'>Example Usage</h2>
      <pre>
        <MyCodeBlock lang={'python'} code={`from mltrain.supervised.RandomForest import RandomForest

# Initialize the model
model = RandomForest(n_trees=100, max_depth=10, min_samples_split=2, criteria='gini')

# Train the model
model.train(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Calculate accuracy
accuracy = model.accuracy(y_test, predictions)

# Generate confusion matrix
conf_matrix = model.confusion_matrix(y_test, predictions)
`}/>
      </pre>

      <h2 id='rf_over'>Overview</h2>
      <p>
        The <code>RandomForest</code> class implements a Random Forest model for classification tasks. This class constructs multiple decision trees using bootstrap sampling and aggregates their predictions to improve classification accuracy and robustness. It supports various hyperparameters to control the behavior of individual trees and the overall forest.
      </p>
      <br/>

      <h2 id='rf_hyper'>Hyperparameters</h2>
      <ul>
        <li>
          <code>n_trees</code> (default=100): The number of decision trees in the forest.
        </li>
        <li>
          <code>max_depth</code> (default=10): The maximum depth of each decision tree.
        </li>
        <li>
          <code>min_samples_split</code> (default=2): The minimum number of samples required to split a node in each tree.
        </li>
        <li>
          <code>criteria</code> (default='gini'): The criterion used to evaluate splits ('gini' or 'entropy').
        </li>
      </ul>
      <br/>

      <h2 id='rf_attri'>Attributes</h2>
      <ul>
        <li>
          <code>trees</code> (list): A list of trained <code>DecisionTree</code> instances.
        </li>
      </ul>
      <br/>

      <h2 id='rf_methods'>Methods</h2>

      <h4>
        <code>__init__(self, n_trees=100, max_depth=10, min_samples_split=2, criteria='gini')</code>
      </h4>
      <p>
        Initializes the Random Forest model with the specified hyperparameters.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>n_trees</code> (int): Number of trees in the forest.
            </li>
            <li>
              <code>max_depth</code> (int): Maximum depth of each tree.
            </li>
            <li>
              <code>min_samples_split</code> (int): Minimum number of samples required to split a node.
            </li>
            <li>
              <code>criteria</code> (str): Criterion used to evaluate splits ('gini' or 'entropy').
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>bootstrap_sample(self, X, y)</code>
      </h4>
      <p>
        Generates a bootstrap sample (random sample with replacement) from the dataset.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The input features.
            </li>
            <li>
              <code>y</code> (numpy.ndarray): The target labels.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>Tuple[numpy.ndarray, numpy.ndarray]</code>: Bootstrap sample of features and target labels.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>most_common_label(self, y)</code>
      </h4>
      <p>
        Determines the most common label in the target array.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>y</code> (numpy.ndarray): The array of target labels.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>Any</code>: The most common label in the target array.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>train(self, X, y)</code>
      </h4>
      <p>
        Trains the random forest by creating and training multiple decision trees.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The training dataset.
            </li>
            <li>
              <code>y</code> (numpy.ndarray): The target labels for the training dataset.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>None</code>
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>predict(self, X)</code>
      </h4>
      <p>
        Predicts class labels for the given dataset using the trained random forest.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The dataset for which to make predictions.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: An array of predicted class labels.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>accuracy(self, y_true, y_pred)</code>
      </h4>
      <p>
        Calculates the accuracy of the model based on true and predicted labels.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>y_true</code> (numpy.ndarray): True target labels.
            </li>
            <li>
              <code>y_pred</code> (numpy.ndarray): Predicted target labels.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>float</code>: The accuracy of the predictions.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>confusion_matrix(self, y_true, y_pred)</code>
      </h4>
      <p>
        Generates a confusion matrix to evaluate the accuracy of the classification.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>y_true</code> (numpy.ndarray): True target labels.
            </li>
            <li>
              <code>y_pred</code> (numpy.ndarray): Predicted target labels.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: A confusion matrix.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default RandomForest;
