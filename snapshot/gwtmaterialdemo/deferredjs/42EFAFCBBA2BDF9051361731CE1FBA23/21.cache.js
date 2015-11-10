$wnd.gwtmaterialdemo.runAsyncCallback21("function $setOffset(this$static){\n  var cssName, val, val$array, val$index, val$max;\n  this$static.offset != null && !!this$static.offset.length && $removeStyleName(this$static.uiObject, this$static.offset);\n  cssName = '';\n  for (val$array = $split('s6', ' ', 0) , val$index = 0 , val$max = val$array.length; val$index < val$max; ++val$index) {\n    val = val$array[val$index];\n    cssName = cssName + ' offset-' + val;\n  }\n  this$static.offset = cssName;\n  $addStyleName(this$static.uiObject, cssName);\n}\n\nfunction GridPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(529, 52, $intern_40, GridPresenter);\nvar Lgwt_material_design_demo_client_application_style_grid_GridPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridPresenter', 529);\nfunction GridView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_17(new GridView_BinderImpl$Widgets));\n}\n\ndefineClass(667, 56, $intern_41, GridView);\nvar Lgwt_material_design_demo_client_application_style_grid_GridView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridView', 667);\nfunction GridView_BinderImpl(){\n}\n\ndefineClass(870, 1, {}, GridView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_style_grid_GridView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridView_BinderImpl', 870);\nfunction $build_f_HTMLPanel1_17(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialRow3, f_MaterialLabel28, f_MaterialLabel30, f_MaterialTitle31, f_MaterialRow32, f_MaterialRow36, f_MaterialTitle43, f_MaterialRow44, f_MaterialTitle51, f_MaterialRow52, f_MaterialTitle57, f_MaterialRow58, f_MaterialColumn4, f_Span5, f_MaterialColumn6, f_Span7, f_MaterialColumn8, f_Span9, f_MaterialColumn10, f_Span11, f_MaterialColumn12, f_Span13, f_MaterialColumn14, f_Span15, f_MaterialColumn16, f_Span17, f_MaterialColumn18, f_Span19, f_MaterialColumn20, f_Span21, f_MaterialColumn22, f_Span23, f_MaterialColumn24, f_Span25, f_MaterialColumn26, f_Span27, sb, f_MaterialColumn33, f_HTMLPanel34, __attachRecord___0, f_Span35, f_MaterialColumn37, f_HTMLPanel38, __attachRecord___1, f_Span39, f_MaterialColumn40, f_HTMLPanel41, __attachRecord___2, f_Span42, f_MaterialColumn45, f_HTMLPanel46, __attachRecord___3, f_Span47, f_MaterialColumn48, f_HTMLPanel49, __attachRecord___4, f_Span50, f_MaterialColumn53, f_Span54, f_MaterialColumn55, f_Span56, f_MaterialColumn59, f_MaterialImage60, f_MaterialTitle61, f_MaterialColumn62, f_MaterialImage63, f_MaterialTitle64, f_MaterialColumn65, f_MaterialImage66, f_MaterialTitle67;\n  f_HTMLPanel1 = new HTMLPanel($html7_1(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId8, this$static.domId11, this$static.domId12, this$static.domId15, this$static.domId16, this$static.domId17, this$static.domId18).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId15Element);\n  $get_0(this$static.domId16Element);\n  $get_0(this$static.domId17Element);\n  $get_0(this$static.domId18Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), '12 Columns') , $setText_4(f_MaterialTitle2.paragraph, 'Our standard grid has 12 columns. No matter the size of the browser, each of these columns will always have an equal width.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow3 = new MaterialRow , $add_13(f_MaterialRow3, (f_MaterialColumn4 = new MaterialColumn , $add_13(f_MaterialColumn4, (f_Span5 = new Span , f_Span5.setText('1') , setStyleName(f_Span5.element, 'flow-text', true) , f_Span5)) , setStyleName(f_MaterialColumn4.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn4.gridMixin, 's1') , f_MaterialColumn4)) , $add_13(f_MaterialRow3, (f_MaterialColumn6 = new MaterialColumn , $add_13(f_MaterialColumn6, (f_Span7 = new Span , f_Span7.setText('2') , setStyleName(f_Span7.element, 'flow-text', true) , f_Span7)) , setStyleName(f_MaterialColumn6.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn6.gridMixin, 's1') , f_MaterialColumn6)) , $add_13(f_MaterialRow3, (f_MaterialColumn8 = new MaterialColumn , $add_13(f_MaterialColumn8, (f_Span9 = new Span , f_Span9.setText('3') , setStyleName(f_Span9.element, 'flow-text', true) , f_Span9)) , setStyleName(f_MaterialColumn8.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn8.gridMixin, 's1') , f_MaterialColumn8)) , $add_13(f_MaterialRow3, (f_MaterialColumn10 = new MaterialColumn , $add_13(f_MaterialColumn10, (f_Span11 = new Span , f_Span11.setText('4') , setStyleName(f_Span11.element, 'flow-text', true) , f_Span11)) , setStyleName(f_MaterialColumn10.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn10.gridMixin, 's1') , f_MaterialColumn10)) , $add_13(f_MaterialRow3, (f_MaterialColumn12 = new MaterialColumn , $add_13(f_MaterialColumn12, (f_Span13 = new Span , f_Span13.setText('5') , setStyleName(f_Span13.element, 'flow-text', true) , f_Span13)) , setStyleName(f_MaterialColumn12.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn12.gridMixin, 's1') , f_MaterialColumn12)) , $add_13(f_MaterialRow3, (f_MaterialColumn14 = new MaterialColumn , $add_13(f_MaterialColumn14, (f_Span15 = new Span , f_Span15.setText('6') , setStyleName(f_Span15.element, 'flow-text', true) , f_Span15)) , setStyleName(f_MaterialColumn14.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn14.gridMixin, 's1') , f_MaterialColumn14)) , $add_13(f_MaterialRow3, (f_MaterialColumn16 = new MaterialColumn , $add_13(f_MaterialColumn16, (f_Span17 = new Span , f_Span17.setText('7') , setStyleName(f_Span17.element, 'flow-text', true) , f_Span17)) , setStyleName(f_MaterialColumn16.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn16.gridMixin, 's1') , f_MaterialColumn16)) , $add_13(f_MaterialRow3, (f_MaterialColumn18 = new MaterialColumn , $add_13(f_MaterialColumn18, (f_Span19 = new Span , f_Span19.setText('8') , setStyleName(f_Span19.element, 'flow-text', true) , f_Span19)) , setStyleName(f_MaterialColumn18.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn18.gridMixin, 's1') , f_MaterialColumn18)) , $add_13(f_MaterialRow3, (f_MaterialColumn20 = new MaterialColumn , $add_13(f_MaterialColumn20, (f_Span21 = new Span , f_Span21.setText('9') , setStyleName(f_Span21.element, 'flow-text', true) , f_Span21)) , setStyleName(f_MaterialColumn20.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn20.gridMixin, 's1') , f_MaterialColumn20)) , $add_13(f_MaterialRow3, (f_MaterialColumn22 = new MaterialColumn , $add_13(f_MaterialColumn22, (f_Span23 = new Span , f_Span23.setText('10') , setStyleName(f_Span23.element, 'flow-text', true) , f_Span23)) , setStyleName(f_MaterialColumn22.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn22.gridMixin, 's1') , f_MaterialColumn22)) , $add_13(f_MaterialRow3, (f_MaterialColumn24 = new MaterialColumn , $add_13(f_MaterialColumn24, (f_Span25 = new Span , f_Span25.setText('11') , setStyleName(f_Span25.element, 'flow-text', true) , f_Span25)) , setStyleName(f_MaterialColumn24.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn24.gridMixin, 's1') , f_MaterialColumn24)) , $add_13(f_MaterialRow3, (f_MaterialColumn26 = new MaterialColumn , $add_13(f_MaterialColumn26, (f_Span27 = new Span , f_Span27.setText('12') , setStyleName(f_Span27.element, 'flow-text', true) , f_Span27)) , setStyleName(f_MaterialColumn26.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn26.gridMixin, 's1') , f_MaterialColumn26)) , f_MaterialRow3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialLabel28 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel28.directionalTextHelper, 'To get a feel of how the grid is used in HTML. Take a look at this code below which will produce a similar result as the one above.') , f_MaterialLabel28), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, new HTMLPanel((sb = new StringBuilder , sb.string += '<pre>\\n        &lt;m:MaterialRow&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 1 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 2 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 3 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 4 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 5 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 6 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 7 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 8 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 9 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 10 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 11 &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s1\" &gt; 12 &lt;/m:MaterialColumn&gt;\\n        &lt;/m:MaterialRow&gt;\\n      <\\/pre>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialLabel30 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel30.directionalTextHelper, \"Note: For now, just know that the s1 stands for small-1 which in plain English means '1 column on small screens'.\") , f_MaterialLabel30), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle31 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle31.header), 'Columns live inside Rows') , $setText_4(f_MaterialTitle31.paragraph, 'Remember when you are creating your layout that all columns must be contained inside a row and that you must add the col class to your inner divs to make them into columns') , f_MaterialTitle31), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow32 = new MaterialRow , $add_13(f_MaterialRow32, (f_MaterialColumn33 = new MaterialColumn , $add_13(f_MaterialColumn33, (f_HTMLPanel34 = new HTMLPanel($html2_4(this$static.domId7).html) , __attachRecord___0 = attachToDom(f_HTMLPanel34.element) , $get_0(this$static.domId7Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement_1(f_HTMLPanel34, (f_Span35 = new Span , f_Span35.setText('This div is 12-columns wide on all screen sizes') , setStyleName(f_Span35.element, 'flow-text', true) , f_Span35), $get_0(this$static.domId7Element)) , f_HTMLPanel34)) , setStyleName(f_MaterialColumn33.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn33.gridMixin, 's12') , f_MaterialColumn33)) , f_MaterialRow32), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow36 = new MaterialRow , $add_13(f_MaterialRow36, (f_MaterialColumn37 = new MaterialColumn , $add_13(f_MaterialColumn37, (f_HTMLPanel38 = new HTMLPanel($html3_2(this$static.domId9).html) , __attachRecord___1 = attachToDom(f_HTMLPanel38.element) , $get_0(this$static.domId9Element) , __attachRecord___1.origParent?$insertBefore(__attachRecord___1.origParent, __attachRecord___1.element, __attachRecord___1.origSibling):orphan(__attachRecord___1.element) , $addAndReplaceElement_1(f_HTMLPanel38, (f_Span39 = new Span , f_Span39.setText('6-columns (one-half)') , setStyleName(f_Span39.element, 'flow-text', true) , f_Span39), $get_0(this$static.domId9Element)) , f_HTMLPanel38)) , setStyleName(f_MaterialColumn37.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn37.gridMixin, 's6') , f_MaterialColumn37)) , $add_13(f_MaterialRow36, (f_MaterialColumn40 = new MaterialColumn , $add_13(f_MaterialColumn40, (f_HTMLPanel41 = new HTMLPanel($html4_3(this$static.domId10).html) , __attachRecord___2 = attachToDom(f_HTMLPanel41.element) , $get_0(this$static.domId10Element) , __attachRecord___2.origParent?$insertBefore(__attachRecord___2.origParent, __attachRecord___2.element, __attachRecord___2.origSibling):orphan(__attachRecord___2.element) , $addAndReplaceElement_1(f_HTMLPanel41, (f_Span42 = new Span , f_Span42.setText('6-columns (one-half)') , setStyleName(f_Span42.element, 'flow-text', true) , f_Span42), $get_0(this$static.domId10Element)) , f_HTMLPanel41)) , setStyleName(f_MaterialColumn40.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn40.gridMixin, 's6') , f_MaterialColumn40)) , f_MaterialRow36), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle43 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle43.header), 'Offsets') , $setText_4(f_MaterialTitle43.paragraph, 'To offset, simply add offset-s2 to the class where s signifies the screen class-prefix (s = small, m = medium, l = large) and the number after is the number of columns you want to offset by.') , f_MaterialTitle43), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow44 = new MaterialRow , $add_13(f_MaterialRow44, (f_MaterialColumn45 = new MaterialColumn , $add_13(f_MaterialColumn45, (f_HTMLPanel46 = new HTMLPanel($html5_2(this$static.domId13).html) , __attachRecord___3 = attachToDom(f_HTMLPanel46.element) , $get_0(this$static.domId13Element) , __attachRecord___3.origParent?$insertBefore(__attachRecord___3.origParent, __attachRecord___3.element, __attachRecord___3.origSibling):orphan(__attachRecord___3.element) , $addAndReplaceElement_1(f_HTMLPanel46, (f_Span47 = new Span , f_Span47.setText('This div is 12-columns wide on all screen sizes') , setStyleName(f_Span47.element, 'flow-text', true) , f_Span47), $get_0(this$static.domId13Element)) , f_HTMLPanel46)) , setStyleName(f_MaterialColumn45.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn45.gridMixin, 's12') , f_MaterialColumn45)) , $add_13(f_MaterialRow44, (f_MaterialColumn48 = new MaterialColumn , $add_13(f_MaterialColumn48, (f_HTMLPanel49 = new HTMLPanel($html6_3(this$static.domId14).html) , __attachRecord___4 = attachToDom(f_HTMLPanel49.element) , $get_0(this$static.domId14Element) , __attachRecord___4.origParent?$insertBefore(__attachRecord___4.origParent, __attachRecord___4.element, __attachRecord___4.origSibling):orphan(__attachRecord___4.element) , $addAndReplaceElement_1(f_HTMLPanel49, (f_Span50 = new Span , f_Span50.setText('6-columns (offset-by-6)') , setStyleName(f_Span50.element, 'flow-text', true) , f_Span50), $get_0(this$static.domId14Element)) , f_HTMLPanel49)) , setStyleName(f_MaterialColumn48.element, 'KVUXRGB-k-a', true) , $setGrid(f_MaterialColumn48.gridMixin, 's6') , $setOffset(f_MaterialColumn48.gridMixin) , f_MaterialColumn48)) , f_MaterialRow44), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle51 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle51.header), 'Adding Responsiveness') , $setText_4(f_MaterialTitle51.paragraph, \"In the previous examples, we only defined the size for small screens using 'col s12'. This is fine if we want a fixed layout since the rules propogate upwards. By just saying s12, we are essentially saying 'col s12 m12 l12'. But by explicitly defining the size we can make our website more responsive.\") , f_MaterialTitle51), $get_0(this$static.domId15Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow52 = new MaterialRow , $add_13(f_MaterialRow52, (f_MaterialColumn53 = new MaterialColumn , $add_13(f_MaterialColumn53, (f_Span54 = new Span , f_Span54.setText('I am always full-width (col s12)') , setStyleName(f_Span54.element, 'flow-text', true) , f_Span54)) , setStyleName(f_MaterialColumn53.element, 'KVUXRGB-k-a', true) , $setBackgroundColor(f_MaterialColumn53.colorsMixin, 'teal lighten-2') , $setGrid(f_MaterialColumn53.gridMixin, 's12') , f_MaterialColumn53)) , $add_13(f_MaterialRow52, (f_MaterialColumn55 = new MaterialColumn , $add_13(f_MaterialColumn55, (f_Span56 = new Span , f_Span56.setText('I am full-width on mobile (col s12 m6)') , setStyleName(f_Span56.element, 'flow-text', true) , f_Span56)) , setStyleName(f_MaterialColumn55.element, 'KVUXRGB-k-a', true) , $setBackgroundColor(f_MaterialColumn55.colorsMixin, 'teal lighten-2') , $setGrid(f_MaterialColumn55.gridMixin, 's12 m6') , f_MaterialColumn55)) , f_MaterialRow52), $get_0(this$static.domId16Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle57 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle57.header), 'Example Promotion Table') , $setText_4(f_MaterialTitle57.paragraph, \"If we want 3 divs that are equal size, we define the divs with a width of 4-columns, 4+4+4 = 12, which nicely adds up to 12. Inside those divs, we can put our content. Take our front page content for example. We've modified it slightly for the sake of this example.\") , f_MaterialTitle57), $get_0(this$static.domId17Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow58 = new MaterialRow , $add_13(f_MaterialRow58, (f_MaterialColumn59 = new MaterialColumn , $add_13(f_MaterialColumn59, (f_MaterialImage60 = new MaterialImage , $setResource(f_MaterialImage60, ($clinit_MaterialResources_default_InlineClientBundleGenerator$ic_metaphorInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator_0() , ic_metaphor)) , f_MaterialImage60)) , $add_13(f_MaterialColumn59, (f_MaterialTitle61 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle61.header), 'Material is the metaphor') , $setText_4(f_MaterialTitle61.paragraph, 'The metaphor of material defines the relationship between space and motion. The idea is that the technology is inspired by paper and ink and is utilized to facilitate creativity and innovation. Surfaces and edges provide familiar visual cues that allow users to quickly understand the technology beyond the physical world.') , f_MaterialTitle61)) , $setGrid(f_MaterialColumn59.gridMixin, 's12 m4') , f_MaterialColumn59)) , $add_13(f_MaterialRow58, (f_MaterialColumn62 = new MaterialColumn , $add_13(f_MaterialColumn62, (f_MaterialImage63 = new MaterialImage , $setResource(f_MaterialImage63, ($clinit_MaterialResources_default_InlineClientBundleGenerator$ic_boldInitializer() , ic_bold)) , f_MaterialImage63)) , $add_13(f_MaterialColumn62, (f_MaterialTitle64 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle64.header), 'Bold, graphic, intentional') , $setText_4(f_MaterialTitle64.paragraph, 'Elements and components such as grids, typography, color, and imagery are not only visually pleasing, but also create a sense of hierarchy, meaning, and focus. Emphasis on different actions and components create a visual guide for users.') , f_MaterialTitle64)) , $setGrid(f_MaterialColumn62.gridMixin, 's12 m4') , f_MaterialColumn62)) , $add_13(f_MaterialRow58, (f_MaterialColumn65 = new MaterialColumn , $add_13(f_MaterialColumn65, (f_MaterialImage66 = new MaterialImage , $setResource(f_MaterialImage66, ($clinit_MaterialResources_default_InlineClientBundleGenerator$ic_motionInitializer() , ic_motion)) , f_MaterialImage66)) , $add_13(f_MaterialColumn65, (f_MaterialTitle67 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle67.header), 'Motion provides meaning') , $setText_4(f_MaterialTitle67.paragraph, 'Motion allows the user to draw a parallel between what they see on the screen and in real life. By providing both feedback and familiarity, this allows the user to fully immerse him or herself into unfamiliar technology. Motion contains consistency and continuity in addition to giving users additional subconscious information about objects and transformations.') , f_MaterialTitle67)) , $setGrid(f_MaterialColumn65.gridMixin, 's12 m4') , f_MaterialColumn65)) , f_MaterialRow58), $get_0(this$static.domId18Element));\n  return f_HTMLPanel1;\n}\n\nfunction GridView_BinderImpl$Widgets(){\n  this.style_0 = (new GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_11);\n  $ensureInjected_16(this.style_0);\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  this.domId7 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId14 = $createUniqueId($doc);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId15 = $createUniqueId($doc);\n  this.domId16 = $createUniqueId($doc);\n  this.domId17 = $createUniqueId($doc);\n  this.domId18 = $createUniqueId($doc);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId13Element = new LazyDomElement(this.domId13);\n  this.domId14Element = new LazyDomElement(this.domId14);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId15Element = new LazyDomElement(this.domId15);\n  this.domId16Element = new LazyDomElement(this.domId16);\n  this.domId17Element = new LazyDomElement(this.domId17);\n  this.domId18Element = new LazyDomElement(this.domId18);\n}\n\ndefineClass(871, 1, {}, GridView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_grid_GridView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridView_BinderImpl/Widgets', 871);\nfunction GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1108, 1, {}, GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_11;\nvar Lgwt_material_design_demo_client_application_style_grid_GridView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1108);\nfunction $ensureInjected_16(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '.KVUXRGB-k-a{border:1px solid #eee;margin:7px 0;text-align:center;line-height:50px;font-size:28px;background-color:tomato;color:white;padding:0}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1109, 1, {}, GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_22(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_grid_GridView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.grid', 'GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1109);\nfunction $clinit_GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_11 = new GridView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html2_4(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html3_2(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html4_3(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html5_2(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html6_3(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html7_1(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialRow&gt;\\n      &lt;m:MaterialColumn grid=\"s12\" addStyleNames=\"{style.grid}\"&gt; &lt;m.html:Span class=\"flow-text\"&gt; This div is 12-columns wide on all screen sizes &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;\\n      &lt;/m:MaterialRow&gt;\\n      &lt;m:MaterialRow&gt;\\n      &lt;m:MaterialColumn grid=\"s6\" addStyleNames=\"{style.grid}\"&gt; &lt;m.html:Span class=\"flow-text\"&gt; 6-columns (one-half) &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;\\n      &lt;m:MaterialColumn grid=\"s6\" addStyleNames=\"{style.grid}\"&gt; &lt;m.html:Span class=\"flow-text\"&gt; 6-columns (one-half) &lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;\\n      &lt;/m:MaterialRow&gt;\\n    <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialTitle title=\"Offsets\" description=\"To offset, simply add offset-s2 to the class where s signifies the screen class-prefix (s = small, m = medium, l = large) and the number after is the number of columns you want to offset by.\"/&gt;\\n      &lt;m:MaterialRow&gt;\\n      &lt;m:MaterialColumn grid=\"s12\" addStyleNames=\"{style.grid}\"&gt; &lt;m.html:Span class=\"flow-text\"&gt;This div is 12-columns wide on all screen sizes&lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;\\n      &lt;m:MaterialColumn grid=\"s6\" offset=\"s6\" addStyleNames=\"{style.grid}\"&gt; &lt;m.html:Span class=\"flow-text\"&gt;6-columns (offset-by-6)&lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;\\n      &lt;/m:MaterialRow&gt;\\n    <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialRow&gt;\\n        &lt;m:MaterialColumn grid=\"s12\" addStyleNames=\"{style.grid} teal lighten-2\"&gt; &lt;m.html:Span class=\"flow-text\"&gt;I am always full-width (col s12)&lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;\\n        &lt;m:MaterialColumn grid=\"s12 m6\"  addStyleNames=\"{style.grid} teal lighten-2\"&gt; &lt;m.html:Span class=\"flow-text\"&gt;I am full-width on mobile (col s12 m6)&lt;/m.html:Span&gt; &lt;/m:MaterialColumn&gt;\\n      &lt;/m:MaterialRow&gt;\\n    <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialRow&gt;\\n      &lt;m:MaterialColumn grid=\"s12 m4\"&gt;\\n      &lt;!-- Promo Content 1 goes here --&gt;\\n      &lt;/m:MaterialColumn&gt;\\n      &lt;m:MaterialColumn grid=\"s12 m4\"&gt;\\n      &lt;!-- Promo Content 2 goes here --&gt;\\n      &lt;/m:MaterialColumn&gt;\\n      &lt;m:MaterialColumn grid=\"s12 m4\"&gt;\\n      &lt;!-- Promo Content 3 goes here --&gt;\\n      &lt;/m:MaterialColumn&gt;\\n      &lt;/m:MaterialRow&gt;\\n    <\\/pre>';\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$_annotation$$none$$) {\n    result = new GridPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$style$grid$GridView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$grid$GridView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridView$_annotation$$none$$) {\n    result = new GridView(new GridView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$grid$GridView$_annotation$$none$$;\n}\n\ndefineClass(485, 1, $intern_54);\n_.onSuccess_0 = function onSuccess_20(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$grid$GridPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(21);\n\n//# sourceURL=gwtmaterialdemo-21.js\n")
