pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    bat 'mvn clean install'
                }
            }
        }
        
        stage('Unit and Integration Tests') {
            steps {
                script {
                    bat 'mvn test && mvn integration-test'
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
