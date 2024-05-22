(function() {
    /**
     * Make sure to also set all of the following elements to 'display: none;' in ./scss/post.scss because
     * loading JS takes time and we'll see the elements on the page for that time and then
     * they'll be removed AFTER that.
     */
    let navbar = document.querySelector('nav.navbar');
    let drawers = document.querySelectorAll('.drawer');
    let leftDrawerToggler = document.querySelector('.drawer-toggles');
    let secondaryNavigation = document.querySelector('.secondary-navigation');
    let pageHeader = document.getElementById('page-header');
    let pageFooter = document.getElementById('page-footer');

    let elementsToRemove = [
        navbar,
        ...drawers,
        leftDrawerToggler,
        secondaryNavigation,
        pageHeader,
        pageFooter
    ];

    window.onload = function () {
        for (const element of elementsToRemove) {
            element.remove();
        }
    };
})();
