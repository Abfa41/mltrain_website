import MyCodeBlock from '@/components/MyCodeBlock';
import React, { useEffect } from 'react';

const LinearRegression = ({setMyList}) => {
    const tocItems = [
        { id: 'ex_linear', title: 'Example Usage' },
        { id: 'linear_over', title: 'Overview' },
        { id: 'linear_hyper', title: 'Hyperparameters' },
        { id: 'linear_attri', title: 'Attributes' },
        { id: 'linear_methods', title: 'Methods' },
        { id: 'linear_add', title: 'Additional Notes' },
        
      ];
      useEffect(() => {
        setMyList(tocItems);
      }, [setMyList]);
  return (
    <>
      <h1>Linear Regression Model</h1>

      <h2 id='ex_linear' >Example Usage</h2>
      <pre>
        <MyCodeBlock code={`# Import the LinearRegression model
from mltrain.models import LinearRegression

# Initialize the model
model = LinearRegression(learning_rate=0.001, epochs=500)

# Train the model
model.train(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)`} lang={'python'}/>
      </pre>


      <h2 id='linear_over'>Overview</h2>
      <p>
        The <code>LinearRegression</code> class implements a simple linear
        regression model using gradient descent optimization. This model can be
        used to predict continuous target variables based on input features.
        The class provides methods to train the model, make predictions, and
        compute the loss.
      </p>
      <br/>

      <h2 id='linear_hyper'>Hyperparameters</h2>
      <ul>
        <li>
          <code>learning_rate</code> (default=0.01): The step size used for
          each iteration of gradient descent. A smaller value results in slower
          but more accurate convergence, while a larger value speeds up training
          but may lead to instability.
        </li>
        <li>
          <code>epochs</code> (default=1000): The number of times the model
          iterates over the entire dataset during training. More epochs lead to
          better training but increase computation time.
        </li>
      </ul>
      <br/>

      <h2 id='linear_attri'>Attributes</h2>
      <ul>
        <li>
          <code>W</code> (<code>numpy.ndarray</code>): The learned weights of
          the model, updated during training to minimize the loss.
        </li>
        <li>
          <code>b</code> (float): The bias term, also updated during training to
          minimize the loss.
        </li>
      </ul>
      <br/>

      <h2 id='linear_methods'>Methods</h2>

      <h4>
        <code>__init__(self, learning_rate=0.01, epochs=1000)</code>
      </h4>
      <p>
        Initializes the linear regression model with specified hyperparameters.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>learning_rate</code> (float): The learning rate for gradient
              descent. Default is 0.01.
            </li>
            <li>
              <code>epochs</code> (int): The number of epochs for training the
              model. Default is 1000.
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>predict(self, X)</code>
      </h4>
      <p>Makes predictions based on the current weights and bias.</p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The input features, a 2D array of
              shape (num_samples, num_features).
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>
              <code>numpy.ndarray</code>: Predicted values, a 1D array of shape
              (num_samples,).
            </li>
          </ul>
        </li>
      </ul>

      <h4>
        <code>compute_loss(self, Y, Y_pred)</code>
      </h4>
      <p>
        Computes the Mean Squared Error (MSE) loss between the actual and
        predicted values.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>Y</code> (numpy.ndarray): The actual target values, a 1D
              array of shape (num_samples,).
            </li>
            <li>
              <code>Y_pred</code> (numpy.ndarray): The predicted values, a 1D
              array of shape (num_samples,).
            </li>
          </ul>
        </li>
        <li>
          <strong>Returns</strong>:
          <ul>
            <li>float: The mean squared error loss.</li>
          </ul>
        </li>
      </ul>


      <h4>
        <code>train(self, X, Y, print_loss=False)</code>
      </h4>
      <p>
        Trains the linear regression model using gradient descent. The method
        updates the weights <code>W</code> and bias <code>b</code> to minimize
        the loss function.
      </p>
      <ul>
        <li>
          <strong>Args</strong>:
          <ul>
            <li>
              <code>X</code> (numpy.ndarray): The input features, a 2D array of
              shape (num_samples, num_features).
            </li>
            <li>
              <code>Y</code> (numpy.ndarray): The actual target values, a 1D
              array of shape (num_samples,).
            </li>
            <li>
              <code>print_loss</code> (bool): Whether to print the loss during
              training for every 100 epochs. Default is False.
            </li>
          </ul>
        </li>
        <li>
          <strong>Side effects</strong>:
          <ul>
            <li>Updates the weights (<code>W</code>) and bias (<code>b</code>) of the model.</li>
          </ul>
        </li>
      </ul>
      <br/>

      <h2 id='linear_add'>Additional Notes</h2>
      <p>
        - The model uses gradient clipping to avoid gradient explosion, ensuring
        that weight updates stay stable.
        <br />
        - The <code>train</code> method includes an optional argument{' '}
        <code>print_loss</code> to monitor the training progress every 100
        epochs.
        <br />
        - The input features <code>X</code> should be scaled for optimal
        performance.
      </p>
    </>
  );
};

export default LinearRegression;
