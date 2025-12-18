nest generate module basic
nest generate controller basic
nest generate service basic

GIT_SSH_COMMAND='ssh -i ~/.ssh/github_deploy' git clone git@github.com:Yandri-99/post_api.git /opt/post_api
cd /opt/post_api