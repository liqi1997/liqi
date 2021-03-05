import { makeObservable, observable, action } from 'mobx'

import cloudbase from "@cloudbase/js-sdk";

class Audio {
    obj = {}

    app = null

    db = null

    user = {}

    constructor() {
        makeObservable(this, {
            obj: observable,
            user: observable,
            setObj: action,
            setUser: action
        })

        this.app = cloudbase.init({
            env: "liqi-website-2g3fl423aa662a73"
        });

        // this.db = this.app.database();

    }

    setObj(obj) {
        this.obj = obj;
    }

    setUser(user) {
        this.user = user
    }

}

export default new Audio();