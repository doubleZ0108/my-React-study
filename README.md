# my-React-study

[toc]

------

## 环境搭建

```bash
brew install node
sudo npm install --global gatsby-cli

sudo npm -g --unsafe-perm install sharp

gatsby new my-app https://github.com/gatsbyjs/gatsby-starter-hello-world
# https://github.com/lovell/sharp-libvips/releases
# 可直接下载libvips-8.7.4-darwin-x64.tar.gz
# 移动到~/.npm/_libvips

cd my-app
gatsby develop
# localhost:8000
```

![img](https://img-blog.csdnimg.cn/20190620172009527.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTAxODI4MTE=,size_16,color_FFFFFF,t_70)

> https://blog.csdn.net/h416756139/article/details/50812109
>
> https://blog.csdn.net/u013727805/article/details/104157835?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-11&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-11
>
> https://www.gatsbyjs.cn/tutorial/part-zero/
>
> npm install -g bcrypt 