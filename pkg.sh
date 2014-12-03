rm -rf ../fishmenu ../fishmenu.zip
mkdir ../fishmenu
cp -r ./manifest.json ./options ./background ./assets ./content ../fishmenu
7z a -tzip ../fishmenu.zip ../fishmenu

# 开发完毕
# 版本升级，manifest.json 和 options.js
# 打包上传
# 下载最新crx
# crx 分别复制到 fish.cateyes.blue 和 github 项目
# 提交 github
# 更新 fish.cateyes.blue 下的 version.json 和 index.js 中的版本号
