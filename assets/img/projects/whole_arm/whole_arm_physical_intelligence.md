# Whole-Arm Physical Intelligence

> **Giving robots whole-arm physical intelligence:** We develop robots that can sense, understand, and use contact across their entire arms.

Humans often use the shoulder, elbow, forearm, and hand together when interacting with the environment. Contact across the arm helps us guide motion, distribute force, and adapt when the surroundings are uncertain. Most robot manipulation, however, still focuses primarily on positioning and controlling the end-effector.

This end-effector-centered view leaves much of the robot arm underused. Contacts along the arm are often treated simply as collisions, even though they can provide useful information about the environment and support more coordinated ways of performing a task. Enabling robots to recognize and make use of these interactions requires perception and action to be considered together.

Our research explores how a robot can instead use its whole arm as an interface for both sensing and action. This goal brings together two closely related directions: **Whole-Arm Sensing** and **Whole-Arm Manipulation**.

## Whole-Arm Sensing

> [!NOTE]
> **GIF placement:** Insert `whole_arm_sensing.gif` and `whole_arm_sensing2.gif` here, directly below the section title.

Whole-Arm Sensing enables a robot to perceive where and how physical interaction occurs across its arm. By extending contact awareness beyond the gripper, the robot can better understand its physical relationship with the surrounding environment.

Rather than treating the arm only as a mechanism for positioning the hand, this direction considers every link as a potential point of interaction. Such awareness becomes especially important when a robot works close to objects, people, or confined spaces, where contact may occur at several parts of the arm and change throughout a task. The aim is to give the robot enough information to recognize these interactions and respond appropriately.

## Whole-Arm Manipulation

> [!NOTE]
> **GIF placement:** Insert `whole_arm_manipulation.gif` here, directly below the section title.

Whole-Arm Manipulation studies how robots can learn to coordinate motion and contact across the entire arm. Through whole-arm teleoperation and learning, our research aims to capture how humans use posture and physical interaction to perform tasks, and to transfer these behaviors into adaptable robot policies.

Human manipulation involves more than following a hand trajectory. We continually adjust the configuration of the arm, decide how to engage with the environment, and redistribute motion and force as a task develops. Whole-arm teleoperation provides a natural way to demonstrate these coordinated behaviors, while learning allows robots to turn the demonstrations into strategies that can adapt to new interactions and task conditions.

The two directions address complementary parts of the same problem. Sensing makes physical interaction across the arm observable, while manipulation studies how that interaction can guide learned behavior. Viewed together, they allow a robot to understand how its body is engaged with the environment and determine how to use that interaction as part of a task. This integrated perspective forms the basis of **whole-arm physical intelligence**.

## Representative Publications

### Whole-Arm Sensing

1. **Mixture of Flow Matching and Particle Filter for Proprioception-Based Online Contact Estimation**  
   *Seo Wook Han, Min Jun Kim*  
   *IEEE Transactions on Robotics (T-RO), 2026 (to be presented at Humanoids 2026)*

2. **CDM: Contact Diffusion Model for Multi-Contact Point Localization**  
   *Seo Wook Han, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2025*

3. **Proprioceptive Sensor-Based Simultaneous Multi-Contact Point Localization and Force Identification for Robotic Arms**  
   *Seo Wook Han, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2023*

### Whole-Arm Manipulation

1. **Online Multi-Contact Feedback Model Predictive Control for Interactive Robotic Tasks**  
   *Seo Wook Han, Maged Iskandar, Jinoh Lee, Min Jun Kim*  
   *IEEE International Conference on Robotics and Automation (ICRA), 2024*
