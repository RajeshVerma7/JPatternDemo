// asdadadada
(function (btn) {
    function intializeAll(obj) {
        this.hostEl = obj.hostEl;
        this.targetEl = obj.targetEl || '';
        this.eventListener = obj.eventListener;
        this.appendEl = obj.appendEl || '';
        this.removeEl = obj.removeEl || '';
        this.createEl = obj.createEl || '';
        this.eventListener();
    }

    function CreateInstance() { };
    CreateInstance.prototype.initali = intializeAll;
    CreateInstance.prototype.create = function (obj) {
        switch (obj.module) {
            case "intializeAll": this.initali;
                break;
            case "module2": this.module2;
                break;
        }
        return this.initali(obj);
    }

    var newObject = new CreateInstance();
    newObject.create({
        module: 'intializeAll',
        hostEl: btn,
        eventListener: function () {
            var self = this;
            this.hostEl.addEventListener('click', function () {
                console.log("hello");
                self.createEl();
            });
        },
        createEl: function () {
            var btn = document.createElement('button');
            btn.innerText = 'NEW BUTTON';
            document.body.appendChild(btn);
        },
        removeEl: function () {

        }
    });
})(document.getElementById('Btn'));
