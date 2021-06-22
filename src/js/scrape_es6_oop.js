export class ScrapeMovie {
    /**
     * 
     * @param {String} proxy - proxy url
     * @param {String} target - site url
     */
    constructor(proxy, target) {
        this.proxy = proxy;
        this.target = target;
    }



    /**
     * 
     * @param {String} proxy 
     * @param {String} target 
     * @returns Promises
     */
    getDocumentHtml(proxy, target) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.open("GET", `http://${proxy}/${target}`)
            req.responseType = "document";
            req.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(req.responseXML)
                } else(
                    reject(Error(this.statusText))
                )
            };
            req.send()
        });
    }

    /**
     * 
     * @param {String} proxy 
     * @param {String} target 
     * @returns Promises
     */
    getText(proxy, target) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            // console.log(`http://${proxy}/${target}`);
            req.open("GET", `http://${proxy}/${target}`)
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
     * @param {String} selector 
     * @returns html element
     */

    select(document, selector) {
        return document.querySelector(selector)
    }

    /**
     * 
     * @param {object} document 
     * @param {String} selector 
     * @returns Array of html elements
     */

    selectAll(document, selector) {
        return [...document.querySelectorAll(selector)]
    }

    /**
     * 
     * @param {object} document 
     * @param {string} id 
     * @returns html element
     */
    byId(document, id) {
        return document.getElementById(id)
    }

}