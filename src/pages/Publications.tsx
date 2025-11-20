import React from 'react';
import './Publications.css';

const ResearchPublications: React.FC = () => {
  return (
    <div className="research-container">

      {/* IEEE Publication FIRST */}
      <div className="publication-card">
        <div className="publication-header">
          {/* <img src={secondAuthorPic} alt="C Barrera et al." className="profile-pic" /> */}
          <div>
            <h3>
              <a
                href="https://ieeexplore.ieee.org/document/10235089"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotton Leaf Disease Detection Using Artificial Intelligence with Autonomous Alerting System 
              </a>
            </h3>
            <p>Authors: R G Karthik; Soumylatha Naveen</p>
            <p className="date">Published: 2023 World Conference on Communication & Computing (WCONF)</p>
          </div>
        </div>
        <div className="publication-body">
          <p>
           This work focuses on developing an autonomous deep-learning system using CNNs to accurately detect cotton leaf diseases.
           It achieves a prediction accuracy of 99.997%, enabling early diagnosis and preventing significant agricultural losses.
          </p>
          <p>
            <strong>Abstract:</strong> One of India’s most well-known commercial crops is cotton. Due to the disease’s invasion, cotton production has decreased. These plant diseases are typically brought on by Bacteria, fungi, or other pests, which can significantly impair productivity if they are not controlled right away.
            Cotton plant leaf diseases need to be precisely recognized at an early stage and should be taken care of at a faster rate to reduce the loss.
            This article mainly contributes to providing a solution with the development of automated systems and summarizes the effects of environmental factors on illnesses of cotton plants and an analysis of the relationships between these diseases and other environmental factors.
            To initiate an advancement in the field of agriculture by implementing autonomous systems. The research also focuses on the CNN-based deep learning approach required for precise disease prediction and diagnosis to stop the spread of illnesses in cotton plants and reduce cotton output loss. Our experimental results show an accuracy of 99.997% prediction of cotton diseases using CNN algorithm.
          </p>
        </div>
      </div>

      {/* NEW ARCH Publication SECOND */}
      <div className="publication-card">
        <div className="publication-header">
          {/* <img src={firstAuthorPic} alt="Karthik R G" className="profile-pic" /> */}
          <div>
            <h3>
              <a
                href="https://www.the-new-arch.net/index.php/journal/article/view/167"
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Monitoring System for Driver’s Safety
              </a>
            </h3>
            <p>
              Authors: Karthik R G, Mahantesh N, Meghana G Raj,
              Thanushri M G, Prof. Vidyasagar K N
            </p>
            <p className="date">Published: 2021 THE NEW ARCH - International Journal of contemporary Architecture</p>
          </div>
        </div>
        <div className="publication-body">
          <p>
             This work focuses on detecting a drowsiness of a person using facial landmarks and mapping techniques with 
              machine learning algorithms and introducing a unique, advanced alerting system.
          </p>
          <p>
            <strong>Abstract:</strong> For many years, we can see that there are few navigation systems for drivers, 
            which are already in operation and they help or guide drivers in many aspects
            data for real-time monitoring of the driver’s condition, using alert mechanisms
            and predictive analytics to reduce risk and improve driver safety.
            There is a need for these navigation systems for drivers to detect the state of driver's alertness, by doing so we can avoid accidents caused by driver's drowsiness.
            Here in this paper, we discuss the artificial detection methods and algorithms used for detecting driver's drowsiness processing technique. This navigation or alerting system works on real-time analysis of facial characteristics which alerts the drowsy driver and reduces the risk of accidents.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ResearchPublications;
