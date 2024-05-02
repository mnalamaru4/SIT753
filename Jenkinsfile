pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building the code using Maven'
                // Placeholder for Maven build command
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit tests'
                // Placeholder for running unit tests (e.g., mvn test)
                echo 'Running integration tests'
                // Placeholder for running integration tests (e.g., mvn integration-test)
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Performing code analysis using SonarQube'
                // Placeholder for code analysis tool integration (e.g., SonarQube scanner)
            }
        }
        stage('Security Scan') {
            steps {
                echo 'Performing security scan using OWASP ZAP'
                // Placeholder for security scan tool integration (e.g., OWASP ZAP)
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging server (AWS EC2)'
                // Placeholder for deployment to staging (e.g., using AWS CLI or Jenkins plugin)
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging'
                // Placeholder for running integration tests on staging
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production server (AWS EC2)'
                // Placeholder for deployment to production (e.g., using AWS CLI or Jenkins plugin)
            }
        }
    }
    
    post {
        success {
            emailext body: "Pipeline ${currentBuild.result}: ${env.BUILD_URL}",
                     subject: "Pipeline ${currentBuild.result}: ${env.JOB_NAME}",
                     to: 'mnalamaru4@gmail.com'
        }
        failure {
            emailext body: "Pipeline ${currentBuild.result}: ${env.BUILD_URL}",
                     subject: "Pipeline ${currentBuild.result}: ${env.JOB_NAME}",
                     to: 'mnalamaru4@gmail.com'
        }
    }
}
