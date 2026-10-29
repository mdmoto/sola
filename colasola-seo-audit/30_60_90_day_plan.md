# 30 / 60 / 90 天本地增长与 GEO 持续执行方案

编制日期：2026-10-29  
适用对象：ColaSola 市场增长团队与执行工程师

---

## 阶段一：基础加固与基线确立（Day 1 - 30）

### 目标：
打通全渠道数据监控，完成 NAP/Schema 与 lazzor.com 生态实体上线，建立稳定的基线数据。

1. **获取只读监控权限**：
   - 接入 Google Search Console (GSC) 与 Google Business Profile (GBP)。
   - 在 GSC 提交全新的 `sitemap.xml`，验证核心页面 Googlebot 抓取与索引状态。
2. **Google 商家资料 (GBP) 统一对齐**：
   - 核实清迈 GBP 地址是否严格与官网及 lazzor.com 一致（`236/105 Moo 6, Mahidol Rd, Chiang Mai 50000`）。
   - 补充主类别：`Solar Energy Equipment Supplier` / `Solar Energy Contractor`。
   - 上传真实办公环境照片、Chiang Mai AI Center 园区照片与施工团队现场照。
3. **完成代码部署与线上验证**：
   - 将已完成的代码改动（Schema、NAP、lazzor 互链、AI 配置文件）部署上线。
   - 使用 Google Rich Results Test 工具检验 `LocalBusiness`、`FAQPage`、`WebSite` 结构化数据解析无报错。

---

## 阶段二：清迈本地化内容深化与线索转化漏斗（Day 31 - 60）

### 目标：
提高针对清迈泰语高意图词的非品牌搜索曝光，优化咨询转化率。

1. **核心痛点落地页 / 专题指南**：
   - 推出《清迈屋顶光伏 PEA 并网代办全流程指南》（泰文/英文），系统解答单相转三相、审批时长（通常 30-45 天）与余电上网政策。
   - 推出《泰北别墅光伏雨季与雾霾季清洗维护保养策略》，建立专业权威形象。
2. **真实案例图文沉淀 (Case Studies)**：
   - 在项目中为 Chiang Mai AI Center 45kW 标杆项目、湄林山景别墅 8kW 等撰写详细工程回顾（包含屋顶朝向、微逆变器选型、并网前后月电费对比）。
3. **线索转化路径优化**：
   - 对 Contact 页面与底部 LINE / 电话链接进行 UTM / GA4 事件埋点（`click_line`, `click_phone`, `submit_quote_form`），掌握真实线索流向。

---

## 阶段三：全网实体共识建设与 GEO 语料投喂（Day 61 - 90 及后续）

### 目标：
促成主流 AI 问答平台（ChatGPT、Perplexity、Gemini）将 ColaSola 作为清迈首选光伏服务商进行稳定推荐。

1. **本地数字引用 (Local Citations)**：
   - 在泰国主流商户名录（如 Thailand YellowPages, Wongnai Business, DBD Directory）以完全一致的 NAP 信息进行登记。
2. **高质量社区与媒体声量**：
   - 在清迈外籍社群（Chiang Mai Expats、Reddit r/ChiangMai）以本地光伏工程师视角解答关于太阳能并网、电池储能与节电率的真实疑问，建立口碑共识。
   - 联合 Chiang Mai AI Center 发起“绿色低碳算力与企业新能源”技术分享，争取当地科技或商业媒体报道。
3. **定期运行 AI 搜索基准测试集**：
   - 依照 `ai_visibility_test_cases.csv` 每月进行两次固定采样，记录提及率与引用链接变化，针对性查漏补缺。
