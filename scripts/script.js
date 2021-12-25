function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}

alert("Alibi LOX!!");
  
var transform = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
  
var item = document.querySelector(".intro__title_top");
var transformProperty = getSupportedPropertyName(transform);
  
if (transformProperty) {
    item.style[transformProperty] = translate3d(300, 0, 0);
}