pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the code using Maven'
                    // Debugging: Print environment variables
                    bat 'set'
                    // Placeholder for Maven build command
                    bat 'mvn clean install > build_log.txt 2>&1'
                    // Debugging: Print Maven version
                    bat 'mvn --version'
                }
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                script {
                    echo 'Running unit tests'
                    // Placeholder for running unit tests
                    echo 'Running integration tests'
                    // Placeholder for running integration tests
                    // Capture console output to a file
                    bat 'mvn test && mvn integration-test > test_log.txt 2>&1'
                }
            }
        }
        // Other stages...
    }
    
    post {
        always {
            script {
                // Attach log files to the email
                emailext body: "Pipeline ${currentBuild.result}: ${env.BUILD_URL}",
                         subject: "Pipeline ${currentBuild.result}: ${env.JOB_NAME}",
                         to: 'your@email.com',
                         attachLog: true,
                         attachmentsPattern: '*.txt'
            }
        }
    }
}
