# Stage 1: Build the application
FROM maven:3.9.6 AS build

# Copy source code to the container
COPY src /home/app/src
COPY frontend /home/app/frontend
COPY pom.xml /home/app

# Build the application
RUN mvn -f /home/app/pom.xml clean package -DskipTests

# Stage 2: Create the Docker image for running the app
FROM openjdk:23-slim

EXPOSE 8080

# Copy the JAR file from the build stage
COPY --from=build /home/app/target/*.jar app.jar

ENV SPRING_PROFILES_ACTIVE=dev

ENTRYPOINT ["java","-jar","/app.jar"]
