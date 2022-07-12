---
layout: post
tag: work
title: "VotestratesML"
---

I designed VotestratesML; a web-based collaborative learning tool allowing K-12 students to build models and make predictions based
on real world voting data for use in a social studies classroom. The process was realised through six user-interventions in
two social studies high school classrooms in Aarhus, Denmark.

<div class="img-container"><img class="full-width-img" src="/assets/images/projects/votestratesml/studentsusingvml.jpeg" alt ="Students using VotestratesML" /></div>

In a typical use situation of VotestratesML, students are introduced to the tool and how it supports building ML models. Next, students are divided into groups of 3-4 people. Each group member logs into VotestratesML on their laptop gaining access to the collaborative ML tool, see Figure 2a. The teacher then asks groups to create the best possible model for, e.g., predicting if a person will vote for The Social Democratic Party. Each group chooses the Votes for The Social Democratic Party-label available in VotestratesML. The groups go on to discuss which features to include in their model. Here, students can draw on their existing knowledge from social studies class. For example, according to the Michigan Model for voter behaviour, which students are taught in advanced social studies, voting behaviour is affected by family, and thus, it might be important to choose features describing how the parents of a person voted. 

Once students agree on a set of features, they need to choose an algorithm, and to determine its parameters. Once the model is trained and tested, students can change their model parameters, features, shuffle the data or change the training-data/test-data ratio to try to improve the model. 

<div class="img-container"><img class="full-width-img" src="/assets/images/projects/votestratesml/largeVMLmodel.png" alt ="The VotestratesML interface" /></div>


When they are satisfied, students push their model to a shared view projected on the wall in the classroom. From here, they can compare it to models from other groups and discuss how to improve their model. Finally, when the teacher ends the exercise, a more detailed view is projected on the wall and used in discussions of students’ choice of features and model parameters, the predictions of the models, and the implications of this way of working on politics and society. The topic of these discussions depend on the task given to the students, but might include how these predictions can be used to target political advertisements to specific demographics and what the consequence of this is.

Publication available [here](https://dl.acm.org/doi/10.1145/3466725.3466728).