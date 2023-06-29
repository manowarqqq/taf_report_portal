pipeline {
  agent any
  stages {
    stage('Checkout Scm') {
      steps {
        git 'https://github.com/manowarqqq/taf_report_portal'
      }
    }

    stage('Install') {
      steps {
        bat 'npm install'
      }
    }

    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Test') {
      steps {
        bat 'npm run api_test'
      }
    }

  }
  post {
    always {
      publishHTML(alwaysLinkToLastBuild: false, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', allowMissing: false, keepAll: false, reportName: 'HTML Report for taf', reportTitles: '')
    }

  }
  triggers {
    cron('H 1 * * *')
  }
}
