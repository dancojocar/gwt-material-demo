$wnd.gwtmaterialdemo.runAsyncCallback23("function $clinit_IconSize(){\n  $clinit_IconSize = emptyMethod;\n  TINY = new IconSize('TINY', 0, 'tiny');\n  SMALL = new IconSize('SMALL', 1, 'small');\n  MEDIUM_0 = new IconSize('MEDIUM', 2, 'medium');\n  LARGE_0 = new IconSize('LARGE', 3, 'large');\n}\n\nfunction IconSize(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_32(){\n  $clinit_IconSize();\n  return initValues(getClassLiteralForArray(Lgwt_material_design_client_constants_IconSize_2_classLit, 1), $intern_4, 183, 0, [TINY, SMALL, MEDIUM_0, LARGE_0]);\n}\n\ndefineClass(183, 15, {28:1, 183:1, 120:1, 5:1, 22:1, 15:1}, IconSize);\n_.getCssName = function getCssName_71(){\n  return this.cssClass;\n}\n;\nvar LARGE_0, MEDIUM_0, SMALL, TINY;\nvar Lgwt_material_design_client_constants_IconSize_2_classLit = createForEnum('gwt.material.design.client.constants', 'IconSize', 183, values_32);\nfunction $setIconSize(this$static, size_0){\n  $setStyle(this$static.sizeMixin, size_0.cssClass);\n}\n\nfunction IconsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(531, 52, $intern_39, IconsPresenter);\nvar Lgwt_material_design_demo_client_application_style_icons_IconsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsPresenter', 531);\nfunction IconsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_5(new IconsView_BinderImpl$Widgets));\n}\n\ndefineClass(669, 56, $intern_40, IconsView);\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView', 669);\nfunction IconsView_BinderImpl(){\n}\n\ndefineClass(876, 1, {}, IconsView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView_BinderImpl', 876);\nfunction $build_f_MaterialPanel1_5(this$static){\n  var f_MaterialPanel1, f_HTMLPanel2, __attachRecord__, f_MaterialTitle3, f_MaterialIcon4, f_MaterialTitle5, f_MaterialRow6, f_MaterialTitle19, f_MaterialLink20, f_MaterialTitle21, f_Frame22, f_MaterialColumn7, f_MaterialIcon8, f_MaterialLabel9, f_MaterialColumn10, f_MaterialIcon11, f_MaterialLabel12, f_MaterialColumn13, f_MaterialIcon14, f_MaterialLabel15, f_MaterialColumn16, f_MaterialIcon17, f_MaterialLabel18;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_HTMLPanel2 = new HTMLPanel($html1_5(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7).html) , __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel2.element)) , $get_0(this$static.domId0Element) , $get_0(this$static.domId1Element) , $get_0(this$static.domId2Element) , $get_0(this$static.domId3Element) , $get_0(this$static.domId4Element) , $get_0(this$static.domId5Element) , $get_0(this$static.domId6Element) , $get_0(this$static.domId7Element) , __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), 'Usage') , $setText_4(f_MaterialTitle3.paragraph, 'Using MaterialIcon Widget you can easily make it by adding the lines below. Just set the icon attribute and indicate which icon you want to display. Please refer below about the list of icon.') , f_MaterialTitle3), $get_0(this$static.domId0Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialIcon4 = new MaterialIcon , $setIconType_2(f_MaterialIcon4, ($clinit_IconType() , ROTATION_3D)) , f_MaterialIcon4), $get_0(this$static.domId1Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle5 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle5.header), 'Sizes') , $setText_4(f_MaterialTitle5.paragraph, 'To control the size of the icon, just set size attribute in your MaterialIcon widget.') , f_MaterialTitle5), $get_0(this$static.domId2Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialRow6 = new MaterialRow , $add_13(f_MaterialRow6, (f_MaterialColumn7 = new MaterialColumn , $add_13(f_MaterialColumn7, (f_MaterialIcon8 = new MaterialIcon , $setIconSize(f_MaterialIcon8, ($clinit_IconSize() , TINY)) , $setIconType_2(f_MaterialIcon8, POLYMER) , f_MaterialIcon8)) , $add_13(f_MaterialColumn7, (f_MaterialLabel9 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel9.directionalTextHelper, 'Tiny') , f_MaterialLabel9)) , setStyleName(f_MaterialColumn7.element, 'center-align', true) , $setGrid(f_MaterialColumn7.gridMixin, 's4 m2') , f_MaterialColumn7)) , $add_13(f_MaterialRow6, (f_MaterialColumn10 = new MaterialColumn , $add_13(f_MaterialColumn10, (f_MaterialIcon11 = new MaterialIcon , $setIconSize(f_MaterialIcon11, SMALL) , $setIconType_2(f_MaterialIcon11, POLYMER) , f_MaterialIcon11)) , $add_13(f_MaterialColumn10, (f_MaterialLabel12 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel12.directionalTextHelper, 'Small') , f_MaterialLabel12)) , setStyleName(f_MaterialColumn10.element, 'center-align', true) , $setGrid(f_MaterialColumn10.gridMixin, 's4 m2') , f_MaterialColumn10)) , $add_13(f_MaterialRow6, (f_MaterialColumn13 = new MaterialColumn , $add_13(f_MaterialColumn13, (f_MaterialIcon14 = new MaterialIcon , $setIconSize(f_MaterialIcon14, MEDIUM_0) , $setIconType_2(f_MaterialIcon14, POLYMER) , f_MaterialIcon14)) , $add_13(f_MaterialColumn13, (f_MaterialLabel15 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel15.directionalTextHelper, 'Medium') , f_MaterialLabel15)) , setStyleName(f_MaterialColumn13.element, 'center-align', true) , $setGrid(f_MaterialColumn13.gridMixin, 's4 m2') , f_MaterialColumn13)) , $add_13(f_MaterialRow6, (f_MaterialColumn16 = new MaterialColumn , $add_13(f_MaterialColumn16, (f_MaterialIcon17 = new MaterialIcon , $setIconSize(f_MaterialIcon17, LARGE_0) , $setIconType_2(f_MaterialIcon17, POLYMER) , f_MaterialIcon17)) , $add_13(f_MaterialColumn16, (f_MaterialLabel18 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel18.directionalTextHelper, 'Large') , f_MaterialLabel18)) , setStyleName(f_MaterialColumn16.element, 'center-align', true) , $setGrid(f_MaterialColumn16.gridMixin, 's4 m2') , f_MaterialColumn16)) , setStyleName(f_MaterialRow6.element, 'valign-wrapper', true) , f_MaterialRow6), $get_0(this$static.domId3Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle19 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle19.header), 'Icon inside MaterialLink') , $setText_4(f_MaterialTitle19.paragraph, 'You can add in your material link an icon instance by adding icon attribute') , f_MaterialTitle19), $get_0(this$static.domId4Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialLink20 = new MaterialLink , $setIconPosition(f_MaterialLink20, ($clinit_IconPosition() , LEFT_4)) , f_MaterialLink20.span_0.setText('I love Material Design') , $add_13(f_MaterialLink20, f_MaterialLink20.span_0) , $setTextColor(f_MaterialLink20.colorsMixin, 'red') , $setFontSize_0(f_MaterialLink20.fontSizeMixin, '2em') , $setIconType(f_MaterialLink20, FAVORITE) , f_MaterialLink20), $get_0(this$static.domId5Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle21 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle21.header), 'Get Icons from Google Material Design') , f_MaterialTitle21), $get_0(this$static.domId6Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_Frame22 = new Frame_0 , $setStyleName_0(f_Frame22, ($build_style_3() , 'KVUXRGB-m-a'), true) , f_Frame22.element.style['height'] = '700px' , f_Frame22.element.style['width'] = '100%' , $setSrc(f_Frame22.element, 'https://www.google.com/design/icons/#ic_3d_rotation') , f_Frame22), $get_0(this$static.domId7Element)) , f_HTMLPanel2));\n  return f_MaterialPanel1;\n}\n\nfunction $build_style_3(){\n  var style;\n  style = (new IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_13);\n  $ensureInjected_18(style);\n  return style;\n}\n\nfunction IconsView_BinderImpl$Widgets(){\n  $build_style_3();\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n}\n\ndefineClass(877, 1, {}, IconsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView_BinderImpl/Widgets', 877);\nfunction IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1112, 1, {}, IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_13;\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1112);\nfunction $ensureInjected_18(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '.KVUXRGB-m-a{border:1px solid #e9e9e9}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1113, 1, {}, IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_24(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1113);\nfunction $clinit_IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_13 = new IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html1_5(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += '\\'><\\/span> <pre>\\n        &lt;m:MaterialIcon iconType=\"3d_rotation\" /&gt;\\n      <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += '\\'><\\/span> <pre>\\n        &lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"TINY\"/&gt;\\n        &lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"SMALL\"/&gt;\\n        &lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"medium\"/&gt;\\n        &lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"LARGE\"/&gt;\\n      <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += '\\'><\\/span> <pre>\\n        &lt;m:MaterialLink fontSize=\"2em\" text=\"I love Material Design\" textColor=\"red\" iconType=\"favorite\" iconPosition=\"LEFT\"/&gt;\\n      <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$) {\n    result = new IconsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$) {\n    result = new IconsView(new IconsView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$;\n}\n\ndefineClass(489, 1, $intern_53);\n_.onSuccess_0 = function onSuccess_22(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(23);\n\n//# sourceURL=gwtmaterialdemo-23.js\n")
