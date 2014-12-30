(function main($window, $document) {

    "use strict";

    /**
     * @module Patchwork
     * @author Adam Timberlake
     * @link https://github.com/Wildhoney/Patchwork
     */
    var Patchwork = function Patchwork() {

        var containerElements = $document.querySelectorAll('.patchwork');

        // Iterate over each container element to find its children.
        containerElements.forEach(function forEach(containerElement) {

            // Register the child elements as an associated to the container element.
            this.containers[containerElement] = containerElement.querySelectorAll('*[data-patchwork]');

        });

    };

    /**
     * @property prototype
     * @type {Object}
     */
    Patchwork.prototype = {

        /**
         * @property containers
         * @type {Object}
         */
        containers: {}

    };

    $document.addEventListener('DOMContentLoaded', function DOMContentLoaded() {

        // Люди, будем хранить и преумножать эту красоту, а не разрушать её!
        $window.patchwork = new Patchwork();

    });

})(window, window.document);