import MyCodeBlock from '@/components/MyCodeBlock';
import React, { useEffect } from 'react'; 

const NaiveBayes = ({setMyList}) => {
    const tocItems = [
        { id: 'nb_ex', title: 'Example Usage' },
        { id: 'nb_over', title: 'Overview' },
        { id: 'nb_methods', title: 'Methods' },
        { id: 'nb_add', title: 'Additional Notes' },
        
      ];
      useEffect(() => {
        setMyList(tocItems);
      }, [setMyList]);
  return (
    <>
      <h1>Gaussian NaiveBayes Model</h1>

      <h2 id='nb_ex'>Example Usage</h2>
      <pre>
        <MyCodeBlock lang={'python'} code={`from mltrain.supervised.NaiveBayes import NaiveBayes

# Initialize the model
model = NaiveBayes()

# Train the model
model.train(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Get Confusion Matrix
model.confusion_matrix(y_test,y_pred)

`}/>
      </pre>

      <h2 id='nb_over'>Overview</h2>
      <p>
        The <code>NaiveBayes</code> class implements the Naive Bayes algorithm for classification tasks. It calculates class statistics such as mean, variance, and prior probabilities to make predictions based on the provided training data. The class provides methods to train the model, make predictions, and evaluate performance using accuracy and confusion matrix.
      </p>
      <br/>

      <h2 id='nb_methods'>Methods</h2>
      
      <h4>
        <code>__init__(self)</code>
      </h4>
      <p>
        Initializes the Naive Bayes model with empty dictionaries for storing class statistics.
      </p>

      <h4>
        <code>train(self, X, y)</code>
      </h4>
      <p>
        Trains the Naive Bayes model by calculating the mean, variance, and prior probability for each class based on the training data.
      </p>

      <h4>
        <code>predict(self, X)</code>
      </h4>
      <p>
        Predicts the class labels for the provided input samples based on the trained model.
      </p>

      <h4>
        <code>accuracy(self, y_true, y_pred)</code>
      </h4>
      <p>
        Calculates the accuracy of the model's predictions.
      </p>

      <h4>
        <code>confusion_matrix(self, y_true, y_pred)</code>
      </h4>
      <p>
        Computes the confusion matrix to evaluate the performance of the classification model.
      </p>
      <br/>

      <h2 id='nb_add'>Additional Notes</h2>
      <p>
        - The <code>predict</code> method calculates the likelihood of each class for a given sample and selects the class with the highest likelihood.
        <br />
        - The <code>accuracy</code> and <code>confusion_matrix</code> methods are used to evaluate the model's performance on the test data.
      </p>
    </>
  );
};

export default NaiveBayes;
