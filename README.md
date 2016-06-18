# ngMathQuill

ngMathQuill is the set of Angular 1.x directives that wraps [MathQuill](http://mathquill.com/).

It's realy easy to show and edit complex mathematical formulas with MathQuill.

So here we got:

## **mathQuillStaticView directive**

Gets math expression as string and just represents it.

Example of usage:

```
<span math-quill-static-view value="1+x"></span>
```

## **mathQuillView directive**

Gets math expression as variable and represents it. Also updates when given variable changes.

Example of usage:

```
<div ng-init="value = '1+2\cdotx'">
	<span math-quill-view value="value"></span>
</div>
```

## **mathQuillEdit directive**

Gets math expression as variable, represents it and gives to user interface to change it.

```
<div ng-init="value = '3+\frac{1}{\pi}'">
	<span math-quill-edit ng-model="value"></span>
</div>
```

For more info - load repo and look at example/index.html file.
