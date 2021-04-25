sudo apt-get update -y
sudo apt install nodejs -y
sudo apt install npm -y
code-server --install-extension mgmcdermott.vscode-language-babel
sudo sysctl -w fs.inotify.max_user_watches=80000 && sudo sysctl -p

#initialize npm
npm install
chmod +x solution.sh