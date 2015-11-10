$wnd.gwtmaterialdemo.runAsyncCallback24("function ShadowPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(532, 52, $intern_39, ShadowPresenter);\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowPresenter', 532);\nfunction ShadowView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_6(new ShadowView_BinderImpl$Widgets));\n}\n\ndefineClass(670, 56, $intern_40, ShadowView);\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowView', 670);\nfunction ShadowView_BinderImpl(){\n}\n\ndefineClass(878, 1, {}, ShadowView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowView_BinderImpl', 878);\nfunction $build_f_MaterialPanel1_6(this$static){\n  var f_MaterialPanel1, f_HTMLPanel2, __attachRecord__, f_MaterialTitle3, f_MaterialRow4, f_MaterialTitle10, f_MaterialImage11, f_MaterialColumn5, f_MaterialColumn6, f_MaterialColumn7, f_MaterialColumn8, f_MaterialColumn9;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_HTMLPanel2 = new HTMLPanel($html1_6(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3).html) , __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel2.element)) , $get_0(this$static.domId0Element) , $get_0(this$static.domId1Element) , $get_0(this$static.domId2Element) , $get_0(this$static.domId3Element) , __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), 'Panels') , $setText_4(f_MaterialTitle3.paragraph, \"By adding shadow='1' to any material panel, material row, material column, material card, you can easily apply a shadow to that element\") , f_MaterialTitle3), $get_0(this$static.domId0Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialRow4 = new MaterialRow , $add_13(f_MaterialRow4, (f_MaterialColumn5 = new MaterialColumn , setStyleName(f_MaterialColumn5.element, 'KVUXRGB-n-a', true) , $setBackgroundColor(f_MaterialColumn5.colorsMixin, 'white') , $setShadow(f_MaterialColumn5.shadowMixin, 1) , $setWaves(f_MaterialColumn5, ($clinit_WavesType() , DEFAULT_5)) , $setGrid(f_MaterialColumn5.gridMixin, 's12 m12 l2') , f_MaterialColumn5)) , $add_13(f_MaterialRow4, (f_MaterialColumn6 = new MaterialColumn , setStyleName(f_MaterialColumn6.element, 'KVUXRGB-n-a', true) , $setBackgroundColor(f_MaterialColumn6.colorsMixin, 'white') , $setShadow(f_MaterialColumn6.shadowMixin, 2) , $setWaves(f_MaterialColumn6, RED) , $setGrid(f_MaterialColumn6.gridMixin, 's12 m12 l2') , f_MaterialColumn6)) , $add_13(f_MaterialRow4, (f_MaterialColumn7 = new MaterialColumn , setStyleName(f_MaterialColumn7.element, 'KVUXRGB-n-a', true) , $setBackgroundColor(f_MaterialColumn7.colorsMixin, 'white') , $setShadow(f_MaterialColumn7.shadowMixin, 3) , $setWaves(f_MaterialColumn7, TEAL) , $setGrid(f_MaterialColumn7.gridMixin, 's12 m12 l2') , f_MaterialColumn7)) , $add_13(f_MaterialRow4, (f_MaterialColumn8 = new MaterialColumn , setStyleName(f_MaterialColumn8.element, 'KVUXRGB-n-a', true) , $setBackgroundColor(f_MaterialColumn8.colorsMixin, 'white') , $setShadow(f_MaterialColumn8.shadowMixin, 4) , $setWaves(f_MaterialColumn8, YELLOW) , $setGrid(f_MaterialColumn8.gridMixin, 's12 m12 l2') , f_MaterialColumn8)) , $add_13(f_MaterialRow4, (f_MaterialColumn9 = new MaterialColumn , setStyleName(f_MaterialColumn9.element, 'KVUXRGB-n-a', true) , $setBackgroundColor(f_MaterialColumn9.colorsMixin, 'white') , $setShadow(f_MaterialColumn9.shadowMixin, 5) , $setWaves(f_MaterialColumn9, PURPLE) , $setGrid(f_MaterialColumn9.gridMixin, 's12 m12 l2') , f_MaterialColumn9)) , f_MaterialRow4), $get_0(this$static.domId1Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialTitle10 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle10.header), 'Any Material Elements') , $setText_4(f_MaterialTitle10.paragraph, \"You can directly add shadows on any material widgets by adding: addStyleNames='z-depth-1' to the ui binder widget.\") , f_MaterialTitle10), $get_0(this$static.domId2Element)) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialImage11 = new MaterialImage , setStyleName(f_MaterialImage11.element, 'z-depth-1', true) , $setResource(f_MaterialImage11, (new MaterialResources_default_InlineClientBundleGenerator , $clinit_MaterialResources_default_InlineClientBundleGenerator$imageInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator() , image_0)) , f_MaterialImage11), $get_0(this$static.domId3Element)) , f_HTMLPanel2));\n  return f_MaterialPanel1;\n}\n\nfunction ShadowView_BinderImpl$Widgets(){\n  this.style_0 = (new ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_14);\n  $ensureInjected_19(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n}\n\ndefineClass(879, 1, {}, ShadowView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowView_BinderImpl/Widgets', 879);\nfunction ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1114, 1, {}, ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_14;\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1114);\nfunction $ensureInjected_19(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '.KVUXRGB-n-a{height:200px;margin:2%}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1115, 1, {}, ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_25(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_shadow_ShadowView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.shadow', 'ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1115);\nfunction $clinit_ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_14 = new ShadowView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html1_6(arg0, arg1, arg2, arg3){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += '\\'><\\/span> <pre>\\n        &lt;m:MaterialColumn backgroundColor=\"white\" grid=\"s12 m12 l2\" shadow=\"1\" /&gt;\\n        &lt;m:MaterialColumn backgroundColor=\"white\" grid=\"s12 m12 l2\" shadow=\"2\" /&gt;\\n        &lt;m:MaterialColumn backgroundColor=\"white\" grid=\"s12 m12 l2\" shadow=\"3\" /&gt;\\n        &lt;m:MaterialColumn backgroundColor=\"white\" grid=\"s12 m12 l2\" shadow=\"4\" /&gt;\\n        &lt;m:MaterialColumn backgroundColor=\"white\" grid=\"s12 m12 l2\" shadow=\"5\" /&gt;\\n      <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += '\\'><\\/span> <pre>\\n        &lt;m:MaterialImage resource=\"{res.image}\" addStyleNames=\"z-depth-1\"/&gt;\\n      <\\/pre>';\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$_annotation$$none$$) {\n    result = new ShadowPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowView$_annotation$$none$$) {\n    result = new ShadowView(new ShadowView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowView$_annotation$$none$$;\n}\n\ndefineClass(491, 1, $intern_53);\n_.onSuccess_0 = function onSuccess_23(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$shadow$ShadowPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(24);\n\n//# sourceURL=gwtmaterialdemo-24.js\n")
