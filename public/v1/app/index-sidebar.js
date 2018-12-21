// Register `phoneList` component, along with its associated controller and template
angular.
module('App12ships').
component('indexSidebar', { // `<index-sidebar>` element.

    templateUrl: 'index-sidebar.html',
    controller: function() {
        var ctrl = this;

        ctrl.loadPage = function(page) {
            //console.log('loadPage page =', page);

            g_G.routeGoto(page);

            /*
            if (page.href) {
                //window.open(page.href);
                document.location = page.href; //Load new page
                return;
            }
            $scope.template = page.url;
            */
            //g_G.mainContentChat_ctrl.template = page;
            //ctrl.template = page;



        }
    }
});