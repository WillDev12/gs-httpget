# httpget for GS

Httpget is a useful function that allows you to evaluate code from a url.  Using Google's UrlFetchApp api, you can create a similar function for Google user scripts.

# Documentation

> **Warning:** To perform an httpget, you must use an `eval` statement to run ALL code from the remote url.  Because of this, it can be very easy to accidentally run malicious code if used recklessly.  **Please be careful when using this method.**

As stated before, httpget simply fetches and evaluates any code placed in a remote url.  This can be used for many reasons, such as minimizing installation steps *(a quick copy and paste sure does the trick doesn't it?)*, fetching others' code without having to add a library (use the raw link), or in some cases shrinking file size.

Performing an httpget is simple.  Using Google's [Url Fetch Service](https://developers.google.com/apps-script/reference/url-fetch), grabbing the code comes down to a one liner:

``` javascript
let data = UrlFetchApp.fetch("https://example.com/file.gs").getContentText();
```
**Next**, evaluate the code that the variable `data` returns:

``` javascript
eval(data);
```
<sup>Like I said before, please be careful when using this statement as it is [INCREDIBLY](https://stackoverflow.com/a/13167699/20472970) easy to accidentally run malicious code.  Since there is no other way to run code like this in gs, `eval` is the only alternative.</sup>

### Full function
``` javascript
// Normal (100 bytes)
function httpget(url) {
    let data = UrlFetchApp.fetch(url).getContentText();
    eval(data);
}

// when using in function form, replace the
// actual url with an assignable variable.

// Compressed (59 bytes)
function l(s){eval(UrlFetchApp.fetch(s).getContentText());}
```

### Library (If interested)

```
1U5RzdkF4G3QdK9HKJ3B6ScNewj7KThz17yjAyXT3AM-neyNTJQ9qa7Qf
```

# Like content like this?

Follow my [Github](https://github.com/WillDev12) or share (this means a lot to me)

```
https://github.com/WillDev12
https://WillDev12.github.io
```
