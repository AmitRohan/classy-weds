echo "Cleaning Files"
rm -rf dist
rm -rf docs
echo "Starting the build"
npm run build
echo "Build ready"
echo "Preparing docs"
mv -v dist docs
echo "Docs prepared"
echo "Cleaning build files"
rm -rf dist

echo "Addings docs changes"
git add docs
echo "Comitting docs changes"
git commit -m "Updated Pages"
echo "Docs changes commited, ready for push"
