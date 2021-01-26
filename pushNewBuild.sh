rm -rf dist
current_time=$(date "+%Y.%m.%d-%H.%M.%S")
npm run build
git add dist -f
git commit -m "Created New Build $current_time"
git push