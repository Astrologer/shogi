function Args() {
    var self = this;
    var query = location.search.substr(1);

    this.rawArgs = {};
    query.split("&").forEach(function(part) {
        var item = part.split("=");
        self.rawArgs[item[0]] = decodeURIComponent(item[1]);
    });

    this.sfen = this.rawArgs.sfen || "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b";
    this.title = this.rawArgs.title;
}
