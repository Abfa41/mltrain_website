import MyCodeBlock from '@/components/MyCodeBlock';
import React, { useEffect } from 'react';

const LogisticRegression = ({setMyList}) => {
    const tocItems = [
        { id: 'logistic_ex', title: 'Example Usage' },
        { id: 'logistic_over', title: 'Overview' },
        { id: 'logistic_hyper', title: 'Hyperparameters' },
        { id: 'logistic_attri', title: 'Attributes' },
        { id: 'logistic_methods', title: 'Methods' },
        { id: 'logistic_add', title: 'Additional Notes' },
        
      ];
      useEffect(() => {
        setMyList(tocItems);
      }, [setMyList]);
  return (
    <>
      <h1>Logistic Regression Model</h1>

      <h2 id='logistic_ex'>Example Usage</h2>
      <pre>
        <MyCodeBlock code={`# Import the LogisticRegression model
from mltrain.models import LogisticRegression

# Initialize the model
model = LogisticRegression(learning_rate=0.001, epochs=500)

# Train the model
model.train(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)`} lang={'python'}/>
      </pre>

      <h2 id='logistic_over'>Overview</h2>
      <p>
        The <code>LogisticRegression</code> class implements binary classification 
        using gradient descent optimization. This model predicts the probability of 
        a binary outcome based on input features. It uses sigmoid activation for 
        prediction, log loss for optimization, and thresholding for class assignment.
      </p>
      <br/>

      <h2 id='logistic_hyper'>Hyperparameters</h2>
      <ul>
        <li>
          <code>learning_rate</code> (default=0.001): Step size for gradient updates.
        </li>
        <li>
          <code>epochs</code> (default=1000): Number of training iterations.
        </li>
        <li>
          <code>threshold_value</code> (default=0.5): Threshold for binary classification.
        </li>
      </ul>
      <br/>

      <h2 id='logistic_attri'>Attributes</h2>
      <ul>
        <li>
          <code>W</code> (<code>tf.Variable</code>): The weight vector for input features.
        </li>
        <li>
          <code>b</code> (<code>tf.Variable</code>): The bias term for the model.
        </li>
      </ul>
      <br/>

      <h2 id='logistic_methods'>Methods</h2>

      <h4>
        <code>__init__(self, epochs=1000, learning_rate=0.001, threshold_value=0.5)</code>
      </h4>
      <p>Initializes the logistic regression model with hyperparameters.</p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li><code>learning_rate</code> (float): Learning rate for optimization.</li>
            <li><code>epochs</code> (int): Number of training iterations.</li>
            <li><code>threshold_value</code> (float): Decision boundary for classification.</li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>predict(self, X_pred)</code>
      </h4>
      <p>Makes predictions based on the sigmoid output.</p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li><code>X_pred</code> (numpy.ndarray): The input data for prediction.</li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li><code>tf.Tensor</code>: Predicted probabilities for each sample.</li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>train(self, x_train, y_train, print_loss=False)</code>
      </h4>
      <p>
        Trains the model using gradient descent, optimizing the weight vector and bias to minimize log loss.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li><code>x_train</code> (numpy.ndarray): The input training data.</li>
            <li><code>y_train</code> (numpy.ndarray): The true labels.</li>
            <li><code>print_loss</code> (bool): Option to print loss every 100 epochs.</li>
          </ul>
        </li>
        <li>
          <strong>Side effects</strong>:
          <ul>
            <li>Updates weights <code>W</code> and bias <code>b</code>.</li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>log_loss(self, y_true, y_pred)</code>
      </h4>
      <p>Calculates binary cross-entropy loss (log loss) between true labels and predictions.</p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li><code>y_true</code> (numpy.ndarray): The true labels.</li>
            <li><code>y_pred</code> (numpy.ndarray): Predicted probabilities.</li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>Mean binary cross-entropy loss.</li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>predict_exact(self, X_pred)</code>
      </h4>
      <p>Returns the predicted binary class (0 or 1) based on the threshold value.</p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li><code>X_pred</code> (numpy.ndarray): The input data for prediction.</li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>Binary class predictions for each sample (0 or 1).</li>
          </ul>
        </li>
      </ul>
      <br/>

      <h2 id='logistic_add'>Additional Notes</h2>
      <p>
        - The input features should be scaled for better performance. 
        <br />
        - The <code>train</code> method includes an optional argument 
        <code>print_loss</code> to monitor progress.
        <br />
        - Binary classification results are based on the <code>threshold_value</code>.
      </p>
    </>
  );
};

export default LogisticRegression;
