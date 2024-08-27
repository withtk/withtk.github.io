import {
  ClassicEditor,
  AccessibilityHelp,
  Alignment,
  AutoLink,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  BlockToolbar,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  Indent,
  IndentBlock,
  Italic,
  Link,
  Paragraph,
  RemoveFormat,
  SelectAll,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Style,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  Underline,
  Undo
} from 'ckeditor5';

import translations from 'ckeditor5/translations/ko.js';

const editorConfig = {
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'selectAll',
      '|',
      'heading',
      'style',
      '|',
      'fontSize',
      'fontFamily',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'subscript',
      'superscript',
      'code',
      'removeFormat',
      '|',
      'specialCharacters',
      'horizontalLine',
      'link',
      'insertTable',
      'highlight',
      'blockQuote',
      'codeBlock',
      '|',
      'alignment',
      '|',
      'outdent',
      'indent',
      '|',
      'accessibilityHelp'
    ],
    shouldNotGroupWhenFull: true
  },
  plugins: [
    AccessibilityHelp,
    Alignment,
    AutoLink,
    Autosave,
    // BalloonToolbar,
    BlockQuote,
    // BlockToolbar,
    Bold,
    // Code,
    // CodeBlock,
    Essentials,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    HorizontalLine,
    Indent,
    IndentBlock,
    Italic,
    Link,
    Paragraph,
    RemoveFormat,
    SelectAll,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    Underline,
    Undo
  ],
  // balloonToolbar: ['bold', 'italic', '|', 'link'],
  // blockToolbar: [
  //   'fontSize',
  //   'fontColor',
  //   'fontBackgroundColor',
  //   '|',
  //   'bold',
  //   'italic',
  //   '|',
  //   'link',
  //   'insertTable',
  //   '|',
  //   'outdent',
  //   'indent'
  // ],
  fontFamily: {
    supportAllValues: true
  },
  fontSize: {
    options: [10, 12, 14, 'default', 18, 20, 22],
    supportAllValues: true
  },
  heading: {
    options: [
      {
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph'
      },
      {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1'
      },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2'
      },
      {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3'
      },
      {
        model: 'heading4',
        view: 'h4',
        title: 'Heading 4',
        class: 'ck-heading_heading4'
      },
      {
        model: 'heading5',
        view: 'h5',
        title: 'Heading 5',
        class: 'ck-heading_heading5'
      },
      {
        model: 'heading6',
        view: 'h6',
        title: 'Heading 6',
        class: 'ck-heading_heading6'
      }
    ]
  },
  htmlSupport: {
    allow: [
      {
        name: /^.*$/,
        styles: true,
        attributes: true,
        classes: true
      }
    ]
  },
  initialData:

  // '<h2 style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:rgb(0, 0, 0);font-family:Lato;font-size:inherit;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:inherit;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Congratulations on setting up CKEditor 5! 🎉</h2><p style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:rgb(0, 0, 0);font-family:Lato;font-size:medium;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">You\'ve successfully created a CKEditor 5 project. This powerful text editor will enhance your application, enabling rich text editing capabilities that are customizable and easy to use.</p><h3 style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:rgb(0, 0, 0);font-family:Lato;font-size:inherit;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:inherit;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">What\'s next?</h3><ol style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:rgb(0, 0, 0);font-family:Lato;font-size:medium;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;list-style:none;margin:0px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><li style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;"><strong style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;font-weight:bolder;">Integrate into your app</strong>: time to bring the editing into your application. Take the code you created and add to your application.</li><li style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;"><strong style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;font-weight:bolder;">Explore features:</strong> Experiment with different plugins and toolbar options to discover what works best for your needs.</li><li style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;"><strong style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;font-weight:bolder;">Customize your editor:</strong> Tailor the editor\'s configuration to match your application\'s style and requirements. Or even write your plugin!</li></ol><p style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:rgb(0, 0, 0);font-family:Lato;font-size:medium;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keep experimenting, and don\'t hesitate to push the boundaries of what you can achieve with CKEditor 5. Your feedback is invaluable to us as we strive to improve and evolve. Happy editing!</p><h3 style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:rgb(0, 0, 0);font-family:Lato;font-size:inherit;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:inherit;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Helpful resources</h3><ul style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:rgb(0, 0, 0);font-family:Lato;font-size:medium;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;list-style:none;margin:0px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><li style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;">📝 <a style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:inherit;text-decoration:inherit;" target="_blank" rel="noopener noreferrer" href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li><li style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;">📕 <a style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:inherit;text-decoration:inherit;" target="_blank" rel="noopener noreferrer" href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li><li style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;">⭐️ <a style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:inherit;text-decoration:inherit;" target="_blank" rel="noopener noreferrer" href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li><li style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;">🏠 <a style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:inherit;text-decoration:inherit;" target="_blank" rel="noopener noreferrer" href="https://ckeditor.com/">CKEditor Homepage</a>,</li><li style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;">🧑‍💻 <a style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:inherit;text-decoration:inherit;" target="_blank" rel="noopener noreferrer" href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li></ul><h3 style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:rgb(0, 0, 0);font-family:Lato;font-size:inherit;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:inherit;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Need help?</h3><p style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contain-layout:;--tw-contain-paint:;--tw-contain-size:;--tw-contain-style:;--tw-contrast:;--tw-drop-shadow:;--tw-gradient-from-position:;--tw-gradient-to-position:;--tw-gradient-via-position:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;border:0px solid rgb(229, 231, 235);box-sizing:border-box;color:rgb(0, 0, 0);font-family:Lato;font-size:medium;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">See this text, but the editor is not starting up? Check the browser\'s console for clues and guidance. It may be related to an incorrect license key if you use premium features or another feature-related requirement. If you cannot make it work, file a GitHub issue, and we will help as soon as possible!</p>',
    '<h2>Congratulations on setting up CKEditor 5! 🎉</h2>',
    // '<pre><code class="language-css"> Congratulations on setting up CKEditor 5! 🎉asdsadads</code></pre>',
    // '<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n    You\'ve successfully created a CKEditor 5 project. This powerful text editor will enhance your application, enabling rich text editing\n    capabilities that are customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n    <li>\n        <strong>Integrate into your app</strong>: time to bring the editing into your application. Take the code you created and add to your\n        application.\n    </li>\n    <li>\n        <strong>Explore features:</strong> Experiment with different plugins and toolbar options to discover what works best for your needs.\n    </li>\n    <li>\n        <strong>Customize your editor:</strong> Tailor the editor\'s configuration to match your application\'s style and requirements. Or even\n        write your plugin!\n    </li>\n</ol>\n<p>\n    Keep experimenting, and don\'t hesitate to push the boundaries of what you can achieve with CKEditor 5. Your feedback is invaluable to us\n    as we strive to improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n    <li>📝 <a href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li>\n    <li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n    <li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n    <li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n    <li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n    See this text, but the editor is not starting up? Check the browser\'s console for clues and guidance. It may be related to an incorrect\n    license key if you use premium features or another feature-related requirement. If you cannot make it work, file a GitHub issue, and we\n    will help as soon as possible!\n</p>\n',
  language: 'ko',
  link: {
    addTargetToExternalLinks: true,
    defaultProtocol: 'https://',
    decorators: {
      toggleDownloadable: {
        mode: 'manual',
        label: 'Downloadable',
        attributes: {
          download: 'file'
        }
      }
    }
  },
  placeholder: '글을 적어주세요.',
  style: {
    definitions: [
      {
        name: 'Article category',
        element: 'h3',
        classes: ['category']
      },
      {
        name: 'Title',
        element: 'h2',
        classes: ['document-title']
      },
      {
        name: 'Subtitle',
        element: 'h3',
        classes: ['document-subtitle']
      },
      {
        name: 'Info box',
        element: 'p',
        classes: ['info-box']
      },
      {
        name: 'Side quote',
        element: 'blockquote',
        classes: ['side-quote']
      },
      {
        name: 'Marker',
        element: 'span',
        classes: ['marker']
      },
      {
        name: 'Spoiler',
        element: 'span',
        classes: ['spoiler']
      },
      {
        name: 'Code (dark)',
        element: 'pre',
        classes: ['fancy-code', 'fancy-code-dark']
      },
      {
        name: 'Code (bright)',
        element: 'pre',
        classes: ['fancy-code', 'fancy-code-bright']
      }
    ]
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
  },
  translations: [translations]
};

let editor;
ClassicEditor.create(document.querySelector('#editor'), editorConfig)
  .then( newEditor => {
    editor = newEditor;
  } )
  .catch( error => {
    console.error( error );
  } );

document.querySelector( '#submit' ).addEventListener( 'click', () => {
  const editorData = editor.getData();

  // const editor = document.querySelector('editor');
  const result = editor.getData();
  console.log("--func--result: ", result);

  document.getElementById("sketch").innerText = result;
  document.getElementById("reShow").innerHTML = result;
} );

