import { makeObservable, observable, action } from 'mobx'

class Audio {
    obj = {}

    constructor() {
        makeObservable(this, {
            obj: observable,
            setObj: action
        })
    }

    setObj(obj) {
        this.obj = obj;
    }

}

export default new Audio();