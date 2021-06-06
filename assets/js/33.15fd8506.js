(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{67:function(e,t,_){"use strict";_.r(t);var i=_(0),v=Object(i.a)({},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"mysql-规约"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-规约","aria-hidden":"true"}},[e._v("#")]),e._v(" MySQL 规约")]),e._v(" "),_("h2",{attrs:{id:"建表规约"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#建表规约","aria-hidden":"true"}},[e._v("#")]),e._v(" 建表规约")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("【强制】表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint ( 1 表示是，0 表示否)，此规则同样适用于 odps 建表。")]),e._v(" "),_("p",[e._v("说明:任何字段如果为非负数，必须是 unsigned。")])]),e._v(" "),_("li",[_("p",[e._v("【强制】表名、字段名必须使用小写字母或数字;禁止出现数字开头，禁止两个下划线中间只出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑。 正例:getter_admin，task_config，level3_name 反例:GetterAdmin，taskConfig，level_3_name")])]),e._v(" "),_("li",[_("p",[e._v("【强制】表名不使用复数名词。")]),e._v(" "),_("p",[e._v("说明:表名应该仅仅表示表里面的实体内容，不应该表示实体数量，对应于 DO 类名也是单数 形式，符合表达习惯。")])]),e._v(" "),_("li",[_("p",[e._v("【强制】禁用保留字，如 desc、range、match、delayed 等，参考"),_("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/keywords.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方保留字"),_("OutboundLink")],1),e._v("。")])]),e._v(" "),_("li",[_("p",[e._v("【强制】唯一索引名为 uk_字段名;普通索引名则为 idx_字段名。\n说明:uk_ 即 unique key;idx_ 即 index 的简称。")])]),e._v(" "),_("li",[_("p",[e._v("【强制】小数类型为 decimal，禁止使用 float 和 double。\n说明:float 和 double 在存储的时候，存在精度损失的问题，很可能在值的比较时，得到不正确的结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数分开存储。")])]),e._v(" "),_("li",[_("p",[e._v("【强制】如果存储的字符串长度几乎相等，使用 CHAR 定长字符串类型。")])]),e._v(" "),_("li",[_("p",[e._v("【强制】varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长度 大于此值，定义字段类型为 TEXT，独立出来一张表，用主键来对应，避免影响其它字段索引 效率。")])]),e._v(" "),_("li",[_("p",[e._v("【强制】表必备三字段:id, gmt_created, gmt_updated。")]),e._v(" "),_("p",[e._v("说明:其中 id 必为主键，类型为 unsigned bigint、单表时自增、步长为 1; 分表时改为从 id 生成服务取值，确保分表之间的全局唯一。gmt_created, gmt_modified 的类型均为 date_time 类型。")])]),e._v(" "),_("li",[_("p",[e._v("【推荐】表的命名最好是加上“业务名称_表的作用”，避免上云梯后，再与其它业务表关联时有混淆。正例:tiger_task / tiger_reader / mpp_config")])]),e._v(" "),_("li",[_("p",[e._v("【推荐】库名与应用名称尽量一致。")])]),e._v(" "),_("li",[_("p",[e._v("【推荐】如果修改字段含义或对字段表示的状态追加时，需要及时更新字段注释。")])]),e._v(" "),_("li",[_("p",[e._v("【推荐】字段允许适当冗余，以提高性能，但是必须考虑数据同步的情况。冗余字段应遵循:")]),e._v(" "),_("ol",[_("li",[e._v("不是频繁修改的字段。")]),e._v(" "),_("li",[e._v("不是 varchar 超长字段，更不能是 text 字段。 正例:各业务线经常冗余存储商品名称，避免查询时需要调用 IC 服务获取。")])])]),e._v(" "),_("li",[_("p",[e._v("【推荐】单表行数超过 500 万行或者单表容量超过 2GB，才推荐进行分库分表。")]),e._v(" "),_("p",[e._v("说明:如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。\n反例:某业务三年总数据量才 2 万行，却分成 1024 张表，问:你为什么这么设计?答:分 1024 张表，不是标配吗?")])]),e._v(" "),_("li",[_("p",[e._v("【参考】合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索 速度。")])])]),e._v(" "),_("p",[e._v("正例:人的年龄用 unsigned tinyint(表示范围 0-255，人的寿命不会超过 255 岁);海龟就 必须是 smallint，但如果是太阳的年龄，就必须是 int;如果是所有恒星的年龄都加起来，那 么就必须使用 bigint")])])},[],!1,null,null,null);t.default=v.exports}}]);