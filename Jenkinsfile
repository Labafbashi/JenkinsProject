pipeline {
  agent any
  stages{
    stage('PreBuild'){
      steps {
        echo "******************** Pre Build Stage ************************"
        sh 'npm install'
      }
    }
    stage('Unit Test'){
      steps {
        echo "******************** Unit Test Stage ************************"
        sh 'npm run test-unit'
      }
    }
    stage('Unit Test All'){
      steps{
        echo "******************** Unit Test All Stage ************************"
        sh 'npm run test-all'
      }
    }
    stage('Unit Test Integration'){
      when {
        anyOf {
          branch 'develop'
          branch 'main'
        }
      }
      steps{
        echo "******************** Unit Test Integration Stage ************************"
        sh 'npm run test-integration'
      }
    }
    stage('Devlivery'){
      when {
        branch 'main'
      }
      steps{
        echo "******************** Delivery Stage ************************"
        script {
          docker.withRegistry('https://registry.hub.docker.com', 'dockerhub'){
            def img = docker.build ("paramont/express-calculator")
            img.push()
            img.run('-p 49160:3000')
          }
        }
      }
    }
  }
}
