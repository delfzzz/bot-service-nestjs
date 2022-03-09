## Overview

You have lots of bots and you want to keep track of all of them. Make a simple app to list and track your bots. Each robot has a name and a purpose.
You must be able to browse (list), read (view), edit, add, and delete a robot.

### Requirements for frontend:

- Use React for the framework
- Use local storage for data persistence

### Requirements for backend:

- Use NodeJS with NestJS / ExpressJS for the framework
- Use TypeORM

### Bonus

Bonus points if you use TypeScript, implement basic authentication handling, and add avatars to each bot (https://avatars.dicebear.com/). Styling is not required but definitely a plus.

## Tasks

- [x] docker compose
  - [x] mysql
- [x] install NestJS
- [x] CRUDL bots
  - [x] Create
    - [x] validation
      - [x] required/not empty/length
      - [x] unique name
  - [x] Read
    - [x] show 404
  - [x] Update
    - [ ] unique check
      - [ ] need to consider if the name conflict is the bots' name already (i.e. update using the same name)
  - [x] Delete
    - [x] just respond success if the data does not exists
  - [ ] List
    - [ ] pagination
- [ ] basic auth
  - [ ] header username password
  - [ ] hardcode for now
- [x] openapi
- [x] bot image
- [ ] docker image build
- [ ] basic frontend
- [ ] docs
  - [ ] how to setup
  - [ ] use of docker-compose
  - [ ] directory structure
