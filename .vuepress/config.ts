import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "🦋🐶🐈‍⬛🐈",
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.jpg",
    author: "🦋🐶🐈‍⬛🐈",
    authorAvatar: "/head.jpg",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // 自动设置分类
    // autoSetBlogCategories: true,
    // 自动设置tag
    autoSetSeries: true,
    // // series 为原 sidebar
    // series: {
    //   "/docs/theme-reco/": [
    //     {
    //       text: "module one",
    //       children: ["home", "theme"],
    //     },
    //     {
    //       text: "module two",
    //       children: ["api", "plugin"],
    //     },
    //   ],
    // },
    navbar: [
      { text: "主页", link: "/" },
      { text: "分类", link: "/categories/mimi/1/" },
      { text: "标签", link: "/tags/tag1/1/" },
      { text: "时光", link: "/timeline/"},
      {
        text: "我们",
        children: [
          { text: "🐟🐶", link: "/docs/theme-reco/theme" },
          { text: "🐟🦋", link: "/blogs/other/guide" },
          { text: "🐈‍⬛🐈", link: "/blogs/other/guide" },
        ],
      },
    ],
    // 设置多个密码
    password: [
      'e3849c4761c2b368e6b71acb6f7f35d9',
      '4babeff643feb7766f7d151afb4c2783'
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 2023-11-18 今天是宝的生日，祝宝生日快乐！文章里有小秘密哦！`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "点我",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    commentConfig: {
      type: 'valie',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        appId: 'GohBwk9J3N1yklPwRUr7pkNN-gzGzoHsz',
        appKey: 'NnuxI6rH21OGXTOMcF7dz9Ro',
        placeholder: '填写邮箱可以收到回复提醒哦！',
        verify: true, // 验证码服务
        notify: true,
        recordIP: true,
        hideComments: false // 隐藏评论
      },
    },
  }),
  // debug: true,
});
