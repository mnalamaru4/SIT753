pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Build your code using Maven
                sh 'mvn clean install'
            }
        }
        stage('Unit Tests') {
            steps {
                // Run unit tests using Maven
                sh 'mvn test'
            }
        }
        stage('Integration Tests') {
            steps {
                script {
                    // Run integration tests using Selenium WebDriver and TestNG
                    echo 'Running Integration Tests'
                    sh 'mvn clean test -Dtest=IntegrationTest'
                }
            }
        }
        stage('Deploy to Staging') {
            steps {
                // Deploy your application to staging environment (AWS EC2)
                sh 'aws ec2 deploy ...'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                // Run integration tests on staging environment using Selenium WebDriver and TestNG
                script {
                    echo 'Running Integration Tests on Staging'
                    sh 'mvn clean test -Dtest=StagingIntegrationTest'
                }
            }
        }
        stage('Deploy to Production') {
            steps {
                // Deploy your application to production environment (AWS EC2)
                sh 'aws ec2 deploy ...'
            }
        }
    }
    
    post {
        always {
            // Send email notifications after pipeline execution
            emailext body: "Pipeline ${currentBuild.result}: ${env.BUILD_URL}",
                     subject: "Pipeline ${currentBuild.result}: ${env.JOB_NAME}",
                     to: 'mnalamaru4@gmail.com'
        }
    }
}
