pipeline {
    agent any
    
    environment {
        DIRECTORY_PATH = "/path/to/code"
        TESTING_ENVIRONMENT = "JENKINS"
        PRODUCTION_ENVIRONMENT = "MAHIDHAR"
    }
    
    stages {
        stage('Build') {
            steps {
                echo "Fetching the source code from the directory path specified by the environment variable: ${DIRECTORY_PATH}"
                echo "Compiling the code and generating any necessary artifacts..."
            }
        }
        stage('Test') {
            steps {
                echo "Running unit tests..."
                echo "Running integration tests..."
            }
        }
        stage('Code Quality Check') {
            steps {
                echo "Checking the quality of the code..."
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying the application to a testing environment specified by the environment variable: ${TESTING_ENVIRONMENT}"
            }
        }
        stage('Approval') {
            steps {
                echo "Waiting for manual approval..."
                sleep(time: 10, unit: 'SECONDS')
            }
        }
        stage('Deploy to Production') {
            steps {
                echo "Deploying the code to the production environment (${PRODUCTION_ENVIRONMENT})..."
            }
        }
    }
}
    post {
        always {
            // Send email notifications after pipeline execution
            emailext body: "Pipeline ${currentBuild.result}: ${env.BUILD_URL}",
                     subject: "Pipeline ${currentBuild.result}: ${env.JOB_NAME}",
                     to: 's222315268@deakin.edu.au'
        }
    }
}
