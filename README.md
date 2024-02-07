# project
I've create a simple VUE JS frontend application using Vue 2 along with a Backend that is written using NestJS framework. NestJS is built on top of Express.js . 

In fronentd application there are three components- 

- App.vue serves as parent component. 
- UsersList.vue gets data from an api /bussiness/users and popuplates the userlist in a dropdown menue. When a user selects their username, another api is called that fetches the data from /businesses/jobs?userId=${userId} api. This api retruns relevant jobs from backend and these jobs are passed as props into JobDescription component. 
- JobDescription.vue displays list of  jobs details with their details such as classification name, location name, headline, description, and date added.


To call backend apis, I've used axios library, it is easy to use promise based http client for node.js and borwser. 
Using Service class in service.js, apis are called and once api returns a success the response is returned.

I've also written unit test case for service.js in JEST.
Component testing has also been done for Jobdescription componet using testing-library.

To run the project you'll have to setup and run the backend application , subsquently setup and run frontend application.

# Backend setup
To setup frontend project simply follow below commands

```
npm install
```

after successful installation  run this will spin up backend application
```
npm run start
```

# Frontend setup
To setup frontend project simply below commands-

```
npm install
```

and after successfull installation run
```
npm run serve
```
