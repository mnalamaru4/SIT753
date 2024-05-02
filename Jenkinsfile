pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the code using Maven'
                    // Placeholder for Maven build command
                    // Capture console output to a file
                    def buildLog = bat(script: 'mvn clean install > build_log.txt 2>&1', returnStdout: true)
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
                    // Capture console output to a file
                    def testLog = bat(script: 'mvn test && mvn integration-test > test_log.txt 2>&1', returnStdout: true)
                    echo "Test Log:\n${testLog}"
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
