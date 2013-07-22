(function () {
    "use strict";
    var Constants = {
        CHECK: '.b-admin-area__check-holder > input[id]',
        DROP_DOWN: '.b-admin-area__drop-down',
        SELECT: '.b-admin-area__select',
        HIDDEN: 'hidden',
        SELECTED: 's'
    };

    var Binder = function () {
        this.check = $(Constants.CHECK);
        this.dropDown = $(Constants.DROP_DOWN);
        this.select = $(Constants.SELECT);
    };
    Binder.prototype = {

        init: function () {
            $(this.dropDown).attr(Constants.HIDDEN, false);
            $(this.check).on('click', this.update.bind(this));
            this.update();

            //chosing already selected lang
            //it can be if we decide edit survey
            //Attr "s" in OPTION tag, tell us that this OPTION selected

            for (var i = 0; i < this.dropDown.length; i++) {
                if ($(this.dropDown[i]).attr(Constants.SELECTED) == '') {
                    this.dropDown[i].selected = true;
                    $(this.dropDown[i]).removeAttr(Constants.SELECTED);
                }
            }

        },

        update: function () {
            var checkedCount = 0;

            for (var i = 0; i < this.check.length; i++) {
                if (this.check[i].checked) {
                    $(this.dropDown[i]).removeAttr(Constants.HIDDEN);
                    checkedCount++;
                }
                if ((!this.check[i].checked) && ($(this.dropDown[i]).attr(Constants.HIDDEN) == null)) {
                    $(this.dropDown[i]).attr(Constants.HIDDEN, true);
                    this.dropDown[this.getFirstEnabled()].selected = true;
                }
            }

            if (checkedCount == 0) {
                this.check[0].checked = true;
                $(this.dropDown[0]).removeAttr(Constants.HIDDEN);
            }
        },

        getFirstEnabled: function () {
            for(var i =0;i<this.check.length;i++){
                if(this.check[i].checked){
                    return i;
                }
            }

            return 0;
        }

    };

    var b = new Binder();
    b.init();

})();