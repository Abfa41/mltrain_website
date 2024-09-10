import MyCodeBlock from '@/components/MyCodeBlock';
import React, { useEffect } from 'react';

const KernelSVM = ({setMyList}) => {
    const tocItems = [
        { id: 'example_ksvm', title: 'Example Usage' },
        { id: 'overview_ksvm', title: 'Overview' },
        { id: 'hyper_ksvm', title: 'Hyperparameters' },
        { id: 'attri_ksvm', title: 'Attributes' },
        { id: 'methods_ksvm', title: 'Methods' },
        { id: 'add_ksvm', title: 'Additional Notes' },
        
      ];
      useEffect(() => {
        setMyList(tocItems);
      }, [setMyList]);
  return (
    <>
      <h1>KernelSVM</h1>

      <h2 id='example_ksvm'>Example Usage</h2>
      <pre>
        <MyCodeBlock lang={'python'} code={`from mltrain.supervised.KernelSVM import KernelSVM

# Initialize the model
model = KernelSVM(C=1.0, kernel_type='rbf', epochs=1000, learning_rate=0.01, gamma=0.5, coef0=0, degree=3)

# Train the model
model.train(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
`}/>
      </pre>

      <h2 id='overview_ksvm'>Overview</h2>
      <p>
        The <code>KernelSVM</code> class implements a Support Vector Machine (SVM) model with various kernel functions.
        This class supports training with different kernels such as linear, polynomial, radial basis function (RBF), and sigmoid.
        The model can be used to classify data points based on the provided features and labels.
      </p>
      <br/>

      <h2 id='hyper_ksvm'>Hyperparameters</h2>
      <ul>
        <li>
          <code>C</code> (default=1.0): Regularization parameter. The strength of the regularization is inversely proportional to C.
        </li>
        <li>
          <code>kernel_type</code> (default='rbf'): The type of kernel function to use ('linear', 'polynomial', 'rbf', 'sigmoid').
        </li>
        <li>
          <code>epochs</code> (default=1000): The number of iterations over the training data.
        </li>
        <li>
          <code>learning_rate</code> (default=0.01): The learning rate for the gradient descent optimization.
        </li>
        <li>
          <code>gamma</code> (default=0.5): Kernel coefficient for 'rbf', 'polynomial', and 'sigmoid'.
        </li>
        <li>
          <code>coef0</code> (default=0): Independent term in kernel function. It is only significant in 'polynomial' and 'sigmoid'.
        </li>
        <li>
          <code>degree</code> (default=3): Degree of the polynomial kernel function ('polynomial').
        </li>
      </ul>
      <br/>

      <h2 id='attri_ksvm'>Attributes</h2>
      <ul>
        <li>
          <code>alpha</code> (<code>numpy.ndarray</code>): Dual coefficients of the support vectors.
        </li>
        <li>
          <code>b</code> (float): Bias term in the decision function.
        </li>
        <li>
          <code>support_vectors</code> (<code>numpy.ndarray</code>): The support vectors identified during training.
        </li>
        <li>
          <code>support_labels</code> (<code>numpy.ndarray</code>): Labels of the support vectors.
        </li>
      </ul>
      <br/>

      <h2 id='methods_ksvm'>Methods</h2>

      <h4>
        <code>__init__(self, C=1.0, kernel_type='rbf', epochs=1000, learning_rate=0.01, gamma=0.5, coef0=0, degree=3)</code>
      </h4>
      <p>
        Initializes the Kernel SVM model with the specified hyperparameters.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>C</code> (float): Regularization parameter.
            </li>
            <li>
              <code>kernel_type</code> (str): Type of kernel function.
            </li>
            <li>
              <code>epochs</code> (int): Number of training iterations.
            </li>
            <li>
              <code>learning_rate</code> (float): Learning rate for gradient descent.
            </li>
            <li>
              <code>gamma</code> (float): Kernel coefficient.
            </li>
            <li>
              <code>coef0</code> (float): Independent term in kernel function.
            </li>
            <li>
              <code>degree</code> (int): Degree of polynomial kernel function.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>kernel(self, x1, x2)</code>
      </h4>
      <p>
        Computes the kernel function between two data points.
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
              <code>float</code>: The result of the kernel function.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>train(self, X, y)</code>
      </h4>
      <p>
        Trains the Kernel SVM model using the provided dataset.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The training data.
            </li>
            <li>
              <code>y</code> (numpy.ndarray): The target labels.
            </li>
        </ul>
        </li>
        <li>
          <strong>Notes</strong>:
          <ul>
            <li>The training process involves updating dual coefficients and bias term using gradient descent.</li>
            <li>The kernel matrix is precomputed to optimize the training process.</li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>predict(self, X)</code>
      </h4>
      <p>
        Predicts the class labels for the provided data points.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The data points to classify.
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
        Computes the accuracy of the model.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>y_true</code> (numpy.ndarray): The true class labels.
            </li>
            <li>
              <code>y_pred</code> (numpy.ndarray): The predicted class labels.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>float</code>: The accuracy score.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>confusion_matrix(self, y_true, y_pred)</code>
      </h4>
      <p>
        Computes the confusion matrix to evaluate the classification accuracy.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>y_true</code> (numpy.ndarray): The true class labels.
            </li>
            <li>
              <code>y_pred</code> (numpy.ndarray): The predicted class labels.
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: The confusion matrix.
            </li>
          </ul>
        </li>
      </ul>

      <br/>

      <h2 id='add_ksvm'>Additional Notes</h2>
      <p>
        - The model uses gradient descent to optimize the dual coefficients and bias term.
        <br />
        - The kernel matrix is computed during training to facilitate the use of non-linear decision boundaries.
        <br />
        - Choosing an appropriate kernel function and hyperparameters is crucial for model performance.
      </p>
    </>
  );
};

export default KernelSVM;
