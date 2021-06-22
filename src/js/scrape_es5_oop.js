/**
 * 
 * @param {string} proxy 
 * @param {string} url 
 */
export function ScrapeMovies(proxy, url) {
    this.proxy = proxy;
    this.url = url;

}

/**
 * 
 * @param {string} methodType 
 * @param {string} target 
 * @returns Promises
 */
ScrapeMovies.prototype.getDocumentHtml = function(methodType, target) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.open(methodType, `http://${this.proxy}/${target}`)
            req.responseType = "document";
            req.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(req.responseXML)
                } else(
                    reject(Error(this.status, this.statusText))
                )
            };
            req.send()
        });
    }
    /**
     * 
     * @param {string} methodType 
     * @param {string} target 
     * @returns Promises
     */
ScrapeMovies.prototype.getText = function(methodType, target) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open(methodType, `http://${this.proxy}/${target}`)
        req.responseType = "text";
        req.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(req.responseText)
            } else(
                reject(Error(this.statusText))
            )
        };
        req.send()
    });
}

/**
 * 
 * @param {object} document 
 * @param {string} selector 
 * @returns html element
 */
ScrapeMovies.prototype.select = function(document, selector) {
    return document.querySelector(selector)
}

/**
 * 
 * @param {object} document 
 * @param {string} selector 
 * @returns DOM Array Of HTML Element
 */
ScrapeMovies.prototype.selectAll = function(document, selector) {
    return [...document.querySelectorAll(selector)]
}

/**
 * 
 * @param {object} document 
 * @param {string} id 
 * @returns html element
 */
ScrapeMovies.prototype.byId = function(document, id) {
    return document.getElementById(id)
}