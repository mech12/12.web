// Register `phoneList` component, along with its associated controller and template
angular.
module('App12ships').
component('windowRegister', { // This name is what AngularJS uses to match to the `<phone-list>` element.

    templateUrl: './window/window-register.html',

    controller: function() {
        var ctrl = this;
        ctrl.g_G = g_G;
        ctrl.rq = {};

        ctrl.send_eUSER_CREATE = function() {
            var rq = ctrl.rq;
            if (g_G.checkString(rq, 'email')) return;
            if (g_G.checkString(rq, 'nic')) return;
            if (g_G.checkString(rq, 'password')) return;
            if (g_G.checkString(rq, 'password2')) return;
            if (g_G.checkOk(rq.password == rq.password2, 'password mismatch')) return;

            delete rq.password2;
            console.log('send_eUSER_CREATE ', ctrl.rq);

            g_G.http_eCmd('POST', 'eUSER_CREATE', rq, (err, ret) => {
                if (err) return;
                g_G.routeGoto('/login');
                g_G.toastr.success('user created', g_G.user.email);


            });
        }
    }
});

