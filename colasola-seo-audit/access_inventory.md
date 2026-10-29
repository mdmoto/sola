# 权限与资源盘点 (Access Inventory)

更新时间：2026-10-29

## 1. 实际能够访问的资源（已验证）

| 资源类别 | 访问方式 / 凭据状态 | 状态与用途 |
|---|---|---|
| **代码仓库** | 本地工作区 `/Users/adam/Desktop/solar`，完整 Git 历史 | 可直接审查与修改前端代码、结构化数据、多语言文件、静态配置 |
| **构建环境** | Node.js / Vite / TypeScript，`npm run build` 测试通过 | 可执行本地构建验证，确保修改无破坏性 |
| **关联线上站点** | `https://lazzor.com`（公开网络实时抓取，HTTP 200） | 已提取并验证完整的法定名称、DBD 税号、物理地址、地理坐标及同属实体证据 |
| **公共搜索引擎入口** | Google Search、Perplexity、Gemini、ChatGPT（网页与抓取环境） | 用于 AI 问答抽样与基准对比 |

## 2. 尚缺少或待授权的外部权限（待核实 / 待授权）

按任务书第 1、6 条规定，严禁未经授权修改线上 DNS、广告账户或商家资料：

| 待授权资源 | 建议授权方式 | 用途与价值 |
|---|---|---|
| **Google Search Console (GSC)** | 邮件邀请只读权限（Search Console User） | 提取最近 3–6 个月的真实展示数、点击数、平均排名、实际收录覆盖率 |
| **Google Business Profile (GBP)** | 协作管理员或只读检查 | 验证清迈与外府实体卡片认领状态、类别选择、客户评价及本地路线点击 |
| **Google Analytics 4 (GA4)** | Viewer 权限 | 验证当前自然搜索流量来源、落地页转化及用户互动时长 |
| **LINE Official Account (LINE OA)** | 运营协作或数据后台导流 | 查看 `@cola-sola` 咨询线索来源标签与客户加好友归因 |
| **生产部署 / DNS 控制台** | 域名解析（Cloudflare / Vercel / Netlify） | 生产环境发布、HTTPS 强制重定向与边缘缓存配置 |
