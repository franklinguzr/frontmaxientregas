pipeline {
  agent any

  tools {
    nodejs "node"
  }


  stages {
    stage('install') {
      steps {
        git branch: 'develop', url: 'https://github.com/franklinguzr/frontmaxientregas.git'
          sh 'npm install'
      }
    }

    stage('test') {
      steps {
        dir('frontend') {
          sh 'npm run test'
        }
      }
    }

    stage('build') {
      steps {
        dir('frontend') {
          sh 'npm run build'
          sh 'docker build -t ${image_name}:${tag_image} .'
        }
      }
    }

    stage('deploy') {
      steps {
        sh 'docker run -d -p ${container_port}:80 --name ${container_name} ${image_name}:${tag_image}'
      }
    }
  }

}
