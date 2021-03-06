/**
 *
 * Created by GUY on 2015/11/26.
 * @class BI.RichEditorItalicButton
 * @extends BI.RichEditorAction
 */
BI.RichEditorItalicButton = BI.inherit(BI.RichEditorAction, {
    _defaultConfig: function () {
        return BI.extend(BI.RichEditorItalicButton.superclass._defaultConfig.apply(this, arguments), {
            width: 20,
            height: 20,
            command: "Italic",
            tags: ["EM", "I"],
            css: {fontStyle: "italic"}
        });
    },

    _init: function () {
        BI.RichEditorItalicButton.superclass._init.apply(this, arguments);
        var self = this, o = this.options;
        this.italic = BI.createWidget({
            type: "bi.icon_button",
            element: this,
            title: BI.i18nText("BI-Basic_Italic"),
            height: 20,
            width: 20,
            cls: "text-toolbar-button bi-list-item-active text-italic-font"
        });
        this.italic.on(BI.IconButton.EVENT_CHANGE, function () {
            self.doCommand();
        });
    },
    activate: function () {
        this.italic.setSelected(true);
    },

    deactivate: function () {
        this.italic.setSelected(false);
    }
});
BI.shortcut("bi.rich_editor_italic_button", BI.RichEditorItalicButton);