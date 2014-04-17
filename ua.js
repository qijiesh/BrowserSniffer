var ua = function(uastr) {
    var uastr = uastr.toLowerCase();
    var pos = -1;
    var ret = uastr.match(/(?:metasr.\d*|qqbrowser.\d*|maxthon.\d*|theworld|lbbrowser|firefox.\d*|opera.\d*|bidubrowser.\d*)/);
    if (ret !== null) {
        return ret[0].replace(" ", "").replace("/", "");
    }
    if ((pos = uastr.indexOf("chrome")) > -1) {
        return "chrome" + parseInt(uastr.substr(pos + 7, 4));
    } else if ((pos = uastr.indexOf("safari")) > -1) {
        return "safari";
    } else {
        var mpos = uastr.indexOf("msie");
        if (mpos > -1) {
            return "ie" + parseInt(uastr.substr(mpos + 5, 2));
        } else {
            var tpos = uastr.indexOf("trident");
            if (tpos > -1) {
                var rvpos = uastr.indexOf("rv:");
                if (rvpos > -1) {
                    return "ie" + parseInt(uastr.substr(rvpos + 3, 2));
                }
            }
        }
    }
    return uastr;
}
exports.ua = ua;