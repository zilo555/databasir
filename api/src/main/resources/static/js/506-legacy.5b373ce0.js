"use strict";(self["webpackChunkdatabasir_frontend"]=self["webpackChunkdatabasir_frontend"]||[]).push([[506],{7327:function(e,t,n){var r=n(2109),o=n(2092).filter,a=n(1194),u=a("filter");r({target:"Array",proto:!0,forced:!u},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},6299:function(e,t,n){n.d(t,{ew:function(){return u},wu:function(){return l},r6:function(){return i},ns:function(){return c},OE:function(){return s}});var r=n(3872),o="/api/v1.0/database_types",a="/api/v1.0/simple_database_types",u=function(e){return r.Z["delete"](o+"/"+e)},l=function(e){return r.Z.post(o,e)},i=function(e){return r.Z.patch(o,e)},c=function(){return r.Z.get(a)},s=function(e){return r.Z.get(o,{params:e})}},5430:function(e,t,n){n.d(t,{v:function(){return a}});var r=n(3872),o="/api/v1.0/operation_logs",a=function(e){return r.Z.get(o,{params:e})}},6506:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});n(8309),n(2526),n(1817);var r=n(6252),o=n(9963),a=n(3577),u=(0,r.Uk)("新建"),l={key:1},i=(0,r.Uk)(" 更多 "),c=(0,r.Uk)("编辑项目"),s=(0,r.Uk)("查看文档"),p=(0,r.Uk)(" 关注项目 "),d=(0,r.Uk)(" 取消关注 "),m=(0,r.Uk)("查看日志"),f=(0,r.Uk)("删除项目"),g=(0,r._)("h3",null,"基础信息",-1),w=(0,r._)("h3",null,"连接配置",-1),h=(0,r.Uk)("- 删除"),b=(0,r.Uk)("+ 添加"),j=(0,r.Uk)("+ 添加"),y=(0,r.Uk)(" 测试连接 "),C=(0,r._)("h2",null,"同步规则",-1),_=(0,r.Uk)("- 删除"),W=(0,r.Uk)("+ 添加"),P=(0,r.Uk)("+ 添加"),k=(0,r.Uk)("- 删除"),S=(0,r.Uk)("+ 添加"),F=(0,r.Uk)("+ 添加"),R=(0,r.Uk)("保存"),U=(0,r.Uk)("取消"),D={key:0},z=(0,r.Uk)("成功"),v={key:1},M=(0,r.Uk)("失败"),O={key:0},V={key:1},N=(0,r.Uk)("添加成员"),E=(0,r.Uk)("移除"),I=(0,r.Uk)("升为组长"),T=(0,r.Uk)("设为组员"),G={key:0},x=(0,r.Uk)("启用中"),L={key:1},$=(0,r.Uk)("已禁用"),Q={key:0},A=(0,r.Uk)("移除"),q={key:1},B=(0,r.Uk)("+ 添加组员"),Y=(0,r.Uk)("+ 添加组长");function K(e,t,n,K,Z,H){var J=(0,r.up)("el-button"),X=(0,r.up)("el-tooltip"),ee=(0,r.up)("el-col"),te=(0,r.up)("el-input"),ne=(0,r.up)("el-option"),re=(0,r.up)("el-select"),oe=(0,r.up)("el-row"),ae=(0,r.up)("el-table-column"),ue=(0,r.up)("star-filled"),le=(0,r.up)("el-icon"),ie=(0,r.up)("el-link"),ce=(0,r.up)("database-icon"),se=(0,r.up)("el-tag"),pe=(0,r.up)("arrow-down"),de=(0,r.up)("el-dropdown-item"),me=(0,r.up)("el-dropdown-menu"),fe=(0,r.up)("el-dropdown"),ge=(0,r.up)("el-table"),we=(0,r.up)("el-pagination"),he=(0,r.up)("el-form-item"),be=(0,r.up)("check"),je=(0,r.up)("close"),ye=(0,r.up)("el-tab-pane"),Ce=(0,r.up)("el-switch"),_e=(0,r.up)("el-space"),We=(0,r.up)("el-tabs"),Pe=(0,r.up)("el-divider"),ke=(0,r.up)("el-form"),Se=(0,r.up)("el-dialog"),Fe=(0,r.up)("el-drawer"),Re=(0,r.up)("el-affix"),Ue=(0,r.Q2)("require-roles");return(0,r.wg)(),(0,r.j4)(We,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(ye,{label:"项目列表"},{default:(0,r.w5)((function(){return[(0,r.Wm)(oe,{gutter:12},{default:(0,r.w5)((function(){return[(0,r.wy)(((0,r.wg)(),(0,r.j4)(ee,{span:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(X,{content:"新建一个新项目",placement:"top"},{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"primary",style:{width:"100%"},icon:"plus",onClick:H.toCreateProject},{default:(0,r.w5)((function(){return[u]})),_:1},8,["onClick"])]})),_:1})]})),_:1})),[[Ue,["SYS_OWNER","GROUP_OWNER?groupId="+Z.groupId,"GROUP_MEMBER?groupId="+Z.groupId]]]),(0,r.Wm)(ee,{span:8},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{onChange:H.onProjectQuery,modelValue:Z.projectFilter.nameContains,"onUpdate:modelValue":t[0]||(t[0]=function(e){return Z.projectFilter.nameContains=e}),label:"项目名",placeholder:"项目名称搜索","prefix-icon":"search"},null,8,["onChange","modelValue"])]})),_:1}),(0,r.Wm)(ee,{span:8},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{onChange:H.onProjectQuery,modelValue:Z.projectFilter.databaseNameContains,"onUpdate:modelValue":t[1]||(t[1]=function(e){return Z.projectFilter.databaseNameContains=e}),label:"数据库名",placeholder:"数据库名称搜索","prefix-icon":"search"},null,8,["onChange","modelValue"])]})),_:1}),(0,r.Wm)(ee,{span:5},{default:(0,r.w5)((function(){return[(0,r.Wm)(re,{onChange:H.onProjectQuery,onClear:t[2]||(t[2]=function(e){return H.onProjectDatabaseTypeClear()}),modelValue:Z.projectFilter.databaseType,"onUpdate:modelValue":t[3]||(t[3]=function(e){return Z.projectFilter.databaseType=e}),placeholder:"选择数据库类型",clearable:""},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Z.databaseTypes,(function(e){return(0,r.wg)(),(0,r.j4)(ne,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["onChange","modelValue"])]})),_:1})]})),_:1}),(0,r.Wm)(oe,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(ge,{data:Z.projectPageData.data,border:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(ae,{prop:"id",label:"ID","min-width":"60",fixed:"left"}),(0,r.Wm)(ae,{label:"项目名称","min-width":"120",fixed:"left",resizable:""},{default:(0,r.w5)((function(e){return[(0,r.Wm)(ie,{underline:!0,onClick:(0,o.iM)((function(t){return H.toDocumentPage(e.row)}),["stop"])},{default:(0,r.w5)((function(){return[e.row.isFavorite?((0,r.wg)(),(0,r.j4)(le,{key:0},{default:(0,r.w5)((function(){return[(0,r.Wm)(ue)]})),_:1})):(0,r.kq)("",!0),(0,r.Uk)(" "+(0,a.zw)(e.row.name),1)]})),_:2},1032,["onClick"])]})),_:1}),(0,r.Wm)(ae,{prop:"databaseName",label:"数据库",width:"200",resizable:""}),(0,r.Wm)(ae,{label:"数据库类型"},{default:(0,r.w5)((function(e){return[(0,r.Wm)(ce,{databaseType:e.row.databaseType},null,8,["databaseType"])]})),_:1}),(0,r.Wm)(ae,{prop:"description",label:"说明","min-width":"160",resizable:""}),(0,r.Wm)(ae,{label:"定时同步",align:"center"},{default:(0,r.w5)((function(e){return[e.row.isAutoSync?((0,r.wg)(),(0,r.j4)(se,{key:0},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.row.autoSyncCron),1)]})),_:2},1024)):((0,r.wg)(),(0,r.iD)("span",l," 无 "))]})),_:1}),(0,r.Wm)(ae,{prop:"createAt",label:"创建时间","min-width":"120",resizable:""}),(0,r.Wm)(ae,{fixed:"right",label:"操作","min-width":"180",align:"center",resizable:""},{default:(0,r.w5)((function(e){return[(0,r.Wm)(fe,null,{dropdown:(0,r.w5)((function(){return[(0,r.Wm)(me,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(de,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"primary",size:"small",onClick:(0,o.iM)((function(t){return H.toEditProject(e.row)}),["stop"]),icon:"Edit"},{default:(0,r.w5)((function(){return[c]})),_:2},1032,["onClick"])]})),_:2},1024),(0,r.Wm)(de,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"primary",size:"small",onClick:(0,o.iM)((function(t){return H.toDocumentPage(e.row)}),["stop"]),icon:"View"},{default:(0,r.w5)((function(){return[s]})),_:2},1032,["onClick"])]})),_:2},1024),(0,r.Wm)(de,null,{default:(0,r.w5)((function(){return[e.row.isFavorite?((0,r.wg)(),(0,r.j4)(J,{key:1,type:"warning",size:"small",onClick:(0,o.iM)((function(t){return H.onRemoveProjectFavorite(e.row)}),["stop"]),icon:"StarFilled"},{default:(0,r.w5)((function(){return[d]})),_:2},1032,["onClick"])):((0,r.wg)(),(0,r.j4)(J,{key:0,type:"primary",size:"small",onClick:(0,o.iM)((function(t){return H.onAddProjectFavorite(e.row)}),["stop"]),icon:"Star"},{default:(0,r.w5)((function(){return[p]})),_:2},1032,["onClick"]))]})),_:2},1024),(0,r.Wm)(de,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"primary",size:"small",onClick:(0,o.iM)((function(t){return H.toProjectOperationLogDrawer(e.row)}),["stop"]),icon:"Tickets"},{default:(0,r.w5)((function(){return[m]})),_:2},1032,["onClick"])]})),_:2},1024),(0,r.wy)(((0,r.wg)(),(0,r.j4)(de,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"danger",size:"small",onClick:(0,o.iM)((function(t){return H.onProjectDelete(e.row.id)}),["stop"]),icon:"Remove"},{default:(0,r.w5)((function(){return[f]})),_:2},1032,["onClick"])]})),_:2},1024)),[[Ue,["SYS_OWNER","GROUP_OWNER?groupId="+Z.groupId]]])]})),_:2},1024)]})),default:(0,r.w5)((function(){return[(0,r._)("span",null,[i,(0,r.Wm)(le,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(pe)]})),_:1})])]})),_:2},1024)]})),_:1})]})),_:1},8,["data"])]})),_:1}),(0,r.Wm)(oe,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(we,{layout:"prev, pager, next","hide-on-single-page":!1,currentPage:Z.projectPageData.number,"page-size":Z.projectPageData.size,"page-count":Z.projectPageData.totalPages,onCurrentChange:H.onProjectListCurrentPageChange},null,8,["currentPage","page-size","page-count","onCurrentChange"])]})),_:1})]})),_:1}),(0,r.Wm)(Se,{modelValue:Z.isShowProjectEditDialog,"onUpdate:modelValue":t[15]||(t[15]=function(e){return Z.isShowProjectEditDialog=e}),width:"42%",center:"","destroy-on-close":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(ke,{model:Z.projectForm,"label-position":"top",rules:Z.projectFormRules,ref:"projectFormRulesRef"},{default:(0,r.w5)((function(){return[(0,r.Wm)(We,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(ye,{label:"基础配置"},{default:(0,r.w5)((function(){return[g,(0,r.Wm)(oe,{gutter:33},{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,{span:8},{default:(0,r.w5)((function(){return[(0,r.Wm)(he,{label:"名称",prop:"name"},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{modelValue:Z.projectForm.name,"onUpdate:modelValue":t[4]||(t[4]=function(e){return Z.projectForm.name=e}),placeholder:"项目名称"},null,8,["modelValue"])]})),_:1})]})),_:1}),(0,r.Wm)(ee,{span:12},{default:(0,r.w5)((function(){return[(0,r.Wm)(he,{label:"描述",prop:"description"},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{modelValue:Z.projectForm.description,"onUpdate:modelValue":t[5]||(t[5]=function(e){return Z.projectForm.description=e}),type:"textarea",placeholder:"项目描述"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),w,(0,r.Wm)(oe,{gutter:33},{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,{span:8},{default:(0,r.w5)((function(){return[(0,r.Wm)(he,{label:"用户名",prop:"dataSource.username"},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{modelValue:Z.projectForm.dataSource.username,"onUpdate:modelValue":t[6]||(t[6]=function(e){return Z.projectForm.dataSource.username=e}),placeholder:"root"},null,8,["modelValue"])]})),_:1})]})),_:1}),(0,r.Wm)(ee,{span:12},{default:(0,r.w5)((function(){return[(0,r.Wm)(he,{label:"密码",prop:"dataSource.password"},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{modelValue:Z.projectForm.dataSource.password,"onUpdate:modelValue":t[7]||(t[7]=function(e){return Z.projectForm.dataSource.password=e}),placeholder:"**********",type:e.password,"show-password":""},null,8,["modelValue","type"])]})),_:1})]})),_:1}),(0,r.Wm)(ee,{span:8},{default:(0,r.w5)((function(){return[(0,r.Wm)(he,{label:"地址",prop:"dataSource.url"},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{modelValue:Z.projectForm.dataSource.url,"onUpdate:modelValue":t[8]||(t[8]=function(e){return Z.projectForm.dataSource.url=e}),placeholder:"127.0.0.1:3306"},null,8,["modelValue"])]})),_:1})]})),_:1}),(0,r.Wm)(ee,{span:7},{default:(0,r.w5)((function(){return[(0,r.Wm)(he,{label:"数据库",prop:"dataSource.databaseName"},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{modelValue:Z.projectForm.dataSource.databaseName,"onUpdate:modelValue":t[9]||(t[9]=function(e){return Z.projectForm.dataSource.databaseName=e}),placeholder:"需要同步的数据库名称"},null,8,["modelValue"])]})),_:1})]})),_:1}),(0,r.Wm)(ee,{span:5},{default:(0,r.w5)((function(){return[(0,r.Wm)(he,{label:"数据库类型",prop:"dataSource.databaseType"},{default:(0,r.w5)((function(){return[(0,r.Wm)(re,{modelValue:Z.projectForm.dataSource.databaseType,"onUpdate:modelValue":t[10]||(t[10]=function(e){return Z.projectForm.dataSource.databaseType=e}),placeholder:"选择数据库类型",clearable:""},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Z.databaseTypes,(function(e){return(0,r.wg)(),(0,r.j4)(ne,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Z.projectForm.dataSource.properties,(function(e,t){return(0,r.wg)(),(0,r.j4)(he,{label:t>0?"":"属性",key:t},{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,{span:6},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{modelValue:e.key,"onUpdate:modelValue":function(t){return e.key=t},modelModifiers:{trim:!0},placeholder:"Key"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),(0,r.Wm)(ee,{span:6,style:{"margin-left":"33px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{modelValue:e.value,"onUpdate:modelValue":function(t){return e.value=t},modelModifiers:{trim:!0},placeholder:"Value"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),(0,r.Wm)(ee,{span:8,style:{"margin-left":"33px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"danger",size:"small",onClick:function(e){return H.removeDataSourceProperty(t)}},{default:(0,r.w5)((function(){return[h]})),_:2},1032,["onClick"]),t+1==Z.projectForm.dataSource.properties.length?((0,r.wg)(),(0,r.j4)(J,{key:0,type:"primary",size:"small",onClick:H.addDataSourceProperty},{default:(0,r.w5)((function(){return[b]})),_:1},8,["onClick"])):(0,r.kq)("",!0)]})),_:2},1024)]})),_:2},1032,["label"])})),128)),0==Z.projectForm.dataSource.properties.length?((0,r.wg)(),(0,r.j4)(he,{key:0,label:"属性"},{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"text",size:"small",onClick:H.addDataSourceProperty},{default:(0,r.w5)((function(){return[j]})),_:1},8,["onClick"])]})),_:1})):(0,r.kq)("",!0),(0,r.Wm)(he,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,null,{default:(0,r.w5)((function(){return[Z.testConnectionState.isTest?((0,r.wg)(),(0,r.j4)(J,{key:0,plain:"",circle:"",type:Z.testConnectionState.buttonType,size:"small"},{default:(0,r.w5)((function(){return[Z.testConnectionState.success?((0,r.wg)(),(0,r.j4)(le,{key:0},{default:(0,r.w5)((function(){return[(0,r.Wm)(be)]})),_:1})):((0,r.wg)(),(0,r.j4)(le,{key:1},{default:(0,r.w5)((function(){return[(0,r.Wm)(je)]})),_:1}))]})),_:1},8,["type"])):(0,r.kq)("",!0),(0,r.Wm)(J,{type:Z.testConnectionState.buttonType,plain:"",size:"small",onClick:t[11]||(t[11]=function(e){return H.onTestConnection("projectFormRulesRef")}),loading:Z.loading.testConnection},{default:(0,r.w5)((function(){return[y]})),_:1},8,["type","loading"])]})),_:1}),Z.testConnectionState.isTest&&!Z.testConnectionState.success?((0,r.wg)(),(0,r.j4)(ee,{key:0},{default:(0,r.w5)((function(){return[(0,r.Wm)(ie,{type:"danger",underline:!1},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(Z.testConnectionState.message),1)]})),_:1})]})),_:1})):(0,r.kq)("",!0)]})),_:1})]})),_:1}),(0,r.Wm)(ye,{label:"高级配置"},{default:(0,r.w5)((function(){return[C,(0,r.Wm)(he,{label:"定时同步"},{default:(0,r.w5)((function(){return[(0,r.Wm)(_e,{wrap:"",size:33},{default:(0,r.w5)((function(){return[(0,r.Wm)(Ce,{modelValue:Z.projectForm.projectSyncRule.isAutoSync,"onUpdate:modelValue":t[12]||(t[12]=function(e){return Z.projectForm.projectSyncRule.isAutoSync=e})},null,8,["modelValue"]),Z.projectForm.projectSyncRule.isAutoSync?((0,r.wg)(),(0,r.j4)(te,{key:0,modelValue:Z.projectForm.projectSyncRule.autoSyncCron,"onUpdate:modelValue":t[13]||(t[13]=function(e){return Z.projectForm.projectSyncRule.autoSyncCron=e}),placeholder:"CRON 表达式"},null,8,["modelValue"])):(0,r.kq)("",!0)]})),_:1})]})),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Z.projectForm.projectSyncRule.ignoreTableNameRegexes,(function(e,t){return(0,r.wg)(),(0,r.j4)(he,{label:t>0?"":"忽略表名称（支持正则表达式）",key:t},{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,{span:6},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{modelValue:Z.projectForm.projectSyncRule.ignoreTableNameRegexes[t],"onUpdate:modelValue":function(e){return Z.projectForm.projectSyncRule.ignoreTableNameRegexes[t]=e},placeholder:"name regex"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),(0,r.Wm)(ee,{span:6,offset:1},{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"danger",size:"small",onClick:function(e){return H.removeIgnoreTableName(t)}},{default:(0,r.w5)((function(){return[_]})),_:2},1032,["onClick"]),t+1==Z.projectForm.projectSyncRule.ignoreTableNameRegexes.length?((0,r.wg)(),(0,r.j4)(J,{key:0,type:"primary",size:"small",onClick:H.addIgnoreTableName},{default:(0,r.w5)((function(){return[W]})),_:1},8,["onClick"])):(0,r.kq)("",!0)]})),_:2},1024)]})),_:2},1032,["label"])})),128)),0==Z.projectForm.projectSyncRule.ignoreTableNameRegexes.length?((0,r.wg)(),(0,r.j4)(he,{key:0,label:"忽略表名称（支持正则表达式）"},{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"text",size:"small",onClick:H.addIgnoreTableName},{default:(0,r.w5)((function(){return[P]})),_:1},8,["onClick"])]})),_:1})):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Z.projectForm.projectSyncRule.ignoreColumnNameRegexes,(function(e,t){return(0,r.wg)(),(0,r.j4)(he,{label:t>0?"":"忽略列名称（支持正则表达式）",key:t},{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,{span:6},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{modelValue:Z.projectForm.projectSyncRule.ignoreColumnNameRegexes[t],"onUpdate:modelValue":function(e){return Z.projectForm.projectSyncRule.ignoreColumnNameRegexes[t]=e},placeholder:"name regex"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),(0,r.Wm)(ee,{span:6,offset:1},{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"danger",size:"small",onClick:function(e){return H.removeIgnoreColumnName(t)}},{default:(0,r.w5)((function(){return[k]})),_:2},1032,["onClick"]),t+1==Z.projectForm.projectSyncRule.ignoreColumnNameRegexes.length?((0,r.wg)(),(0,r.j4)(J,{key:0,type:"primary",size:"small",onClick:H.addIgnoreColumnName},{default:(0,r.w5)((function(){return[S]})),_:1},8,["onClick"])):(0,r.kq)("",!0)]})),_:2},1024)]})),_:2},1032,["label"])})),128)),0==Z.projectForm.projectSyncRule.ignoreColumnNameRegexes.length?((0,r.wg)(),(0,r.j4)(he,{key:1,label:"忽略列名称（支持正则表达式）"},{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"text",size:"small",onClick:H.addIgnoreColumnName},{default:(0,r.w5)((function(){return[F]})),_:1},8,["onClick"])]})),_:1})):(0,r.kq)("",!0)]})),_:1})]})),_:1}),(0,r.Wm)(he,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(Pe,{"content-position":"center"}),(0,r.Wm)(J,{type:"primary",onClick:t[14]||(t[14]=function(e){return H.onProjectFormSave("projectFormRulesRef")})},{default:(0,r.w5)((function(){return[R]})),_:1}),(0,r.Wm)(J,{onClick:H.onProjectFormCancel},{default:(0,r.w5)((function(){return[U]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"]),(0,r.Wm)(Fe,{modelValue:Z.isShowProjectOperationLogDrawer,"onUpdate:modelValue":t[16]||(t[16]=function(e){return Z.isShowProjectOperationLogDrawer=e}),title:"项目日志",size:"50%"},{default:(0,r.w5)((function(){return[(0,r.Wm)(ge,{data:Z.projectOperationLogPageData.data},{default:(0,r.w5)((function(){return[(0,r.Wm)(ae,{prop:"id",label:"ID"}),(0,r.Wm)(ae,{prop:"operatorNickname",label:"操作人"}),(0,r.Wm)(ae,{prop:"operationName",label:"操作"}),(0,r.Wm)(ae,{label:"状态"},{default:(0,r.w5)((function(e){return[e.row.isSuccess?((0,r.wg)(),(0,r.iD)("span",D,[(0,r.Wm)(se,{type:"success"},{default:(0,r.w5)((function(){return[z]})),_:1})])):((0,r.wg)(),(0,r.iD)("span",v,[(0,r.Wm)(se,{type:"danger"},{default:(0,r.w5)((function(){return[M]})),_:1})]))]})),_:1}),(0,r.Wm)(ae,{label:"错误信息"},{default:(0,r.w5)((function(e){return[e.row.isSuccess?((0,r.wg)(),(0,r.iD)("span",O)):((0,r.wg)(),(0,r.iD)("span",V,(0,a.zw)(e.row.operationResponse.errMessage),1))]})),_:1}),(0,r.Wm)(ae,{prop:"createAt",label:"记录时间"})]})),_:1},8,["data"]),(0,r.Wm)(we,{layout:"prev, pager, next","hide-on-single-page":!1,currentPage:Z.projectOperationLogPageData.number,"page-size":Z.projectOperationLogPageData.size,"page-count":Z.projectOperationLogPageData.totalPages,onCurrentChange:H.onProjectOperationLogCurrentPageChange},null,8,["currentPage","page-size","page-count","onCurrentChange"])]})),_:1},8,["modelValue"])]})),_:1}),(0,r.Wm)(ye,{label:"分组成员"},{default:(0,r.w5)((function(){return[(0,r.Wm)(oe,{gutter:33},{default:(0,r.w5)((function(){return[(0,r.wy)(((0,r.wg)(),(0,r.j4)(ee,{span:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(X,{content:"添加一个新组员",placement:"top"},{default:(0,r.w5)((function(){return[(0,r.Wm)(J,{type:"primary",style:{width:"100%"},icon:"plus",onClick:t[17]||(t[17]=function(e){return H.onClickShowAddGroupMemberDrawer()})},{default:(0,r.w5)((function(){return[N]})),_:1})]})),_:1})]})),_:1})),[[Ue,["SYS_OWNER","GROUP_OWNER?groupId="+Z.groupId]]]),(0,r.Wm)(ee,{span:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(re,{onChange:H.onGroupMemberQuery,onClear:H.onGroupRoleFilterClear,modelValue:Z.groupMemberFilter.role,"onUpdate:modelValue":t[18]||(t[18]=function(e){return Z.groupMemberFilter.role=e}),placeholder:"选择角色过滤",clearable:""},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Z.roleTypes,(function(e){return(0,r.wg)(),(0,r.j4)(ne,{key:e,label:H.formatRoleName(e),value:e},null,8,["label","value"])})),128))]})),_:1},8,["onChange","onClear","modelValue"])]})),_:1}),(0,r.Wm)(ee,{span:8},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{onChange:t[19]||(t[19]=function(e){return H.onGroupMemberQuery()}),modelValue:Z.groupMemberFilter.nicknameOrUsernameOrEmailContains,"onUpdate:modelValue":t[20]||(t[20]=function(e){return Z.groupMemberFilter.nicknameOrUsernameOrEmailContains=e}),placeholder:"成员昵称、用户名、邮箱搜索","prefix-icon":"search"},null,8,["modelValue"])]})),_:1})]})),_:1}),(0,r.Wm)(oe,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(ge,{data:Z.groupMemberPageData.data,border:"",width:"80%"},{default:(0,r.w5)((function(){return[(0,r.Wm)(ae,{prop:"userId",label:"用户 ID","min-width":"60",fixed:"left"}),(0,r.Wm)(ae,{prop:"nickname",label:"昵称","min-width":"120",fixed:"left",resizable:""}),(0,r.Wm)(ae,{prop:"username",label:"用户名","min-width":"120",resizable:""}),(0,r.Wm)(ae,{prop:"email",label:"邮箱",width:"200",resizable:""}),(0,r.Wm)(ae,{label:"角色",resizable:"",align:"center"},{default:(0,r.w5)((function(e){return["GROUP_OWNER"==e.row.role?((0,r.wg)(),(0,r.j4)(se,{key:0,type:"danger",effect:"plain"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(H.formatRoleName(e.row.role)),1)]})),_:2},1024)):((0,r.wg)(),(0,r.j4)(se,{key:1,effect:"plain"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(H.formatRoleName(e.row.role)),1)]})),_:2},1024))]})),_:1}),(0,r.Wm)(ae,{prop:"createAt",label:"入组时间","min-width":"160",resizable:""}),(0,r.wy)(((0,r.wg)(),(0,r.j4)(ae,{label:"操作","min-width":"120",resizable:""},{default:(0,r.w5)((function(e){return[(0,r.Wm)(J,{type:"danger",size:"small",onClick:function(t){return H.onGroupMemberRemove(e.row.nickname,e.row.userId)},plain:""},{default:(0,r.w5)((function(){return[E]})),_:2},1032,["onClick"]),"GROUP_MEMBER"==e.row.role?((0,r.wg)(),(0,r.j4)(J,{key:0,plain:"",size:"small",onClick:function(t){return H.onGroupMemberRoleUpdate(e.row,"GROUP_OWNER")}},{default:(0,r.w5)((function(){return[I]})),_:2},1032,["onClick"])):((0,r.wg)(),(0,r.j4)(J,{key:1,size:"small",onClick:function(t){return H.onGroupMemberRoleUpdate(e.row,"GROUP_MEMBER")},plain:""},{default:(0,r.w5)((function(){return[T]})),_:2},1032,["onClick"]))]})),_:1})),[[Ue,["SYS_OWNER","GROUP_OWNER?groupId="+Z.groupId]]])]})),_:1},8,["data"])]})),_:1})]})),_:1}),(0,r.Wm)(oe,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(we,{layout:"prev, pager, next","hide-on-single-page":!1,currentPage:Z.groupMemberPageData.number,"page-size":Z.groupMemberPageData.size,"page-count":Z.groupMemberPageData.totalPages,onCurrentChange:H.onGroupMemberCurrentPageChange},null,8,["currentPage","page-size","page-count","onCurrentChange"])]})),_:1})]})),_:1}),(0,r.Wm)(Fe,{modelValue:Z.isShowAddGroupMemberDrawer,"onUpdate:modelValue":t[22]||(t[22]=function(e){return Z.isShowAddGroupMemberDrawer=e}),title:"添加成员",direction:"btt",size:"50%"},{default:(0,r.w5)((function(){return[(0,r.Wm)(Re,{offset:0,position:"top",target:".el-drawer__body"},{default:(0,r.w5)((function(){return[(0,r.Wm)(oe,{gutter:33},{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,{span:12},{default:(0,r.w5)((function(){return[(0,r.Wm)(te,{onChange:H.fetchUsers,modelValue:Z.userPageQuery.nicknameOrUsernameOrEmailContains,"onUpdate:modelValue":t[21]||(t[21]=function(e){return Z.userPageQuery.nicknameOrUsernameOrEmailContains=e}),label:"用户名",placeholder:"输入昵称、用户名或邮箱搜索","prefix-icon":"search"},null,8,["onChange","modelValue"])]})),_:1}),(0,r.Wm)(ee,{span:12},{default:(0,r.w5)((function(){return[(0,r.Wm)(we,{layout:"sizes, prev, pager, next","hide-on-single-page":!1,currentPage:Z.userPageQuery.number,"page-size":Z.userPageQuery.size,"page-sizes":[5,10,20,30],"page-count":Z.userPageData.totalPages,onSizeChange:H.onUserPageSizeChange,onCurrentChange:H.fetchUsers},null,8,["currentPage","page-size","page-count","onSizeChange","onCurrentChange"])]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(oe,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(ee,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(ge,{data:Z.userPageData.data,style:{width:"100%"},border:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(ae,{prop:"id",label:"用户 ID",width:"80"}),(0,r.Wm)(ae,{prop:"nickname",label:"昵称"}),(0,r.Wm)(ae,{prop:"username",label:"用户名"}),(0,r.Wm)(ae,{prop:"email",label:"邮箱"}),(0,r.Wm)(ae,{label:"启用状态",width:"100"},{default:(0,r.w5)((function(e){return[e.row.enabled?((0,r.wg)(),(0,r.iD)("span",G,[(0,r.Wm)(se,{type:"success"},{default:(0,r.w5)((function(){return[x]})),_:1})])):((0,r.wg)(),(0,r.iD)("span",L,[(0,r.Wm)(se,{type:"danger"},{default:(0,r.w5)((function(){return[$]})),_:1})]))]})),_:1}),(0,r.Wm)(ae,{label:"操作"},{default:(0,r.w5)((function(e){return[H.isInGroup(e.row)?((0,r.wg)(),(0,r.iD)("span",Q,[(0,r.Wm)(J,{type:"danger",size:"small",onClick:function(t){return H.onGroupMemberRemove(e.row.nickname,e.row.id)},plain:""},{default:(0,r.w5)((function(){return[A]})),_:2},1032,["onClick"])])):((0,r.wg)(),(0,r.iD)("span",q,[(0,r.Wm)(J,{type:"primary",plain:"",size:"small",onClick:function(t){return H.onGroupMemberAdd(e.row.id,"GROUP_MEMBER")}},{default:(0,r.w5)((function(){return[B]})),_:2},1032,["onClick"]),(0,r.Wm)(J,{type:"plain",plain:"",size:"small",onClick:function(t){return H.onGroupMemberAdd(e.row.id,"GROUP_OWNER")}},{default:(0,r.w5)((function(){return[Y]})),_:2},1032,["onClick"])]))]})),_:1})]})),_:1},8,["data"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})}n(1539),n(4747),n(7327),n(561);var Z=n(9324),H=n(8337),J=n(3110),X=n(5430),ee=n(7234),te=n(6299),ne=n(9080),re={data:function(){return{isShowProjectEditDialog:!1,isShowAddGroupMemberDrawer:!1,isShowProjectOperationLogDrawer:!1,projectPageData:{data:[],number:1,size:15,totalElements:0,totalPages:1},projectFilter:{page:0,size:15,groupId:null,databaseType:null,nameContains:null,databaseNameContains:null},groupMemberPageData:{data:[],number:1,size:10,totalElements:0,totalPages:1},groupMemberFilter:{page:0,size:10,role:null,nicknameOrUsernameOrEmailContains:null},userPageQuery:{page:0,size:10,nicknameOrUsernameOrEmailContains:null},userPageData:{data:[],number:1,size:8,totalElements:0,totalPages:1},projectForm:{id:null,name:null,description:null,groupId:null,dataSource:{username:null,databaseType:null,databaseName:null,password:null,url:null,properties:[]},projectSyncRule:{isAutoSync:!1,autoSyncCron:null,ignoreTableNameRegexes:[],ignoreColumnNameRegexes:[]}},projectFormRules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],description:[{required:!0,message:"说明不能为空",trigger:"blur"}],dataSource:{username:[{required:!0,message:"数据库用户名不能为空",trigger:"blur"}],url:[{required:!0,message:"数据库连接地址不能为空",trigger:"blur"}],databaseName:[{required:!0,message:"数据库名称不能为空",trigger:"blur"}],databaseType:[{required:!0,message:"请选择数据库类型",trigger:"change"}]}},testConnectionState:{buttonType:"primary",isTest:!1,success:!1,message:null},loading:{testConnection:!1},projectOperationLogPageData:{data:[],number:1,size:10,totalElements:0,totalPages:1},projectOperationLogPageQuery:{page:0,size:10,involveProjectId:null,module:"project"},groupId:null,databaseTypes:[],roleTypes:["GROUP_OWNER","GROUP_MEMBER"]}},mounted:function(){var e=this;(0,te.ns)().then((function(t){e.databaseTypes=t.data}))},created:function(){var e=this;this.$route.params.groupId&&(this.projectFilter.groupId=this.$route.params.groupId,this.groupId=this.$route.params.groupId),this.$watch((function(){return e.projectForm.dataSource}),(function(){e.testConnectionState.isTest=!1,e.testConnectionState.buttonType="primary"}),{deep:!0}),this.fetchGroupProjects(),this.fetchGroupMembers()},methods:{formatRoleName:function(e){return"GROUP_OWNER"==e?"组长":"GROUP_MEMBER"==e?"组员":"未知"},fetchGroupMembers:function(e){var t=this;this.groupMemberFilter.page=e?e-1:0,(0,H.yF)(this.$route.params.groupId,this.groupMemberFilter).then((function(e){t.groupMemberPageData.data=e.data.content,t.groupMemberPageData.number=e.data.number+1,t.groupMemberPageData.size=e.data.size,t.groupMemberPageData.totalPages=e.data.totalPages,t.groupMemberPageData.totalElements=e.data.totalElements}))},onGroupRoleFilterClear:function(){this.groupMemberFilter.role=null},onGroupMemberQuery:function(){this.groupMemberFilter.page=0,""==this.groupMemberFilter.role&&(this.groupMemberFilter.role=null),this.fetchGroupMembers()},onGroupMemberCurrentPageChange:function(e){e&&e-1!=this.groupMemberFilter.page&&(this.groupMemberFilter.page=e-1,this.fetchGroupMembers())},onGroupMemberRemove:function(e,t){var n=this,r=this.$route.params.groupId;this.$confirm("确认移除成员["+e+"]","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){(0,H._j)(r,t).then((function(e){e.errCode||(n.$message.success("移除成功"),n.fetchGroupMembers(),n.isShowAddGroupMemberDrawer&&n.userPageData.data.filter((function(e){return e.id==t})).forEach((function(e){var t=e.inGroupIds.indexOf(n.groupId);e.inGroupIds.splice(t,1)})))}))}))},onGroupMemberRoleUpdate:function(e,t){var n=this,r=this.$route.params.groupId;(0,H.q9)(r,e.userId,t).then((function(r){if(!r.errCode){var o="GROUP_OWNER"==t?"组长":"组员";n.$message.success("成功设置为"+o),e.role=t}}))},isInGroup:function(e){var t=this;return e.inGroupIds.some((function(e){return e==t.groupId}))},fetchUsers:function(e){var t=this;this.userPageQuery.page=e?e-1:null,(0,J.yw)(this.userPageQuery).then((function(e){e.errCode||(t.userPageData.data=e.data.content,t.userPageData.number=e.data.number+1,t.userPageData.size=e.data.size,t.userPageData.totalPages=e.data.totalPages,t.userPageData.totalElements=e.data.totalElements)}))},onClickShowAddGroupMemberDrawer:function(){this.isShowAddGroupMemberDrawer=!0,this.fetchUsers()},onGroupMemberAdd:function(e,t){var n=this,r={userId:e,role:t},o=this.$route.params.groupId;(0,H.E2)(o,r).then((function(t){t.errCode||(n.$message.success("添加成功"),n.userPageData.data.filter((function(t){return t.id==e})).forEach((function(e){e.inGroupIds.push(n.groupId)})),n.fetchGroupMembers())}))},onUserPageSizeChange:function(e){e&&(this.userPageQuery.size=e,this.fetchUsers())},fetchGroupProjects:function(){var e=this;""==this.projectFilter.databaseType&&(this.projectFilter.databaseType=null),(0,Z.hW)(this.projectFilter).then((function(t){t.errCode||(e.projectPageData.data=t.data.content,e.projectPageData.number=t.data.number+1,e.projectPageData.size=t.data.size,e.projectPageData.totalPages=t.data.totalPages,e.projectPageData.totalElements=t.data.totalElements)}))},onProjectDatabaseTypeClear:function(){this.projectFilter.databaseType=null},onProjectQuery:function(){this.projectFilter.page=0,this.fetchGroupProjects()},onProjectListCurrentPageChange:function(e){e&&e-1!=this.projectFilter.page&&(this.projectFilter.page=e-1,this.fetchGroupProjects())},onProjectDelete:function(e){var t=this;this.$confirm("确认删除该项目？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){(0,Z.jI)(t.groupId,e).then((function(e){e.errCode||((0,ee.z8)({showClose:!0,message:"删除成功",type:"success",duration:3e3}),t.onProjectQuery())}))}))},onAddProjectFavorite:function(e){var t=this;(0,ne.a3)(e.id).then((function(n){n.errCode||(t.$message.success("关注成功"),e.isFavorite=!0)}))},onRemoveProjectFavorite:function(e){var t=this;(0,ne.Ni)(e.id).then((function(n){n.errCode||(t.$message.success("取消成功"),e.isFavorite=!1)}))},toEditProject:function(e){var t=this;(0,Z.Rp)(e.id).then((function(e){t.projectForm=e.data,t.isShowProjectEditDialog=!0}))},toCreateProject:function(){var e=this.$route.params.groupId;this.projectForm={id:null,name:null,description:null,groupId:e,dataSource:{username:null,databaseType:null,databaseName:null,password:null,url:null,properties:[]},projectSyncRule:{isAutoSync:!1,autoSyncCron:null,ignoreTableNameRegexes:[],ignoreColumnNameRegexes:[]}},this.isShowProjectEditDialog=!0},toDocumentPage:function(e){var t=this.$route.params.groupId,n=e.id;this.$router.push({path:"/groups/"+t+"/projects/"+n+"/documents",query:{projectName:e.name}})},fetchProjectOperationLogs:function(e){var t=this;this.projectOperationLogPageQuery.page=e?e-1:null,(0,X.v)(this.projectOperationLogPageQuery).then((function(e){e.errCode||(t.projectOperationLogPageData.data=e.data.content,t.projectOperationLogPageData.number=e.data.number+1,t.projectOperationLogPageData.size=e.data.size,t.projectOperationLogPageData.totalPages=e.data.totalPages,t.projectOperationLogPageData.totalElements=e.data.totalElements)}))},onProjectOperationLogCurrentPageChange:function(e){e&&e-1!=this.projectOperationLogPageQuery.page&&(this.projectOperationLogPageQuery.page=e-1,this.fetchProjectOperationLogs(e))},toProjectOperationLogDrawer:function(e){this.projectOperationLogPageQuery.involveProjectId=e.id,this.fetchProjectOperationLogs(),this.isShowProjectOperationLogDrawer=!0},onProjectFormSave:function(){var e=this;this.$refs.projectFormRulesRef.validate((function(t){return t?e.projectForm.id||e.projectForm.dataSource.password?void(0,Z.Iu)(e.projectForm).then((function(t){return t.errCode||(e.$message.success("保存成功"),e.fetchGroupProjects(),e.isShowProjectEditDialog=!1),!0})):(e.$message.error("请填写数据库连接密码"),!1):(e.$message.error("请填写表单必填项"),!1)}))},onProjectFormCancel:function(){this.isShowProjectEditDialog=!1},addDataSourceProperty:function(){this.projectForm.dataSource.properties.push({key:"",value:""})},removeDataSourceProperty:function(e){this.projectForm.dataSource.properties.splice(e,1)},addIgnoreTableName:function(){this.projectForm.projectSyncRule.ignoreTableNameRegexes.push("")},removeIgnoreTableName:function(e){this.projectForm.projectSyncRule.ignoreTableNameRegexes.splice(e,1)},addIgnoreColumnName:function(){this.projectForm.projectSyncRule.ignoreColumnNameRegexes.push("")},removeIgnoreColumnName:function(e){this.projectForm.projectSyncRule.ignoreColumnNameRegexes.splice(e,1)},onTestConnection:function(){var e=this;this.loading.testConnection=!0,this.$refs.projectFormRulesRef.validate((function(t){if(!t)return e.$message.error("请填写表单必填项"),e.loading.testConnection=!1,!1;if(!e.projectForm.id&&!e.projectForm.dataSource.password)return e.$message.error("请填写数据库连接密码"),e.loading.testConnection=!1,!1;var n={projectId:e.projectForm.id,databaseType:e.projectForm.dataSource.databaseType,databaseName:e.projectForm.dataSource.databaseName,username:e.projectForm.dataSource.username,password:e.projectForm.dataSource.password,url:e.projectForm.dataSource.url,properties:e.projectForm.dataSource.properties};(0,Z.M7)(n).then((function(t){t.errCode?(e.testConnectionState.success=!1,e.testConnectionState.buttonType="danger"):(e.testConnectionState.success=!0,e.testConnectionState.buttonType="success",e.$message.success("连接成功")),e.testConnectionState.isTest=!0,e.testConnectionState.message=t.errMessage})).catch((function(t){console.log(t),e.$message.error("连接超时请稍后再试"),e.testConnectionState.message="连接超时请稍后再试",e.testConnectionState.buttonType="danger",e.testConnectionState.success=!1})).finally((function(){return e.loading.testConnection=!1}))}))}}},oe=n(3744);const ae=(0,oe.Z)(re,[["render",K]]);var ue=ae}}]);
//# sourceMappingURL=506-legacy.5b373ce0.js.map