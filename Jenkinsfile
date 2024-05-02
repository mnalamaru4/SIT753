pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the code using Maven'
                    sh 'mvn clean install'
                }
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                script {
                    echo 'Running unit tests'
                    sh 'mvn test'
                    echo 'Running integration tests'
                    sh 'mvn integration-test'
                }
            }
        }
        stage('Deploy to Staging') {
            steps {
                script {
                    echo 'Deploying to Staging (AWS EC2)'
                    // Command to deploy to AWS EC2
                }
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                script {
                    echo 'Running Integration Tests on Staging'
                    // Command to run integration tests on staging
                }
            }
        }
        stage('Deploy to Production') {
            steps {
                script {
                    echo 'Deploying to Production (AWS EC2)'
                    // Command to deploy to production AWS EC2
                }
            }
        }
    }
    
    post {
        always {
            emailext body: "Pipeline ${currentBuild.result}: ${env.BUILD_URL}",
                     subject: "Pipeline ${currentBuild.result}: ${env.JOB_NAME}",
                     to: 'mnalamaru4@gmail.com'
        }
    }
}
