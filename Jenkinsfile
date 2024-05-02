pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the code using Maven'
                    // Placeholder for Maven build command
                    // Capture console output
                    def buildLog = sh(script: 'mvn clean install', returnStdout: true)
                    echo "Build Log:\n${buildLog}"
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
                    // Capture console output
                    def testLog = sh(script: 'mvn test && mvn integration-test', returnStdout: true)
                    echo "Test Log:\n${testLog}"
                }
            }
        }
        // Other stages...
    }
    
    post {
        always {
            // Send email notifications after pipeline execution
            emailext body: "Pipeline ${currentBuild.result}: ${env.BUILD_URL}\n\n${currentBuild.rawBuild.getLog(100)}",
                     subject: "Pipeline ${currentBuild.result}: ${env.JOB_NAME}",
                     to: 'mnalamaru4@gmail.com'
        }
    }
}
