# Microservices Application (Auth & Todo List)

This repository contains two microservices: 
- **Auth Microservice**: Handles user authentication, registration, and role management.
- **Todo List Microservice**: Manages tasks, projects, columns, and provides CRUD operations. It includes user authentication and authorization through the auth microservice, which communicates via RabbitMQ.

## Project Structure

- **auth-microservice**: Responsible for user authentication and role management.
- **todo-list-microservice**: Handles project, task, column management, and integrates user authentication from the auth microservice.

### Technologies Used
- **NestJS** (for both services)
- **RabbitMQ** (for communication between microservices)
- **PostgreSQL** (for data persistence)
- **Docker** and **Docker Compose** (for easy setup and container orchestration)

## Prerequisites

Before setting up the project, ensure you have the following tools installed:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

1. **Clone the repository** with submodules:
   ```bash
   git clone --recurse-submodules http://github.com/Alhanaqtah/todo-list
   cd todo-list
   ```
2. Start the services using Docker Compose:
   ```bash
   docker compose up
   ```
