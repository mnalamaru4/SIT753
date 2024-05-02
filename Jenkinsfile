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
                // Placeholder for running unit tests
                echo 'Running integration tests'
                // Placeholder for running integration tests
            }
        }
        // Other stages...
    }
    
    post {
        success {
            // Send email notifications after successful pipeline execution
            emailext body: "Pipeline ${currentBuild.result}: ${env.BUILD_URL}",
                     subject: "Pipeline ${currentBuild.result}: ${env.JOB_NAME}",
                     to: 'mnalamaru4@gmail.com'
        }
        failure {
            // Send email notifications after failed pipeline execution
            emailext body: "Pipeline ${currentBuild.result}: ${env.BUILD_URL}",
                     subject: "Pipeline ${currentBuild.result}: ${env.JOB_NAME}",
                     to: 'mnalamru4@gmail.com'
        }
    }
}
