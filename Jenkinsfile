pipeline {
    agent {
        docker { image 'node:7-alpine' }
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Check') {
            steps {
                sh 'npm run lint'
                sh 'npm run type-check'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
