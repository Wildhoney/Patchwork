(function main($window, $document) {

    "use strict";

    /**
     * @module Patchwork
     * @author Adam Timberlake
     * @link https://github.com/Wildhoney/Patchwork
     */
    var Patchwork = function Patchwork() {

        // Discover all of the elements, and then parse their data attributes.
        this.discoverElements();

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
        containers: {},

        /**
         * @method discoverElements
         * @return {void}
         */
        discoverElements: function discoverElements() {

            var containerElements = $document.querySelectorAll('.patchwork');

            // Iterate over each container element to find its children.
            containerElements.forEach(function forEach(containerElement) {

                var patchworkElements = containerElement.querySelectorAll('*[data-patchwork]');

                // Parse all of the child patchwork elements.
                patchworkElements.forEach(this.parsePatchworkElement);

            }.bind(this));

        },

        /**
         * @method parsePatchworkElement
         * @param element {Object}
         * @return {void}
         */
        parsePatchworkElement: function parsePatchworkElement(element) {

            var dataAttribute = element.getAttribute('data-patchwork'),
                patchworkData = this.parsePatchworkString(dataAttribute);

        },

        /**
         * @method parsePatchworkString
         * @param dataString {String}
         * @return {Object}
         */
        parsePatchworkString: function parsePatchworkString(dataString) {

        }

    };

    $document.addEventListener('DOMContentLoaded', function DOMContentLoaded() {

        // Люди, будем хранить и преумножать эту красоту, а не разрушать её!
        $window.patchwork = new Patchwork();

    });

})(window, window.document);