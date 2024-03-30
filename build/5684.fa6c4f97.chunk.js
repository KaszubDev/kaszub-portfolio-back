"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5684],{35684:(n,u,t)=>{t.r(u),t.d(u,{configurations:()=>e,default:()=>F,from:()=>o});const e="\u914D\u7F6E",o="\u6765\u81EA",F={"attribute.boolean":"\u5E03\u5C14\u7C7B\u578B","attribute.boolean.description":"Yes \u6216 no, 1 \u6216 0, true \u6216 false","attribute.component":"\u7EC4\u4EF6","attribute.component.description":"\u60A8\u53EF\u4EE5\u91CD\u590D\u6216\u91CD\u590D\u4F7F\u7528\u7684\u5B57\u6BB5\u7EC4","attribute.date":"\u65E5\u671F\u9009\u62E9\u5668","attribute.date.description":"\u5E26\u6709\u5C0F\u65F6\uFF0C\u5206\u949F\u548C\u79D2\u7684\u65E5\u671F\u9009\u62E9\u5668","attribute.datetime":"\u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668","attribute.dynamiczone":"\u52A8\u6001\u533A\u57DF","attribute.dynamiczone.description":"\u7F16\u8F91\u5185\u5BB9\u65F6\u52A8\u6001\u9009\u62E9\u7EC4\u4EF6","attribute.email":"\u7535\u5B50\u90AE\u4EF6","attribute.email.description":"\u5E26\u6709\u683C\u5F0F\u9A8C\u8BC1\u7684\u7535\u5B50\u90AE\u4EF6\u5B57\u6BB5","attribute.enumeration":"\u5217\u4E3E","attribute.enumeration.description":"\u503C\u7684\u5217\u8868\uFF0C\u7136\u540E\u53EF\u4EE5\u4ECE\u4E2D\u9009\u62E9\u4E00\u4E2A","attribute.json":"JSON","attribute.json.description":"JSON \u683C\u5F0F\u7684\u6570\u636E","attribute.media":"\u5A92\u4F53\u6587\u4EF6","attribute.media.description":"\u56FE\u7247\uFF0C\u89C6\u9891\u7B49\u6587\u4EF6","attribute.null":" ","attribute.number":"\u6570\u5B57\u7C7B\u578B","attribute.number.description":"\u6570\u5B57\u7C7B\u578B (integer, float, decimal)","attribute.password":"\u5BC6\u7801\u8F93\u5165\u6846","attribute.password.description":"\u5BC6\u7801\u5B57\u6BB5\uFF0C\u4F1A\u9690\u85CF\u5B57\u7B26","attribute.relation":"\u5F15\u7528","attribute.relation.description":"\u5F15\u7528\u4E00\u4E2A Content Type","attribute.richtext":"\u5BCC\u6587\u672C\u7F16\u8F91\u5668","attribute.richtext.description":"\u5177\u6709\u683C\u5F0F\u9009\u9879\u7684\u5BCC\u6587\u672C\u7F16\u8F91\u5668","attribute.text":"\u6587\u672C","attribute.text.description":"\u8F83\u77ED\u6216\u8F83\u957F\u7684\u6587\u5B57\uFF0C\u4F8B\u5982\u6807\u9898\u6216\u8BF4\u660E","attribute.time":"\u65F6\u95F4","attribute.uid":"UID","attribute.uid.description":"\u552F\u4E00\u6807\u8BC6\u7B26","button.attributes.add.another":"\u6DFB\u52A0\u4E00\u4E2A\u65B0\u5B57\u6BB5","button.component.add":"\u6DFB\u52A0\u7EC4\u4EF6","button.component.create":"\u521B\u5EFA\u65B0\u7EC4\u4EF6","button.model.create":"\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Content Type","component.repeatable":"(\u53EF\u91CD\u590D\u7684)","components.componentSelect.no-component-available":"\u60A8\u5DF2\u7ECF\u6DFB\u52A0\u4E86\u6240\u6709\u7EC4\u4EF6","components.componentSelect.no-component-available.with-search":"\u6CA1\u6709\u4E0E\u60A8\u7684\u641C\u7D22\u76F8\u5339\u914D\u7684\u7EC4\u4EF6","components.componentSelect.value-component":"{number} \u4E2A\u7EC4\u4EF6\u88AB\u9009\u62E9 (\u8F93\u5165\u4EE5\u641C\u7D22\u7EC4\u4EF6)","components.componentSelect.value-components":"{number} \u4E2A\u7EC4\u4EF6\u88AB\u9009\u62E9",configurations:e,"contentType.collectionName.description":"\u5F53 Content Type \u7684\u540D\u79F0\u548C\u8868\u540D\u79F0\u4E0D\u540C\u65F6\u4F1A\u5F88\u6709\u7528","contentType.collectionName.label":"\u96C6\u5408\u540D\u79F0","contentType.displayName.label":"\u663E\u793A\u540D\u79F0","contentType.apiId-plural.description":"API ID\uFF08\u590D\u6570\u5F62\u5F0F\uFF09","contentType.apiId-plural.label":"API ID\uFF08\u590D\u6570\u5F62\u5F0F\uFF09","contentType.apiId-singular.description":"UID \u7528\u4E8E\u751F\u6210 API \u8DEF\u7531\u548C\u6570\u636E\u5E93\u8868/\u96C6\u5408\u3002","contentType.apiId-singular.label":"API ID\uFF08\u5355\u6570\u5F62\u5F0F\uFF09","contentType.draftAndPublish.description":"\u5141\u8BB8\u7F16\u5199\u6761\u76EE\u7684\u8349\u7A3F\u7248\u672C\uFF0C\u5728\u53D1\u5E03\u4E4B\u524D\u8FDB\u884C\u4FEE\u6539","contentType.draftAndPublish.label":"\u8349\u7A3F & \u53D1\u5E03","contentType.kind.change.warning":"\u60A8\u521A\u521A\u66F4\u6539\u4E86\u5185\u5BB9\u7C7B\u578B\u7684\u79CD\u7C7B\uFF1AAPI \u5C06\u88AB\u91CD\u7F6E\uFF08\u8DEF\u7531\u3001\u63A7\u5236\u5668\u548C\u670D\u52A1\u5C06\u88AB\u8986\u76D6\uFF09\u3002","error.contentTypeName.reserved-name":"\u6B64\u540D\u79F0\u4E0D\u80FD\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5B83\u53EF\u80FD\u4F1A\u7834\u574F\u5176\u4ED6\u529F\u80FD","error.validation.minSupMax":"\u4E0D\u80FD\u66F4\u9AD8","form.attribute.component.option.add":"\u6DFB\u52A0\u4E00\u4E2A\u7EC4\u4EF6","form.attribute.component.option.create":"\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6","form.attribute.component.option.create.description":"\u7EC4\u4EF6\u5728\u7C7B\u578B\u548C\u7EC4\u4EF6\u4E4B\u95F4\u5171\u4EAB\uFF0C\u5B83\u5C06\u968F\u5904\u53EF\u7528\u3002","form.attribute.component.option.repeatable":"\u53EF\u91CD\u590D\u7EC4\u4EF6","form.attribute.component.option.repeatable.description":"\u6700\u9002\u5408\u7684\u6210\u5206\uFF0C\u5143\u6807\u8BB0\u7B49\u7684\u591A\u4E2A\u5B9E\u4F8B\uFF08\u6570\u7EC4\uFF09\u3002","form.attribute.component.option.reuse-existing":"\u4F7F\u7528\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u7EC4\u4EF6","form.attribute.component.option.reuse-existing.description":"\u91CD\u7528\u5DF2\u7ECF\u521B\u5EFA\u7684\u7EC4\u4EF6\uFF0C\u4EE5\u4F7F\u60A8\u7684\u6570\u636E\u5728\u5185\u5BB9\u7C7B\u578B\u4E4B\u95F4\u4FDD\u6301\u4E00\u81F4\u3002","form.attribute.component.option.single":"\u5355\u4E00\u7EC4\u4EF6","form.attribute.component.option.single.description":"\u6700\u9002\u5408\u7684\u5BF9\u5B8C\u6574\u5730\u5740\uFF0C\u4E3B\u8981\u4FE1\u606F\u7B49\u5B57\u6BB5\u8FDB\u884C\u5206\u7EC4...","form.attribute.item.customColumnName":"\u81EA\u5B9A\u4E49\u5217\u540D\u79F0","form.attribute.item.customColumnName.description":"\u4FEE\u6539\u6570\u636E\u5E93\u5217\u540D\uFF0C\u4F7F\u5F97API\u8FD4\u56DE\u66F4\u5BB9\u6613\u7406\u89E3\u3002","form.attribute.item.defineRelation.fieldName":"\u5B57\u6BB5\u540D\u79F0","form.attribute.item.enumeration.graphql":"GraphQL \u7684\u540D\u79F0\u91CD\u5199","form.attribute.item.enumeration.graphql.description":"\u5141\u8BB8\u60A8\u8986\u76D6 GraphQL \u7684\u9ED8\u8BA4\u751F\u6210\u540D\u79F0","form.attribute.item.enumeration.placeholder":`\u4F8B\u5982:
morning
noon
evening`,"form.attribute.item.enumeration.rules":"\u503C\uFF08\u6BCF\u4E2A\u503C\u5360\u4E00\u884C\uFF09","form.attribute.item.maximum":"\u6700\u5927\u503C","form.attribute.item.maximumLength":"\u6700\u5927\u957F\u5EA6","form.attribute.item.minimum":"\u6700\u5C0F\u503C","form.attribute.item.minimumLength":"\u6700\u5C0F\u957F\u5EA6","form.attribute.item.number.type":"\u6570\u5B57\u683C\u5F0F","form.attribute.item.number.type.biginteger":"big integer (\u4F8B\u5982: 123456789)","form.attribute.item.number.type.decimal":"decimal (\u4F8B\u5982: 2.22)","form.attribute.item.number.type.float":"float (\u4F8B\u5982: 3.33333333)","form.attribute.item.number.type.integer":"integer (\u4F8B\u5982: 10)","form.attribute.item.privateField":"\u79C1\u6709\u5B57\u6BB5","form.attribute.item.privateField.description":"\u8BE5\u5B57\u6BB5\u4E0D\u4F1A\u663E\u793A\u5728 API \u8BF7\u6C42\u7684\u54CD\u5E94\u4E2D","form.attribute.item.requiredField":"\u5FC5\u987B\u7684","form.attribute.item.requiredField.description":"\u5982\u679C\u6B64\u5B57\u6BB5\u4E3A\u7A7A\uFF0C\u5219\u65E0\u6CD5\u521B\u5EFA\u5B57\u6BB5\u3002","form.attribute.item.uniqueField":"\u552F\u4E00\u7684","form.attribute.item.uniqueField.description":"\u5982\u679C\u5B58\u5728\u5177\u6709\u76F8\u540C\u5185\u5BB9\u7684\u73B0\u6709\u6761\u76EE\uFF0C\u5219\u65E0\u6CD5\u521B\u5EFA\u6761\u76EE\u3002","form.attribute.media.option.multiple":"\u591A\u79CD\u5A92\u4F53","form.attribute.media.option.multiple.description":"\u6700\u9002\u5408\u7684\u6ED1\u5757\uFF0C\u8F6C\u76D8\u6216\u591A\u4E2A\u6587\u4EF6\u4E0B\u8F7D","form.attribute.media.option.single":"\u5355\u4E00\u7684\u5A92\u4F53","form.attribute.media.option.single.description":"\u6700\u9002\u5408\u7684\u5934\u50CF\uFF0C\u4E2A\u4EBA\u8D44\u6599\u56FE\u7247\u6216\u5C01\u9762","form.attribute.settings.default":"\u9ED8\u8BA4\u503C","form.attribute.text.option.long-text":"\u8F83\u957F\u7684\u6587\u5B57","form.attribute.text.option.long-text.description":"\u6700\u9002\u5408\u7684\u63CF\u8FF0\uFF0C\u4F20\u8BB0\u3002\u2028\u7CBE\u786E\u641C\u7D22\u5DF2\u7981\u7528\u3002","form.attribute.text.option.short-text":"\u8F83\u77ED\u7684\u6587\u5B57","form.attribute.text.option.short-text.description":"\u6700\u9002\u5408\u7684\u6807\u9898\uFF0C\u540D\u79F0\uFF0C\u94FE\u63A5\uFF08URL\uFF09\u3002\u5B83\u8FD8\u53EF\u4EE5\u5728\u5B57\u6BB5\u8FDB\u884C\u7CBE\u786E\u641C\u7D22\u3002","form.button.add-components-to-dynamiczone":"\u5C06\u7EC4\u4EF6\u6DFB\u52A0\u5230\u533A\u57DF","form.button.add-field":"\u6DFB\u52A0\u53E6\u4E00\u4E2A\u5B57\u6BB5","form.button.add-first-field-to-created-component":"\u6DFB\u52A0\u7B2C\u4E00\u4E2A\u5B57\u6BB5\u5230\u8FD9\u4E2A\u7EC4\u4EF6","form.button.add.field.to.component":"\u5411\u8BE5\u7EC4\u4EF6\u6DFB\u52A0\u53E6\u4E00\u4E2A\u5B57\u6BB5","form.button.cancel":"\u53D6\u6D88","form.button.configure-component":"\u914D\u7F6E\u7EC4\u4EF6","form.button.configure-view":"\u914D\u7F6E\u89C6\u56FE","form.button.select-component":"\u9009\u62E9\u4E00\u4E2A\u7EC4\u4EF6",from:o,"modalForm.attribute.form.base.name.description":"\u5C5E\u6027\u540D\u79F0\u4E0D\u5141\u8BB8\u4F7F\u7528\u7A7A\u683C","modalForm.attributes.select-component":"\u9009\u62E9\u4E00\u4E2A\u7EC4\u4EF6","modalForm.attributes.select-components":"\u9009\u62E9\u7EC4\u4EF6","modalForm.component.header-create":"\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6","modalForm.components.create-component.category.label":"\u9009\u62E9\u4E00\u4E2A\u7C7B\u522B\u6216\u8F93\u5165\u540D\u79F0\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7C7B\u522B","modalForm.components.icon.label":"\u56FE\u6807","modalForm.editCategory.base.name.description":"\u7C7B\u522B\u540D\u79F0\u4E0D\u5141\u8BB8\u6709\u7A7A\u683C","modalForm.header-edit":"\u7F16\u8F91 {name}","modalForm.header.categories":"\u7C7B\u522B","modalForm.header.back":"\u540E\u9000","modalForm.sub-header.addComponentToDynamicZone":"\u5C06\u65B0\u7EC4\u4EF6\u6DFB\u52A0\u5230\u52A8\u6001\u533A\u57DF","modalForm.sub-header.attribute.create":"\u6DFB\u52A0\u65B0\u7684 {type} \u5B57\u6BB5","modalForm.sub-header.attribute.create.step":"\u6DFB\u52A0\u65B0\u7684\u7EC4\u4EF6 ({step}/2)","modalForm.sub-header.attribute.edit":"\u7F16\u8F91 {name}","modalForm.sub-header.chooseAttribute.collectionType":"\u4E3A\u60A8\u7684 Content Type \u9009\u62E9\u4E00\u4E2A\u5B57\u6BB5","modalForm.sub-header.chooseAttribute.component":"\u4E3A\u60A8\u7684\u7EC4\u4EF6\u9009\u62E9\u4E00\u4E2A\u5B57\u6BB5","modalForm.collectionType.header-create":"\u521B\u5EFA\u4E00\u4E2A\u96C6\u5408\u7C7B\u578B","modelPage.attribute.relationWith":"\u5173\u8054","notification.info.autoreaload-disable":"\u8981\u4F7F\u7528\u6B64\u63D2\u4EF6\uFF0C\u9700\u8981\u81EA\u52A8\u91CD\u8F7D\u529F\u80FD\u3002\u8BF7\u4F7F\u7528 `strapi develop` \u542F\u52A8\u670D\u52A1","notification.info.creating.notSaved":"\u5728\u521B\u5EFA\u65B0\u7684\u5185\u5BB9\u7C7B\u578B\u6216\u7EC4\u4EF6\u4E4B\u524D\uFF0C\u8BF7\u4FDD\u5B58\u60A8\u7684\u5DE5\u4F5C","plugin.description.long":"\u7ED9\u4F60\u7684 API \u7684\u6570\u636E\u7ED3\u6784\u5EFA\u6A21. \u5FEB\u901F\u7684\u521B\u9020\u65B0\u7684\u5B57\u6BB5(fields)\u548C\u5173\u7CFB(relations)\u3002\u5C06\u4F1A\u81EA\u52A8\u5728\u9879\u76EE\u4E2D\u521B\u5EFA\u548C\u66F4\u65B0\u6587\u4EF6\u3002","plugin.description.short":"\u7ED9\u4F60\u7684 API \u7684\u6570\u636E\u7ED3\u6784\u5EFA\u6A21","popUpForm.navContainer.advanced":"\u9AD8\u7EA7\u8BBE\u7F6E","popUpForm.navContainer.base":"\u57FA\u7840\u8BBE\u7F6E","popUpWarning.bodyMessage.cancel-modifications":"\u60A8\u786E\u5B9A\u8981\u53D6\u6D88\u4FEE\u6539\u5417\uFF1F","popUpWarning.bodyMessage.cancel-modifications.with-components":"\u60A8\u786E\u5B9A\u8981\u53D6\u6D88\u4FEE\u6539\u5417\uFF1F\u67D0\u4E9B\u7EC4\u4EF6\u5DF2\u521B\u5EFA\u6216\u5DF2\u4FEE\u6539\u4E86...","popUpWarning.bodyMessage.category.delete":"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7C7B\u522B\u5417\uFF1F\u6240\u6709\u7EC4\u4EF6\u4E5F\u5C06\u88AB\u5220\u9664\u3002","popUpWarning.bodyMessage.component.delete":"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7EC4\u4EF6\u5417\uFF1F","popUpWarning.bodyMessage.contentType.delete":"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64 Content Type \u5417?","prompt.unsaved":"\u60A8\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F\u60A8\u6240\u6709\u7684\u4FEE\u6539\u90FD\u5C06\u4E22\u5931\u3002","relation.attributeName.placeholder":"\u4F8B\u5982: author, category, tag","relation.manyToMany":"\u6709\u5E76\u5C5E\u4E8E\u8BB8\u591A","relation.manyToOne":"\u6709\u5F88\u591A","relation.manyWay":"\u6709\u5F88\u591A","relation.oneToMany":"\u5C5E\u4E8E\u5F88\u591A","relation.oneToOne":"\u6709\u4E00\u4E2A","relation.oneWay":"\u6709\u4E00\u4E2A"}}}]);
