# my-React-study

[toc]

------

## 环境搭建

### 空白gatsby-starter

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

gatsby build
```

![img](https://img-blog.csdnimg.cn/20190620172009527.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTAxODI4MTE=,size_16,color_FFFFFF,t_70)

> https://blog.csdn.net/h416756139/article/details/50812109
>
> https://blog.csdn.net/u013727805/article/details/104157835?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-11&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-11
>
> https://www.gatsbyjs.cn/tutorial/part-zero/
>
> npm install -g bcrypt 

- css加载url图像：`npm install --save url-loader`
- Contentful: `npm install -s gatsby-source-contentful`

> 引用Contentful报错的话
>
> 直接删除对应目录下的fragment.js即可

```bash
gatsby new [project-name] https://github.com/gatsbyjs/gatsby-starter-hello-world
cd [project-name]
# 连接git

# npm install --save url-loader gatsby-source-contentful

gatsby develop
# localhost:8000

sudo npm -g --unsafe-perm install gatsby-source-contentful
```



### gatsby-contentful-starter

```bash
## 下载template
git clone https://github.com/contentful-userland/gatsby-contentful-starter

## 安装依赖
# gatsby sharp contentful相关已经装好
npm install -s gatsby-transformer-remark
npm install -s gatsby-transformer-sharp
npm install -s gatsby-plugin-react-helmet

## 设置Contentful API
yarn run setup
# (这里多尝试几次，如果不行就跑一下 yarn install)
# 输入Space ID / Content Management API / Delivery API
# (注意第二个API的位置在另一个tab里)

yarn run dev

# localhost:8000
```

