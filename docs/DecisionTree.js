import MyCodeBlock from '@/components/MyCodeBlock';
import React, { useEffect } from 'react';

const DecisionTree = ({setMyList}) => {
    const tocItems = [
        { id: 'dt_ex', title: 'Example Usage' },
        { id: 'dt_over', title: 'Overview' },
        { id: 'dt_hyper', title: 'Hyperparameters' },
        { id: 'dt_attri', title: 'Attributes' },
        { id: 'dt_methods', title: 'Methods' },
        
      ];
      useEffect(() => {
        setMyList(tocItems);
      }, [setMyList]);
  return (
    <>
      <h1>Decision Tree Model</h1>

      <h2 id='dt_ex'>Example Usage</h2>
      <pre>
        <MyCodeBlock lang={'python'} code={`from mltrain.supervised.DecisionTree import DecisionTree

# Initialize the model
model = DecisionTree(max_depth=10, min_samples_split=2, criteria='gini')

# Train the model
model.train(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
`}/>
      </pre>

      <h2 id='dt_over'>Overview</h2>
      <p>
        The <code>DecisionTree</code> class implements a decision tree model for classification tasks. This class allows you to build a tree-based model by splitting data based on feature values to make predictions. The model supports various splitting criteria, such as Gini impurity and entropy, to determine the best splits at each node.
      </p>
      <br/>

      <h2 id='dt_hyper'>Hyperparameters</h2>
      <ul>
        <li>
          <code>max_depth</code> (default=10): The maximum depth the tree can grow to.
        </li>
        <li>
          <code>min_samples_split</code> (default=2): The minimum number of samples required to split a node.
        </li>
        <li>
          <code>criteria</code> (default='gini'): The criterion used for splitting ('gini' or 'entropy').
        </li>
      </ul>
      <br/>

      <h2 id='dt_attri'>Attributes</h2>
      <ul>
        <li>
          <code>tree</code> (<code>Node</code>): The root node of the decision tree.
        </li>
      </ul>
      <br/>

      <h2 id='dt_methods'>Methods</h2>

      <h4>
        <code>__init__(self, max_depth=10, min_samples_split=2, criteria='gini')</code>
      </h4>
      <p>
        Initializes the Decision Tree model with the specified hyperparameters.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>max_depth</code> (int): Maximum depth of the tree.
            </li>
            <li>
              <code>min_samples_split</code> (int): Minimum number of samples required to split a node.
            </li>
            <li>
              <code>criteria</code> (str): Criterion used for splitting ('gini' or 'entropy').
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>traverse_tree(self, x, node)</code>
      </h4>
      <p>
        Traverses the tree to make a prediction for a single sample.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>x</code> (numpy.ndarray): The input sample.
            </li>
            <li>
              <code>node</code> (<code>Node</code>): The current node in the tree.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>Any</code>: The predicted class label for the input sample.
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
        <code>predict(self, X)</code>
      </h4>
      <p>
        Predicts class labels for the given dataset.
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
        <code>split(self, X, y, feature, threshold)</code>
      </h4>
      <p>
        Splits the dataset based on the specified feature and threshold.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The dataset to be split.
            </li>
            <li>
              <code>y</code> (numpy.ndarray): The target labels.
            </li>
            <li>
              <code>feature</code> (int): The feature index used for splitting.
            </li>
            <li>
              <code>threshold</code> (float): The threshold value for splitting.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>Tuple[numpy.ndarray, numpy.ndarray]</code>: Indices of the left and right subsets after the split.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>entropy(self, y)</code>
      </h4>
      <p>
        Calculates the entropy of the target labels.
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
              <code>float</code>: The entropy value.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>gini(self, y)</code>
      </h4>
      <p>
        Calculates the Gini impurity of the target labels.
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
              <code>float</code>: The Gini impurity value.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>information_gain(self, X, y, feature, threshold)</code>
      </h4>
      <p>
        Calculates the information gain from splitting the data on a specific feature and threshold.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The dataset being split.
            </li>
            <li>
              <code>y</code> (numpy.ndarray): The target labels.
            </li>
            <li>
              <code>feature</code> (int): The feature index used for splitting.
            </li>
            <li>
              <code>threshold</code> (float): The threshold value for splitting.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>float</code>: The information gain from the split.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>best_split(self, X, y, features)</code>
      </h4>
      <p>
        Finds the best feature and threshold to split the data to maximize information gain.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The dataset to be split.
            </li>
            <li>
              <code>y</code> (numpy.ndarray): The target labels.
            </li>
            <li>
              <code>features</code> (list[int]): The list of feature indices to consider for splitting.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>Tuple[int, float]</code>: The best feature index and threshold value for the split.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>fit(self, X, y)</code>
      </h4>
      <p>
        Fits the decision tree model to the given dataset.
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
              <code>None</code>
            </li>
          </ul>
        </li>
      </ul>

    </>
  );
}

export default DecisionTree;
