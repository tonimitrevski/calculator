#!groovy

pipeline {
    environment {
        registry = "tonimitrevski/calculator"
        registryCredential = 'dockerhub_id'
        dockerImage = ''
    }
    agent none
    stages {
		stage('Checkout') {
			agent any
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/tonimitrevski/calculator']]])
            }
        }
		stage('build and test') {
			agent {
				docker {
					image 'tonimitrevski/node14-chronium'
				}
			}
			stages {
				stage('Install dependencies') {
					steps {
						sh 'npm install'
					}
				}
				stage('Tests') {
					steps {
						sh 'npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI'
					}
				}
				stage('Build') {
					steps {
						sh 'npm run build'
					}
				}
			}
        }
		stage('Docker build and push') {
			agent any
			stages {
				stage('Building docker image') {
					steps {
						script {
							dockerImage = docker.build registry + ":$BUILD_NUMBER"
						}
					}
				}
				stage('Deploy docker image') {
					steps {
						script {
							docker.withRegistry( '', registryCredential ) {
								dockerImage.push()
							}
						}
					}
				}
				stage('Cleaning up docker') {
					steps {
						sh "docker rmi $registry:$BUILD_NUMBER"
					}
				}
			}
		}
    }
}